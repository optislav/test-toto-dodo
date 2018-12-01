(function(t){function e(e){for(var i,o,r=e[0],l=e[1],d=e[2],c=0,m=[];c<r.length;c++)o=r[c],s[o]&&m.push(s[o][0]),s[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(m.length)m.shift()();return a.push.apply(a,d||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,r=1;r<n.length;r++){var l=n[r];0!==s[l]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},s={app:0},a=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0159":function(t,e,n){"use strict";var i=n("a95f"),s=n.n(i);s.a},"10c3":function(t,e,n){},"21bb":function(t,e,n){"use strict";var i=n("bcc9"),s=n.n(i);s.a},"223b":function(t,e,n){},"37d1":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var i={};n.r(i),n.d(i,"stages",function(){return L}),n.d(i,"stepTime",function(){return Q}),n.d(i,"stageTime",function(){return U});var s={};n.r(s),n.d(s,"initStore",function(){return Z}),n.d(s,"addStage",function(){return tt}),n.d(s,"setStageIds",function(){return et}),n.d(s,"addStep",function(){return nt}),n.d(s,"setStepIds",function(){return it}),n.d(s,"addElem",function(){return st}),n.d(s,"setElemIds",function(){return at}),n.d(s,"editElem",function(){return ot});n("cadf"),n("551c"),n("097d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],l=n("2877"),d={},u=Object(l["a"])(d,o,r,!1,null,null,null);u.options.__file="App.vue";var c=u.exports,m=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"task-builder"},[n("draggable",{attrs:{options:{ghostClass:"ghost",handle:".handler",setData:t.modifyDragItem,forceFallback:!0}},on:{start:function(e){t.dragStarted=!0},end:function(e){t.dragStarted=!1}},model:{value:t.stages,callback:function(e){t.stages=e},expression:"stages"}},t._l(t.stages,function(e,i){return n("StageItem",{key:e.id,attrs:{id:e.id,title:e.title,stepIds:e.steps,index:i+1,dragStarted:t.dragStarted}})})),n("button",{staticClass:"button task-builder__button",attrs:{role:"button"},on:{click:t.openAddStageModal}},[t._v("\n      Добавить этап\n    ")])],1),n("ModalEdit",{directives:[{name:"show",rawName:"v-show",value:t.modalVisible,expression:"modalVisible"}],attrs:{title:"Добавить этап",onSbm:function(){return t.addStageAndClearTitle()}},on:{close:function(e){t.modalVisible=!1}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newStageTitle,expression:"newStageTitle"}],ref:"toFocus",staticClass:"input modal__input",attrs:{slot:"body",required:"",type:"text",placeholder:"Введите название этапа"},domProps:{value:t.newStageTitle},on:{input:function(e){e.target.composing||(t.newStageTitle=e.target.value)}},slot:"body"}),n("button",{staticClass:"button button--size--small modal__button",attrs:{slot:"footer"},slot:"footer"},[t._v("\n      Добавить\n    ")])])],1)},f=[],b=n("be94"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("dl",{class:{"stage-item":!0,"stage-item--opened":t.isAccordionOpened}},[n("dt",{staticClass:"stage-item__header",on:{click:t.toggleAccordion}},[n("div",{staticClass:"stage-item__side"},[t.dragStarted?n("p",{staticStyle:{width:"90px"}}):n("p",{staticClass:"stage-item__index"},[t._v("Этап №"+t._s(t.index))])]),n("h3",{staticClass:"stage-item__title"},[t._v(t._s(t.title))]),n("div",{staticClass:"stage-item__side stage-item__side--right"},[n("p",{staticClass:"stage-item__time"},[t._v(t._s(t._f("formatTime")(t.time)))])]),n("button",{staticClass:"handler",attrs:{type:"button"}},[t._v("Drag handler")])]),n("dd",{ref:"panel",staticClass:"stage-item__body"},[n("div",{staticClass:"stage-item__inner"},[n("draggable",{attrs:{options:{ghostClass:"ghost",handle:".step-item__header",forceFallback:!0}},model:{value:t.steps,callback:function(e){t.steps=e},expression:"steps"}},t._l(t.steps,function(t,e){return n("StepItem",{key:t.id,attrs:{id:t.id,title:t.title,index:e+1,elemIds:t.elems}})})),n("button",{staticClass:"button button--size--medium task-builder__button",attrs:{type:"button"},on:{click:t.openAddStepModal}},[t._v("\n        Добавить шаг\n      ")])],1)]),n("ModalEdit",{directives:[{name:"show",rawName:"v-show",value:t.modalVisible,expression:"modalVisible"}],attrs:{title:"Добавить шаг",onSbm:function(){return t.addStepAndClearTitle()}},on:{close:function(e){t.modalVisible=!1}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newStepTitle,expression:"newStepTitle"}],ref:"toFocus",staticClass:"input modal__input",attrs:{slot:"body",required:"",type:"text",placeholder:"Введите название шага"},domProps:{value:t.newStepTitle},on:{input:function(e){e.target.composing||(t.newStepTitle=e.target.value)}},slot:"body"}),n("button",{staticClass:"button button--size--small modal__button",attrs:{slot:"footer",type:"submit"},slot:"footer"},[t._v("\n      Добавить\n    ")])])],1)},v=[],h=(n("c5f6"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"step-item"},[n("div",{staticClass:"step-item__header"},[n("p",{staticClass:"step-item__index"},[t._v("\n      Шаг № "+t._s(t.index)+"\n    ")]),n("span",{staticClass:"line line--fixed"}),n("p",{staticClass:"step-item__title"},[t._v("\n      "+t._s(t._f("formatTime")(t.time))+"\n    ")]),n("span",{staticClass:"line line--horizontal"}),n("p",{staticClass:"step-item__title"},[t._v("\n      "+t._s(t.title)+"\n    ")]),n("span",{staticClass:"line line--fixed line--size--medium"})]),n("div",{staticClass:"step-item__controls"},[n("button",{staticClass:"step-item__add-elem",attrs:{title:"Добавить элемент",type:"button"},on:{click:t.openAddElemModal}})]),n("div",{staticClass:"step-item__body"},[n("draggable",{staticClass:"step-item__elems",attrs:{element:"ul",options:{ghostClass:"ghost",handle:".elem__body",setData:t.modifyDragItem,forceFallback:!0}},model:{value:t.elems,callback:function(e){t.elems=e},expression:"elems"}},t._l(t.elems,function(t,e){return n("ElemItem",{key:t.id,attrs:{id:t.id,title:t.title,manager:t.manager,time:t.time,index:e}})}))],1),n("ModalEdit",{directives:[{name:"show",rawName:"v-show",value:t.modalVisible,expression:"modalVisible"}],attrs:{title:"Добавить элемент",onSbm:function(){return t.onAdd()}},on:{close:function(e){t.modalVisible=!1}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newElemTitle,expression:"newElemTitle"}],ref:"toFocus",staticClass:"input modal__input",attrs:{slot:"body",required:"",type:"text",placeholder:"Введите название задания"},domProps:{value:t.newElemTitle},on:{input:function(e){e.target.composing||(t.newElemTitle=e.target.value)}},slot:"body"}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newElemManager,expression:"newElemManager"}],staticClass:"input modal__input",attrs:{slot:"body",required:"",type:"text",placeholder:"Введите ФИО отвественного"},domProps:{value:t.newElemManager},on:{input:function(e){e.target.composing||(t.newElemManager=e.target.value)}},slot:"body"}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newElemTime,expression:"newElemTime"}],staticClass:"input modal__input",attrs:{slot:"body",required:"",type:"text",placeholder:"Введите время в формате ЧЧ:ММ"},domProps:{value:t.newElemTime},on:{input:function(e){e.target.composing||(t.newElemTime=e.target.value)}},slot:"body"}),n("button",{staticClass:"button button--size--small modal__button",attrs:{slot:"footer",type:"submit"},slot:"footer"},[t._v("\n      Добавить\n    ")])])],1)}),_=[],y=(n("28a5"),n("3835")),S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"elem"},[n("span",{staticClass:"line line--horizontal"}),n("div",{staticClass:"elem__body",attrs:{title:"Редактировать элемент"},on:{click:t.openEditModal}}),n("ModalEdit",{directives:[{name:"show",rawName:"v-show",value:t.modalVisible,expression:"modalVisible"}],attrs:{title:"Редактировать элемент",onSbm:function(){return t.onEdit()}},on:{close:function(e){t.modalVisible=!1}}},[n("input",{ref:"toFocus",staticClass:"input modal__input",attrs:{slot:"body",required:"",type:"text",placeholder:"Введите название задания"},domProps:{value:t.title},on:{input:function(e){return t.newElemTitle=e.target.value}},slot:"body"}),n("input",{staticClass:"input modal__input",attrs:{slot:"body",required:"",type:"text",placeholder:"Введите ФИО отвественного"},domProps:{value:t.manager},on:{input:function(e){return t.newElemManager=e.target.value}},slot:"body"}),n("input",{staticClass:"input modal__input",attrs:{slot:"body",required:"",type:"text",placeholder:"Введите время в формате ЧЧ:ММ"},domProps:{value:t._f("formatTime")(t.time)},on:{input:function(e){return t.newElemTime=e.target.value}},slot:"body"}),n("button",{staticClass:"button button--size--small modal__button",attrs:{slot:"footer",type:"submit"},slot:"footer"},[t._v("\n      Редактировать\n    ")]),n("button",{staticClass:"button button--size--small modal__button",attrs:{slot:"footer",type:"button"},on:{click:function(e){t.modalVisible=!1}},slot:"footer"},[t._v("\n      Отмена\n    ")])])],1)},w=[],E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal-fade"}},[n("div",{staticClass:"modal__backdrop",on:{click:function(e){return e.target!==e.currentTarget?null:t.close(e)}}},[n("div",{staticClass:"modal",attrs:{role:"dialog"}},[n("header",{staticClass:"modal__header"},[t._v("\n        "+t._s(t.title)+"\n      ")]),n("form",{on:{submit:function(e){return e.preventDefault(),t.onSbm(e)},keyup:function(e){return"button"in e||!t._k(e.keyCode,"esc",27,e.key,"Escape")?t.close(e):null}}},[n("section",{staticClass:"modal__body"},[t._t("body")],2),n("footer",{staticClass:"modal__footer"},[t._t("footer")],2)])])])])},I=[],T={methods:{close:function(){this.$emit("close")}},props:{title:{type:String,required:!0},onSbm:{type:Function}}},C=T,x=(n("86e1"),Object(l["a"])(C,E,I,!1,null,null,null));x.options.__file="ModalEdit.vue";var O=x.exports,M=n("2f62"),k={components:{ModalEdit:O},props:{id:{type:Number,required:!0},index:{type:Number,required:!0},title:{type:String,required:!0,validator:function(t){return Boolean(t.trim())}},manager:{type:String,required:!0,validator:function(t){return Boolean(t.trim())}},time:{type:Number,required:!0}},data:function(){return{modalVisible:!1,newElemTitle:this.title,newElemManager:this.manager,newElemTime:this.$options.filters.formatTime(this.time)}},computed:{minutes:function(){var t=this.newElemTime.split(":"),e=Object(y["a"])(t,2),n=e[0],i=e[1];return 60*n+Number(i)}},methods:Object(b["a"])({},Object(M["b"])(["editElem"]),{openEditModal:function(){this.modalVisible=!0,this.$refs.toFocus.focus()},validate:function(){var t=/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;return t.test(this.newElemTime)},editElement:function(){this.editElem({id:this.id,elemData:{id:this.id,title:this.newElemTitle,manager:this.newElemManager,time:this.minutes}})},onEdit:function(){this.validate()?(this.editElement(),this.modalVisible=!1):alert("Неверный формат времени.")}})},$=k,A=(n("0159"),Object(l["a"])($,S,w,!1,null,null,null));A.options.__file="ElemItem.vue";var D=A.exports,j=n("1516"),q=n.n(j),V={components:{ElemItem:D,ModalEdit:O,draggable:q.a},props:{id:{type:Number,required:!0},index:{type:Number,required:!0},title:{type:String,required:!0,validator:function(t){return Boolean(t.trim())}},elemIds:{type:Array,required:!0}},data:function(){return{modalVisible:!1,newElemTitle:"",newElemManager:"",newElemTime:""}},computed:{elems:{get:function(){var t=this;return this.elemIds.map(function(e){return t.$store.state.elems.byId[e]})},set:function(t){var e=t.map(function(t){return t.id});return this.$store.dispatch("setElemIds",{id:this.id,newElems:e})}},time:function(){return this.$store.getters.stepTime(this.id)},minutes:function(){var t=this.newElemTime.split(":"),e=Object(y["a"])(t,2),n=e[0],i=e[1];return 60*n+Number(i)}},methods:Object(b["a"])({},Object(M["b"])(["addElem"]),{openAddElemModal:function(){var t=this;this.modalVisible=!0,this.$nextTick(function(){return t.$refs.toFocus.focus()})},validate:function(){var t=/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;return t.test(this.newElemTime)},addElement:function(){this.addElem({id:this.id,elemData:{title:this.newElemTitle,manager:this.newElemManager,time:this.minutes}})},clearAll:function(){this.newElemTitle="",this.newElemManager="",this.newElemTime=""},onAdd:function(){this.validate()?(this.addElement(),this.clearAll()):alert("Неверный формат времени.")},modifyDragItem:function(t,e){var n=15,i=e.lastChild,s=i.scrollWidth-n,a=i.scrollHeight;t.setDragImage(i,s,a/2)}})},N=V,P=(n("c371"),Object(l["a"])(N,h,_,!1,null,null,null));P.options.__file="StepItem.vue";var F=P.exports,z={components:{StepItem:F,ModalEdit:O,draggable:q.a},props:{id:{type:Number,required:!0},index:{type:Number,required:!0},title:{type:String,required:!0,validator:function(t){return Boolean(t.trim())}},stepIds:{type:Array,required:!0},dragStarted:{type:Boolean}},data:function(){return{isAccordionOpened:!1,modalVisible:!1,newStepTitle:""}},computed:{steps:{get:function(){var t=this;return this.stepIds.map(function(e){return t.$store.state.steps.byId[e]})},set:function(t){var e=t.map(function(t){return t.id});return this.$store.dispatch("setStepIds",{id:this.id,newSteps:e})}},time:function(){return this.$store.getters.stageTime(this.id)}},methods:Object(b["a"])({},Object(M["b"])(["addStep"]),{openAddStepModal:function(){var t=this;this.modalVisible=!0,this.$nextTick(function(){return t.$refs.toFocus.focus()})},addStepAndClearTitle:function(){this.addStep({id:this.id,newStepTitle:this.newStepTitle}),this.newStepTitle=""},toggleAccordion:function(){this.isAccordionOpened=!this.isAccordionOpened},updateHeight:function(){var t=this.$refs.panel;this.isAccordionOpened?t.style.maxHeight=t.scrollHeight+"px":t.style.maxHeight=null}}),updated:function(){this.updateHeight()}},H=z,B=(n("8d1e"),Object(l["a"])(H,g,v,!1,null,null,null));B.options.__file="StageItem.vue";var J=B.exports,G={name:"home",components:{draggable:q.a,StageItem:J,ModalEdit:O},data:function(){return{newStageTitle:"",dragStarted:!1,modalVisible:!1}},computed:{stages:{get:function(){return this.$store.getters.stages},set:function(t){var e=t.map(function(t){return t.id});this.$store.dispatch("setStageIds",e)}}},methods:Object(b["a"])({},Object(M["b"])(["addStage"]),{openAddStageModal:function(){var t=this;this.modalVisible=!0,this.$nextTick(function(){return t.$refs.toFocus.focus()})},addStageAndClearTitle:function(){this.addStage(this.newStageTitle),this.newStageTitle=""},modifyDragItem:function(t,e){var n=45,i=e.firstChild,s=i.scrollWidth-n,a=i.scrollHeight;t.setDragImage(i,s,a/2)}})},K=G,R=(n("21bb"),Object(l["a"])(K,p,f,!1,null,null,null));R.options.__file="Home.vue";var Y=R.exports;a["a"].use(m["a"]);var W=new m["a"]({routes:[{path:"/",name:"home",component:Y}]}),L=function(t){return t.stageIDs.map(function(e){return t.stages.byId[e]})},Q=function(t){return function(e){var n=t.steps.byId[e].elems,i=n.map(function(e){return t.elems.byId[e]});return i.reduce(function(t,e){return t+e.time},0)}},U=function(t,e){return function(n){var i=t.stages.byId[n].steps,s=i.map(function(t){return e.stepTime(t)});return s.reduce(function(t,e){return t+e},0)}},X={STORAGE_KEY:"toto-dodo-key"},Z=function(t){var e=t.commit,n=localStorage.getItem(X.STORAGE_KEY);if(n){var i=JSON.parse(n);e("setState",i)}},tt=function(t,e){var n=t.commit;n("addStage",{id:Date.now(),title:e,steps:[]})},et=function(t,e){var n=t.commit;n("setStageIds",e)},nt=function(t,e){var n=t.commit,i=e.id,s=e.newStepTitle;n("addStep",{stageId:i,stepData:{id:Date.now(),title:s,elems:[]}})},it=function(t,e){var n=t.commit,i=e.id,s=e.newSteps;n("setSteps",{stageId:i,newSteps:s})},st=function(t,e){var n=t.commit,i=e.id,s=e.elemData,a=s.title,o=s.manager,r=s.time;n("addElem",{stepId:i,elemData:{id:Date.now(),title:a,manager:o,time:r}})},at=function(t,e){var n=t.commit,i=e.id,s=e.newElems;n("setElems",{stepId:i,newElems:s})},ot=function(t,e){var n=t.commit,i=e.id,s=e.elemData;n("setElem",{id:i,elemData:s})},rt={setState:function(t,e){this.replaceState(e)},addStage:function(t,e){var n=e.id;t.stageIDs.push(n),t.stages.allIds.push(n),a["a"].set(t.stages.byId,String(n),e)},setStageIds:function(t,e){a["a"].set(t,"stageIDs",e)},addStep:function(t,e){var n=e.stageId,i=e.stepData,s=i.id;t.stages.byId[n].steps.push(s),t.steps.allIds.push(s),a["a"].set(t.steps.byId,String(s),i)},setSteps:function(t,e){var n=e.stageId,i=e.newSteps;a["a"].set(t.stages.byId[n],"steps",i)},addElem:function(t,e){var n=e.stepId,i=e.elemData,s=i.id;t.steps.byId[n].elems.push(s),t.elems.allIds.push(s),a["a"].set(t.elems.byId,String(s),i)},setElems:function(t,e){var n=e.stepId,i=e.newElems;a["a"].set(t.steps.byId[n],"elems",i)},setElem:function(t,e){var n=e.id,i=e.elemData;a["a"].set(t.elems.byId,String(n),i)}};a["a"].use(M["a"]);var lt={stageIDs:[],stages:{byId:{},allIds:[]},steps:{byId:{},allIds:[]},elems:{byId:{},allIds:[]}},dt=new M["a"].Store({state:lt,getters:i,actions:s,mutations:rt});a["a"].config.productionTip=!1,a["a"].filter("formatTime",function(t){var e=Math.floor,n=e(e(t/24)/60),i=e(t/60)%24,s=t%60,a=function(t){return t<10?"0"+t:t};return 0===n?0===i?"".concat(s," минут"):"".concat(a(i),":").concat(a(s)):"".concat(n,"д ").concat(i,"ч ").concat(s,"м")}),new a["a"]({router:W,store:dt,beforeCreate:function(){this.$store.dispatch("initStore")},render:function(t){return t(c)}}).$mount("#app"),dt.subscribe(function(t,e){var n=JSON.stringify(e);localStorage.setItem(X.STORAGE_KEY,n)})},"86e1":function(t,e,n){"use strict";var i=n("37d1"),s=n.n(i);s.a},"8d1e":function(t,e,n){"use strict";var i=n("10c3"),s=n.n(i);s.a},a95f:function(t,e,n){},bcc9:function(t,e,n){},c371:function(t,e,n){"use strict";var i=n("223b"),s=n.n(i);s.a}});
//# sourceMappingURL=app.fee2a569.js.map