import{S as C,i as P,s as S,e as p,a as u,b as G,n as y,c as W,d as N,f as q,g as O,h as D,j as M,k as c,l as H,m as se,r as te,t as X,o as k,p as z,q as R,u as V,v as ie,w as Z,x as K,y as Y,z as I}from"./vendor.80efd210.js";const ae=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function s(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function t(i){if(i.ep)return;i.ep=!0;const l=s(i);fetch(i.href,l)}};ae();function re(a){let e,s;return{c(){e=p("div"),e.innerHTML=`<p>Hello, Tasman here. This is my portfolio page.</p> 
    <p>Feel free to potter about and peruse my projects if you feel like it \u{1F601}</p> 

    
    <iframe src="https://tasmankingsley.github.io/cube-three/" width="400" height="400" class="svelte-8k15xl"></iframe>`,u(e,"class","svelte-8k15xl")},m(t,i){G(t,e,i)},p:y,i(t){s||W(()=>{s=N(e,q,{x:-400,duration:500}),s.start()})},o:y,d(t){t&&O(e)}}}class ne extends C{constructor(e){super();P(this,e,null,re,S,{})}}function le(a){let e,s;return{c(){e=p("div"),e.innerHTML=`<iframe src="https://pods.netlify.app/" width="380" height="700" class="svelte-uz1jgf"></iframe> 

    <div class="grid-content svelte-uz1jgf"><h2>Podcast catcher webapp</h2> 
        <span><a href="https://pods.netlify.app/">Web link</a></span><br/> 
        <span><a href="https://github.com/tasmankingsley/podcast-app">Github repo</a></span> 
        <h3>Description</h3> 
        <p>This is my version of a podcast rss feed catcher. This app will allow you to 
            either manually add rss feeds, or search for a podcast feed (via the itunes api)
            and add podcasts that way.
            Added podcast shows will then be displayed on the home tab, you can then 
            navigate through to the show episodes, view the episode notes, and play episodes.</p> 
        <p>The app features a player which will continue to play an episode even while 
            browsing through the app or minimising the web browser.
            The app will remember your added shows when you return to the app via browser
            local storage.</p> 
        

        <h3>Technology stack</h3> 
        <p>This app is built with the svelte framework, netlify functions, itunes search api, 
            javascript, css, and html.</p><br/></div> 

    <iframe src="https://tasmankingsley.github.io/kana-kuizu/" width="380" height="700" class="svelte-uz1jgf"></iframe> 

    <div class="grid-content svelte-uz1jgf"><h2>Kana quiz app</h2> 
        <span><a href="https://tasmankingsley.github.io/kana-kuizu/">Web link</a></span><br/> 
        <span><a href="https://github.com/tasmankingsley/kana-kuizu">Github repo</a></span> 
        <h3>Description</h3> 
        <p>A simple quiz app for learning the Japanese kana syllabaries: hiragana and katakana.
            The app features an option menu on the home page where you can choose whether to
            study hiragana, katakana, or both at the same time.</p> 
        <p>The quiz presents a randomized grid of the kana, and invites the user to remember
            the kana and input the corresponding romaji. The app will renforce learning and memory
            by validating the input and giving color feedback to the user for correct/incorrect answers.</p> 
        <p>Upon completing or ending the quiz, the user will get their score and feeback on the results screen.</p> 

        <h3>Technology stack</h3> 
        <p>This app is built with the vue framework, javascript, css, and html.</p><br/></div> 

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
        <p>This app is built with the svelte framework, javascript, css, and html.</p><br/></div> 

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
        <p>This app is built with the svelte framework, javascript, css, and html.</p><br/></div> 

    <iframe src="https://tasmankingsley.github.io/tetris/" width="380" height="700" class="svelte-uz1jgf"></iframe> 

    <div class="grid-content svelte-uz1jgf"><h2>Tetris clone</h2> 
        <span><a href="https://tasmankingsley.github.io/tetris/">Web link</a></span><br/> 
        <span><a href="https://github.com/tasmankingsley/tetris">Github repo</a></span> 
        <h3>Description</h3> 
        <p>A simple tetris clone. Arrow keys to move, rotate, and drop faster.</p> 

        <h3>Technology stack</h3> 
        <p>This app is built with javascript, css, and html.</p><br/></div> 

    <iframe src="https://tasmankingsley.github.io/new-tab/" width="380" height="700" class="svelte-uz1jgf"></iframe> 

    <div class="grid-content svelte-uz1jgf"><h2>New tab - customisable home page</h2> 
        <span><a href="https://tasmankingsley.github.io/new-tab/">Web link</a></span><br/> 
        <span><a href="https://github.com/tasmankingsley/new-tab">Github repo</a></span> 
        <h3>Description</h3> 
        <p>Designed to be set as a home page or new tab page, intended for displaying and 
            customising favourite links/bookmarks.</p> 

        <h3>Technology stack</h3> 
        <p>This app is built with the svelte framework, javascript, css, and html.</p><br/></div> 

    <iframe src="https://tasmankingsley.github.io/calc/" width="280" height="350" class="svelte-uz1jgf"></iframe> 

    <div class="grid-content svelte-uz1jgf"><h2>Simple calculator</h2> 
        <span><a href="https://tasmankingsley.github.io/calc/">Web link</a></span><br/> 
        <span><a href="https://github.com/tasmankingsley/calc">Github repo</a></span> 
        <h3>Description</h3> 
        <p>A very simple calculator app inspired by the Mac OS calculator.
            One of my first forays into web programming.</p> 

        <h3>Technology stack</h3> 
        <p>This app is built with javascript, css, and html.</p><br/></div> 

    <img src="/images/giddy-grocery.jpg" class="svelte-uz1jgf"/> 

    <div class="grid-content svelte-uz1jgf"><h2>Giddy Grocery - online grocery store</h2> 
        <span><a href="https://tasmankingsley.github.io/giddy-grocery/">Web link</a></span><br/> 
        <span><a href="https://github.com/tasmankingsley/giddy-grocery">Github repo</a></span> 
        <h3>Description</h3> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p> 

        <h3>Technology stack</h3> 
        <p>This website is built with javascript, jquery, php, sql, json, css, and html.</p><br/></div> 

    <img src="/images/car-rental.jpg" class="svelte-uz1jgf"/> 

    <div class="grid-content svelte-uz1jgf"><h2>Car rental fake business</h2> 
        <span><a href="https://tasmankingsley.github.io/psuedo-business/">Web link</a></span><br/> 
        <span><a href="https://github.com/tasmankingsley/psuedo-business">Github repo</a></span> 
        <h3>Description</h3> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p> 

        <h3>Technology stack</h3> 
        <p>This website is built with javascript, jquery, json, css, and html.</p><br/></div>`,u(e,"class","grid svelte-uz1jgf")},m(t,i){G(t,e,i)},p:y,i(t){s||W(()=>{s=N(e,q,{x:-400,duration:500}),s.start()})},o:y,d(t){t&&O(e)}}}class oe extends C{constructor(e){super();P(this,e,null,le,S,{})}}function ce(a){let e,s;return{c(){e=p("div"),e.innerHTML=`<img class="persona svelte-15sbje4" src="./images/persona-final.png" alt=""/> 
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
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p></div>`,u(e,"class","grid svelte-15sbje4")},m(t,i){G(t,e,i)},p:y,i(t){s||W(()=>{s=N(e,q,{x:-400,duration:500}),s.start()})},o:y,d(t){t&&O(e)}}}class pe extends C{constructor(e){super();P(this,e,null,ce,S,{})}}function ue(a){let e,s;return{c(){e=p("div"),e.innerHTML=`<img id="profile" src="./images/spotify-profile.jpg" alt="" class="svelte-11avz68"/> 
    <p class="svelte-11avz68">Artist - Tasman Kingsley</p> 
    <iframe src="https://open.spotify.com/embed/artist/761DscW9vfSQMmnKEJNHbH" frameborder="0" allowtransparency="true" allow="encrypted-media" class="svelte-11avz68"></iframe>`,u(e,"class","svelte-11avz68")},m(t,i){G(t,e,i)},p:y,i(t){s||W(()=>{s=N(e,q,{x:-400,duration:500}),s.start()})},o:y,d(t){t&&O(e)}}}class de extends C{constructor(e){super();P(this,e,null,ue,S,{})}}function he(a){let e,s;return{c(){e=p("div"),e.innerHTML=`<img src="./images/choco-profile.jpg" alt="" class="svelte-19x6bx6"/> 
    <span style="color: #b2c6d3; padding: 20px;" class="svelte-19x6bx6">About me</span> 
    <p class="svelte-19x6bx6">Hello fellow human! My name is Tasman. <br/><br/>
    I am an amateur Interaction Designer, Software Developer, and Music Producer.<br/><br/>
    Thanks for finding your way to my portfolio page. Be sure to poke around and look at my projects if you&#39;d like.<br/><br/>
    Also, check out my music if you find yourself curious, i appreciate the time and curiosity.<br/><br/>
    You can contact me at <a href="mailto: tasmankingsley@gmail.com" style="color: #d3c7b8;">tasmankingsley@gmail.com</a></p>`,u(e,"class","content-div svelte-19x6bx6")},m(t,i){G(t,e,i)},p:y,i(t){s||W(()=>{s=N(e,q,{x:-400,duration:500}),s.start()})},o:y,d(t){t&&O(e)}}}class me extends C{constructor(e){super();P(this,e,null,he,S,{})}}var fe="/assets/waves.e979ddb3.jpeg";const{window:B}=ie;function ee(a){let e,s,t,i,l,r,_,d,w,h,$,g,A;return{c(){e=p("div"),s=p("div"),s.innerHTML='<span class="btn-txt svelte-9d0usb">Home</span>',t=D(),i=p("div"),i.innerHTML='<span class="btn-txt svelte-9d0usb">Code projects</span>',l=D(),r=p("div"),r.innerHTML='<span class="btn-txt svelte-9d0usb">Design portfolio</span>',_=D(),d=p("div"),d.innerHTML='<span class="btn-txt svelte-9d0usb">About</span>',u(s,"class","nav-btn svelte-9d0usb"),u(i,"class","nav-btn svelte-9d0usb"),u(r,"class","nav-btn svelte-9d0usb"),u(d,"class","nav-btn svelte-9d0usb"),u(e,"class","nav svelte-9d0usb"),M(e,"background-image","url("+fe+")")},m(b,L){G(b,e,L),c(e,s),c(e,t),c(e,i),c(e,l),c(e,r),c(e,_),c(e,d),$=!0,g||(A=[H(s,"click",a[8]),H(i,"click",a[9]),H(r,"click",a[10]),H(d,"click",a[11])],g=!0)},p:y,i(b){$||(W(()=>{h&&h.end(1),w=N(e,q,{x:400,duration:500}),w.start()}),$=!0)},o(b){w&&w.invalidate(),h=se(e,q,{x:400,duration:500}),$=!1},d(b){b&&O(e),b&&h&&h.end(),g=!1,te(A)}}}function ge(a){let e,s;return e=new me({}),{c(){K(e.$$.fragment)},m(t,i){Y(e,t,i),s=!0},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){z(e.$$.fragment,t),s=!1},d(t){I(e,t)}}}function be(a){let e,s;return e=new de({}),{c(){K(e.$$.fragment)},m(t,i){Y(e,t,i),s=!0},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){z(e.$$.fragment,t),s=!1},d(t){I(e,t)}}}function ve(a){let e,s;return e=new pe({}),{c(){K(e.$$.fragment)},m(t,i){Y(e,t,i),s=!0},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){z(e.$$.fragment,t),s=!1},d(t){I(e,t)}}}function ye(a){let e,s;return e=new oe({}),{c(){K(e.$$.fragment)},m(t,i){Y(e,t,i),s=!0},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){z(e.$$.fragment,t),s=!1},d(t){I(e,t)}}}function ke(a){let e,s;return e=new ne({}),{c(){K(e.$$.fragment)},m(t,i){Y(e,t,i),s=!0},i(t){s||(k(e.$$.fragment,t),s=!0)},o(t){z(e.$$.fragment,t),s=!1},d(t){I(e,t)}}}function _e(a){let e=!1,s=()=>{e=!1},t,i,l,r,_,d,w,h,$,g,A=a[0][0].visible?"\u2715":"\u2630",b,L,T,m,f,j,E,F;W(a[7]);let o=a[0][0].visible&&ee(a);const U=[ke,ye,ve,be,ge],x=[];function Q(n,v){return n[0][1].visible?0:n[0][2].visible?1:n[0][3].visible?2:n[0][4].visible?3:n[0][5].visible?4:-1}return~(m=Q(a))&&(f=x[m]=U[m](a)),{c(){i=p("div"),o&&o.c(),l=D(),r=p("div"),_=p("span"),d=X(a[2]),w=D(),h=p("span"),h.textContent="\u262F",$=D(),g=p("span"),b=X(A),L=D(),T=p("div"),f&&f.c(),u(_,"class","title svelte-9d0usb"),u(h,"class","mode svelte-9d0usb"),u(h,"style",""),u(r,"class","header svelte-9d0usb"),M(r,"background-color",a[3]?"#191a22":"#eee"),M(r,"color",a[3]?"#eee":"#1e1f29"),u(g,"class","burg svelte-9d0usb"),M(g,"color",a[3]?"#fff":"#1e1f29"),u(T,"class","content svelte-9d0usb")},m(n,v){G(n,i,v),o&&o.m(i,null),c(i,l),c(i,r),c(r,_),c(_,d),c(r,w),c(r,h),c(i,$),c(i,g),c(g,b),c(i,L),c(i,T),~m&&x[m].m(T,null),j=!0,E||(F=[H(B,"scroll",()=>{e=!0,clearTimeout(t),t=setTimeout(s,100),a[7]()}),H(h,"click",a[6]),H(g,"click",a[4])],E=!0)},p(n,[v]){v&2&&!e&&(e=!0,clearTimeout(t),scrollTo(B.pageXOffset,n[1]),t=setTimeout(s,100)),n[0][0].visible?o?(o.p(n,v),v&1&&k(o,1)):(o=ee(n),o.c(),k(o,1),o.m(i,l)):o&&(Z(),z(o,1,1,()=>{o=null}),R()),(!j||v&4)&&V(d,n[2]),(!j||v&8)&&M(r,"background-color",n[3]?"#191a22":"#eee"),(!j||v&8)&&M(r,"color",n[3]?"#eee":"#1e1f29"),(!j||v&1)&&A!==(A=n[0][0].visible?"\u2715":"\u2630")&&V(b,A),(!j||v&8)&&M(g,"color",n[3]?"#fff":"#1e1f29");let J=m;m=Q(n),m!==J&&(f&&(Z(),z(x[J],1,1,()=>{x[J]=null}),R()),~m?(f=x[m],f||(f=x[m]=U[m](n),f.c()),k(f,1),f.m(T,null)):f=null)},i(n){j||(k(o),k(f),j=!0)},o(n){z(o),z(f),j=!1},d(n){n&&O(i),o&&o.d(),~m&&x[m].d(),E=!1,te(F)}}}function we(a,e,s){let t=[{name:"Nav",visible:!1},{name:"Tasman Kingsley",visible:!0},{name:"Code projects",visible:!1},{name:"Design portfolio",visible:!1},{name:"Music project",visible:!1},{name:"About",visible:!1}],i,l=t[1].name,r=!0;function _(){s(0,t[0].visible=!t[0].visible,t)}function d(L){for(let T=1;T<t.length-1;T++)s(0,t[T].visible=!1,t);s(0,t[L].visible=!0,t),s(2,l=t[L].name),s(0,t[0].visible=!t[0].visible,t)}function w(){s(3,r=!r),window.document.body.classList.toggle("light")}function h(){s(1,i=B.pageYOffset)}return[t,i,l,r,_,d,w,h,()=>d(1),()=>d(2),()=>d(3),()=>d(5)]}class Te extends C{constructor(e){super();P(this,e,we,_e,S,{})}}new Te({target:document.getElementById("app")});
