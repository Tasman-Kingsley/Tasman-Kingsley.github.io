import{S as Q,i as R,s as U,a as z,e as m,b,c as G,d as V,f as J,g as c,t as $,h as j,j as i,l as B,k,m as D,n as W,o as F,r as Z,p as tt,q as X,u as et}from"./vendor.d09c8f26.js";const it=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const u of e.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}};it();function Y(o){let n,r,a,t;return{c(){n=m("div"),n.innerHTML=`<span class="nav-btn svelte-th31f6">Home</span> 
      <span class="nav-btn svelte-th31f6">Code portfolio</span> 
      <span class="nav-btn svelte-th31f6">Design portfolio</span> 
      <span class="nav-btn svelte-th31f6">Music</span> 
      <span class="nav-btn svelte-th31f6">About</span>`,b(n,"class","nav svelte-th31f6")},m(e,u){G(e,n,u),t=!0},i(e){t||(z(()=>{a&&a.end(1),r=tt(n,X,{x:400,duration:800}),r.start()}),t=!0)},o(e){r&&r.invalidate(),a=V(n,X,{x:400,duration:800}),t=!1},d(e){e&&J(n),e&&a&&a.end()}}}function nt(o){let n=!1,r=()=>{n=!1},a,t,e,u,x,d,g=o[1]?"\u2715":"\u2630",_,A,l,h,M,q,y,H,C,S,L,E,O,I,w,K,N,f,T,P;z(o[3]);let s=o[1]&&Y();return{c(){t=m("div"),s&&s.c(),e=c(),u=m("div"),u.innerHTML='<span class="title svelte-th31f6">Tasman Kingsley</span>',x=c(),d=m("span"),_=$(g),A=c(),l=m("div"),h=m("p"),h.textContent=`Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Cupiditate, temporibus ratione deleniti impedit voluptatum 
      incidunt totam nostrum maxime! Nobis nesciunt temporibus nulla, 
      pariatur aliquid velit. Odit nesciunt quam ipsum magni?`,M=c(),q=m("span"),y=$(o[0]),H=c(),C=m("p"),C.textContent=`Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Cupiditate, temporibus ratione deleniti impedit voluptatum 
      incidunt totam nostrum maxime! Nobis nesciunt temporibus nulla, 
      pariatur aliquid velit. Odit nesciunt quam ipsum magni?`,S=c(),L=m("p"),L.textContent=`Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Cupiditate, temporibus ratione deleniti impedit voluptatum 
      incidunt totam nostrum maxime! Nobis nesciunt temporibus nulla, 
      pariatur aliquid velit. Odit nesciunt quam ipsum magni?`,E=c(),O=m("p"),O.textContent=`Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Cupiditate, temporibus ratione deleniti impedit voluptatum 
      incidunt totam nostrum maxime! Nobis nesciunt temporibus nulla, 
      pariatur aliquid velit. Odit nesciunt quam ipsum magni?`,I=c(),w=m("p"),w.textContent=`Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Cupiditate, temporibus ratione deleniti impedit voluptatum 
      incidunt totam nostrum maxime! Nobis nesciunt temporibus nulla, 
      pariatur aliquid velit. Odit nesciunt quam ipsum magni?`,K=c(),N=m("p"),N.textContent=`Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Cupiditate, temporibus ratione deleniti impedit voluptatum 
      incidunt totam nostrum maxime! Nobis nesciunt temporibus nulla, 
      pariatur aliquid velit. Odit nesciunt quam ipsum magni?`,b(u,"class","header svelte-th31f6"),b(d,"class","burg svelte-th31f6"),j(d,"color",o[0]>14.66&&!o[1]?"#fff":"#1e1f29"),b(l,"class","content svelte-th31f6")},m(p,v){G(p,t,v),s&&s.m(t,null),i(t,e),i(t,u),i(t,x),i(t,d),i(d,_),i(t,A),i(t,l),i(l,h),i(l,M),i(l,q),i(q,y),i(l,H),i(l,C),i(l,S),i(l,L),i(l,E),i(l,O),i(l,I),i(l,w),i(l,K),i(l,N),f=!0,T||(P=[B(window,"scroll",()=>{n=!0,clearTimeout(a),a=setTimeout(r,100),o[3]()}),B(d,"click",o[2])],T=!0)},p(p,[v]){v&1&&!n&&(n=!0,clearTimeout(a),scrollTo(window.pageXOffset,p[0]),a=setTimeout(r,100)),p[1]?s?v&2&&k(s,1):(s=Y(),s.c(),k(s,1),s.m(t,e)):s&&(et(),D(s,1,1,()=>{s=null}),W()),(!f||v&2)&&g!==(g=p[1]?"\u2715":"\u2630")&&F(_,g),(!f||v&3)&&j(d,"color",p[0]>14.66&&!p[1]?"#fff":"#1e1f29"),(!f||v&1)&&F(y,p[0])},i(p){f||(k(s),f=!0)},o(p){D(s),f=!1},d(p){p&&J(t),s&&s.d(),T=!1,Z(P)}}}function st(o,n,r){let a,t=!1;function e(){r(1,t=!t)}function u(){r(0,a=window.pageYOffset)}return[a,t,e,u]}class at extends Q{constructor(n){super();R(this,n,st,nt,U,{})}}new at({target:document.getElementById("app")});
