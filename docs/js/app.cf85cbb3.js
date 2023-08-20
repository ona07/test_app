(function(){"use strict";var t={808:function(t,e,n){var r=n(963),o=n(252);const c={class:"app"};function i(t,e,n,r,i,a){const u=(0,o.up)("sidebar"),s=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",c,[(0,o.Wm)(u),(0,o.Wm)(s)])}const a={class:"sidebar"};function u(t,e,n,r,c,i){const u=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("aside",a,[(0,o.Wm)(u,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Home")])),_:1}),(0,o.Wm)(u,{to:"/about"},{default:(0,o.w5)((()=>[(0,o.Uk)("About")])),_:1}),(0,o.Wm)(u,{to:"/projects"},{default:(0,o.w5)((()=>[(0,o.Uk)("Projects")])),_:1})])}var s={name:"MySidebar"},f=n(744);const p=(0,f.Z)(s,[["render",u],["__scopeId","data-v-c1056b68"]]);var d=p,h={name:"App",components:{Sidebar:d}};const l=(0,f.Z)(h,[["render",i]]);var v=l,m=n(201);const w={refs:"canvas",class:"home"};function b(t,e,n,r,c,i){return(0,o.wg)(),(0,o.iD)("div",w)}var g=n(35),k=n.n(g);const y=n(70);var O={name:"MyProfile",mounted(){this.sketch=new(k())(this.createSketch,this.$refs.canvas)},beforeUnmount(){this.sketch.remove()},methods:{createSketch(t){let e,n;t.preload=()=>{n=t.loadFont(y)},t.setup=()=>{t.createCanvas(window.innerWidth,window.innerHeight,t.WEBGL),t.noStroke(),e=[],e[0]=t.createVector(0,-100,0),e[1]=t.createVector(-50,50,50),e[2]=t.createVector(50,50,50),e[3]=t.createVector(-50,-50,-50),e[4]=t.createVector(50,-50,-50),t.textFont(n)},t.draw=()=>{t.background(20),t.lights();const n=t.map(t.mouseX,0,t.width,-t.PI,t.PI);t.rotateY(n),e[0]=t.createVector(t.mouseX-window.innerWidth/2,0,0),e[1]=t.createVector(0,t.mouseY-window.innerHeight/2,0),e[3]=t.createVector(0,t.mouseY-window.innerHeight/2,0),t.beginShape(t.TRIANGLE_STRIP);for(let r=0;r<e.length;r++){const n=e[r];t.vertex(n.x,n.y,n.z)}t.endShape(),t.fill(255),t.textSize(30),t.textAlign(t.CENTER,t.CENTER),t.text("Nao Kokubo",0,0)}}}};const x=(0,f.Z)(O,[["render",b]]);var j=x,S={name:"MyAbout"};const _=S;var P=_,V={name:"MyProjects"};const T=V;var W=T;const A=[{path:"/",component:j},{path:"/About",component:P},{path:"/projects",component:W}],E=(0,m.p7)({history:(0,m.PO)(),routes:A});var I=E;(0,r.ri)(v).use(I).mount("#app")},70:function(t,e,n){t.exports=n.p+"fonts/BASKVILL.1846f847.TTF"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var c=e[r]={exports:{}};return t[r](c,c.exports,n),c.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,c){if(!r){var i=1/0;for(f=0;f<t.length;f++){r=t[f][0],o=t[f][1],c=t[f][2];for(var a=!0,u=0;u<r.length;u++)(!1&c||i>=c)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(a=!1,c<i&&(i=c));if(a){t.splice(f--,1);var s=o();void 0!==s&&(e=s)}}return e}c=c||0;for(var f=t.length;f>0&&t[f-1][2]>c;f--)t[f]=t[f-1];t[f]=[r,o,c]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p=""}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,c,i=r[0],a=r[1],u=r[2],s=0;if(i.some((function(e){return 0!==t[e]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(u)var f=u(n)}for(e&&e(r);s<i.length;s++)c=i[s],n.o(t,c)&&t[c]&&t[c][0](),t[c]=0;return n.O(f)},r=self["webpackChunktest_app"]=self["webpackChunktest_app"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(808)}));r=n.O(r)})();
//# sourceMappingURL=app.cf85cbb3.js.map