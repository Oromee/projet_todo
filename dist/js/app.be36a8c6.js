(function(t){function e(e){for(var s,r,i=e[0],l=e[1],c=e[2],d=0,p=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(s=!1)}s&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var s={},o={app:0},a=[];function r(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=s,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"14ef":function(t,e,n){"use strict";n("3f5d")},3919:function(t,e,n){"use strict";n("b899")},"3f5d":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("MenuBar"),n("br"),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-4"},[n("sidebar"),n("br")],1),n("div",{staticClass:"col-sm-8"},[n("todo")],1)])],1)])},a=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"todo"}},[n("h1",[t._v("TODO LISTE")]),n("b",[t._v("filtre")]),t._v(" : "),n("button",{attrs:{type:"button"},on:{click:function(e){return t.filterTask("all")}}},[t._v("Tous")]),t._v(" "),n("button",{attrs:{type:"button"},on:{click:function(e){return t.filterTask("comp")}}},[t._v("Completés")]),t._v(" "),n("button",{attrs:{type:"button"},on:{click:function(e){return t.filterTask("nComp")}}},[t._v("Non Complétés")]),n("br"),n("br"),n("ul",t._l(t.todos,(function(e,s){return n("li",{key:e.id},[t._v(" "+t._s(e.titre)+" - "),n("input",{attrs:{type:"checkbox",id:"fTask"},on:{change:function(e){return t.completedTask(s)}}}),n("label",{attrs:{for:"fTask"}},[t._v(" Fini ? ")]),n("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.supprimerTask(s)}}},[t._v("X")]),n("br"),n("br")])})),0),n("div",{attrs:{id:"nouvelleTask"}},[n("label",{attrs:{for:"nTask"}},[t._v("Nouvelle tâche : ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.nTask,expression:"nTask"}],attrs:{type:"text",id:"nTask"},domProps:{value:t.nTask},on:{input:function(e){e.target.composing||(t.nTask=e.target.value)}}}),t._v(" "),n("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:t.addTask}},[t._v("+")]),n("br"),t._v(" "),n("br")])])},i=[],l=(n("99af"),n("fb6a"),n("4de4"),n("2f62"));s["a"].use(l["a"]);var c=new l["a"].Store({state:{todos:[{id:0,titre:"tache 1",completed:!1},{id:1,titre:"tache 2",completed:!1},{id:2,titre:"tache 3",completed:!1},{id:3,titre:"tache 4",completed:!1},{id:4,titre:"tache 5",completed:!1},{id:5,titre:"tache 6",completed:!1}],nTask:"",restante:0},getters:{getAllTodos:function(t){return t.todos}},actions:{}}),u={toDoStore:c},d={methods:{completedTask:function(t){this.todos[t].completed?this.todos[t].completed=!1:this.todos[t].completed=!0},supprimerTask:function(t){this.todos=this.todos.slice(0,t).concat(this.todos.slice(t+1))},addTask:function(){this.todos.push({id:this.todos.length,titre:this.nTask,completed:!1}),this.nTask=""},filterTask:function(t){if("all"===t)return console.log(t),this.todos;"comp"===t&&(console.log(t),this.todos=this.todos.filter((function(t){return 1==t.completed}))),"nComp"===t&&(console.log(t),this.todos=this.todos.filter((function(t){return 0==t.completed})))}},computed:{todos:u.getters.getAllTodos()},name:"todo"},p=d,f=(n("72ed"),n("2877")),v=Object(f["a"])(p,r,i,!1,null,"c2c75746",null),b=v.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"sidebar"}},[n("h1",[t._v("Liste des Todos")]),n("ul",t._l(t.lists,(function(e,s){return n("li",{key:s},[n("button",{staticClass:"btn-dark",attrs:{type:"button"}},[t._v(t._s(e.titre))]),t._v(" "),n("button",{attrs:{type:"button"},on:{click:function(e){return t.supprimerList(s)}}},[t._v("X")])])})),0),n("div",{attrs:{id:"nouvelleList"}},[n("label",{attrs:{for:"nList"}},[t._v("Nouvelle Liste : ")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.nList,expression:"nList"}],attrs:{type:"text",id:"nList"},domProps:{value:t.nList},on:{input:function(e){e.target.composing||(t.nList=e.target.value)}}}),t._v(" "),n("button",{attrs:{type:"button"},on:{click:t.addList}},[t._v(" + ")])])])},m=[],_={data:function(){return{lists:[],nList:""}},methods:{supprimerList:function(t){this.lists=this.lists.slice(0,t).concat(this.lists.slice(t+1))},addList:function(){this.lists.push({id:this.lists.length,titre:this.nList,completed:!1}),this.nList=""}},name:"sidebar.vue"},g=_,k=(n("3919"),Object(f["a"])(g,h,m,!1,null,"fe81a5f6",null)),T=k.exports,y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light",attrs:{id:"barMenu"}},[n("div",{staticClass:"container-fluid"},[n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Application des Todo-Liste")]),n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})]),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[n("ul",{staticClass:"navbar-nav"},[n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link active",attrs:{"aria-current":"page",href:"#"}},[t._v("Connexion")])])])])])])}],x={name:"MenuBar"},L=x,O=(n("14ef"),Object(f["a"])(L,y,C,!1,null,"47bfefe8",null)),w=O.exports,j={name:"App",components:{MenuBar:w,Sidebar:T,todo:b}},S=j,P=(n("034f"),Object(f["a"])(S,o,a,!1,null,null,null)),M=P.exports;n("4989"),n("ab8b");s["a"].config.productionTip=!1,new s["a"]({el:"#app",toDoStore:u,render:function(t){return t(M)}}).$mount("#app")},6707:function(t,e,n){},"72ed":function(t,e,n){"use strict";n("6707")},"85ec":function(t,e,n){},b899:function(t,e,n){}});
//# sourceMappingURL=app.be36a8c6.js.map