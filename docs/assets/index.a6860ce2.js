import{w as re,S,i as N,s as Y,e as o,a as $,b as c,c as q,d as P,f as r,l as j,n as z,g as O,h as I,j as G,k as C,r as R,m as U,o as M,p as oe,t as te,q as A,u as H,v as se,x as ie,y as ce,z as pe,A as ae,B as E,C as F,D as J}from"./vendor.7384cd90.js";const de=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function i(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(s){if(s.ep)return;s.ep=!0;const n=i(s);fetch(s.href,n)}};de();let D=re([{name:"Nav",visible:!1},{name:"Tasman Kingsley",visible:!0},{name:"Web app projects",visible:!1},{name:"Website projects",visible:!1},{name:"Design portfolio",visible:!1},{name:"Music project",visible:!1},{name:"About",visible:!1}]),K=re("");var ue="/assets/apps.2489986f.jpg",he="/assets/giddy-grocery.e94d6cec.jpg",me="/assets/persona-collage.c8b1d3c9.jpg",le="/assets/waves.e979ddb3.jpeg";function fe(a){let e,i,t,s,n,l,k,p,w,d,f,g,T,y,x,h,u,b;return{c(){e=o("div"),i=o("div"),i.innerHTML=`<p class="svelte-121f6do">Hello, Tasman here. This is my portfolio page.</p> 
        <p class="svelte-121f6do">Feel free to potter about and peruse my projects if you feel like it \u{1F601}</p>`,t=$(),s=o("div"),n=o("div"),l=o("div"),l.innerHTML='<span class="svelte-121f6do">Web apps</span>',k=$(),p=o("div"),w=o("div"),w.innerHTML='<span class="svelte-121f6do">Websites</span>',d=$(),f=o("div"),g=o("div"),g.innerHTML='<span class="svelte-121f6do">Design porfolio</span>',T=$(),y=o("div"),x=o("div"),x.innerHTML='<span class="svelte-121f6do">About</span>',c(l,"class","card-txt svelte-121f6do"),c(n,"class","img svelte-121f6do"),q(n,"background-image","url("+ue+")"),c(w,"class","card-txt svelte-121f6do"),c(p,"class","img svelte-121f6do"),q(p,"background-image","url("+he+")"),c(g,"class","card-txt svelte-121f6do"),c(f,"class","img svelte-121f6do"),q(f,"background-image","url("+me+")"),c(x,"class","card-txt svelte-121f6do"),c(y,"class","img svelte-121f6do"),q(y,"background-image","url("+le+")"),c(s,"class","inner-grid svelte-121f6do"),c(e,"class","outer-grid svelte-121f6do")},m(_,B){P(_,e,B),r(e,i),r(e,t),r(e,s),r(s,n),r(n,l),r(s,k),r(s,p),r(p,w),r(s,d),r(s,f),r(f,g),r(s,T),r(s,y),r(y,x),u||(b=[j(n,"click",a[1]),j(p,"click",a[2]),j(f,"click",a[3]),j(y,"click",a[4])],u=!0)},p:z,i(_){h||O(()=>{h=I(e,G,{x:-400,duration:500}),h.start()})},o:z,d(_){_&&C(e),u=!1,R(b)}}}function ge(a,e,i){let t,s;U(a,D,d=>i(5,t=d)),U(a,K,d=>i(6,s=d)),window.scrollTo(0,0);function n(d){for(let f=1;f<t.length-1;f++)M(D,t[f].visible=!1,t);M(D,t[d].visible=!0,t),M(K,s=t[d].name,s)}return[n,()=>n(2),()=>n(3),()=>n(4),()=>n(6)]}class ve extends S{constructor(e){super();N(this,e,ge,fe,Y,{})}}function be(a){let e,i;return{c(){e=o("div"),e.innerHTML=`<iframe src="https://pods.netlify.app/" width="380" height="700" class="svelte-uz1jgf"></iframe> 

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
        <p>This app is built with javascript, css, and html.</p><br/></div>`,c(e,"class","grid svelte-uz1jgf")},m(t,s){P(t,e,s)},p:z,i(t){i||O(()=>{i=I(e,G,{x:-400,duration:500}),i.start()})},o:z,d(t){t&&C(e)}}}function ye(a){return window.scrollTo(0,0),[]}class _e extends S{constructor(e){super();N(this,e,ye,be,Y,{})}}function ke(a){let e,i;return{c(){e=o("div"),e.innerHTML=`<img src="/images/giddy-grocery.jpg" class="svelte-1raqnj5"/> 

    <div class="grid-content svelte-1raqnj5"><h2>Giddy Grocery - online grocery store</h2> 
        <span><a href="https://tasmankingsley.github.io/giddy-grocery/">Web link</a></span><br/> 
        <span><a href="https://github.com/tasmankingsley/giddy-grocery">Github repo</a></span> 
        <h3>Description</h3> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p> 

        <h3>Technology stack</h3> 
        <p>This website is built with javascript, jquery, php, sql, json, css, and html.</p><br/></div> 

    <img src="/images/car-rental.jpg" class="svelte-1raqnj5"/> 

    <div class="grid-content svelte-1raqnj5"><h2>Car rental fake business</h2> 
        <span><a href="https://tasmankingsley.github.io/psuedo-business/">Web link</a></span><br/> 
        <span><a href="https://github.com/tasmankingsley/psuedo-business">Github repo</a></span> 
        <h3>Description</h3> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p> 

        <h3>Technology stack</h3> 
        <p>This website is built with javascript, jquery, json, css, and html.</p><br/></div>`,c(e,"class","grid svelte-1raqnj5")},m(t,s){P(t,e,s)},p:z,i(t){i||O(()=>{i=I(e,G,{x:-400,duration:500}),i.start()})},o:z,d(t){t&&C(e)}}}function we(a){return window.scrollTo(0,0),[]}class Te extends S{constructor(e){super();N(this,e,we,ke,Y,{})}}function je(a){let e,i;return{c(){e=o("div"),e.innerHTML=`<img class="persona svelte-1v3qt93" src="./images/persona-final.png" alt=""/> 
    <div class="grid-content"><h2>George persona</h2> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p></div> 

    <img class="persona svelte-1v3qt93" src="./images/Yuna-Persona.png" alt=""/> 
    <div class="grid-content"><h2>Yuna persona</h2> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p></div> 

    <iframe src="https://www.youtube.com/embed/yrPmsU8TLg0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" class="svelte-1v3qt93"></iframe> 
    <div class="grid-content"><h2>Jamingle prototype app flow</h2> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p></div> 

    <div class="grid-content"><h2>Hi Doge app flow</h2> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p></div>`,c(e,"class","grid svelte-1v3qt93")},m(t,s){P(t,e,s)},p:z,i(t){i||O(()=>{i=I(e,G,{x:-400,duration:500}),i.start()})},o:z,d(t){t&&C(e)}}}function $e(a){return window.scrollTo(0,0),[]}class xe extends S{constructor(e){super();N(this,e,$e,je,Y,{})}}function Le(a){let e,i;return{c(){e=o("div"),e.innerHTML=`<img src="./images/choco-profile.jpg" alt="" class="svelte-19x6bx6"/> 
    <span style="color: #b2c6d3; padding: 20px;" class="svelte-19x6bx6">About me</span> 
    <p class="svelte-19x6bx6">Hello fellow human! My name is Tasman. <br/><br/>
    I am an amateur Interaction Designer, Software Developer, and Music Producer.<br/><br/>
    Thanks for finding your way to my portfolio page. Be sure to poke around and look at my projects if you&#39;d like.<br/><br/>
    Also, check out my music if you find yourself curious, i appreciate the time and curiosity.<br/><br/>
    You can contact me at <a href="mailto: tasmankingsley@gmail.com" style="color: #d3c7b8;">tasmankingsley@gmail.com</a></p>`,c(e,"class","content-div svelte-19x6bx6")},m(t,s){P(t,e,s)},p:z,i(t){i||O(()=>{i=I(e,G,{x:-400,duration:500}),i.start()})},o:z,d(t){t&&C(e)}}}class qe extends S{constructor(e){super();N(this,e,null,Le,Y,{})}}const{window:Q}=pe;function ne(a){let e,i,t,s,n,l,k,p,w,d,f,g,T,y,x;return{c(){e=o("div"),i=o("div"),i.innerHTML='<span class="btn-txt svelte-mrbyxb">Home</span>',t=$(),s=o("div"),s.innerHTML='<span class="btn-txt svelte-mrbyxb">Web app projects</span>',n=$(),l=o("div"),l.innerHTML='<span class="btn-txt svelte-mrbyxb">Website projects</span>',k=$(),p=o("div"),p.innerHTML='<span class="btn-txt svelte-mrbyxb">Design portfolio</span>',w=$(),d=o("div"),d.innerHTML='<span class="btn-txt svelte-mrbyxb">About</span>',c(i,"class","nav-btn svelte-mrbyxb"),c(s,"class","nav-btn svelte-mrbyxb"),c(l,"class","nav-btn svelte-mrbyxb"),c(p,"class","nav-btn svelte-mrbyxb"),c(d,"class","nav-btn svelte-mrbyxb"),c(e,"class","nav svelte-mrbyxb"),q(e,"background-image","url("+le+")")},m(h,u){P(h,e,u),r(e,i),r(e,t),r(e,s),r(e,n),r(e,l),r(e,k),r(e,p),r(e,w),r(e,d),T=!0,y||(x=[j(i,"click",a[8]),j(s,"click",a[9]),j(l,"click",a[10]),j(p,"click",a[11]),j(d,"click",a[12])],y=!0)},p:z,i(h){T||(O(()=>{g&&g.end(1),f=I(e,G,{x:400,duration:500}),f.start()}),T=!0)},o(h){f&&f.invalidate(),g=oe(e,G,{x:400,duration:500}),T=!1},d(h){h&&C(e),h&&g&&g.end(),y=!1,R(x)}}}function ze(a){let e,i;return e=new qe({}),{c(){E(e.$$.fragment)},m(t,s){F(e,t,s),i=!0},i(t){i||(A(e.$$.fragment,t),i=!0)},o(t){H(e.$$.fragment,t),i=!1},d(t){J(e,t)}}}function Ae(a){let e,i;return e=new xe({}),{c(){E(e.$$.fragment)},m(t,s){F(e,t,s),i=!0},i(t){i||(A(e.$$.fragment,t),i=!0)},o(t){H(e.$$.fragment,t),i=!1},d(t){J(e,t)}}}function Me(a){let e,i;return e=new Te({}),{c(){E(e.$$.fragment)},m(t,s){F(e,t,s),i=!0},i(t){i||(A(e.$$.fragment,t),i=!0)},o(t){H(e.$$.fragment,t),i=!1},d(t){J(e,t)}}}function He(a){let e,i;return e=new _e({}),{c(){E(e.$$.fragment)},m(t,s){F(e,t,s),i=!0},i(t){i||(A(e.$$.fragment,t),i=!0)},o(t){H(e.$$.fragment,t),i=!1},d(t){J(e,t)}}}function De(a){let e,i;return e=new ve({}),{c(){E(e.$$.fragment)},m(t,s){F(e,t,s),i=!0},i(t){i||(A(e.$$.fragment,t),i=!0)},o(t){H(e.$$.fragment,t),i=!1},d(t){J(e,t)}}}function We(a){let e=!1,i=()=>{e=!1},t,s,n,l,k,p,w,d,f,g,T=a[2][0].visible?"\u2715":"\u2630",y,x,h,u,b,_,B,V;O(a[7]);let v=a[2][0].visible&&ne(a);const Z=[De,He,Me,Ae,ze],W=[];function ee(m,L){return m[2][1].visible?0:m[2][2].visible?1:m[2][3].visible?2:m[2][4].visible?3:m[2][6].visible?4:-1}return~(u=ee(a))&&(b=W[u]=Z[u](a)),{c(){s=o("div"),v&&v.c(),n=$(),l=o("div"),k=o("span"),p=te(a[3]),w=$(),d=o("span"),d.textContent="\u262F",f=$(),g=o("span"),y=te(T),x=$(),h=o("div"),b&&b.c(),c(k,"class","title svelte-mrbyxb"),c(d,"class","mode svelte-mrbyxb"),c(d,"style",""),c(l,"class","header svelte-mrbyxb"),q(l,"background-color",a[1]?"#191a22":"#eee"),q(l,"color",a[1]?"#eee":"#1e1f29"),c(g,"class","burg svelte-mrbyxb"),q(g,"color",a[1]?"#fff":"#1e1f29"),c(h,"class","content svelte-mrbyxb")},m(m,L){P(m,s,L),v&&v.m(s,null),r(s,n),r(s,l),r(l,k),r(k,p),r(l,w),r(l,d),r(s,f),r(s,g),r(g,y),r(s,x),r(s,h),~u&&W[u].m(h,null),_=!0,B||(V=[j(Q,"scroll",()=>{e=!0,clearTimeout(t),t=setTimeout(i,100),a[7]()}),j(d,"click",a[6]),j(g,"click",a[4])],B=!0)},p(m,[L]){L&1&&!e&&(e=!0,clearTimeout(t),scrollTo(Q.pageXOffset,m[0]),t=setTimeout(i,100)),m[2][0].visible?v?(v.p(m,L),L&4&&A(v,1)):(v=ne(m),v.c(),A(v,1),v.m(s,n)):v&&(ae(),H(v,1,1,()=>{v=null}),se()),(!_||L&8)&&ie(p,m[3]),(!_||L&2)&&q(l,"background-color",m[1]?"#191a22":"#eee"),(!_||L&2)&&q(l,"color",m[1]?"#eee":"#1e1f29"),(!_||L&4)&&T!==(T=m[2][0].visible?"\u2715":"\u2630")&&ie(y,T),(!_||L&2)&&q(g,"color",m[1]?"#fff":"#1e1f29");let X=u;u=ee(m),u!==X&&(b&&(ae(),H(W[X],1,1,()=>{W[X]=null}),se()),~u?(b=W[u],b||(b=W[u]=Z[u](m),b.c()),A(b,1),b.m(h,null)):b=null)},i(m){_||(A(v),A(b),_=!0)},o(m){H(v),H(b),_=!1},d(m){m&&C(s),v&&v.d(),~u&&W[u].d(),B=!1,R(V)}}}function Ge(a,e,i){let t,s;U(a,D,h=>i(2,t=h)),U(a,K,h=>i(3,s=h)),ce(()=>window.scrollTo(0,0));let n;M(K,s=t[1].name,s);let l=!0;function k(){M(D,t[0].visible=!t[0].visible,t)}function p(h){for(let u=1;u<t.length-1;u++)M(D,t[u].visible=!1,t);M(D,t[h].visible=!0,t),M(K,s=t[h].name,s),M(D,t[0].visible=!t[0].visible,t)}function w(){i(1,l=!l),window.document.body.classList.toggle("light")}function d(){i(0,n=Q.pageYOffset)}return[n,l,t,s,k,p,w,d,()=>p(1),()=>p(2),()=>p(3),()=>p(4),()=>p(6)]}class Pe extends S{constructor(e){super();N(this,e,Ge,We,Y,{})}}new Pe({target:document.getElementById("app")});
