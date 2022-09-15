import{w as re,S,i as C,s as F,e as o,a as L,b as c,c as $,d as I,f as l,l as q,n as A,g as P,h as N,j as G,k as O,r as X,m as U,o as D,p as ce,t as te,q as x,u as M,v as se,x as ie,y as pe,z as ue,A as ae,B as V,C as B,D as K}from"./vendor.7384cd90.js";const de=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function i(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(s){if(s.ep)return;s.ep=!0;const n=i(s);fetch(s.href,n)}};de();let H=re([{name:"Nav",visible:!1},{name:"Tasman Kingsley",visible:!0},{name:"Web app projects",visible:!1},{name:"Website projects",visible:!1},{name:"Design portfolio",visible:!1},{name:"Music project",visible:!1},{name:"About",visible:!1}]),J=re("");var he="/assets/apps.2489986f.jpg",me="/assets/giddy-grocery.e94d6cec.jpg",ve="/assets/persona-collage.c8b1d3c9.jpg",oe="/assets/waves.e979ddb3.jpeg";function ge(a){let e,i,t,s,n,r,_,d,j,h,y,g,T,k,w,v,p,u;return{c(){e=o("div"),i=o("div"),i.innerHTML=`<p class="svelte-1bx2sj">Hello, Tasman here. This is my portfolio page. <br/>
            Feel free to potter about and peruse my projects if you feel like it \u{1F601}</p>`,t=L(),s=o("div"),n=o("div"),r=o("div"),r.innerHTML='<span class="svelte-1bx2sj">Web apps</span>',_=L(),d=o("div"),j=o("div"),j.innerHTML='<span class="svelte-1bx2sj">Websites</span>',h=L(),y=o("div"),g=o("div"),g.innerHTML='<span class="svelte-1bx2sj">Design porfolio</span>',T=L(),k=o("div"),w=o("div"),w.innerHTML='<span class="svelte-1bx2sj">About</span>',c(r,"class","card-txt svelte-1bx2sj"),c(n,"class","img svelte-1bx2sj"),$(n,"background-image","url("+he+")"),c(j,"class","card-txt svelte-1bx2sj"),c(d,"class","img svelte-1bx2sj"),$(d,"background-image","url("+me+")"),c(g,"class","card-txt svelte-1bx2sj"),c(y,"class","img svelte-1bx2sj"),$(y,"background-image","url("+ve+")"),c(w,"class","card-txt svelte-1bx2sj"),c(k,"class","img svelte-1bx2sj"),$(k,"background-image","url("+oe+")"),c(s,"class","inner-grid svelte-1bx2sj"),c(e,"class","outer-grid svelte-1bx2sj")},m(f,Y){I(f,e,Y),l(e,i),l(e,t),l(e,s),l(s,n),l(n,r),l(s,_),l(s,d),l(d,j),l(s,h),l(s,y),l(y,g),l(s,T),l(s,k),l(k,w),p||(u=[q(n,"click",a[1]),q(d,"click",a[2]),q(y,"click",a[3]),q(k,"click",a[4])],p=!0)},p:A,i(f){v||P(()=>{v=N(e,G,{x:-400,duration:500}),v.start()})},o:A,d(f){f&&O(e),p=!1,X(u)}}}function fe(a,e,i){let t,s;U(a,H,h=>i(5,t=h)),U(a,J,h=>i(6,s=h)),window.scrollTo(0,0);function n(h){for(let y=1;y<t.length-1;y++)D(H,t[y].visible=!1,t);D(H,t[h].visible=!0,t),D(J,s=t[h].name,s)}return[n,()=>n(2),()=>n(3),()=>n(4),()=>n(6)]}class be extends S{constructor(e){super();C(this,e,fe,ge,F,{})}}function ye(a){let e,i;return{c(){e=o("div"),e.innerHTML=`<div class="a1 svelte-1h99ujm"><iframe src="https://pods.netlify.app/" width="360" height="700" class="svelte-1h99ujm"></iframe></div> 

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
        <p>This app is built with javascript, css, and html.</p></div>`,c(e,"class","grid svelte-1h99ujm")},m(t,s){I(t,e,s)},p:A,i(t){i||P(()=>{i=N(e,G,{x:-400,duration:500}),i.start()})},o:A,d(t){t&&O(e)}}}function ke(a){return window.scrollTo(0,0),[]}class we extends S{constructor(e){super();C(this,e,ke,ye,F,{})}}function _e(a){let e,i;return{c(){e=o("div"),e.innerHTML=`<img src="/images/giddy-grocery.jpg" class="svelte-jr83u9"/> 

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
        <p>This website is built with javascript, jquery, json, css, and html.</p><br/></div>`,c(e,"class","grid svelte-jr83u9")},m(t,s){I(t,e,s)},p:A,i(t){i||P(()=>{i=N(e,G,{x:-400,duration:500}),i.start()})},o:A,d(t){t&&O(e)}}}function je(a){return window.scrollTo(0,0),[]}class Te extends S{constructor(e){super();C(this,e,je,_e,F,{})}}function $e(a){let e,i;return{c(){e=o("div"),e.innerHTML=`<img class="persona p1 svelte-1vt6rht" src="./images/persona-final.png" alt=""/> 
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
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p></div>`,c(e,"class","grid svelte-1vt6rht")},m(t,s){I(t,e,s)},p:A,i(t){i||P(()=>{i=N(e,G,{x:-400,duration:500}),i.start()})},o:A,d(t){t&&O(e)}}}function Le(a){return window.scrollTo(0,0),[]}class qe extends S{constructor(e){super();C(this,e,Le,$e,F,{})}}function ze(a){let e,i;return{c(){e=o("div"),e.innerHTML=`<img src="./images/choco-profile.jpg" alt="" class="svelte-sbkeb8"/> 
    <span style="color: #7e9ec7; padding: 20px;" class="svelte-sbkeb8">About me</span> 
    <p class="svelte-sbkeb8">Hello fellow human! My name is Tasman. <br/><br/>
    I am a Web Developer and Interaction Designer.<br/>
    I am mostly self-taught, although i have completed various programming and design subjects throughout my university education too.<br/><br/>
    Thank you for finding your way to my portfolio page. Be sure to hang around and take a look at my projects if you&#39;d like.<br/>
    I appreciate your time and curiosity.<br/><br/>
    You can contact me at <a href="mailto: tasmankingsley@gmail.com" style="color: #78b2aa;">tasmankingsley@gmail.com</a></p>`,c(e,"class","content-div svelte-sbkeb8")},m(t,s){I(t,e,s)},p:A,i(t){i||P(()=>{i=N(e,G,{x:-400,duration:500}),i.start()})},o:A,d(t){t&&O(e)}}}class xe extends S{constructor(e){super();C(this,e,null,ze,F,{})}}var le="/assets/background-dark.f1a90866.png",Ae="/assets/background-light.fa5a2698.png";const{window:Q}=ue;function ne(a){let e,i,t,s,n,r,_,d,j,h,y,g,T,k,w,v,p;return{c(){e=o("div"),i=o("div"),i.innerHTML='<span class="btn-txt svelte-zvgd0e">Home</span>',t=L(),s=o("div"),s.innerHTML='<span class="btn-txt svelte-zvgd0e">Web app projects</span>',n=L(),r=o("div"),r.innerHTML='<span class="btn-txt svelte-zvgd0e">Website projects</span>',_=L(),d=o("div"),d.innerHTML='<span class="btn-txt svelte-zvgd0e">Design portfolio</span>',j=L(),h=o("div"),h.innerHTML='<span class="btn-txt svelte-zvgd0e">About</span>',y=L(),g=o("div"),c(i,"class","nav-btn svelte-zvgd0e"),c(s,"class","nav-btn svelte-zvgd0e"),c(r,"class","nav-btn svelte-zvgd0e"),c(d,"class","nav-btn svelte-zvgd0e"),c(h,"class","nav-btn svelte-zvgd0e"),c(g,"class","close svelte-zvgd0e"),$(g,"background-color",a[1]?"#191a22":"#eee"),c(e,"class","nav svelte-zvgd0e"),$(e,"background-image","url("+oe+")")},m(u,f){I(u,e,f),l(e,i),l(e,t),l(e,s),l(e,n),l(e,r),l(e,_),l(e,d),l(e,j),l(e,h),l(e,y),l(e,g),w=!0,v||(p=[q(i,"click",a[8]),q(s,"click",a[9]),q(r,"click",a[10]),q(d,"click",a[11]),q(h,"click",a[12])],v=!0)},p(u,f){(!w||f&2)&&$(g,"background-color",u[1]?"#191a22":"#eee")},i(u){w||(P(()=>{k&&k.end(1),T=N(e,G,{x:400,duration:500}),T.start()}),w=!0)},o(u){T&&T.invalidate(),k=ce(e,G,{x:400,duration:500}),w=!1},d(u){u&&O(e),u&&k&&k.end(),v=!1,X(p)}}}function De(a){let e,i;return e=new xe({}),{c(){V(e.$$.fragment)},m(t,s){B(e,t,s),i=!0},i(t){i||(x(e.$$.fragment,t),i=!0)},o(t){M(e.$$.fragment,t),i=!1},d(t){K(e,t)}}}function Me(a){let e,i;return e=new qe({}),{c(){V(e.$$.fragment)},m(t,s){B(e,t,s),i=!0},i(t){i||(x(e.$$.fragment,t),i=!0)},o(t){M(e.$$.fragment,t),i=!1},d(t){K(e,t)}}}function He(a){let e,i;return e=new Te({}),{c(){V(e.$$.fragment)},m(t,s){B(e,t,s),i=!0},i(t){i||(x(e.$$.fragment,t),i=!0)},o(t){M(e.$$.fragment,t),i=!1},d(t){K(e,t)}}}function We(a){let e,i;return e=new we({}),{c(){V(e.$$.fragment)},m(t,s){B(e,t,s),i=!0},i(t){i||(x(e.$$.fragment,t),i=!0)},o(t){M(e.$$.fragment,t),i=!1},d(t){K(e,t)}}}function Ge(a){let e,i;return e=new be({}),{c(){V(e.$$.fragment)},m(t,s){B(e,t,s),i=!0},i(t){i||(x(e.$$.fragment,t),i=!0)},o(t){M(e.$$.fragment,t),i=!1},d(t){K(e,t)}}}function Ie(a){let e=!1,i=()=>{e=!1},t,s,n,r,_,d,j,h,y,g,T=a[2][0].visible?"\u292B":"=",k,w,v,p,u,f,Y,R;P(a[7]);let b=a[2][0].visible&&ne(a);const Z=[Ge,We,He,Me,De],W=[];function ee(m,z){return m[2][1].visible?0:m[2][2].visible?1:m[2][3].visible?2:m[2][4].visible?3:m[2][6].visible?4:-1}return~(p=ee(a))&&(u=W[p]=Z[p](a)),{c(){s=o("div"),b&&b.c(),n=L(),r=o("div"),_=o("span"),d=te(a[3]),j=L(),h=o("span"),h.textContent="\u262F",y=L(),g=o("span"),k=te(T),w=L(),v=o("div"),u&&u.c(),c(_,"class","title svelte-zvgd0e"),c(h,"class","mode svelte-zvgd0e"),c(h,"style",""),c(r,"class","header svelte-zvgd0e"),$(r,"background-color",a[1]?"#191a22":"#eee"),$(r,"color",a[1]?"#eee":"#1e1f29"),c(g,"class","burg svelte-zvgd0e"),$(g,"color",a[1]?"#fff":"#1e1f29"),c(v,"class","content svelte-zvgd0e")},m(m,z){I(m,s,z),b&&b.m(s,null),l(s,n),l(s,r),l(r,_),l(_,d),l(r,j),l(r,h),l(s,y),l(s,g),l(g,k),l(s,w),l(s,v),~p&&W[p].m(v,null),f=!0,Y||(R=[q(Q,"scroll",()=>{e=!0,clearTimeout(t),t=setTimeout(i,100),a[7]()}),q(h,"click",a[6]),q(g,"click",a[4])],Y=!0)},p(m,[z]){z&1&&!e&&(e=!0,clearTimeout(t),scrollTo(Q.pageXOffset,m[0]),t=setTimeout(i,100)),m[2][0].visible?b?(b.p(m,z),z&4&&x(b,1)):(b=ne(m),b.c(),x(b,1),b.m(s,n)):b&&(ae(),M(b,1,1,()=>{b=null}),se()),(!f||z&8)&&ie(d,m[3]),(!f||z&2)&&$(r,"background-color",m[1]?"#191a22":"#eee"),(!f||z&2)&&$(r,"color",m[1]?"#eee":"#1e1f29"),(!f||z&4)&&T!==(T=m[2][0].visible?"\u292B":"=")&&ie(k,T),(!f||z&2)&&$(g,"color",m[1]?"#fff":"#1e1f29");let E=p;p=ee(m),p!==E&&(u&&(ae(),M(W[E],1,1,()=>{W[E]=null}),se()),~p?(u=W[p],u||(u=W[p]=Z[p](m),u.c()),x(u,1),u.m(v,null)):u=null)},i(m){f||(x(b),x(u),f=!0)},o(m){M(b),M(u),f=!1},d(m){m&&O(s),b&&b.d(),~p&&W[p].d(),Y=!1,X(R)}}}function Pe(a,e,i){let t,s;U(a,H,v=>i(2,t=v)),U(a,J,v=>i(3,s=v)),pe(()=>window.scrollTo(0,0));let n;D(J,s=t[1].name,s);let r=!0;document.body.classList.add("dark"),window.visualViewport.width>500&&(document.body.style.backgroundImage=`url(${le})`);function _(){D(H,t[0].visible=!t[0].visible,t)}function d(v){for(let p=1;p<t.length-1;p++)D(H,t[p].visible=!1,t);D(H,t[v].visible=!0,t),D(J,s=t[v].name,s),D(H,t[0].visible=!t[0].visible,t)}function j(){i(1,r=!r),r===!0?(document.body.classList.replace("light","dark"),window.visualViewport.width>500&&(document.body.style.backgroundImage=`url(${le})`)):r===!1&&(document.body.classList.replace("dark","light"),window.visualViewport.width>500&&(document.body.style.backgroundImage=`url(${Ae})`))}function h(){i(0,n=Q.pageYOffset)}return[n,r,t,s,_,d,j,h,()=>d(1),()=>d(2),()=>d(3),()=>d(4),()=>d(6)]}class Oe extends S{constructor(e){super();C(this,e,Pe,Ie,F,{})}}new Oe({target:document.getElementById("app")});
