(this.webpackJsonpextension=this.webpackJsonpextension||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(7),r=n.n(o),c=(n(16),n(2)),p=n(1),l=p.a.button.withConfig({displayName:"Button",componentId:"sc-1y1oaaa-0"})(["display:flex;height:32px;width:","px;justify-content:center;align-items:center;background-color:",";color:white;border:none;border-radius:4px;margin:4px 0;&:hover,&:active{background-color:",";cursor:pointer;}"],(function(e){return e.width}),(function(e){return e.primary?"#ee6352":"#3f97b9"}),(function(e){return e.primary?"#cc2a14":"#09688c"})),s=p.a.div.withConfig({displayName:"SessionBar__Wrapper",componentId:"uwqycf-0"})(["display:flex;align-items:center;justify-content:center;flex-wrap:wrap;padding:0 40px;"]),d=Object(p.a)(l).withConfig({displayName:"SessionBar__Minutes",componentId:"uwqycf-1"})(["width:36px;height:36px;font-size:12px;margin:4px;border-radius:50%;"]);var m=function(e){var t=e.onClick,n=e.disabled,a=e.primary;return i.a.createElement(i.a.Fragment,null,i.a.createElement(s,null,[.1,10,15,20,25].map((function(e){return i.a.createElement(d,{primary:a,onClick:function(){return t(e)},disabled:n},e)})),[30,40,50,60,90].map((function(e){return i.a.createElement(d,{primary:a,onClick:function(){return t(e)},disabled:n},e)}))))};p.a.div.withConfig({displayName:"Count__Container",componentId:"sc-1mgyrm1-0"})(["display:flex;justify-content:space-between;align-items:center;border:1px solid #ee6352;height:28px;min-width:40px;font-size:12px;padding:1px 0;border-radius:4px;"]),p.a.div.withConfig({displayName:"Count__DisplayCount",componentId:"sc-1mgyrm1-1"})(["display:flex;min-width:40px;align-items:center;justify-content:center;"]),Object(p.a)(l).withConfig({displayName:"Count__CountButton",componentId:"sc-1mgyrm1-2"})([""]);var u=p.a.div.withConfig({displayName:"App__Container",componentId:"sc-72arqp-0"})(["width:350px;height:350px;display:flex;flex-direction:column;justify-content:space-between;align-items:center;padding:8px;"]),f=p.a.div.withConfig({displayName:"App__TextWrapper",componentId:"sc-72arqp-1"})(["display:flex;height:32px;width:300px;justify-content:center;align-items:center;font-size:12px;border:solid 0.5px #999999;color:#3b3b3b;border-radius:4px;margin:4px 0;"]),h=p.a.div.withConfig({displayName:"App__FlexWrapper",componentId:"sc-72arqp-2"})(["display:flex;height:32px;width:300px;font-size:12px;justify-content:center;align-items:center;"]),g=Object(p.a)(l).attrs({primary:!0}).withConfig({displayName:"App__DeepWorkButton",componentId:"sc-72arqp-3"})(["flex:1;width:100%;margin:4px;"]),y=Object(p.a)(l).withConfig({displayName:"App__BreakButton",componentId:"sc-72arqp-4"})(["flex:1;width:100%;background-color:#3f97b9;&:hover,&:active{background-color:#09688c;cursor:pointer;}"]),x=p.a.div.withConfig({displayName:"App__Timer",componentId:"sc-72arqp-5"})(["display:flex;justify-content:center;align-items:center;width:112px;height:112px;border-radius:50%;background-color:",";color:white;margin:4px 0;font-size:20px;"],(function(e){return e.primary?"#ee6352":"#3f97b9"})),b=p.a.img.attrs({src:"https://img.icons8.com/emoji/48/000000/cupcake-emoji.png"}).withConfig({displayName:"App__PartyImage",componentId:"sc-72arqp-6"})(["height:20px;width:20px;padding-left:2px;"]);var w=function(){var e,t=Object(a.useState)(25),n=Object(c.a)(t,2),o=n[0],r=n[1],p=Object(a.useState)(0),s=Object(c.a)(p,2),d=s[0],w=s[1],j=Object(a.useState)(!1),v=Object(c.a)(j,2),C=v[0],_=v[1],k=Object(a.useState)(0),E=Object(c.a)(k,2),O=E[0],I=E[1],N=Object(a.useState)(0),S=Object(c.a)(N,2),B=S[0],q=S[1],A=Object(a.useState)(!0),W=Object(c.a)(A,2),T=W[0],z=W[1];Object(a.useEffect)((function(){var e=setTimeout((function(){o>0&&w(d-1)}),1e3);return 0===d?(clearTimeout(e),void(C&&(window.alert("hi"),_(!1),T&&G(o)))):function(){return clearTimeout(e)}}),[d,o,C]);var M=Math.floor(d/3600),F=Math.floor(d/60-60*M),D=Math.floor(d-60*F-3600*M),P=M<10?"0".concat(M):M,J=F<10?"0".concat(F):F,$=D<10?"0".concat(D):D;e="".concat(P,":").concat(J,":").concat($);var G=function(e){q(B+e),I(O+1)};return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,null,i.a.createElement(h,null,i.a.createElement(g,{primary:!0,onClick:function(){return z(!0)}},"Deep Work"),i.a.createElement(y,{onClick:function(){return z(!1)}},"Break")),i.a.createElement(m,{primary:T,onClick:function(e){r(e)},disabled:C}),i.a.createElement(x,{primary:T},C?e:o),i.a.createElement("div",null,!C&&i.a.createElement(l,{primary:T,onClick:function(){var e=60*Number(o);w(e),_(!0)},width:300},"Start Pomodoro"),C&&i.a.createElement(l,{primary:T,onClick:function(){w(0),_(!1),T&&G(o-d/60)},width:300},"Stop Pomodoro"),T?i.a.createElement(f,null,"Today you have done: ",O," sessions,"," ",B.toFixed(1)," minutes"):i.a.createElement(f,null,"Enjoy your break!",i.a.createElement(b,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);