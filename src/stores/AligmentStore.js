import { action, computed, decorate, observable } from 'mobx';

class AlignmentStore {

	fndb

	language

	alignments = []

	indices = []

	LUsByFrame = {}

	synsetsByLU = {}

	synsetData = {}

	scoring = null

	sankeyFrames = []

	selectedEdge = [null, null]

	threshold = 0.1

	vectorsByLU = []

	vectorsId2Word = []

	get data() {
		const alignment = this.alignments.find(x => x.type === this.scoring);

		if (alignment) {
			const {edges} = alignment;
			const frameSet = new Set(this.sankeyFrames.map(x => x.id));

			return edges.filter(x => (frameSet.has(x[0]) || frameSet.has(x[1])) && x[2] >= this.threshold);
		} else {
			return [];
		}
	}

	get frames() {
		return this.indices
			.flat()
			.sort()
			.map(x => ({
				id: x,
				label: x
			}));
	}

	get scoringOptions() {
		return this.alignments.map(x => ({
			value: x.type,
			label: x.desc,
		}));
	}

	get graphData() {
		switch(this.scoring) {
			case 'lu_wordnet':
				return this.LUWordNetGraph();
			case 'synset':
			case 'synset_inv':
				return this.synsetGraph();
			case 'lu_muse':
				return this.LUMuseGraph();
			default:
				return { nodes: [], links: [] };
		}
	}

	LUWordNetGraph() {
		const nodes = this.getLUNodes();
		const inter = this.getConnectionObjects(nodes, this.synsetsByLU);
		const links = inter.links.filter(l => l.target.frm1LU);

		nodes.push(...inter.nodes.filter(n => n.frm1LU));
		links.filter(l => l.source.type === 'frm2LU').forEach(l => {
			let swap = l.source;
			l.source = l.target;
			l.target = swap;
		})
		nodes.forEach(n => n.isReferenceNode = n.type === 'frm1LU');
		links
			.filter(l => (l.source.type === 'frm1LU' && l.target.isIntersection))
			.forEach(l => {
				l.source.isMatchingNode = true;
			});
		this.computeDegrees(links);

		return { nodes, links };
	}

	synsetGraph() {
		const nodes = this.getLUNodes();
		const inter = this.getConnectionObjects(nodes, this.synsetsByLU);
		const links = inter.links;

		nodes.push(...inter.nodes);
		const isReferenceFn =
			this.scoring === 'synset'
				? n => n.frm1LU
				: n => n.frm2LU;
		nodes.forEach(n => {
			n.isReferenceNode = isReferenceFn(n);
			n.isMatchingNode = n.isIntersection;
		})
		this.computeDegrees(links);

		return { nodes, links };
	}

	LUMuseGraph() {
		const nodes = this.getLUNodes();
		const inter = this.getConnectionObjects(nodes, this.vectorsByLU, x => this.vectorsId2Word[x]);
		const links = inter.links.filter(l => l.target.frm1LU);

		nodes.push(...inter.nodes.filter(n => n.frm1LU));
		links.filter(l => l.source.type === 'frm2LU').forEach(l => {
			let swap = l.source;
			l.source = l.target;
			l.target = swap;
		})
		nodes.forEach(n => n.isReferenceNode = n.type === 'frm1LU');
		links
			.filter(l => (l.source.type === 'frm1LU' && l.target.isIntersection))
			.forEach(l => {
				l.source.isMatchingNode = true;
			});
		this.computeDegrees(links);

		return { nodes, links };
	}

	createNode = x => ({ name: x, inDegree: 0, outDegree: 0, });

	getLUNodes() {
		return (
			this.LUsByFrame[this.selectedEdge[0]] || []).map(x => ({ type: 'frm1LU', ...this.createNode(x) })
		).concat(
			(this.LUsByFrame[this.selectedEdge[1]] || []).map(x => ({ type: 'frm2LU', ...this.createNode(x) }))
		);
	}

	getConnectionObjects(LUNodes, relationMap, nameFn=x=>x) {
		const links = LUNodes
			.map(s =>
				(relationMap[s.name] || [])
					.map(t => ({
						source: s,
						target: t,
					}))
			)
			.flat();
		// Creating node objects for intermediate Nodes
		const intermediateMap = {}
		const nodes = [...new Set(links.map(l => l.target))]
				.map(t => {
					const node = {
						type: 'intermediate',
						...this.createNode(nameFn(t))
					};
					intermediateMap[t] = node;
					return node;
				});
		// Including references to objects in links
		links.forEach(l => {
			l.target = intermediateMap[l.target];
			l.target[l.source.type] = true;
		});
		nodes.forEach(n => n.isIntersection = n.frm1LU && n.frm2LU);

		return { nodes, links };
	}

	computeDegrees(links) {
		links.forEach(l => {
			++l.source.outDegree;
			++l.target.inDegree;
		});
	}

	load = action(data => {
		this.fndb = data.db[1];
		this.language = data.lang[1];

		this.alignments = data.alignments.map(a => {
			const edges = [];

			a.data.forEach((row, i) => {
				row.forEach((value, j) => {
					if (value > 0)
						edges.push([data.indices[0][i], data.indices[1][j], value])
				});
			});

			return { type: a.type, desc: a.desc, edges: edges }
		});

		this.indices = data.indices;
		this.LUsByFrame = data.lus;
		this.synsetsByLU = data.resources.lu_to_syn;
		this.synsetData = data.resources.syn_data;
		this.vectorsByLU = data.resources.lu_to_vec;
		this.vectorsId2Word = data.resources.id2word;

		// Resets
		this.sankeyFrames = [];
		this.selectedEdge = [null, null];
	})

}

decorate(AlignmentStore, {
	fndb: observable,
	language: observable,
	alignments: observable,
	indices: observable,
	LUsByFrame: observable,
	synsetsByLU: observable,
	synsetData: observable,
	scoring: observable,
	sankeyFrames: observable,
	selectedEdge: observable,
	threshold: observable,
	vectorsByLU: observable,
	vectorsId2Word: observable,
	data: computed,
	frames: computed,
	scoringOptions: computed,
});

export default AlignmentStore;