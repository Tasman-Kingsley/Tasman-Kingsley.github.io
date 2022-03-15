import{S as Q,i as R,s as U,a as z,e as p,b,c as G,d as V,f as J,g as m,t as P,h as $,j as i,l as B,k as T,m as D,n as W,o as F,r as Z,p as tt,q as X,u as et}from"./vendor.d09c8f26.js";const it=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const u of e.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}};it();function Y(l){let n,r,o,t;return{c(){n=p("div"),n.innerHTML=`<span class="nav-btn svelte-2qcojt">Home</span> 
      <span class="nav-btn svelte-2qcojt">Code portfolio</span> 
      <span class="nav-btn svelte-2qcojt">Design portfolio</span> 
      <span class="nav-btn svelte-2qcojt">Music</span> 
      <span class="nav-btn svelte-2qcojt">About</span>`,b(n,"class","nav svelte-2qcojt")},m(e,u){G(e,n,u),t=!0},i(e){t||(z(()=>{o&&o.end(1),r=tt(n,X,{x:400,duration:800}),r.start()}),t=!0)},o(e){r&&r.invalidate(),o=V(n,X,{x:400,duration:800}),t=!1},d(e){e&&J(n),e&&o&&o.end()}}}function nt(l){let n=!1,r=()=>{n=!1},o,t,e,u,k,d,g=l[1]?"\u2715":"\u2630",_,x,a,q,A,y,C,M,L,H,O,S,h,E,j,I,w,f,N,K;z(l[3]);let s=l[1]&&Y();return{c(){t=p("div"),s&&s.c(),e=m(),u=p("div"),u.innerHTML='<span class="title svelte-2qcojt">Tasman Kingsley</span>',k=m(),d=p("span"),_=P(g),x=m(),a=p("div"),q=p("p"),q.textContent=`Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Cupiditate, temporibus ratione deleniti impedit voluptatum 
      incidunt totam nostrum maxime! Nobis nesciunt temporibus nulla, 
      pariatur aliquid velit. Odit nesciunt quam ipsum magni?`,A=m(),y=p("span"),C=P(l[0]),M=m(),L=p("p"),L.textContent=`Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Cupiditate, temporibus ratione deleniti impedit voluptatum 
      incidunt totam nostrum maxime! Nobis nesciunt temporibus nulla, 
      pariatur aliquid velit. Odit nesciunt quam ipsum magni?`,H=m(),O=p("p"),O.textContent=`Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Cupiditate, temporibus ratione deleniti impedit voluptatum 
      incidunt totam nostrum maxime! Nobis nesciunt temporibus nulla, 
      pariatur aliquid velit. Odit nesciunt quam ipsum magni?`,S=m(),h=p("p"),h.textContent=`Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Cupiditate, temporibus ratione deleniti impedit voluptatum 
      incidunt totam nostrum maxime! Nobis nesciunt temporibus nulla, 
      pariatur aliquid velit. Odit nesciunt quam ipsum magni?`,E=m(),j=p("p"),j.textContent=`Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Cupiditate, temporibus ratione deleniti impedit voluptatum 
      incidunt totam nostrum maxime! Nobis nesciunt temporibus nulla, 
      pariatur aliquid velit. Odit nesciunt quam ipsum magni?`,I=m(),w=p("p"),w.textContent=`Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Cupiditate, temporibus ratione deleniti impedit voluptatum 
      incidunt totam nostrum maxime! Nobis nesciunt temporibus nulla, 
      pariatur aliquid velit. Odit nesciunt quam ipsum magni?`,b(u,"class","header svelte-2qcojt"),b(d,"class","burg svelte-2qcojt"),$(d,"color",l[0]>14.66&&!l[1]?"#fff":"#1e1f29"),b(a,"class","content svelte-2qcojt")},m(c,v){G(c,t,v),s&&s.m(t,null),i(t,e),i(t,u),i(t,k),i(t,d),i(d,_),i(t,x),i(t,a),i(a,q),i(a,A),i(a,y),i(y,C),i(a,M),i(a,L),i(a,H),i(a,O),i(a,S),i(a,h),i(a,E),i(a,j),i(a,I),i(a,w),f=!0,N||(K=[B(window,"scroll",()=>{n=!0,clearTimeout(o),o=setTimeout(r,100),l[3]()}),B(d,"click",l[2])],N=!0)},p(c,[v]){v&1&&!n&&(n=!0,clearTimeout(o),scrollTo(window.pageXOffset,c[0]),o=setTimeout(r,100)),c[1]?s?v&2&&T(s,1):(s=Y(),s.c(),T(s,1),s.m(t,e)):s&&(et(),D(s,1,1,()=>{s=null}),W()),(!f||v&2)&&g!==(g=c[1]?"\u2715":"\u2630")&&F(_,g),(!f||v&3)&&$(d,"color",c[0]>14.66&&!c[1]?"#fff":"#1e1f29"),(!f||v&1)&&F(C,c[0])},i(c){f||(T(s),f=!0)},o(c){D(s),f=!1},d(c){c&&J(t),s&&s.d(),N=!1,Z(K)}}}function st(l,n,r){let o,t=!1;function e(){r(1,t=!t)}function u(){r(0,o=window.pageYOffset)}return[o,t,e,u]}class ot extends Q{constructor(n){super();R(this,n,st,nt,U,{})}}new ot({target:document.getElementById("app")});
