(function(t){function e(e){for(var r,i,l=e[0],s=e[1],c=e[2],p=0,f=[];p<l.length;p++)i=l[p],o[i]&&f.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,l=1;l<n.length;l++){var s=n[l];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("04f5"),o=n.n(r);o.a},"04f5":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c");var r=n("2b0e"),o=(n("bf40"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{class:{loading:t.loading},attrs:{id:"app"}},[n("v-toolbar",{attrs:{app:""}},[n("div",{staticClass:"org-name"},[t._v(t._s(t.state.name))]),n("br"),n("div",[n("label",[t._v("Balance: £")]),n("span",[t._v(t._s(t.state.balance))])])]),n("v-content",[n("v-container",{attrs:{fluid:""}},[n("v-btn",{attrs:{color:"red lighten-2",dark:""},on:{click:t.createTreatment}},[t._v("Create Treatments!!")]),n("div",[n("div",{},[n("h2",[t._v("Patients")]),n("ul",t._l(t.state.patients,function(e){return n("li",[n("div",[n("span",[t._v(t._s(e.name))])])])}))]),n("ul")]),n("v-dialog",{attrs:{width:"800"},model:{value:t.treatmentDialog,callback:function(e){t.treatmentDialog=e},expression:"treatmentDialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v("\n            Create Treatment\n          ")]),n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-combobox",{attrs:{items:t.patientNames,label:"Patient"},model:{value:t.newTreatment.name,callback:function(e){t.$set(t.newTreatment,"name",e)},expression:"newTreatment.name"}})],1),n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{label:"Treatment",placeholder:"Enter treatment description"}},[t._v(t._s(t.newTreatment.description)+"\n              ")])],1)],1),n("v-divider"),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary",flat:""},on:{click:t.sendTreatment}},[t._v("\n              Create Treatment\n            ")])],1)],1)],1)],1)],1),n("v-footer",{attrs:{app:""}})],1)}),a=[],i=(n("7f7f"),n("9ef7")),l={name:"app",data:function(){return{treatmentDialog:!1,newTreatment:{name:"",description:""},state:{name:"",patients:[],balance:"0.00"},loading:!0}},created:function(){var t=window.location.protocol+"//"+window.location.host+"/api/";console.log("connect to",t),this.proxy=new i["Proxy"]({url:t},this.onOpen,this.onClose,this.onError),window.proxy=this.proxy},computed:{patientNames:function(){return this.state.patients.map(function(t){return t.name})}},methods:{onOpen:function(){var t=this;console.log("braid connected",this.proxy),this.proxy.hospital.getInitialState().then(function(e){console.log(e.balance),t.state=e,t.loading=!1}).catch(function(t){return console.error("failed to initialise",t)})},onClose:function(){console.log("braid closed")},onError:function(t){console.error("connection error",t)},createTreatment:function(){this.treatmentDialog=!0,console.log("create treatment")},sendTreatment:function(){this.treatmentDialog=!1,console.log(this.newTreatment),this.proxy.hospital.processTreatmentRequest(this.newTreatment).then(function(t){console.log("treatment sent",t)}).catch(function(t){return console.error("failed during sending of treatment",t)})}}},s=l,c=(n("034f"),n("2877")),u=Object(c["a"])(s,o,a,!1,null,null,null),p=u.exports,f=n("ce5b"),d=n.n(f);r["default"].config.productionTip=!1,r["default"].use(d.a),new r["default"]({render:function(t){return t(p)}}).$mount("#app")}});
//# sourceMappingURL=app.f93bc8a5.js.map