import{S as C,i as P,s as S,e as u,a as d,b as q,n as y,c as G,d as N,f as H,g as W,h as A,j as D,k as c,l as L,m as se,r as te,t as X,o as _,p as T,q as R,u as V,v as ie,w as Z,x as K,y as Y,z as I}from"./vendor.80efd210.js";const ae=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function s(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function t(i){if(i.ep)return;i.ep=!0;const l=s(i);fetch(i.href,l)}};ae();function ne(a){let e,s;return{c(){e=u("div"),e.innerHTML=`<p>Hello, Tasman here. This is my portfolio page.</p> 
    <p>Feel free to potter about and peruse my projects if you feel like it \u{1F601}</p> 

    
    <iframe src="https://tasmankingsley.github.io/cube-three/" width="400" height="400" class="svelte-1cfbmpn"></iframe>`,d(e,"class","svelte-1cfbmpn")},m(t,i){q(t,e,i)},p:y,i(t){s||G(()=>{s=N(e,H,{x:-400,duration:500}),s.start()})},o:y,d(t){t&&W(e)}}}class re extends C{constructor(e){super();P(this,e,null,ne,S,{})}}function le(a){let e,s;return{c(){e=u("div"),e.innerHTML=`<iframe src="https://pods.netlify.app/" width="380" height="700" class="svelte-uz1jgf"></iframe> 

    <div class="grid-content svelte-uz1jgf"><h2>Podcast catcher webapp</h2> 
        <span><a href="https://pods.netlify.app/">Web link</a></span><br/> 
        <span><a href="https://github.com/tasmankingsley/podcast-app">Github repo</a></span> 
        <h3>Description</h3> 
        <p>This is my version of a podcast rss feed catcher. This app will allow you to 
            either manually add rss feeds, or search for a podcast feed (via the itunes api)
            and add podcasts that way.
            The added podcast shows will then be displayed on the home tab, you can then
            navigate through the show episodes, view the episode notes, and play the episodes.</p> 
        <p>The app features a player which will continue to play an episode even while 
            browsing through the app or minimising the web browser.
            The app also remembers your added shows when you return to the app via browser
            local storage.</p> 
        

        <h3>Technology stack</h3> 
        <p>This app is build with the svelte framework, netlify functions, itunes search api, 
            javascript, css, and html.</p><br/></div> 

    <iframe src="https://tasmankingsley.github.io/kana-kuizu/" width="380" height="700" class="svelte-uz1jgf"></iframe> 

    <div class="grid-content svelte-uz1jgf"><h2>Kana quiz app</h2> 
        <span><a href="https://tasmankingsley.github.io/kana-kuizu/">Web link</a></span><br/> 
        <span><a href="https://github.com/tasmankingsley/kana-kuizu">Github repo</a></span> 
        <h3>Description</h3> 
        <p>A simple quiz app for learning the Japanese kana syllabaries: hiragana and katakana.
            The app features an option menu on the home page where you can choose whether to
            study hiragana, katakana, or both at the same time.</p> 
        <p>The quiz presents a randomized grid of the kana and invites the user to remember
            the kana and input the corresponding romaji. The app will renforce learning and memory
            by validating the input and giving color feedback to the user for correct/incorrect answers.</p> 

        <h3>Technology stack</h3> 
        <p>This app is build with the vue framework, javascript, css, and html.</p><br/></div> 

    <iframe src="https://tasmankingsley.github.io/todo/" width="380" height="700" class="svelte-uz1jgf"></iframe> 

    <div class="grid-content svelte-uz1jgf"><h2>Minimal to-do list</h2> 
        <span><a href="https://tasmankingsley.github.io/todo/">Web link</a></span><br/> 
        <span><a href="https://github.com/tasmankingsley/todo">Github repo</a></span> 
        <h3>Description</h3> 
        <p>A minimal to-do list app. The user can input to-do items and check off the items
            when completed. The app features the ability to edit and remove the list items.
            The user&#39;s list will also be saved in browser local storage for the ability to
            return to list after closinng the page.</p> 

        <h3>Technology stack</h3> 
        <p>This app is build with the svelte framework, javascript, css, and html.</p><br/></div> 

    <iframe src="https://tasmankingsley.github.io/consistency-graph/" width="380" height="700" class="svelte-uz1jgf"></iframe> 

    <div class="grid-content svelte-uz1jgf"><h2>Github-style consistency graph</h2> 
        <span><a href="https://tasmankingsley.github.io/consistency-graph/">Web link</a></span><br/> 
        <span><a href="https://github.com/tasmankingsley/consistency-graph">Github repo</a></span> 
        <h3>Description</h3> 
        <p>A daily visual progress tracker inspired by the github contribution graph.
            The app will allow the user to check the day off as done (for tracking any goal).
            Progress will be saved in browser storage, and the graph will keep track of time and
            advance forward each day.</p> 
        <p>The user can initialize the graph, manually advance the day (for testing), and 
            add or delete graphs.</p> 

        <h3>Technology stack</h3> 
        <p>This app is build with the svelte framework, javascript, css, and html.</p><br/></div> 

    <iframe src="https://tasmankingsley.github.io/tetris/" width="380" height="700" class="svelte-uz1jgf"></iframe> 

    <div class="grid-content svelte-uz1jgf"><h2>Tetris clone</h2> 
        <span><a href="https://tasmankingsley.github.io/tetris/">Web link</a></span><br/> 
        <span><a href="https://github.com/tasmankingsley/tetris">Github repo</a></span> 
        <h3>Description</h3> 
        <p>A simple tetris clone. Arrow keys to move, rotate, and drop faster.</p> 

        <h3>Technology stack</h3> 
        <p>This app is build with javascript, css, and html.</p><br/></div> 

    <iframe src="https://tasmankingsley.github.io/new-tab/" width="380" height="700" class="svelte-uz1jgf"></iframe> 

    <div class="grid-content svelte-uz1jgf"><h2>New tab - customisable home page</h2> 
        <span><a href="https://tasmankingsley.github.io/new-tab/">Web link</a></span><br/> 
        <span><a href="https://github.com/tasmankingsley/new-tab">Github repo</a></span> 
        <h3>Description</h3> 
        <p>Designed to be set as a home page or new tab page, intended for displaying and 
            customising favourite links/bookmarks.</p> 

        <h3>Technology stack</h3> 
        <p>This app is build with the svelte framework, javascript, css, and html.</p><br/></div> 

    <iframe src="https://tasmankingsley.github.io/calc/" width="280" height="350" class="svelte-uz1jgf"></iframe> 

    <div class="grid-content svelte-uz1jgf"><h2>Simple calculator</h2> 
        <span><a href="https://tasmankingsley.github.io/calc/">Web link</a></span><br/> 
        <span><a href="https://github.com/tasmankingsley/calc">Github repo</a></span> 
        <h3>Description</h3> 
        <p>A very simple calculator app inspired by the Mac OS calculator.
            One of my first forays into web programming.</p> 

        <h3>Technology stack</h3> 
        <p>This app is build with javascript, css, and html.</p><br/></div> 

    <img src="/images/giddy-grocery.jpg" class="svelte-uz1jgf"/> 

    <div class="grid-content svelte-uz1jgf"><h2>Giddy Grocery - online grocery store</h2> 
        <span><a href="https://tasmankingsley.github.io/giddy-grocery/">Web link</a></span><br/> 
        <span><a href="https://github.com/tasmankingsley/giddy-grocery">Github repo</a></span> 
        <h3>Description</h3> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p> 

        <h3>Technology stack</h3> 
        <p>This website is build with javascript, jquery, php, sql, json, css, and html.</p><br/></div> 

    <img src="/images/car-rental.jpg" class="svelte-uz1jgf"/> 

    <div class="grid-content svelte-uz1jgf"><h2>Car rental fake business</h2> 
        <span><a href="https://tasmankingsley.github.io/psuedo-business/">Web link</a></span><br/> 
        <span><a href="https://github.com/tasmankingsley/psuedo-business">Github repo</a></span> 
        <h3>Description</h3> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p> 

        <h3>Technology stack</h3> 
        <p>This website is build with javascript, jquery, json, css, and html.</p><br/></div>`,d(e,"class","grid svelte-uz1jgf")},m(t,i){q(t,e,i)},p:y,i(t){s||G(()=>{s=N(e,H,{x:-400,duration:500}),s.start()})},o:y,d(t){t&&W(e)}}}class oe extends C{constructor(e){super();P(this,e,null,le,S,{})}}function ce(a){let e,s;return{c(){e=u("div"),e.innerHTML=`<img class="persona svelte-15sbje4" src="./images/persona-final.png" alt=""/> 
    <div class="grid-content"><h2>George persona</h2> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p></div> 

    <img class="persona svelte-15sbje4" src="./images/Yuna-Persona.png" alt=""/> 
    <div class="grid-content"><h2>Yuna persona</h2> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p></div> 

    <iframe src="https://www.youtube.com/embed/yrPmsU8TLg0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" class="svelte-15sbje4"></iframe> 
    <div class="grid-content"><h2>Jamingle prototype app flow</h2> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p></div>`,d(e,"class","grid svelte-15sbje4")},m(t,i){q(t,e,i)},p:y,i(t){s||G(()=>{s=N(e,H,{x:-400,duration:500}),s.start()})},o:y,d(t){t&&W(e)}}}class pe extends C{constructor(e){super();P(this,e,null,ce,S,{})}}function ue(a){let e,s;return{c(){e=u("div"),e.innerHTML=`<img id="profile" src="./images/spotify-profile.jpg" alt="" class="svelte-11avz68"/> 
    <p class="svelte-11avz68">Artist - Tasman Kingsley</p> 
    <iframe src="https://open.spotify.com/embed/artist/761DscW9vfSQMmnKEJNHbH" frameborder="0" allowtransparency="true" allow="encrypted-media" class="svelte-11avz68"></iframe>`,d(e,"class","svelte-11avz68")},m(t,i){q(t,e,i)},p:y,i(t){s||G(()=>{s=N(e,H,{x:-400,duration:500}),s.start()})},o:y,d(t){t&&W(e)}}}class de extends C{constructor(e){super();P(this,e,null,ue,S,{})}}function he(a){let e,s;return{c(){e=u("div"),e.innerHTML=`<img src="./images/choco-profile.jpg" alt="" class="svelte-19x6bx6"/> 
    <span style="color: #b2c6d3; padding: 20px;" class="svelte-19x6bx6">About me</span> 
    <p class="svelte-19x6bx6">Hello fellow human! My name is Tasman. <br/><br/>
    I am an amateur Interaction Designer, Software Developer, and Music Producer.<br/><br/>
    Thanks for finding your way to my portfolio page. Be sure to poke around and look at my projects if you&#39;d like.<br/><br/>
    Also, check out my music if you find yourself curious, i appreciate the time and curiosity.<br/><br/>
    You can contact me at <a href="mailto: tasmankingsley@gmail.com" style="color: #d3c7b8;">tasmankingsley@gmail.com</a></p>`,d(e,"class","content-div svelte-19x6bx6")},m(t,i){q(t,e,i)},p:y,i(t){s||G(()=>{s=N(e,H,{x:-400,duration:500}),s.start()})},o:y,d(t){t&&W(e)}}}class me extends C{constructor(e){super();P(this,e,null,he,S,{})}}var fe="/assets/waves.e979ddb3.jpeg";const{window:B}=ie;function ee(a){let e,s,t,i,l,n,w,h,M,f,z,g,k,$,O;return{c(){e=u("div"),s=u("div"),s.innerHTML='<span class="btn-txt svelte-1jnle3t">Home</span>',t=A(),i=u("div"),i.innerHTML='<span class="btn-txt svelte-1jnle3t">Code projects</span>',l=A(),n=u("div"),n.innerHTML='<span class="btn-txt svelte-1jnle3t">Design portfolio</span>',w=A(),h=u("div"),h.innerHTML='<span class="btn-txt svelte-1jnle3t">Music</span>',M=A(),f=u("div"),f.innerHTML='<span class="btn-txt svelte-1jnle3t">About</span>',d(s,"class","nav-btn svelte-1jnle3t"),d(i,"class","nav-btn svelte-1jnle3t"),d(n,"class","nav-btn svelte-1jnle3t"),d(h,"class","nav-btn svelte-1jnle3t"),d(f,"class","nav-btn svelte-1jnle3t"),d(e,"class","nav svelte-1jnle3t"),D(e,"background-image","url("+fe+")")},m(m,o){q(m,e,o),c(e,s),c(e,t),c(e,i),c(e,l),c(e,n),c(e,w),c(e,h),c(e,M),c(e,f),k=!0,$||(O=[L(s,"click",a[8]),L(i,"click",a[9]),L(n,"click",a[10]),L(h,"click",a[11]),L(f,"click",a[12])],$=!0)},p:y,i(m){k||(G(()=>{g&&g.end(1),z=N(e,H,{x:400,duration:500}),z.start()}),k=!0)},o(m){z&&z.invalidate(),g=se(e,H,{x:400,duration:500}),k=!1},d(m){m&&W(e),m&&g&&g.end(),$=!1,te(O)}}}function ge(a){let e,s;return e=new me({}),{c(){K(e.$$.fragment)},m(t,i){Y(e,t,i),s=!0},i(t){s||(_(e.$$.fragment,t),s=!0)},o(t){T(e.$$.fragment,t),s=!1},d(t){I(e,t)}}}function ve(a){let e,s;return e=new de({}),{c(){K(e.$$.fragment)},m(t,i){Y(e,t,i),s=!0},i(t){s||(_(e.$$.fragment,t),s=!0)},o(t){T(e.$$.fragment,t),s=!1},d(t){I(e,t)}}}function be(a){let e,s;return e=new pe({}),{c(){K(e.$$.fragment)},m(t,i){Y(e,t,i),s=!0},i(t){s||(_(e.$$.fragment,t),s=!0)},o(t){T(e.$$.fragment,t),s=!1},d(t){I(e,t)}}}function ye(a){let e,s;return e=new oe({}),{c(){K(e.$$.fragment)},m(t,i){Y(e,t,i),s=!0},i(t){s||(_(e.$$.fragment,t),s=!0)},o(t){T(e.$$.fragment,t),s=!1},d(t){I(e,t)}}}function ke(a){let e,s;return e=new re({}),{c(){K(e.$$.fragment)},m(t,i){Y(e,t,i),s=!0},i(t){s||(_(e.$$.fragment,t),s=!0)},o(t){T(e.$$.fragment,t),s=!1},d(t){I(e,t)}}}function _e(a){let e=!1,s=()=>{e=!1},t,i,l,n,w,h,M,f,z,g,k=a[0][0].visible?"\u2715":"\u2630",$,O,m,o,v,j,E,F;G(a[7]);let p=a[0][0].visible&&ee(a);const Q=[ke,ye,be,ve,ge],x=[];function U(r,b){return r[0][1].visible?0:r[0][2].visible?1:r[0][3].visible?2:r[0][4].visible?3:r[0][5].visible?4:-1}return~(o=U(a))&&(v=x[o]=Q[o](a)),{c(){i=u("div"),p&&p.c(),l=A(),n=u("div"),w=u("span"),h=X(a[2]),M=A(),f=u("span"),f.textContent="\u262F",z=A(),g=u("span"),$=X(k),O=A(),m=u("div"),v&&v.c(),d(w,"class","title svelte-1jnle3t"),d(f,"class","mode svelte-1jnle3t"),d(f,"style",""),d(n,"class","header svelte-1jnle3t"),D(n,"background-color",a[3]?"#191a22":"#eee"),D(n,"color",a[3]?"#eee":"#1e1f29"),d(g,"class","burg svelte-1jnle3t"),D(g,"color",a[3]?"#fff":"#1e1f29"),d(m,"class","content svelte-1jnle3t")},m(r,b){q(r,i,b),p&&p.m(i,null),c(i,l),c(i,n),c(n,w),c(w,h),c(n,M),c(n,f),c(i,z),c(i,g),c(g,$),c(i,O),c(i,m),~o&&x[o].m(m,null),j=!0,E||(F=[L(B,"scroll",()=>{e=!0,clearTimeout(t),t=setTimeout(s,100),a[7]()}),L(f,"click",a[6]),L(g,"click",a[4])],E=!0)},p(r,[b]){b&2&&!e&&(e=!0,clearTimeout(t),scrollTo(B.pageXOffset,r[1]),t=setTimeout(s,100)),r[0][0].visible?p?(p.p(r,b),b&1&&_(p,1)):(p=ee(r),p.c(),_(p,1),p.m(i,l)):p&&(Z(),T(p,1,1,()=>{p=null}),R()),(!j||b&4)&&V(h,r[2]),(!j||b&8)&&D(n,"background-color",r[3]?"#191a22":"#eee"),(!j||b&8)&&D(n,"color",r[3]?"#eee":"#1e1f29"),(!j||b&1)&&k!==(k=r[0][0].visible?"\u2715":"\u2630")&&V($,k),(!j||b&8)&&D(g,"color",r[3]?"#fff":"#1e1f29");let J=o;o=U(r),o!==J&&(v&&(Z(),T(x[J],1,1,()=>{x[J]=null}),R()),~o?(v=x[o],v||(v=x[o]=Q[o](r),v.c()),_(v,1),v.m(m,null)):v=null)},i(r){j||(_(p),_(v),j=!0)},o(r){T(p),T(v),j=!1},d(r){r&&W(i),p&&p.d(),~o&&x[o].d(),E=!1,te(F)}}}function we(a,e,s){let t=[{name:"Nav",visible:!1},{name:"Tasman Kingsley",visible:!0},{name:"Code projects",visible:!1},{name:"Design portfolio",visible:!1},{name:"Music project",visible:!1},{name:"About",visible:!1}],i,l=t[1].name,n=!0;function w(){s(0,t[0].visible=!t[0].visible,t)}function h(m){for(let o=1;o<t.length-1;o++)s(0,t[o].visible=!1,t);s(0,t[m].visible=!0,t),s(2,l=t[m].name),s(0,t[0].visible=!t[0].visible,t)}function M(){s(3,n=!n),window.document.body.classList.toggle("dark")}function f(){s(1,i=B.pageYOffset)}return[t,i,l,n,w,h,M,f,()=>h(1),()=>h(2),()=>h(3),()=>h(4),()=>h(5)]}class je extends C{constructor(e){super();P(this,e,we,_e,S,{})}}new je({target:document.getElementById("app")});
