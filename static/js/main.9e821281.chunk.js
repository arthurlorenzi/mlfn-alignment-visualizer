(this["webpackJsonpmlfn-alignment-visualizer"]=this["webpackJsonpmlfn-alignment-visualizer"]||[]).push([[0],{63:function(e,t,n){e.exports=n(86)},68:function(e,t,n){},70:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(15),s=n.n(i),o=(n(68),n(69),n(70),n(55)),c=n(49),l=n.n(c),u=n(39),h=n(13),d=(n(74),n(5)),f=n(6),m=n(8),y=n(9),p=n(10),g=(n(75),function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(m.a)(this,Object(y.a)(t).call(this,e))).onFileChange=function(e){var t=e.target.files[0];if(t){var r=new FileReader;r.addEventListener("load",(function(e){var t=!1,r=n.props.store;try{r.load(JSON.parse(e.target.result))}catch(a){console.log(a),t=!0}n.setState({error:t})})),r.readAsBinaryString(t)}},n.state={error:!1},n}return Object(p.a)(t,e),Object(f.a)(t,[{key:"renderError",value:function(){return this.state.error?a.a.createElement("p",{className:"upload-error"},"Error reading input file."):null}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("input",{type:"file",onChange:this.onFileChange}),this.renderError())}}]),t}(a.a.Component)),v=(n(76),function(e){return a.a.createElement("div",{className:"checkbox-wrapper"},a.a.createElement("input",{type:"checkbox",onChange:function(t){return e.onChange(t.target.checked)}}),a.a.createElement("span",null,e.label))}),b=(n(77),function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(m.a)(this,Object(y.a)(t).call(this,e))).onCheckedChange=function(e){n.setState({enabled:e}),n.props.onCheckedChange(e,Number(n.state.textValue))},n.onInputChange=function(e){var t=e.target.value;n.setState({textValue:t}),n.props.onValueChange(Number(t))},n.state={enabled:!1,textValue:""},n}return Object(p.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.placeholder,r=e.min,i=this.state,s=i.enabled,o=i.textValue;return a.a.createElement("div",{className:"checkbox-enable-input-wrapper"},a.a.createElement(v,{onChange:this.onCheckedChange,label:t}),a.a.createElement("div",{className:"checkbox-enabled-input-input-wrapper"},a.a.createElement("input",{type:"number",value:o,onChange:this.onInputChange,min:r,placeholder:n,disabled:!s})))}}]),t}(a.a.Component)),k=(n(78),Object(h.a)((function(e){var t=e.store;return a.a.createElement("div",{className:"slider-container"},a.a.createElement("input",{type:"range",min:0,max:1,step:.001,value:t.threshold,onChange:function(e){return t.threshold=+e.target.value},className:"slider"}),a.a.createElement("input",{type:"number",min:0,max:1,step:"any",value:t.threshold,onChange:function(e){return t.threshold=+e.target.value},className:"slider-text"}))}))),E=Object(h.a)((function(e){var t=e.store,n=e.uiState,r={width:n.sidebarOpen?"500px":"60px"},i={display:n.sidebarOpen?"block":"none"};return a.a.createElement("div",{className:"sidebar-container",style:r},a.a.createElement("div",{className:"sidebar-icon-container"},a.a.createElement("div",{onClick:function(){return n.sidebarOpen=!n.sidebarOpen},className:"siderbar-icon-click-wrapper"},a.a.createElement(u.b,{size:"1.75em",color:"#3F51B5"}))),a.a.createElement("div",{style:i},a.a.createElement("h3",{className:"sidebar-field-label first"},"Alignment file"),a.a.createElement(g,{store:t}),a.a.createElement("div",{className:"sidebar-row"},a.a.createElement("div",null,a.a.createElement("h3",{className:"sidebar-field-label"},"Scoring tecnique"),a.a.createElement(o.a,{options:t.scoringOptions,onChange:function(e){return t.selectAlignment(e.value)}})),a.a.createElement("div",null,a.a.createElement("h3",{className:"sidebar-field-label"},"Threshold"),a.a.createElement(k,{store:t}))),a.a.createElement("div",{className:"sidebar-row"},a.a.createElement("div",null,a.a.createElement(b,{onCheckedChange:function(e,n){return t.sankeyEdgesMax=e?n:1/0},onValueChange:function(e){return t.sankeyEdgesMax=e},min:1,label:"Restrict number of connections of each frame:",placeholder:"Max # of edges for frame"})),a.a.createElement("div",null,a.a.createElement(v,{onChange:function(e){return t.strictSankeySet=e},label:"Show ONLY selected frames"}))),a.a.createElement("h3",{className:"sidebar-field-label"},"Frame selection"),a.a.createElement(l.a,{items:t.frameOptions,selectedItems:t.sankeyFrames,onChange:function(e){return t.sankeyFrames=e},itemHeight:30,wrapperClassName:"multi-select-wrapper"})))})),O=n(17),w=n(33),x=n(3),j=function(){function e(){var t=this;Object(d.a)(this,e),this.alignments=[],this.indices=[],this.frames={},this.framesByName={},this.synsetsByLU={},this.synsetData={},this.alignment=null,this.sankeyFrames=[],this.strictSankeySet=!1,this.sankeyEdgesMax=null,this.selectedEdge=[null,null],this.threshold=.1,this.vectorsByLU=[],this.vectorsId2Word=[],this.createNode=function(e){return{name:e,inDegree:0,outDegree:0}},this.load=Object(x.d)((function(e){for(var n in t.fndb=e.db[1],t.language=e.lang[1],t.alignments=e.alignments.map((function(t){var n=[];t.data.forEach((function(t,r){t.forEach((function(t,a){t>0&&n.push([e.indices[0][r],e.indices[1][a],t])}))}));var r=Object(w.a)({},t);return r.edges=n,delete r.data,r})),t.framesByName={},e.frames)if(Object.prototype.hasOwnProperty.call(e.frames,n)){var r=e.frames[n];t.framesByName[r.name+"."+r.language]=r}t.indices=e.indices,t.frames=e.frames,t.synsetsByLU=e.resources.lu_to_syn,t.synsetData=e.resources.syn_data,t.vectorsByLU=e.resources.lu_vec_nn,t.vectorsId2Word=e.resources.id2word,t.sankeyFrames=[],t.selectedEdge=[null,null]})),this.selectAlignment=Object(x.d)((function(e){t.alignment=t.alignments.find((function(t){return t.id===e}))})),this.selectEdge=Object(x.d)((function(e,n){t.selectedEdge[0]=t.framesByName[e].gid,t.selectedEdge[1]=t.framesByName[n].gid}))}return Object(f.a)(e,[{key:"LUWordNetGraph",value:function(){var e=this.getLUNodes(),t=this.getConnectionObjects(e,this.synsetsByLU),n=t.links.filter((function(e){return e.target.frm1LU}));return e.push.apply(e,Object(O.a)(t.nodes.filter((function(e){return e.frm1LU})))),n.filter((function(e){return"frm2LU"===e.source.type})).forEach((function(e){var t=e.source;e.source=e.target,e.target=t})),e.forEach((function(e){return e.isReferenceNode="frm1LU"===e.type})),n.filter((function(e){return"frm1LU"===e.source.type&&e.target.isIntersection})).forEach((function(e){e.source.isMatchingNode=!0})),this.computeDegrees(n),{nodes:e,links:n}}},{key:"synsetGraph",value:function(){var e=this.getLUNodes(),t=this.getConnectionObjects(e,this.synsetsByLU),n=t.links;e.push.apply(e,Object(O.a)(t.nodes));var r="synset"===this.alignment.type?function(e){return e.frm1LU}:function(e){return e.frm2LU};return e.forEach((function(e){e.isReferenceNode=r(e),e.isMatchingNode=e.isIntersection})),this.computeDegrees(n),{nodes:e,links:n}}},{key:"LUMuseGraph",value:function(){var e=this,t=this.getLUNodes(),n=this.getConnectionObjects(t,this.vectorsByLU,(function(t){return e.vectorsId2Word[t]})),r=n.links.filter((function(e){return e.target.frm1LU}));return t.push.apply(t,Object(O.a)(n.nodes.filter((function(e){return e.frm1LU})))),r.filter((function(e){return"frm2LU"===e.source.type})).forEach((function(e){var t=e.source;e.source=e.target,e.target=t})),t.forEach((function(e){return e.isReferenceNode="frm1LU"===e.type})),r.filter((function(e){return"frm1LU"===e.source.type&&e.target.isIntersection})).forEach((function(e){e.source.isMatchingNode=!0})),this.computeDegrees(r),{nodes:t,links:r}}},{key:"getLUNodes",value:function(){var e=this;return this.selectedEdge[0]&&this.selectedEdge[1]?this.frames[this.selectedEdge[0]].LUs.map((function(t){return Object(w.a)({type:"frm1LU"},e.createNode(t))})).concat(this.frames[this.selectedEdge[1]].LUs.map((function(t){return Object(w.a)({type:"frm2LU"},e.createNode(t))}))):[]}},{key:"getConnectionObjects",value:function(e,t){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e},a=e.map((function(e){return(t[e.name]||[]).slice(0,n.alignment.K).filter((function(e){return!Array.isArray(e)||e[0]>n.alignment.threshold})).map((function(t){return{source:e,target:Array.isArray(t)?t[1]:t}}))})).flat(),i={},s=Object(O.a)(new Set(a.map((function(e){return e.target})))).map((function(e){var t=Object(w.a)({type:"intermediate"},n.createNode(r(e)));return i[e]=t,t}));return a.forEach((function(e){e.target=i[e.target],e.target[e.source.type]=!0})),s.forEach((function(e){return e.isIntersection=e.frm1LU&&e.frm2LU})),{nodes:s,links:a}}},{key:"computeDegrees",value:function(e){e.forEach((function(e){++e.source.outDegree,++e.target.inDegree}))}},{key:"pruneEdges",value:function(e){var t=this;if(!this.sankeyEdgesMax)return e;e.sort((function(e,t){return e[0]>t[0]?-1:e[0]<t[0]?1:e[2]>t[2]?-1:e[2]<t[2]?1:0}));var n={};return e.forEach((function(e){return n[e[0]]=0})),e.filter((function(e){return++n[e[0]],n[e[0]]<=t.sankeyEdgesMax}))}},{key:"sankeyData",get:function(){var e=this;if(this.alignment){var t=this.alignment.edges,n=new Set(this.sankeyFrames.map((function(e){return e.id}))),r=this.strictSankeySet?function(t){return n.has(t[0])&&n.has(t[1])&&t[2]>=e.threshold}:function(t){return(n.has(t[0])||n.has(t[1]))&&t[2]>=e.threshold};return this.pruneEdges(t.filter(r)).map((function(t){return[e.frames[t[0]].name+"."+e.frames[t[0]].language,e.frames[t[1]].name+"."+e.frames[t[1]].language,t[2]]}))}return[]}},{key:"frameOptions",get:function(){var e=this;return this.indices.flat().map((function(t){return{id:t,label:e.frames[t].name+"."+e.frames[t].language}})).sort((function(e,t){return e.label<t.label?-1:e.label>t.label?1:0}))}},{key:"scoringOptions",get:function(){return this.alignments.map((function(e){return{value:e.id,label:e.desc}}))}},{key:"graphData",get:function(){if(console.log("called"),!this.alignment)return{nodes:[],links:[]};switch(this.alignment.type){case"lu_wordnet":return this.LUWordNetGraph();case"synset":case"synset_inv":return this.synsetGraph();case"lu_muse":return this.LUMuseGraph();default:return{nodes:[],links:[]}}}}]),e}();Object(x.h)(j,{fndb:x.m,language:x.m,alignments:x.m,indices:x.m,frames:x.m,synsetsByLU:x.m,synsetData:x.m,alignment:x.m,sankeyFrames:x.m,strictSankeySet:x.m,sankeyEdgesMax:x.m,selectedEdge:x.m,threshold:x.m,vectorsByLU:x.m,vectorsId2Word:x.m,sankeyData:x.e,frameOptions:x.e,scoringOptions:x.e});var N=j,C=function e(){Object(d.a)(this,e),this.sidebarOpen=!0,this.showAlignmentDetails=!1};Object(x.h)(C,{sidebarOpen:x.m,showAlignmentDetails:x.m});var L=C,B=n(43),A=n.n(B),U=n(26),S=n(91),D=n(16),M={version:"1.1.8",bP:function(){var e,t,n,r,a,i,s,o,c,l,u,h,d,f,m,y,p;function g(e){h=e,e.each((function(){var e=D.d(this),t=g.bars(),n=e.selectAll(".subBars").data(t.subBars).enter().append("g").attr("transform",(function(e){return"translate("+e.x+","+e.y+")"})).attr("class","subBars").append("rect").attr("x",v).attr("y",b).attr("width",k).attr("height",E);"undefined"!==typeof u&&n.style("fill",(function(e){return u(e)}));var r=e.selectAll(".edges").data(t.edges).enter().append("path").attr("class","edges").attr("d",(function(e){return e.path})).style("fill-opacity",g.edgeOpacity());"undefined"!==typeof u&&r.style("fill",(function(e){return u(e)})),e.selectAll(".mainBars").data(t.mainBars).enter().append("g").attr("transform",(function(e){return"translate("+e.x+","+e.y+")"})).attr("class","mainBars").append("rect").attr("x",v).attr("y",b).attr("width",k).attr("height",E).style("fill-opacity",0)}))}function v(e){return-e.width}function b(e){return-e.height}function k(e){return 2*e.width}function E(e){return 2*e.height}return g.data=function(e){return arguments.length?(l=e,g):l},g.fill=function(e){return arguments.length?(u=e,g):u},g.keyPrimary=function(t){return arguments.length?(e=t,g):"undefined"!==typeof e?e:function(e){return e[0]}},g.sortPrimary=function(e){return arguments.length?(m=e,g):"undefined"!==typeof m?m:D.a},g.keySecondary=function(e){return arguments.length?(t=e,g):"undefined"!==typeof t?t:function(e){return e[1]}},g.sortSecondary=function(e){return arguments.length?(y=e,g):"undefined"!==typeof y?y:D.a},g.value=function(e){return arguments.length?(n=e,g):"undefined"!==typeof n?n:function(e){return e[2]}},g.width=function(e){return arguments.length?(r=e,g):"undefined"!==typeof r?r:400},g.height=function(e){return arguments.length?(a=e,g):"undefined"!==typeof a?a:600},g.barSize=function(e){return arguments.length?(s=e,g):"undefined"!==typeof s?s:35},g.min=function(e){return arguments.length?(o=e,g):"undefined"!==typeof o?o:0},g.orient=function(e){return arguments.length?(i=e,g):"undefined"!==typeof i?i:"vertical"},g.pad=function(e){return arguments.length?(c=e,g):"undefined"!==typeof c?c:0},g.duration=function(e){return arguments.length?(f=e,g):"undefined"!==typeof f?f:500},g.edgeOpacity=function(e){return arguments.length?(d=e,g):"undefined"!==typeof d?d:.4},g.edgeMode=function(e){return arguments.length?(p=e,g):"undefined"!==typeof p?p:"curved"},g.bars=function(e){var t={primary:[],secondary:[]},n={primary:[],secondary:[]},r={primary:g.keyPrimary(),secondary:g.keySecondary()},a=g.orient();return s("primary"),s("secondary"),o("primary"),o("secondary"),function(){var e=g.min()/2;t.primary.forEach((function(t){t.height<e&&(t.height=e)})),t.secondary.forEach((function(t){t.height<e&&(t.height=e)}))}(),{mainBars:t.primary.concat(t.secondary),subBars:n.primary.concat(n.secondary),edges:function(){var e=D.b(n.secondary,(function(e){return e.index})),t=g.edgeMode();return n.primary.map((function(t){var n=e.get(t.index);return{path:"vertical"===a?r(t.x+t.width,t.y+t.height,n.x-n.width,n.y+n.height,n.x-n.width,n.y-n.height,t.x+t.width,t.y-t.height):i(t.x-t.width,t.y+t.height,n.x-n.width,n.y-n.height,n.x+n.width,n.y-n.height,t.x+t.width,t.y+t.height),primary:t.primary,secondary:t.secondary,value:t.value,percent:t.percent}}));function r(e,n,r,a,i,s,o,c){if("straight"===t)return["M",e,",",n,"L",r,",",a,"L",i,",",s,"L",o,",",c,"z"].join("");var l=(e+r)/2,u=(i+o)/2;return["M",e,",",n,"C",l,",",n," ",l,",",a,",",r,",",a,"L",i,",",s,"C",u,",",s," ",u,",",c,",",o,",",c,"z"].join("")}function i(e,n,r,a,i,s,o,c){if("straight"===t)return["M",e,",",n,"L",r,",",a,"L",i,",",s,"L",o,",",c,"z"].join("");var l=(n+a)/2,u=(s+c)/2;return["M",e,",",n,"C",e,",",l," ",r,",",l,",",r,",",a,"L",i,",",s,"C",i,",",u," ",o,",",u,",",o,",",c,"z"].join("")}}()};function i(t,n){return"undefined"===typeof e||e.part===n||r[e.part](t)===e.key}function s(e){function n(t){return i(t,e)?g.value()(t):0}var r=D.c().key("primary"===e?g.keyPrimary():g.keySecondary()).sortKeys("primary"===e?g.sortPrimary():g.sortSecondary()).rollup((function(e){return D.e(e,n)})).entries(g.data()),s=c(r,g.pad(),g.min(),0,"vertical"===a?g.height():g.width()),o=g.barSize();r.forEach((function(n,r){t[e].push({x:"horizontal"===a?(s[r].s+s[r].e)/2:"primary"===e?o/2:g.width()-o/2,y:"vertical"===a?(s[r].s+s[r].e)/2:"primary"===e?o/2:g.height()-o/2,height:"vertical"===a?(s[r].e-s[r].s)/2:o/2,width:"horizontal"===a?(s[r].e-s[r].s)/2:o/2,part:e,key:n.key,value:n.value,percent:s[r].p})}))}function o(e){function r(t){return i(t,e)?g.value()(t):0}var s=D.b(t[e],(function(e){return e.key}));D.c().key("primary"===e?g.keyPrimary():g.keySecondary()).sortKeys("primary"===e?g.sortPrimary():g.sortSecondary()).key("secondary"===e?g.keyPrimary():g.keySecondary()).sortKeys("secondary"===e?g.sortPrimary():g.sortSecondary()).rollup((function(e){return D.e(e,r)})).entries(g.data()).forEach((function(t){var r=s.get(t.key),i=c(t.values,0,0,"vertical"===a?r.y-r.height:r.x-r.width,"vertical"===a?r.y+r.height:r.x+r.width),o=g.barSize();t.values.forEach((function(s,c){n[e].push({x:"vertical"===a?"primary"===e?o/2:g.width()-o/2:(i[c].s+i[c].e)/2,y:"horizontal"===a?"primary"===e?o/2:g.height()-o/2:(i[c].s+i[c].e)/2,height:("vertical"===a?i[c].e-i[c].s:o)/2,width:("horizontal"===a?i[c].e-i[c].s:o)/2,part:e,primary:"primary"===e?t.key:s.key,secondary:"primary"===e?s.key:t.key,value:s.value,percent:i[c].p*r.percent,index:"primary"===e?t.key+"|"+s.key:s.key+"|"+t.key})}))}))}function c(e,t,n,r,a){var i=n/(a-r-2*e.length*t),s=0,o=0,c=D.e(e,(function(e){return e.value}));e.forEach((function(e){e.value<i*c&&(s+=1,o+=e.value)}));var l=c<1e-5?0:(a-r-2*e.length*t-s*n)/(c-o),u=r,h=[];return e.forEach((function(e){var r=e.value*l;h.push({s:u+t+(r<n?.5*(n-r):0),e:u+t+(r<n?.5*(n+r):r),p:c<1e-5?0:e.value/c}),u+=2*t+(r<n?n:r)})),h}},g.update=function(e){l=e;var t=g.bars(),n=g.duration();h.selectAll(".subBars").data(t.subBars).transition().duration(n).attr("transform",(function(e){return"translate("+e.x+","+e.y+")"})).select("rect").attr("x",v).attr("y",b).attr("width",k).attr("height",E),h.selectAll(".edges").data(t.edges).transition().duration(n).attr("d",(function(e){return e.path})).style("fill-opacity",g.edgeOpacity()).style("visibility","visible"),h.selectAll(".mainBars").data(t.mainBars).transition().duration(n).attr("transform",(function(e){return"translate("+e.x+","+e.y+")"})).select("rect").attr("x",v).attr("y",b).attr("width",k).attr("height",E).style("visibility","hidden")},g.mouseover=function(e){var t=g.bars(e);h.selectAll(".mainBars").filter((function(t){return t.part===e.part&&t.key===e.key})).select("rect").style("stroke-opacity",1),h.selectAll(".subBars").data(t.subBars).transition().duration(g.duration()).attr("transform",(function(e){return"translate("+e.x+","+e.y+")"})).select("rect").attr("x",v).attr("y",b).attr("width",k).attr("height",E);var n=h.selectAll(".edges").data(t.edges);n.filter((function(t){return t[e.part]===e.key})).transition().duration(g.duration()).style("fill-opacity",g.edgeOpacity()).style("visibility","visible").attr("d",(function(e){return e.path})),n.filter((function(t){return t[e.part]!==e.key})).transition().duration(g.duration()).style("visibility","hidden").attr("d",(function(e){return e.path})),h.selectAll(".mainBars").data(t.mainBars).transition().duration(g.duration()).attr("transform",(function(e){return"translate("+e.x+","+e.y+")"})).select("rect").attr("x",v).attr("y",b).attr("width",k).attr("height",E)},g.mouseout=function(e){var t=g.bars();h.selectAll(".mainBars").filter((function(t){return t.part===e.part&&t.key===e.key})).select("rect").style("stroke-opacity",0),h.selectAll(".subBars").data(t.subBars).transition().duration(g.duration()).attr("transform",(function(e){return"translate("+e.x+","+e.y+")"})).select("rect").attr("x",v).attr("y",b).attr("width",k).attr("height",E),h.selectAll(".edges").data(t.edges).transition().duration(g.duration()).style("fill-opacity",g.edgeOpacity()).style("visibility","visible").attr("d",(function(e){return e.path})),h.selectAll(".mainBars").data(t.mainBars).transition().duration(g.duration()).attr("transform",(function(e){return"translate("+e.x+","+e.y+")"})).select("rect").attr("x",v).attr("y",b).attr("width",k).attr("height",E)},g}},P=M,F=(n(82),A.a.mark((function(){var e,t;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e=["#3366CC","#DC3912","#FF9900","#109618","#990099","#0099C6"],t=0;case 2:return n.next=5,e[t];case 5:t=++t%e.length,n.next=2;break;case 8:case"end":return n.stop()}}),e)}))),z=Object(h.a)(function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(a)))).svg=null,n.selection=null,n.scoreFormatter=Object(U.a)(".3f"),n.bP=null,n.bPg=null,n}return Object(p.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.renderSankey()}},{key:"componentDidUpdate",value:function(){this.renderSankey()}},{key:"onBarClick",value:function(e){this.selection&&this.selection.key===e.key?(this.unselect(this.selection),this.selection=null):(this.selection&&this.unselect(this.selection),this.selection=e,this.select(e))}},{key:"onEdgeClick",value:function(e){this.props.store.selectEdge(e.primary,e.secondary),this.props.onAlignmentClick()}},{key:"select",value:function(e){var t=this,n="primary"===e.part?function(t){return e.key===t.primary}:function(t){return e.key===t.secondary};this.bP.mouseover(e),this.bPg.selectAll(".score").filter(n).text((function(e){return t.scoreFormatter(e.value)}))}},{key:"unselect",value:function(e){this.bP.mouseout(e),this.bPg.selectAll(".score").text("")}},{key:"renderSankey",value:function(){var e=this,t=this.props.store,n=F(),r=Object(O.a)(new Set(t.sankeyData.map((function(e){return e[0]})))).reduce((function(e,t){return e[t]=n.next().value,e}),{}),a=window.innerHeight-10,i=Object(S.a)(this.svg);i.select("*").remove(),i.attr("width",960).attr("height",a);var s=i.append("g").attr("transform","translate(200,50)");this.bP=P.bP().data(t.sankeyData).min(12).pad(1).height(a-200).width(500).fill((function(e){return r[e.primary]})),this.bPg=s.call(this.bP),this.bPg.selectAll(".mainBars").on("click",(function(t){return e.onBarClick(t)})),this.bPg.selectAll(".edges").on("click",(function(t){return e.onEdgeClick(t)})),this.bPg.selectAll(".subBars").filter((function(e){return"secondary"===e.part})).append("text").attr("class","score").attr("x",-58).attr("y",6),this.bPg.selectAll(".mainBars").append("text").attr("class","label").attr("x",(function(e){return"primary"===e.part?-30:30})).attr("y",(function(){return 6})).text((function(e){return e.key})).attr("text-anchor",(function(e){return"primary"===e.part?"end":"start"}))}},{key:"render",value:function(){var e=this,t=this.props.store.sankeyData;return a.a.createElement("div",null,t.length>0?a.a.createElement("svg",{ref:function(t){return e.svg=t}}):a.a.createElement("h3",{className:"no-data-text"},"No data to show."))}}]),t}(a.a.Component)),I=(n(83),n(25)),R=(n(84),Object(h.a)(function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(a)))).root=null,n.links=null,n.nodes=null,n.height=null,n.width=null,n.margin=null,n.scoreFormatter=Object(U.a)(".3f"),n}return Object(p.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.renderGraph()}},{key:"componentDidUpdate",value:function(){this.renderGraph()}},{key:"getRenderingData",value:function(){var e=this.props.store.graphData,t=Object(I.a)().domain(["frm1LU","intermediate","frm2LU"]).range([0,this.width]).padding(.3),n=Object(I.a)().domain(e.nodes.filter((function(e){return"frm1LU"===e.type})).sort((function(e,t){return t.outDegree-e.outDegree})).map((function(e){return e.name}))).range([2*this.margin,this.height-2*this.margin]),r=Object(I.a)().domain(e.nodes.filter((function(e){return"frm2LU"===e.type})).sort((function(e,t){return t.outDegree-e.outDegree})).map((function(e){return e.name}))).range([2*this.margin,this.height-2*this.margin]),a=Object(I.a)().domain(e.nodes.filter((function(e){return"intermediate"===e.type})).sort((function(e,t){return t.inDegree-e.inDegree})).map((function(e){return e.name}))).range([this.margin,this.height-this.margin]),i=t("frm1LU"),s=t("frm2LU"),o=t("intermediate");return e.nodes.forEach((function(e){"frm1LU"===e.type?(e.x=i,e.y=n(e.name)):"frm2LU"===e.type?(e.x=s,e.y=r(e.name)):(e.x=o,e.y=a(e.name))})),{nodes:e.nodes,links:e.links}}},{key:"computePath",value:function(e){var t,n=e.source.x,r=e.source.y-e.source.height/4,a=e.target.x,i=e.target.y-e.target.height/4;"frm1LU"===e.source.type||"intermediate"===e.source.type?(n+=e.source.width+12,a-=12,t=1):(n-=12,a+=e.target.width+16,t=-1);var s=(Math.abs(n-a)-30)/2.5;return"\n\t\t\t\tM ".concat(n,"            ").concat(r,"\n\t\t\t\tL ").concat(n+3*t,"   ").concat(r,"\n\t\t\t\tC ").concat(n+s*t," ").concat(r,", ").concat(a-s*t," ").concat(i,", ").concat(a+15*-t," ").concat(i,"\n\t\t\t\tL ").concat(a,"            ").concat(i,"\n\t\t\t")}},{key:"includeFooter",value:function(e){var t=Object(S.a)(this.root).select("svg"),n=e.nodes.filter((function(e){return e.isMatchingNode})).length,r=e.nodes.filter((function(e){return e.isReferenceNode&&!e.isMatchingNode})).length;t.select("#title").attr("x",this.margin).attr("y",this.height-this.margin/2).attr("class","graph-info").text("Frames: ".concat(this.props.store.selectedEdge[0],", ").concat(this.props.store.selectedEdge[1])),t.select("#stats").attr("x",this.width).attr("y",this.height-this.margin/2).attr("class","graph-info graph-score").html('\n\t\t\t\t\tAlignment score:\n\t\t\t\t\t<tspan class="match">'.concat(n,'</tspan>\n\t\t\t\t\t\xf7\n\t\t\t\t\t(\n\t\t\t\t\t<tspan class="match">').concat(n,'</tspan>\n\t\t\t\t\t+\n\t\t\t\t\t<tspan class="reference">').concat(r,"</tspan>\n\t\t\t\t\t)\n\t\t\t\t\t= ").concat(this.scoreFormatter(n/(n+r))))}},{key:"renderGraph",value:function(){var e=this;this.height=window.innerHeight-10,this.width=960,this.margin=60;var t=this.getRenderingData(),n=Object(S.a)(this.root).select("svg");n.attr("height",this.height).attr("width",this.width),this.nodes=n.select("#nodes").selectAll("text").data(t.nodes).join("text").text((function(e){return e.name})).each((function(e){var t=this.getBBox();e.width=t.width,e.height=t.height+2})).attr("x",(function(e){return e.x})).attr("y",(function(e){return e.y})).attr("class",(function(e){var t="node";return e.isMatchingNode?t+=" match":e.isReferenceNode&&(t+=" ref"),t})).attr("opacity",.75).on("mouseover",(function(t){return e.onMouseOverNode(t)})).on("mouseout",(function(t){return e.onMouseOutNode(t)})),this.links=n.select("#links").selectAll("path").data(t.links).join("path").attr("d",this.computePath).attr("marker-end","url(#arrowhead)").attr("stroke","#555").attr("fill-opacity",0).attr("opacity",.1),this.includeFooter(t)}},{key:"onMouseOverNode",value:function(e){var t=new Set;this.links.filter((function(t){return t.source===e||t.target===e})).each((function(e){t.add(e.source),t.add(e.target)})).attr("opacity",1),this.nodes.filter((function(e){return t.has(e)})).style("font-weight","bold").attr("opacity",1),this.props.onMouseOverNode&&this.props.onMouseOverNode(e,this.nodes,this.links)}},{key:"onMouseOutNode",value:function(){this.links.attr("opacity",.1),this.nodes.style("font-weight","normal").attr("opacity",.75),Object(S.a)("#synset-tooltip").style("display","none"),this.props.onMouseOutNode&&this.props.onMouseOutNode()}},{key:"render",value:function(){var e=this,t=this.props.store;return a.a.createElement("div",{ref:function(t){return e.root=t}},t.graphData.nodes.length>0?a.a.createElement("svg",null,a.a.createElement("defs",null,a.a.createElement("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"7",refX:"0",refY:"3.5",orient:"auto"},a.a.createElement("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#555"}))),a.a.createElement("g",{id:"nodes"}),a.a.createElement("g",{id:"links"}),a.a.createElement("text",{id:"title"}),a.a.createElement("text",{id:"stats"})):a.a.createElement("h3",{className:"no-data-text"},"No data to show."))}}]),t}(a.a.Component))),_=Object(h.a)(function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(a)))).posRegex=/\.\w{1,4}$/gi,n.onMouseOverNode=function(e,t,r){if("intermediate"===e.type){var a=n.props.store,i=a.synsetData[e.name],s=a.language,o=new Set;r.each((function(t){t.target===e&&o.add(t.source.name.replace(n.posRegex,""))})),Object(S.a)("#synset-name").html(e.name),Object(S.a)("#synset-desc").html(i.definition),Object(S.a)("#synset-eng-lemmas").html(i.en.map((function(e){return n.lemmaHtml(e,o.has(e))})).join(", ")),Object(S.a)("#synset-l2-title").html("".concat(s,":")),Object(S.a)("#synset-l2-lemmas").html(i[s].map((function(e){return n.lemmaHtml(e,o.has(e))})).join(", "));var c=Object(S.a)("#synset-tooltip");c.style("display","block");var l=c.node().getBoundingClientRect(),u=e.y+e.height/2;u=e.y+l.height>window.innerHeight?e.y-e.height-l.height:e.y+e.height/2,c.style("top","".concat(u,"px")).style("left","".concat(e.x+12,"px"))}},n}return Object(p.a)(t,e),Object(f.a)(t,[{key:"lemmaHtml",value:function(e,t){return t?'<span class="synset-lemma highlighted">'.concat(e,"</span>"):'<span class="synset-lemma">'.concat(e,"</span>")}},{key:"onMouseOutNode",value:function(){Object(S.a)("#synset-tooltip").style("display","none")}},{key:"render",value:function(){var e=this,t=this.props.store;return a.a.createElement("div",{ref:function(t){return e.root=t}},a.a.createElement("div",{id:"synset-graph-content"},a.a.createElement("div",{id:"synset-tooltip"},a.a.createElement("div",{className:"synset-lang-title large",id:"synset-name"}),a.a.createElement("div",{id:"synset-desc"}),a.a.createElement("div",{className:"synset-lang-title"},"eng:"),a.a.createElement("div",{id:"synset-eng-lemmas"}),a.a.createElement("div",{className:"synset-lang-title",id:"synset-l2-title"}),a.a.createElement("div",{id:"synset-l2-lemmas"})),a.a.createElement(R,{store:t,onMouseOverNode:this.onMouseOverNode,onMouseOutNode:this.onMouseOutNode})))}}]),t}(a.a.Component)),G=(n(85),Object(h.a)(function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(a)))).selectableTypes=["lu_wordnet","synset","synset_inv","lu_muse"],n}return Object(p.a)(t,e),Object(f.a)(t,[{key:"onBackClick",value:function(){this.props.uiState.showAlignmentDetails=!1}},{key:"onAlignmentClick",value:function(){var e=this.props,t=e.store,n=e.uiState;this.selectableTypes.indexOf(t.alignment.type)>-1&&(n.showAlignmentDetails=!0)}},{key:"render",value:function(){var e=this,t=this.props,n=t.store,r=t.uiState,i="";return i+=r.showAlignmentDetails?"shift":"no-shift",r.sidebarOpen||(i+=" expanded"),a.a.createElement("div",{id:"chart-panel-container",className:i},r.showAlignmentDetails&&a.a.createElement("div",{id:"back-button-container",onClick:function(){return e.onBackClick()}},a.a.createElement(u.a,{size:"1.75em"})),a.a.createElement(z,{store:n,onAlignmentClick:function(){return e.onAlignmentClick()}}),n.alignment&&"lu_muse"===n.alignment.type?a.a.createElement(R,{store:n}):a.a.createElement(_,{store:n}))}}]),t}(a.a.Component))),W=new N,H=new L;var V=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(E,{store:W,uiState:H}),a.a.createElement("div",{className:"app-body"},a.a.createElement(G,{store:W,uiState:H})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[63,1,2]]]);
//# sourceMappingURL=main.9e821281.chunk.js.map