import{w as re,S,i as C,s as F,e as o,a as L,b as c,c as $,d as P,f as l,l as q,n as D,g as z,h as N,j as I,k as O,r as X,m as U,o as M,p as ce,t as te,q as A,u as H,v as se,x as ae,y as pe,z as ue,A as ie,B as V,C as B,D as K}from"./vendor.7384cd90.js";const he=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}};he();let W=re([{name:"Nav",visible:!1},{name:"Tasman Kingsley",visible:!0},{name:"Web app projects",visible:!1},{name:"Website projects",visible:!1},{name:"Design portfolio",visible:!1},{name:"Music project",visible:!1},{name:"About",visible:!1}]),J=re("");var de="/assets/apps.2489986f.jpg",me="/assets/giddy-grocery.e94d6cec.jpg",ve="/assets/persona-collage.c8b1d3c9.jpg",oe="/assets/waves.e979ddb3.jpeg";function ge(i){let e,a,t,s,n,r,_,h,j,d,k,g,T,y,w,v,p,u;return{c(){e=o("div"),a=o("div"),a.innerHTML=`<p class="svelte-1bx2sj">Hello, Tasman here. This is my portfolio page. <br/>
            Feel free to potter about and peruse my projects if you feel like it \u{1F601}</p>`,t=L(),s=o("div"),n=o("div"),r=o("div"),r.innerHTML='<span class="svelte-1bx2sj">Web apps</span>',_=L(),h=o("div"),j=o("div"),j.innerHTML='<span class="svelte-1bx2sj">Websites</span>',d=L(),k=o("div"),g=o("div"),g.innerHTML='<span class="svelte-1bx2sj">Design porfolio</span>',T=L(),y=o("div"),w=o("div"),w.innerHTML='<span class="svelte-1bx2sj">About</span>',c(r,"class","card-txt svelte-1bx2sj"),c(n,"class","img svelte-1bx2sj"),$(n,"background-image","url("+de+")"),c(j,"class","card-txt svelte-1bx2sj"),c(h,"class","img svelte-1bx2sj"),$(h,"background-image","url("+me+")"),c(g,"class","card-txt svelte-1bx2sj"),c(k,"class","img svelte-1bx2sj"),$(k,"background-image","url("+ve+")"),c(w,"class","card-txt svelte-1bx2sj"),c(y,"class","img svelte-1bx2sj"),$(y,"background-image","url("+oe+")"),c(s,"class","inner-grid svelte-1bx2sj"),c(e,"class","outer-grid svelte-1bx2sj")},m(f,Y){P(f,e,Y),l(e,a),l(e,t),l(e,s),l(s,n),l(n,r),l(s,_),l(s,h),l(h,j),l(s,d),l(s,k),l(k,g),l(s,T),l(s,y),l(y,w),p||(u=[q(n,"click",i[1]),q(h,"click",i[2]),q(k,"click",i[3]),q(y,"click",i[4])],p=!0)},p:D,i(f){v||z(()=>{v=N(e,I,{x:-400,duration:500}),v.start()})},o:D,d(f){f&&O(e),p=!1,X(u)}}}function fe(i,e,a){let t,s;U(i,W,d=>a(5,t=d)),U(i,J,d=>a(6,s=d)),window.scrollTo(0,0);function n(d){for(let k=1;k<t.length-1;k++)M(W,t[k].visible=!1,t);M(W,t[d].visible=!0,t),M(J,s=t[d].name,s)}return[n,()=>n(2),()=>n(3),()=>n(4),()=>n(6)]}class be extends S{constructor(e){super();C(this,e,fe,ge,F,{})}}function ke(i){let e,a;return{c(){e=o("div"),e.innerHTML=`<div class="a1 svelte-1h99ujm"><iframe src="https://pods.netlify.app/" width="360" height="700" class="svelte-1h99ujm"></iframe></div> 

    <div class="content c1 svelte-1h99ujm"><h2 class="svelte-1h99ujm">Podcast catcher web app</h2> 
        <span><a href="https://pods.netlify.app/">Web link</a></span> 
        <span><a href="https://github.com/tasmankingsley/podcast-app">Github repo</a></span> 
        <h3 class="svelte-1h99ujm">Description</h3> 
        <p>This is my version of a podcast rss feed catcher. This app will allow you to 
            either manually add rss feeds, or search for a podcast feed (via the itunes api)
            and add podcasts that way.
            Added podcast shows will then be displayed on the home tab, you can then 
            navigate through to the show episodes, view the episode notes, and play episodes.</p> 
        <p>The app features a player which will continue to play an episode even while 
            browsing through the app or minimising the web browser.
            The app will remember your added shows when you return to the app via browser
            local storage.</p> 

        <h3 class="svelte-1h99ujm">Technology stack</h3> 
        <p>This app is built with the svelte framework, netlify functions, itunes search api, 
            javascript, css, and html.</p> 

        <h3 class="svelte-1h99ujm">Future considerations and implementations</h3> 
        <p>I would like upgrade this into a progressive web app (PWA), i also need to fix a CORS issue for some podcasts.</p><br/></div> 



    <div class="a2 svelte-1h99ujm"><iframe src="https://kana-kuizu.web.app" width="360" height="700" class="svelte-1h99ujm"></iframe></div> 
    
    <div class="content c2 svelte-1h99ujm"><h2 class="svelte-1h99ujm">Kana quiz app</h2> 
        <span><a href="https://kana-kuizu.web.app">Web link</a></span><br/> 
        <span><a href="https://github.com/tasmankingsley/kana-kuizu">Github repo</a></span> 
        <h3 class="svelte-1h99ujm">Description</h3> 
        <p>A simple quiz app for learning the Japanese kana syllabaries: hiragana and katakana.
            The app features an option menu on the home page where you can choose whether to
            study hiragana, katakana, or both at the same time.</p> 
        <p>The quiz presents a randomized grid of the kana, and invites the user to remember
            the kana and input the corresponding romaji. The app will renforce learning and memory
            by validating the input and giving color feedback to the user for correct/incorrect answers.</p> 
        <p>Upon completing or ending the quiz, the user will get their score and feeback on the results screen.</p> 

        <h3 class="svelte-1h99ujm">Technology stack</h3> 
        <p>This app is built with the vue framework, javascript, css, and html.</p></div> 



    <div class="a3 svelte-1h99ujm"><iframe src="https://tasmankingsley.github.io/todo/" width="360" height="700" class="svelte-1h99ujm"></iframe></div> 

    <div class="content c3 svelte-1h99ujm"><h2 class="svelte-1h99ujm">Minimal to-do list</h2> 
        <span><a href="https://tasmankingsley.github.io/todo/">Web link</a></span><br/> 
        <span><a href="https://github.com/tasmankingsley/todo">Github repo</a></span> 
        <h3 class="svelte-1h99ujm">Description</h3> 
        <p>A minimal to-do list app. The user can input to-do items and check off the items
            when completed. The app features the ability to edit and remove the list items.
            The user&#39;s list will also be saved in browser local storage for the ability to
            return to list after closinng the page.</p> 

        <h3 class="svelte-1h99ujm">Technology stack</h3> 
        <p>This app is built with the svelte framework, javascript, css, and html.</p></div> 



    <div class="a4 svelte-1h99ujm"><iframe src="https://japanesejisho.web.app" width="360" height="700" class="svelte-1h99ujm"></iframe></div> 

    <div class="content c4 svelte-1h99ujm"><h2 class="svelte-1h99ujm">Japanese Jisho</h2> 
        <span><a href="https://japanesejisho.web.app">Web link</a></span><br/> 
        <span><a href="https://github.com/tasmankingsley/japanese-jisho">Github repo</a></span> 
        <h3 class="svelte-1h99ujm">Description</h3> 
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem atque vitae quia optio reiciendis earum cum. Quia officia labore, dolor eveniet dolores facilis illo mollitia minima, sequi omnis tempore saepe.</p> 

        <h3 class="svelte-1h99ujm">Technology stack</h3> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nostrum, maiores consectetur voluptates necessitatibus odit reiciendis officiis repellat, quas pariatur veritatis harum laborum. Aliquam, quae eos quos iure perferendis quis!</p></div> 



    <div class="a5 svelte-1h99ujm"><iframe src="https://tasmankingsley.github.io/consistency-graph/" width="360" height="700" class="svelte-1h99ujm"></iframe></div> 
    
    <div class="content c5 svelte-1h99ujm"><h2 class="svelte-1h99ujm">Github-style consistency graph</h2> 
        <span><a href="https://tasmankingsley.github.io/consistency-graph/">Web link</a></span><br/> 
        <span><a href="https://github.com/tasmankingsley/consistency-graph">Github repo</a></span> 
        <h3 class="svelte-1h99ujm">Description</h3> 
        <p>A daily visual progress tracker inspired by the github contribution graph.
            The app will allow the user to check the day off as done (for tracking any goal).
            Progress will be saved in browser storage, and the graph will keep track of time and
            advance forward each day.</p> 
        <p>The user can initialize the graph, manually advance the day (for testing), and 
            add or delete graphs.</p> 

        <h3 class="svelte-1h99ujm">Technology stack</h3> 
        <p>This app is built with the svelte framework, javascript, css, and html.</p></div> 



    <div class="a6 svelte-1h99ujm"><iframe src="https://tasmankingsley.github.io/tetris/" width="360" height="700" class="svelte-1h99ujm"></iframe></div> 

    <div class="content c6 svelte-1h99ujm"><h2 class="svelte-1h99ujm">Tetris clone</h2> 
        <span><a href="https://tasmankingsley.github.io/tetris/">Web link</a></span><br/> 
        <span><a href="https://github.com/tasmankingsley/tetris">Github repo</a></span> 
        <h3 class="svelte-1h99ujm">Description</h3> 
        <p>A simple tetris clone. Arrow keys to move, rotate, and drop faster.</p> 

        <h3 class="svelte-1h99ujm">Technology stack</h3> 
        <p>This app is built with javascript, css, and html.</p></div> 



    <div class="a7 svelte-1h99ujm"><iframe src="https://tasmankingsley.github.io/new-tab/" width="360" height="700" class="svelte-1h99ujm"></iframe></div> 

    <div class="content c7 svelte-1h99ujm"><h2 class="svelte-1h99ujm">New tab - customisable home page</h2> 
        <span><a href="https://tasmankingsley.github.io/new-tab/">Web link</a></span><br/> 
        <span><a href="https://github.com/tasmankingsley/new-tab">Github repo</a></span> 
        <h3 class="svelte-1h99ujm">Description</h3> 
        <p>Designed to be set as a home page or new tab page, intended for displaying and 
            customising favourite links/bookmarks.</p> 

        <h3 class="svelte-1h99ujm">Technology stack</h3> 
        <p>This app is built with the svelte framework, javascript, css, and html.</p></div> 


    
    <div class="a8 svelte-1h99ujm"><iframe src="https://tasmankingsley.github.io/calc/" width="280" height="350" class="svelte-1h99ujm"></iframe></div> 

    <div class="content c8 svelte-1h99ujm"><h2 class="svelte-1h99ujm">Simple calculator</h2> 
        <span><a href="https://tasmankingsley.github.io/calc/">Web link</a></span><br/> 
        <span><a href="https://github.com/tasmankingsley/calc">Github repo</a></span> 
        <h3 class="svelte-1h99ujm">Description</h3> 
        <p>A very simple calculator app inspired by the Mac OS calculator.
            One of my first forays into web programming.</p> 

        <h3 class="svelte-1h99ujm">Technology stack</h3> 
        <p>This app is built with javascript, css, and html.</p></div>`,c(e,"class","grid svelte-1h99ujm")},m(t,s){P(t,e,s)},p:D,i(t){a||z(()=>{a=N(e,I,{x:-400,duration:500}),a.start()})},o:D,d(t){t&&O(e)}}}function ye(i){return window.scrollTo(0,0),[]}class we extends S{constructor(e){super();C(this,e,ye,ke,F,{})}}function _e(i){let e,a;return{c(){e=o("div"),e.innerHTML=`<img src="/images/giddy-grocery.jpg" class="svelte-jr83u9"/> 

    <div class="grid-content svelte-jr83u9"><h2>Giddy Grocery - online grocery store</h2> 
        <span><a href="https://tasmankingsley.github.io/giddy-grocery/">Web link</a></span> 
        <span><a href="https://github.com/tasmankingsley/giddy-grocery">Github repo</a></span> 
        <h3 class="svelte-jr83u9">Description</h3> 
        <p>This website was a project initally built for a university assignment. The project
            had a specification to fulfill including: the use of image maps for the catalogue, 
            a product details section, a functional shopping cart, and a checkout confirmation and order form page.</p> 
        <p>For the assignment, the app was built with php and mysql for the backend and database on aws.
            However, i have since re-written the php code in js on the front end accompanied with json instead of
            mysql - in order to more easily host the website on github.</p> 

        <h3 class="svelte-jr83u9">Technology stack</h3> 
        <p>This website is built with javascript, jquery, php, sql, json, css, and html.</p><br/></div> 

    <img src="/images/portfolio.jpg" class="svelte-jr83u9"/> 

    <div class="grid-content svelte-jr83u9"><h2>This portfolio website</h2> 
        <span><a href="https://tasmankingsley.github.io/">Web link</a></span> 
        <span><a href="https://github.com/tasmankingsley/tasmankingsley.github.io">Github repo</a></span> 
        <h3 class="svelte-jr83u9">Description</h3> 
        <p>The website you are currently looking at!</p> 
        <p>It hosts my coding and design projects.
            It is a SPA style svelte website. It features a custom sweeping navagation system, responsive grid
            layouts, interactive mobile-style web apps, and a dark/light mode toggle.</p> 

        <h3 class="svelte-jr83u9">Technology stack</h3> 
        <p>This website is built with svelte, js, css, and html. This website utilises a 
            single page app (SPA) design - for the time being.</p><br/></div> 

    <img src="/images/artist-website.jpg" class="svelte-jr83u9"/> 

    <div class="grid-content svelte-jr83u9"><h2>Artist website</h2> 
        <span><a href="https://artistwebsite.vercel.app/">Web link</a></span> 
        <span><a href="https://github.com/tasmankingsley/artist-website">Github repo</a></span> 
        <h3 class="svelte-jr83u9">Description</h3> 

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aperiam ullam voluptates, itaque nihil repellat ipsa pariatur illo dolorum fugit necessitatibus nobis velit maxime praesentium sed. Modi excepturi sequi officiis!</p> 
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, aliquam necessitatibus quibusdam illo dicta porro! Sint velit odio corporis nihil laboriosam voluptate quia ad quam ipsa culpa! Fugit, excepturi vero.</p> 

        <h3 class="svelte-jr83u9">Technology stack</h3> 
        <p>This website is built with nuxt, vue and javascript</p><br/></div> 

    <img src="/images/car-rental.jpg" class="svelte-jr83u9"/> 

    <div class="grid-content svelte-jr83u9"><h2>Car rental - fake business</h2> 
        <span><a href="https://tasmankingsley.github.io/psuedo-business/">Web link</a></span> 
        <span><a href="https://github.com/tasmankingsley/psuedo-business">Github repo</a></span> 
        <h3 class="svelte-jr83u9">Description</h3> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p> 

        <h3 class="svelte-jr83u9">Technology stack</h3> 
        <p>This website is built with javascript, jquery, json, css, and html.</p><br/></div>`,c(e,"class","grid svelte-jr83u9")},m(t,s){P(t,e,s)},p:D,i(t){a||z(()=>{a=N(e,I,{x:-400,duration:500}),a.start()})},o:D,d(t){t&&O(e)}}}function je(i){return window.scrollTo(0,0),[]}class Te extends S{constructor(e){super();C(this,e,je,_e,F,{})}}function $e(i){let e,a;return{c(){e=o("div"),e.innerHTML=`<img class="persona p1 svelte-1vt6rht" src="./images/persona-final.png" alt=""/> 
    <img class="persona p2 svelte-1vt6rht" src="./images/Yuna-Persona.png" alt=""/> 
    <div class="persona-content svelte-1vt6rht"><h2>Personas</h2> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p></div> 


    <iframe src="https://www.youtube.com/embed/yrPmsU8TLg0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" class="svelte-1vt6rht"></iframe> 
    <div class="grid-content"><h2>Jamingle prototype app flow</h2> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p></div> 

    <iframe src="https://www.youtube.com/embed/jPtX_QU5gz4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" class="svelte-1vt6rht"></iframe> 
    <div class="grid-content"><h2>HiDoge prototype app flow</h2> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p></div>`,c(e,"class","grid svelte-1vt6rht")},m(t,s){P(t,e,s)},p:D,i(t){a||z(()=>{a=N(e,I,{x:-400,duration:500}),a.start()})},o:D,d(t){t&&O(e)}}}function Le(i){return window.scrollTo(0,0),[]}class qe extends S{constructor(e){super();C(this,e,Le,$e,F,{})}}function xe(i){let e,a;return{c(){e=o("div"),e.innerHTML=`<img src="./images/choco-profile.jpg" alt="" class="svelte-sbkeb8"/> 
    <span style="color: #7e9ec7; padding: 20px;" class="svelte-sbkeb8">About me</span> 
    <p class="svelte-sbkeb8">Hello fellow human! My name is Tasman. <br/><br/>
    I am a Web Developer and Interaction Designer.<br/>
    I am mostly self-taught, although i have completed various programming and design subjects throughout my university education too.<br/><br/>
    Thank you for finding your way to my portfolio page. Be sure to hang around and take a look at my projects if you&#39;d like.<br/>
    I appreciate your time and curiosity.<br/><br/>
    You can contact me at <a href="mailto: tasmankingsley@gmail.com" style="color: #78b2aa;">tasmankingsley@gmail.com</a></p>`,c(e,"class","content-div svelte-sbkeb8")},m(t,s){P(t,e,s)},p:D,i(t){a||z(()=>{a=N(e,I,{x:-400,duration:500}),a.start()})},o:D,d(t){t&&O(e)}}}class Ae extends S{constructor(e){super();C(this,e,null,xe,F,{})}}var le="/assets/background-dark.f1a90866.png",De="/assets/background-light.fa5a2698.png";const{window:Q}=ue;function ne(i){let e,a,t,s,n,r,_,h,j,d,k,g,T,y,w,v,p;return{c(){e=o("div"),a=o("div"),a.innerHTML='<span class="btn-txt svelte-16793ak">Home</span>',t=L(),s=o("div"),s.innerHTML='<span class="btn-txt svelte-16793ak">Web app projects</span>',n=L(),r=o("div"),r.innerHTML='<span class="btn-txt svelte-16793ak">Website projects</span>',_=L(),h=o("div"),h.innerHTML='<span class="btn-txt svelte-16793ak">Design portfolio</span>',j=L(),d=o("div"),d.innerHTML='<span class="btn-txt svelte-16793ak">About</span>',k=L(),g=o("div"),c(a,"class","nav-btn svelte-16793ak"),c(s,"class","nav-btn svelte-16793ak"),c(r,"class","nav-btn svelte-16793ak"),c(h,"class","nav-btn svelte-16793ak"),c(d,"class","nav-btn svelte-16793ak"),c(g,"class","close svelte-16793ak"),$(g,"background-color",i[1]?"#191a22":"#eee"),c(e,"class","nav svelte-16793ak"),$(e,"background-image","url("+oe+")")},m(u,f){P(u,e,f),l(e,a),l(e,t),l(e,s),l(e,n),l(e,r),l(e,_),l(e,h),l(e,j),l(e,d),l(e,k),l(e,g),w=!0,v||(p=[q(a,"click",i[8]),q(s,"click",i[9]),q(r,"click",i[10]),q(h,"click",i[11]),q(d,"click",i[12])],v=!0)},p(u,f){(!w||f&2)&&$(g,"background-color",u[1]?"#191a22":"#eee")},i(u){w||(z(()=>{y&&y.end(1),T=N(e,I,{x:400,duration:500}),T.start()}),w=!0)},o(u){T&&T.invalidate(),y=ce(e,I,{x:400,duration:500}),w=!1},d(u){u&&O(e),u&&y&&y.end(),v=!1,X(p)}}}function Me(i){let e,a;return e=new Ae({}),{c(){V(e.$$.fragment)},m(t,s){B(e,t,s),a=!0},i(t){a||(A(e.$$.fragment,t),a=!0)},o(t){H(e.$$.fragment,t),a=!1},d(t){K(e,t)}}}function He(i){let e,a;return e=new qe({}),{c(){V(e.$$.fragment)},m(t,s){B(e,t,s),a=!0},i(t){a||(A(e.$$.fragment,t),a=!0)},o(t){H(e.$$.fragment,t),a=!1},d(t){K(e,t)}}}function We(i){let e,a;return e=new Te({}),{c(){V(e.$$.fragment)},m(t,s){B(e,t,s),a=!0},i(t){a||(A(e.$$.fragment,t),a=!0)},o(t){H(e.$$.fragment,t),a=!1},d(t){K(e,t)}}}function Ge(i){let e,a;return e=new we({}),{c(){V(e.$$.fragment)},m(t,s){B(e,t,s),a=!0},i(t){a||(A(e.$$.fragment,t),a=!0)},o(t){H(e.$$.fragment,t),a=!1},d(t){K(e,t)}}}function Ie(i){let e,a;return e=new be({}),{c(){V(e.$$.fragment)},m(t,s){B(e,t,s),a=!0},i(t){a||(A(e.$$.fragment,t),a=!0)},o(t){H(e.$$.fragment,t),a=!1},d(t){K(e,t)}}}function Pe(i){let e=!1,a=()=>{e=!1},t,s,n,r,_,h,j,d,k,g,T=i[2][0].visible?"\u292B":"=",y,w,v,p,u,f,Y,R;z(i[7]);let b=i[2][0].visible&&ne(i);const Z=[Ie,Ge,We,He,Me],G=[];function ee(m,x){return m[2][1].visible?0:m[2][2].visible?1:m[2][3].visible?2:m[2][4].visible?3:m[2][6].visible?4:-1}return~(p=ee(i))&&(u=G[p]=Z[p](i)),{c(){s=o("div"),b&&b.c(),n=L(),r=o("div"),_=o("span"),h=te(i[3]),j=L(),d=o("span"),d.textContent="\u262F",k=L(),g=o("span"),y=te(T),w=L(),v=o("div"),u&&u.c(),c(_,"class","title svelte-16793ak"),c(d,"class","mode svelte-16793ak"),c(d,"style",""),c(r,"class","header svelte-16793ak"),$(r,"background-color",i[1]?"#191a22":"#eee"),$(r,"color",i[1]?"#eee":"#1e1f29"),c(g,"class","burg svelte-16793ak"),$(g,"color",i[1]?"#fff":"#1e1f29"),c(v,"class","content svelte-16793ak")},m(m,x){P(m,s,x),b&&b.m(s,null),l(s,n),l(s,r),l(r,_),l(_,h),l(r,j),l(r,d),l(s,k),l(s,g),l(g,y),l(s,w),l(s,v),~p&&G[p].m(v,null),f=!0,Y||(R=[q(Q,"scroll",()=>{e=!0,clearTimeout(t),t=setTimeout(a,100),i[7]()}),q(d,"click",i[6]),q(g,"click",i[4])],Y=!0)},p(m,[x]){x&1&&!e&&(e=!0,clearTimeout(t),scrollTo(Q.pageXOffset,m[0]),t=setTimeout(a,100)),m[2][0].visible?b?(b.p(m,x),x&4&&A(b,1)):(b=ne(m),b.c(),A(b,1),b.m(s,n)):b&&(ie(),H(b,1,1,()=>{b=null}),se()),(!f||x&8)&&ae(h,m[3]),(!f||x&2)&&$(r,"background-color",m[1]?"#191a22":"#eee"),(!f||x&2)&&$(r,"color",m[1]?"#eee":"#1e1f29"),(!f||x&4)&&T!==(T=m[2][0].visible?"\u292B":"=")&&ae(y,T),(!f||x&2)&&$(g,"color",m[1]?"#fff":"#1e1f29");let E=p;p=ee(m),p!==E&&(u&&(ie(),H(G[E],1,1,()=>{G[E]=null}),se()),~p?(u=G[p],u||(u=G[p]=Z[p](m),u.c()),A(u,1),u.m(v,null)):u=null)},i(m){f||(A(b),A(u),f=!0)},o(m){H(b),H(u),f=!1},d(m){m&&O(s),b&&b.d(),~p&&G[p].d(),Y=!1,X(R)}}}function ze(i,e,a){let t,s;U(i,W,v=>a(2,t=v)),U(i,J,v=>a(3,s=v)),pe(()=>window.scrollTo(0,0));let n;M(J,s=t[1].name,s);let r=!0;document.body.classList.add("dark"),window.visualViewport.width>500&&(document.body.style.backgroundImage=`url(${le})`);function _(){M(W,t[0].visible=!t[0].visible,t)}function h(v){for(let p=1;p<t.length-1;p++)M(W,t[p].visible=!1,t);M(W,t[v].visible=!0,t),M(J,s=t[v].name,s),M(W,t[0].visible=!t[0].visible,t)}function j(){a(1,r=!r),r===!0?(document.body.classList.replace("light","dark"),window.visualViewport.width>500&&(document.body.style.backgroundImage=`url(${le})`)):r===!1&&(document.body.classList.replace("dark","light"),window.visualViewport.width>500&&(document.body.style.backgroundImage=`url(${De})`))}function d(){a(0,n=Q.pageYOffset)}return[n,r,t,s,_,h,j,d,()=>h(1),()=>h(2),()=>h(3),()=>h(4),()=>h(6)]}class Oe extends S{constructor(e){super();C(this,e,ze,Pe,F,{})}}new Oe({target:document.getElementById("app")});
