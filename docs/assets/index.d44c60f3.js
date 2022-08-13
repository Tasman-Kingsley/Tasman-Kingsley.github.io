import{w as ne,S,i as N,s as K,e as o,a as x,b as c,c as z,d as C,f as n,l as L,n as A,g as O,h as Y,j as W,k as P,r as R,m as U,o as H,p as oe,t as te,q as M,u as D,v as se,x as ie,y as ce,z as pe,A as ae,B as E,C as J,D as F}from"./vendor.7384cd90.js";const de=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}};de();let q=ne([{name:"Nav",visible:!1},{name:"Tasman Kingsley",visible:!0},{name:"Code projects",visible:!1},{name:"Design portfolio",visible:!1},{name:"Music project",visible:!1},{name:"About",visible:!1}]),B=ne("");var ue="/assets/apps.2489986f.jpg",he="/assets/giddy-grocery.eff03945.jpg",me="/assets/persona-collage.c8b1d3c9.jpg",le="/assets/waves.e979ddb3.jpeg";function fe(a){let e,i,t,s,r,l,w,d,_,p,h,v,j,m,b,T,f,y;return{c(){e=o("div"),i=o("div"),i.innerHTML=`<p class="svelte-121f6do">Hello, Tasman here. This is my portfolio page.</p> 
        <p class="svelte-121f6do">Feel free to potter about and peruse my projects if you feel like it \u{1F601}</p>`,t=x(),s=o("div"),r=o("div"),l=o("div"),l.innerHTML='<span class="svelte-121f6do">Web apps</span>',w=x(),d=o("div"),_=o("div"),_.innerHTML='<span class="svelte-121f6do">Web sites</span>',p=x(),h=o("div"),v=o("div"),v.innerHTML='<span class="svelte-121f6do">Design porfolio</span>',j=x(),m=o("div"),b=o("div"),b.innerHTML='<span class="svelte-121f6do">About</span>',c(l,"class","card-txt svelte-121f6do"),c(r,"class","img svelte-121f6do"),z(r,"background-image","url("+ue+")"),c(_,"class","card-txt svelte-121f6do"),c(d,"class","img svelte-121f6do"),z(d,"background-image","url("+he+")"),c(v,"class","card-txt svelte-121f6do"),c(h,"class","img svelte-121f6do"),z(h,"background-image","url("+me+")"),c(b,"class","card-txt svelte-121f6do"),c(m,"class","img svelte-121f6do"),z(m,"background-image","url("+le+")"),c(s,"class","inner-grid svelte-121f6do"),c(e,"class","outer-grid svelte-121f6do")},m(k,I){C(k,e,I),n(e,i),n(e,t),n(e,s),n(s,r),n(r,l),n(s,w),n(s,d),n(d,_),n(s,p),n(s,h),n(h,v),n(s,j),n(s,m),n(m,b),f||(y=[L(r,"click",a[1]),L(d,"click",a[2]),L(h,"click",a[3]),L(m,"click",a[4])],f=!0)},p:A,i(k){T||O(()=>{T=Y(e,W,{x:-400,duration:500}),T.start()})},o:A,d(k){k&&P(e),f=!1,R(y)}}}function ge(a,e,i){let t,s;U(a,q,p=>i(5,t=p)),U(a,B,p=>i(6,s=p)),window.scrollTo(0,0);function r(p){for(let h=1;h<t.length-1;h++)H(q,t[h].visible=!1,t);H(q,t[p].visible=!0,t),H(B,s=t[p].name,s)}return[r,()=>r(2),()=>r(2),()=>r(3),()=>r(5)]}class ve extends S{constructor(e){super();N(this,e,ge,fe,K,{})}}function be(a){let e,i;return{c(){e=o("div"),e.innerHTML=`<iframe src="https://pods.netlify.app/" width="380" height="700" class="svelte-uz1jgf"></iframe> 

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
        <p>This website is built with javascript, jquery, json, css, and html.</p><br/></div>`,c(e,"class","grid svelte-uz1jgf")},m(t,s){C(t,e,s)},p:A,i(t){i||O(()=>{i=Y(e,W,{x:-400,duration:500}),i.start()})},o:A,d(t){t&&P(e)}}}function ye(a){return window.scrollTo(0,0),[]}class _e extends S{constructor(e){super();N(this,e,ye,be,K,{})}}function ke(a){let e,i;return{c(){e=o("div"),e.innerHTML=`<img class="persona svelte-15sbje4" src="./images/persona-final.png" alt=""/> 
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
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p></div> 

    <div class="grid-content"><h2>Hi Doge app flow</h2> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p></div>`,c(e,"class","grid svelte-15sbje4")},m(t,s){C(t,e,s)},p:A,i(t){i||O(()=>{i=Y(e,W,{x:-400,duration:500}),i.start()})},o:A,d(t){t&&P(e)}}}function we(a){return window.scrollTo(0,0),[]}class Te extends S{constructor(e){super();N(this,e,we,ke,K,{})}}function je(a){let e,i;return{c(){e=o("div"),e.innerHTML=`<img id="profile" src="./images/spotify-profile.jpg" alt="" class="svelte-11avz68"/> 
    <p class="svelte-11avz68">Artist - Tasman Kingsley</p> 
    <iframe src="https://open.spotify.com/embed/artist/761DscW9vfSQMmnKEJNHbH" frameborder="0" allowtransparency="true" allow="encrypted-media" class="svelte-11avz68"></iframe>`,c(e,"class","svelte-11avz68")},m(t,s){C(t,e,s)},p:A,i(t){i||O(()=>{i=Y(e,W,{x:-400,duration:500}),i.start()})},o:A,d(t){t&&P(e)}}}class $e extends S{constructor(e){super();N(this,e,null,je,K,{})}}function ze(a){let e,i;return{c(){e=o("div"),e.innerHTML=`<img src="./images/choco-profile.jpg" alt="" class="svelte-19x6bx6"/> 
    <span style="color: #b2c6d3; padding: 20px;" class="svelte-19x6bx6">About me</span> 
    <p class="svelte-19x6bx6">Hello fellow human! My name is Tasman. <br/><br/>
    I am an amateur Interaction Designer, Software Developer, and Music Producer.<br/><br/>
    Thanks for finding your way to my portfolio page. Be sure to poke around and look at my projects if you&#39;d like.<br/><br/>
    Also, check out my music if you find yourself curious, i appreciate the time and curiosity.<br/><br/>
    You can contact me at <a href="mailto: tasmankingsley@gmail.com" style="color: #d3c7b8;">tasmankingsley@gmail.com</a></p>`,c(e,"class","content-div svelte-19x6bx6")},m(t,s){C(t,e,s)},p:A,i(t){i||O(()=>{i=Y(e,W,{x:-400,duration:500}),i.start()})},o:A,d(t){t&&P(e)}}}class xe extends S{constructor(e){super();N(this,e,null,ze,K,{})}}const{window:X}=pe;function re(a){let e,i,t,s,r,l,w,d,_,p,h,v,j;return{c(){e=o("div"),i=o("div"),i.innerHTML='<span class="btn-txt svelte-mrbyxb">Home</span>',t=x(),s=o("div"),s.innerHTML='<span class="btn-txt svelte-mrbyxb">Code projects</span>',r=x(),l=o("div"),l.innerHTML='<span class="btn-txt svelte-mrbyxb">Design portfolio</span>',w=x(),d=o("div"),d.innerHTML='<span class="btn-txt svelte-mrbyxb">About</span>',c(i,"class","nav-btn svelte-mrbyxb"),c(s,"class","nav-btn svelte-mrbyxb"),c(l,"class","nav-btn svelte-mrbyxb"),c(d,"class","nav-btn svelte-mrbyxb"),c(e,"class","nav svelte-mrbyxb"),z(e,"background-image","url("+le+")")},m(m,b){C(m,e,b),n(e,i),n(e,t),n(e,s),n(e,r),n(e,l),n(e,w),n(e,d),h=!0,v||(j=[L(i,"click",a[8]),L(s,"click",a[9]),L(l,"click",a[10]),L(d,"click",a[11])],v=!0)},p:A,i(m){h||(O(()=>{p&&p.end(1),_=Y(e,W,{x:400,duration:500}),_.start()}),h=!0)},o(m){_&&_.invalidate(),p=oe(e,W,{x:400,duration:500}),h=!1},d(m){m&&P(e),m&&p&&p.end(),v=!1,R(j)}}}function Le(a){let e,i;return e=new xe({}),{c(){E(e.$$.fragment)},m(t,s){J(e,t,s),i=!0},i(t){i||(M(e.$$.fragment,t),i=!0)},o(t){D(e.$$.fragment,t),i=!1},d(t){F(e,t)}}}function Ae(a){let e,i;return e=new $e({}),{c(){E(e.$$.fragment)},m(t,s){J(e,t,s),i=!0},i(t){i||(M(e.$$.fragment,t),i=!0)},o(t){D(e.$$.fragment,t),i=!1},d(t){F(e,t)}}}function Me(a){let e,i;return e=new Te({}),{c(){E(e.$$.fragment)},m(t,s){J(e,t,s),i=!0},i(t){i||(M(e.$$.fragment,t),i=!0)},o(t){D(e.$$.fragment,t),i=!1},d(t){F(e,t)}}}function He(a){let e,i;return e=new _e({}),{c(){E(e.$$.fragment)},m(t,s){J(e,t,s),i=!0},i(t){i||(M(e.$$.fragment,t),i=!0)},o(t){D(e.$$.fragment,t),i=!1},d(t){F(e,t)}}}function De(a){let e,i;return e=new ve({}),{c(){E(e.$$.fragment)},m(t,s){J(e,t,s),i=!0},i(t){i||(M(e.$$.fragment,t),i=!0)},o(t){D(e.$$.fragment,t),i=!1},d(t){F(e,t)}}}function qe(a){let e=!1,i=()=>{e=!1},t,s,r,l,w,d,_,p,h,v,j=a[2][0].visible?"\u2715":"\u2630",m,b,T,f,y,k,I,V;O(a[7]);let g=a[2][0].visible&&re(a);const Z=[De,He,Me,Ae,Le],G=[];function ee(u,$){return u[2][1].visible?0:u[2][2].visible?1:u[2][3].visible?2:u[2][4].visible?3:u[2][5].visible?4:-1}return~(f=ee(a))&&(y=G[f]=Z[f](a)),{c(){s=o("div"),g&&g.c(),r=x(),l=o("div"),w=o("span"),d=te(a[3]),_=x(),p=o("span"),p.textContent="\u262F",h=x(),v=o("span"),m=te(j),b=x(),T=o("div"),y&&y.c(),c(w,"class","title svelte-mrbyxb"),c(p,"class","mode svelte-mrbyxb"),c(p,"style",""),c(l,"class","header svelte-mrbyxb"),z(l,"background-color",a[1]?"#191a22":"#eee"),z(l,"color",a[1]?"#eee":"#1e1f29"),c(v,"class","burg svelte-mrbyxb"),z(v,"color",a[1]?"#fff":"#1e1f29"),c(T,"class","content svelte-mrbyxb")},m(u,$){C(u,s,$),g&&g.m(s,null),n(s,r),n(s,l),n(l,w),n(w,d),n(l,_),n(l,p),n(s,h),n(s,v),n(v,m),n(s,b),n(s,T),~f&&G[f].m(T,null),k=!0,I||(V=[L(X,"scroll",()=>{e=!0,clearTimeout(t),t=setTimeout(i,100),a[7]()}),L(p,"click",a[6]),L(v,"click",a[4])],I=!0)},p(u,[$]){$&1&&!e&&(e=!0,clearTimeout(t),scrollTo(X.pageXOffset,u[0]),t=setTimeout(i,100)),u[2][0].visible?g?(g.p(u,$),$&4&&M(g,1)):(g=re(u),g.c(),M(g,1),g.m(s,r)):g&&(ae(),D(g,1,1,()=>{g=null}),se()),(!k||$&8)&&ie(d,u[3]),(!k||$&2)&&z(l,"background-color",u[1]?"#191a22":"#eee"),(!k||$&2)&&z(l,"color",u[1]?"#eee":"#1e1f29"),(!k||$&4)&&j!==(j=u[2][0].visible?"\u2715":"\u2630")&&ie(m,j),(!k||$&2)&&z(v,"color",u[1]?"#fff":"#1e1f29");let Q=f;f=ee(u),f!==Q&&(y&&(ae(),D(G[Q],1,1,()=>{G[Q]=null}),se()),~f?(y=G[f],y||(y=G[f]=Z[f](u),y.c()),M(y,1),y.m(T,null)):y=null)},i(u){k||(M(g),M(y),k=!0)},o(u){D(g),D(y),k=!1},d(u){u&&P(s),g&&g.d(),~f&&G[f].d(),I=!1,R(V)}}}function Ge(a,e,i){let t,s;U(a,q,b=>i(2,t=b)),U(a,B,b=>i(3,s=b)),ce(()=>window.scrollTo(0,0));let r;H(B,s=t[1].name,s);let l=!0;function w(){H(q,t[0].visible=!t[0].visible,t)}function d(b){for(let T=1;T<t.length-1;T++)H(q,t[T].visible=!1,t);H(q,t[b].visible=!0,t),H(B,s=t[b].name,s),H(q,t[0].visible=!t[0].visible,t)}function _(){i(1,l=!l),window.document.body.classList.toggle("light")}function p(){i(0,r=X.pageYOffset)}return[r,l,t,s,w,d,_,p,()=>d(1),()=>d(2),()=>d(3),()=>d(5)]}class We extends S{constructor(e){super();N(this,e,Ge,qe,K,{})}}new We({target:document.getElementById("app")});
