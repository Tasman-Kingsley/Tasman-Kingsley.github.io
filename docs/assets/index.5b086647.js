import{w as re,S,i as C,s as E,e as r,a as x,b as c,c as $,d as G,f as l,l as L,n as A,g as P,h as F,j as I,k as O,r as X,m as K,o as D,p as R,q as pe,t as se,u as z,v as M,x as ie,y as ae,z as de,A as le,B as J,C as V,D as B}from"./vendor.457b9c0d.js";const he=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function i(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(s){if(s.ep)return;s.ep=!0;const n=i(s);fetch(s.href,n)}};he();let H=re([{name:"Nav",visible:!1},{name:"Tasman Kingsley",visible:!0},{name:"Web app projects",visible:!1},{name:"Website projects",visible:!1},{name:"Design portfolio",visible:!1},{name:"Music project",visible:!1},{name:"About",visible:!1}]),Y=re("");var ue="/assets/apps.2489986f.jpg",ge="/assets/giddy-grocery.e94d6cec.jpg",me="/assets/persona-collage.c8b1d3c9.jpg",ce="/assets/waves.e979ddb3.jpeg";function ve(a){let e,i,t,s,n,o,_,h,T,u,w,v,j,y,k,m,p,d;return{c(){e=r("div"),i=r("div"),i.innerHTML=`<p class="svelte-1bx2sj">Hello, Tasman here. This is my portfolio page. <br/>
            Feel free to potter about and peruse my projects if you feel like it \u{1F601}</p>`,t=x(),s=r("div"),n=r("div"),o=r("div"),o.innerHTML='<span class="svelte-1bx2sj">Web apps</span>',_=x(),h=r("div"),T=r("div"),T.innerHTML='<span class="svelte-1bx2sj">Websites</span>',u=x(),w=r("div"),v=r("div"),v.innerHTML='<span class="svelte-1bx2sj">Design porfolio</span>',j=x(),y=r("div"),k=r("div"),k.innerHTML='<span class="svelte-1bx2sj">About</span>',c(o,"class","card-txt svelte-1bx2sj"),c(n,"class","img svelte-1bx2sj"),$(n,"background-image","url("+ue+")"),c(T,"class","card-txt svelte-1bx2sj"),c(h,"class","img svelte-1bx2sj"),$(h,"background-image","url("+ge+")"),c(v,"class","card-txt svelte-1bx2sj"),c(w,"class","img svelte-1bx2sj"),$(w,"background-image","url("+me+")"),c(k,"class","card-txt svelte-1bx2sj"),c(y,"class","img svelte-1bx2sj"),$(y,"background-image","url("+ce+")"),c(s,"class","inner-grid svelte-1bx2sj"),c(e,"class","outer-grid svelte-1bx2sj")},m(b,N){G(b,e,N),l(e,i),l(e,t),l(e,s),l(s,n),l(n,o),l(s,_),l(s,h),l(h,T),l(s,u),l(s,w),l(w,v),l(s,j),l(s,y),l(y,k),p||(d=[L(n,"click",a[1]),L(h,"click",a[2]),L(w,"click",a[3]),L(y,"click",a[4])],p=!0)},p:A,i(b){m||P(()=>{m=F(e,I,{x:-400,duration:500}),m.start()})},o:A,d(b){b&&O(e),p=!1,X(d)}}}function be(a,e,i){let t,s;K(a,H,u=>i(5,t=u)),K(a,Y,u=>i(6,s=u)),window.scrollTo(0,0);function n(u){for(let w=1;w<t.length-1;w++)D(H,t[w].visible=!1,t);D(H,t[u].visible=!0,t),D(Y,s=t[u].name,s)}return[n,()=>n(2),()=>n(3),()=>n(4),()=>n(6)]}class fe extends S{constructor(e){super();C(this,e,be,ve,E,{})}}function we(a){let e,i;return{c(){e=r("div"),e.innerHTML=`<div class="a1 svelte-1owgbpl"><iframe src="https://pods.netlify.app/" width="360" height="700" class="svelte-1owgbpl"></iframe></div> 

    <div class="content c1 svelte-1owgbpl"><h2 class="svelte-1owgbpl">Podcast catcher web app</h2> 
        <span><a href="https://pods.netlify.app/">Web link</a></span> 
        <span><a href="https://github.com/tasmankingsley/podcast-app">Github repo</a></span> 
        <h3 class="svelte-1owgbpl">Description</h3> 
        <p>This is my version of a podcast rss feed catcher. This app will allow you to 
            either manually add rss feeds, or search for a podcast feed (via the itunes api)
            and add podcasts that way.
            Added podcast shows will then be displayed on the home tab, you can then 
            navigate through to the show episodes, view the episode notes, and play episodes.</p> 
        <p>The app features a player which will continue to play an episode even while 
            browsing through the app or minimising the web browser.
            The app will remember your added shows when you return to the app via browser
            local storage.</p> 

        <h3 class="svelte-1owgbpl">Technology stack</h3> 
        <p>This app is built with the svelte framework, netlify functions, itunes search api, 
            javascript, css, and html.</p> 

        <h3 class="svelte-1owgbpl">Future considerations and implementations</h3> 
        <p>I would like upgrade this into a progressive web app (PWA), i also need to fix a CORS issue for some podcasts.</p><br/></div> 



    <div class="a2 hidden svelte-1owgbpl"><iframe src="https://kana-kuizu.web.app" width="360" height="700" class="svelte-1owgbpl"></iframe></div> 
    
    <div class="content c2 hidden svelte-1owgbpl"><h2 class="svelte-1owgbpl">Kana quiz app</h2> 
        <span><a href="https://kana-kuizu.web.app">Web link</a></span><br/> 
        <span><a href="https://github.com/tasmankingsley/kana-kuizu">Github repo</a></span> 
        <h3 class="svelte-1owgbpl">Description</h3> 
        <p>A simple quiz app for learning the Japanese kana syllabaries: hiragana and katakana.
            The app features an option menu on the home page where you can choose whether to
            study hiragana, katakana, or both at the same time.</p> 
        <p>The quiz presents a randomized grid of the kana, and invites the user to remember
            the kana and input the corresponding romaji. The app will renforce learning and memory
            by validating the input and giving color feedback to the user for correct/incorrect answers.</p> 
        <p>Upon completing or ending the quiz, the user will get their score and feeback on the results screen.</p> 

        <h3 class="svelte-1owgbpl">Technology stack</h3> 
        <p>This app is built with the vue framework, javascript, css, and html.</p></div> 



    <div class="a3 hidden svelte-1owgbpl"><iframe src="https://tasmankingsley.github.io/todo/" width="360" height="700" class="svelte-1owgbpl"></iframe></div> 

    <div class="content c3 hidden svelte-1owgbpl"><h2 class="svelte-1owgbpl">Minimal to-do list</h2> 
        <span><a href="https://tasmankingsley.github.io/todo/">Web link</a></span><br/> 
        <span><a href="https://github.com/tasmankingsley/todo">Github repo</a></span> 
        <h3 class="svelte-1owgbpl">Description</h3> 
        <p>A minimal to-do list app. The user can input to-do items and check off the items
            when completed. The app features the ability to edit and remove the list items.
            The user&#39;s list will also be saved in browser local storage for the ability to
            return to list after closinng the page.</p> 

        <h3 class="svelte-1owgbpl">Technology stack</h3> 
        <p>This app is built with the svelte framework, javascript, css, and html.</p></div> 



    <div class="a4 hidden svelte-1owgbpl"><iframe src="https://japanesejisho.web.app" width="360" height="700" class="svelte-1owgbpl"></iframe></div> 

    <div class="content c4 hidden svelte-1owgbpl"><h2 class="svelte-1owgbpl">Japanese Jisho</h2> 
        <span><a href="https://japanesejisho.web.app">Web link</a></span><br/> 
        <span><a href="https://github.com/tasmankingsley/japanese-jisho">Github repo</a></span> 
        <h3 class="svelte-1owgbpl">Description</h3> 
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem atque vitae quia optio reiciendis earum cum. Quia officia labore, dolor eveniet dolores facilis illo mollitia minima, sequi omnis tempore saepe.</p> 

        <h3 class="svelte-1owgbpl">Technology stack</h3> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nostrum, maiores consectetur voluptates necessitatibus odit reiciendis officiis repellat, quas pariatur veritatis harum laborum. Aliquam, quae eos quos iure perferendis quis!</p></div> 



    <div class="a5 hidden svelte-1owgbpl"><iframe src="https://tasmankingsley.github.io/consistency-graph/" width="360" height="700" class="svelte-1owgbpl"></iframe></div> 
    
    <div class="content c5 hidden svelte-1owgbpl"><h2 class="svelte-1owgbpl">Github-style consistency graph</h2> 
        <span><a href="https://tasmankingsley.github.io/consistency-graph/">Web link</a></span><br/> 
        <span><a href="https://github.com/tasmankingsley/consistency-graph">Github repo</a></span> 
        <h3 class="svelte-1owgbpl">Description</h3> 
        <p>A daily visual progress tracker inspired by the github contribution graph.
            The app will allow the user to check the day off as done (for tracking any goal).
            Progress will be saved in browser storage, and the graph will keep track of time and
            advance forward each day.</p> 
        <p>The user can initialize the graph, manually advance the day (for testing), and 
            add or delete graphs.</p> 

        <h3 class="svelte-1owgbpl">Technology stack</h3> 
        <p>This app is built with the svelte framework, javascript, css, and html.</p></div> 



    <div class="a6 hidden svelte-1owgbpl"><iframe src="https://tasmankingsley.github.io/tetris/" width="360" height="700" class="svelte-1owgbpl"></iframe></div> 

    <div class="content c6 hidden svelte-1owgbpl"><h2 class="svelte-1owgbpl">Tetris clone</h2> 
        <span><a href="https://tasmankingsley.github.io/tetris/">Web link</a></span><br/> 
        <span><a href="https://github.com/tasmankingsley/tetris">Github repo</a></span> 
        <h3 class="svelte-1owgbpl">Description</h3> 
        <p>A simple tetris clone. Arrow keys to move, rotate, and drop faster.</p> 

        <h3 class="svelte-1owgbpl">Technology stack</h3> 
        <p>This app is built with javascript, css, and html.</p></div> 



    <div class="a7 hidden svelte-1owgbpl"><iframe src="https://tasmankingsley.github.io/new-tab/" width="360" height="700" class="svelte-1owgbpl"></iframe></div> 

    <div class="content c7 hidden svelte-1owgbpl"><h2 class="svelte-1owgbpl">New tab - customisable home page</h2> 
        <span><a href="https://tasmankingsley.github.io/new-tab/">Web link</a></span><br/> 
        <span><a href="https://github.com/tasmankingsley/new-tab">Github repo</a></span> 
        <h3 class="svelte-1owgbpl">Description</h3> 
        <p>Designed to be set as a home page or new tab page, intended for displaying and 
            customising favourite links/bookmarks.</p> 

        <h3 class="svelte-1owgbpl">Technology stack</h3> 
        <p>This app is built with the svelte framework, javascript, css, and html.</p></div> 


    
    <div class="a8 hidden svelte-1owgbpl"><iframe src="https://tasmankingsley.github.io/calc/" width="280" height="350" class="svelte-1owgbpl"></iframe></div> 

    <div class="content c8 hidden svelte-1owgbpl"><h2 class="svelte-1owgbpl">Simple calculator</h2> 
        <span><a href="https://tasmankingsley.github.io/calc/">Web link</a></span><br/> 
        <span><a href="https://github.com/tasmankingsley/calc">Github repo</a></span> 
        <h3 class="svelte-1owgbpl">Description</h3> 
        <p>A very simple calculator app inspired by the Mac OS calculator.
            One of my first forays into web programming.</p> 

        <h3 class="svelte-1owgbpl">Technology stack</h3> 
        <p>This app is built with javascript, css, and html.</p></div>`,c(e,"class","grid svelte-1owgbpl")},m(t,s){G(t,e,s)},p:A,i(t){i||P(()=>{i=F(e,I,{x:-400,duration:500}),i.start()})},o:A,d(t){t&&O(e)}}}function ye(a){return window.scrollTo(0,0),R(()=>{const e=new IntersectionObserver(t=>{t.forEach(s=>{s.isIntersecting&&s.target.classList.add("show")})});document.querySelectorAll(".hidden").forEach(t=>e.observe(t))}),[]}class ke extends S{constructor(e){super();C(this,e,ye,we,E,{})}}function _e(a){let e,i;return{c(){e=r("div"),e.innerHTML=`<img src="/images/giddy-grocery.jpg" class="svelte-12fxr1p"/> 

    <div class="grid-content"><h2>Giddy Grocery - online store</h2> 
        <span><a href="https://tasmankingsley.github.io/giddy-grocery/">Web link</a></span> 
        <span><a href="https://github.com/tasmankingsley/giddy-grocery">Github repo</a></span> 
        <h3 class="svelte-12fxr1p">Description</h3> 
        <p>This website was a project initally built for a university assignment. The project
            had a specification to fulfill including: the use of image maps for the catalogue, 
            a product details section, a functional shopping cart, and a checkout confirmation and order form page.</p> 
        <p>For the assignment, the app was built with php and mysql for the backend and database on aws.
            However, i have since re-written the php code in js on the front end accompanied with json instead of
            mysql - in order to more easily host the website on github.</p> 

        <h3 class="svelte-12fxr1p">Technology stack</h3> 
        <p>This website is built with javascript, jquery, php, sql, json, css, and html.</p><br/></div> 

    <img class="hidden svelte-12fxr1p" src="/images/portfolio.jpg"/> 

    <div class="grid-content hidden"><h2>This portfolio website</h2> 
        <span><a href="https://tasmankingsley.github.io/">Web link</a></span> 
        <span><a href="https://github.com/tasmankingsley/tasmankingsley.github.io">Github repo</a></span> 
        <h3 class="svelte-12fxr1p">Description</h3> 
        <p>The website you are currently looking at!</p> 
        <p>It hosts my coding and design projects.
            It is a SPA style svelte website. It features a custom sweeping navagation system, responsive grid
            layouts, interactive mobile-style web apps, and a dark/light mode toggle.</p> 

        <h3 class="svelte-12fxr1p">Technology stack</h3> 
        <p>This website is built with svelte, js, css, and html. This website utilises a 
            single page app (SPA) design - for the time being.</p><br/></div> 

    <img class="hidden svelte-12fxr1p" src="/images/artist-website.jpg"/> 

    <div class="grid-content hidden"><h2>Artist website</h2> 
        <span><a href="https://artistwebsite.vercel.app/">Web link</a></span> 
        <span><a href="https://github.com/tasmankingsley/artist-website">Github repo</a></span> 
        <h3 class="svelte-12fxr1p">Description</h3> 

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aperiam ullam voluptates, itaque nihil repellat ipsa pariatur illo dolorum fugit necessitatibus nobis velit maxime praesentium sed. Modi excepturi sequi officiis!</p> 
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, aliquam necessitatibus quibusdam illo dicta porro! Sint velit odio corporis nihil laboriosam voluptate quia ad quam ipsa culpa! Fugit, excepturi vero.</p> 

        <h3 class="svelte-12fxr1p">Technology stack</h3> 
        <p>This website is built with nuxt, vue and javascript</p><br/></div> 

    <img class="hidden svelte-12fxr1p" src="/images/car-rental.jpg"/> 

    <div class="grid-content hidden"><h2>Car rental - fake business</h2> 
        <span><a href="https://tasmankingsley.github.io/psuedo-business/">Web link</a></span> 
        <span><a href="https://github.com/tasmankingsley/psuedo-business">Github repo</a></span> 
        <h3 class="svelte-12fxr1p">Description</h3> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p> 

        <h3 class="svelte-12fxr1p">Technology stack</h3> 
        <p>This website is built with javascript, jquery, json, css, and html.</p><br/></div>`,c(e,"class","grid svelte-12fxr1p")},m(t,s){G(t,e,s)},p:A,i(t){i||P(()=>{i=F(e,I,{x:-400,duration:500}),i.start()})},o:A,d(t){t&&O(e)}}}function Te(a){return window.scrollTo(0,0),R(()=>{const e=new IntersectionObserver(t=>{t.forEach(s=>{s.isIntersecting&&s.target.classList.add("show")})});document.querySelectorAll(".hidden").forEach(t=>e.observe(t))}),[]}class je extends S{constructor(e){super();C(this,e,Te,_e,E,{})}}function $e(a){let e,i;return{c(){e=r("div"),e.innerHTML=`<img class="persona p1 svelte-nbhp8t" src="./images/persona-final.png" alt=""/> 
    <img class="persona p2 svelte-nbhp8t" src="./images/Yuna-Persona.png" alt=""/> 
    <div class="persona-content svelte-nbhp8t"><h2>Personas</h2> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p></div> 


    <iframe src="https://www.youtube.com/embed/yrPmsU8TLg0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" class="svelte-nbhp8t"></iframe> 
    <div class="grid-content"><h2>Jamingle prototype app flow</h2> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p></div> 

    <iframe src="https://www.youtube.com/embed/jPtX_QU5gz4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" class="svelte-nbhp8t"></iframe> 
    <div class="grid-content"><h2>HiDoge prototype app flow</h2> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p></div>`,c(e,"class","grid svelte-nbhp8t")},m(t,s){G(t,e,s)},p:A,i(t){i||P(()=>{i=F(e,I,{x:-400,duration:500}),i.start()})},o:A,d(t){t&&O(e)}}}function xe(a){return window.scrollTo(0,0),[]}class Le extends S{constructor(e){super();C(this,e,xe,$e,E,{})}}function qe(a){let e,i;return{c(){e=r("div"),e.innerHTML=`<img src="./images/choco-profile.jpg" alt="" class="svelte-sbkeb8"/> 
    <span style="color: #7e9ec7; padding: 20px;" class="svelte-sbkeb8">About me</span> 
    <p class="svelte-sbkeb8">Hello fellow human! My name is Tasman. <br/><br/>
    I am a Web Developer and Interaction Designer.<br/>
    I am mostly self-taught, although i have completed various programming and design subjects throughout my university education too.<br/><br/>
    Thank you for finding your way to my portfolio page. Be sure to hang around and take a look at my projects if you&#39;d like.<br/>
    I appreciate your time and curiosity.<br/><br/>
    You can contact me at <a href="mailto: tasmankingsley@gmail.com" style="color: #78b2aa;">tasmankingsley@gmail.com</a></p>`,c(e,"class","content-div svelte-sbkeb8")},m(t,s){G(t,e,s)},p:A,i(t){i||P(()=>{i=F(e,I,{x:-400,duration:500}),i.start()})},o:A,d(t){t&&O(e)}}}class ze extends S{constructor(e){super();C(this,e,null,qe,E,{})}}var ne="/assets/background-dark.f1a90866.png",Ae="/assets/background-light.fa5a2698.png";const{window:Q}=de;function oe(a){let e,i,t,s,n,o,_,h,T,u,w,v,j,y,k,m,p;return{c(){e=r("div"),i=r("div"),i.innerHTML='<span class="btn-txt svelte-zvgd0e">Home</span>',t=x(),s=r("div"),s.innerHTML='<span class="btn-txt svelte-zvgd0e">Web app projects</span>',n=x(),o=r("div"),o.innerHTML='<span class="btn-txt svelte-zvgd0e">Website projects</span>',_=x(),h=r("div"),h.innerHTML='<span class="btn-txt svelte-zvgd0e">Design portfolio</span>',T=x(),u=r("div"),u.innerHTML='<span class="btn-txt svelte-zvgd0e">About</span>',w=x(),v=r("div"),c(i,"class","nav-btn svelte-zvgd0e"),c(s,"class","nav-btn svelte-zvgd0e"),c(o,"class","nav-btn svelte-zvgd0e"),c(h,"class","nav-btn svelte-zvgd0e"),c(u,"class","nav-btn svelte-zvgd0e"),c(v,"class","close svelte-zvgd0e"),$(v,"background-color",a[1]?"#191a22":"#eee"),c(e,"class","nav svelte-zvgd0e"),$(e,"background-image","url("+ce+")")},m(d,b){G(d,e,b),l(e,i),l(e,t),l(e,s),l(e,n),l(e,o),l(e,_),l(e,h),l(e,T),l(e,u),l(e,w),l(e,v),k=!0,m||(p=[L(i,"click",a[8]),L(s,"click",a[9]),L(o,"click",a[10]),L(h,"click",a[11]),L(u,"click",a[12])],m=!0)},p(d,b){(!k||b&2)&&$(v,"background-color",d[1]?"#191a22":"#eee")},i(d){k||(P(()=>{y&&y.end(1),j=F(e,I,{x:400,duration:500}),j.start()}),k=!0)},o(d){j&&j.invalidate(),y=pe(e,I,{x:400,duration:500}),k=!1},d(d){d&&O(e),d&&y&&y.end(),m=!1,X(p)}}}function De(a){let e,i;return e=new ze({}),{c(){J(e.$$.fragment)},m(t,s){V(e,t,s),i=!0},i(t){i||(z(e.$$.fragment,t),i=!0)},o(t){M(e.$$.fragment,t),i=!1},d(t){B(e,t)}}}function Me(a){let e,i;return e=new Le({}),{c(){J(e.$$.fragment)},m(t,s){V(e,t,s),i=!0},i(t){i||(z(e.$$.fragment,t),i=!0)},o(t){M(e.$$.fragment,t),i=!1},d(t){B(e,t)}}}function He(a){let e,i;return e=new je({}),{c(){J(e.$$.fragment)},m(t,s){V(e,t,s),i=!0},i(t){i||(z(e.$$.fragment,t),i=!0)},o(t){M(e.$$.fragment,t),i=!1},d(t){B(e,t)}}}function We(a){let e,i;return e=new ke({}),{c(){J(e.$$.fragment)},m(t,s){V(e,t,s),i=!0},i(t){i||(z(e.$$.fragment,t),i=!0)},o(t){M(e.$$.fragment,t),i=!1},d(t){B(e,t)}}}function Ie(a){let e,i;return e=new fe({}),{c(){J(e.$$.fragment)},m(t,s){V(e,t,s),i=!0},i(t){i||(z(e.$$.fragment,t),i=!0)},o(t){M(e.$$.fragment,t),i=!1},d(t){B(e,t)}}}function Ge(a){let e=!1,i=()=>{e=!1},t,s,n,o,_,h,T,u,w,v,j=a[2][0].visible?"\u292B":"=",y,k,m,p,d,b,N,Z;P(a[7]);let f=a[2][0].visible&&oe(a);const ee=[Ie,We,He,Me,De],W=[];function te(g,q){return g[2][1].visible?0:g[2][2].visible?1:g[2][3].visible?2:g[2][4].visible?3:g[2][6].visible?4:-1}return~(p=te(a))&&(d=W[p]=ee[p](a)),{c(){s=r("div"),f&&f.c(),n=x(),o=r("div"),_=r("span"),h=se(a[3]),T=x(),u=r("span"),u.textContent="\u262F",w=x(),v=r("span"),y=se(j),k=x(),m=r("div"),d&&d.c(),c(_,"class","title svelte-zvgd0e"),c(u,"class","mode svelte-zvgd0e"),c(u,"style",""),c(o,"class","header svelte-zvgd0e"),$(o,"background-color",a[1]?"#191a22":"#eee"),$(o,"color",a[1]?"#eee":"#1e1f29"),c(v,"class","burg svelte-zvgd0e"),$(v,"color",a[1]?"#fff":"#1e1f29"),c(m,"class","content svelte-zvgd0e")},m(g,q){G(g,s,q),f&&f.m(s,null),l(s,n),l(s,o),l(o,_),l(_,h),l(o,T),l(o,u),l(s,w),l(s,v),l(v,y),l(s,k),l(s,m),~p&&W[p].m(m,null),b=!0,N||(Z=[L(Q,"scroll",()=>{e=!0,clearTimeout(t),t=setTimeout(i,100),a[7]()}),L(u,"click",a[6]),L(v,"click",a[4])],N=!0)},p(g,[q]){q&1&&!e&&(e=!0,clearTimeout(t),scrollTo(Q.pageXOffset,g[0]),t=setTimeout(i,100)),g[2][0].visible?f?(f.p(g,q),q&4&&z(f,1)):(f=oe(g),f.c(),z(f,1),f.m(s,n)):f&&(le(),M(f,1,1,()=>{f=null}),ie()),(!b||q&8)&&ae(h,g[3]),(!b||q&2)&&$(o,"background-color",g[1]?"#191a22":"#eee"),(!b||q&2)&&$(o,"color",g[1]?"#eee":"#1e1f29"),(!b||q&4)&&j!==(j=g[2][0].visible?"\u292B":"=")&&ae(y,j),(!b||q&2)&&$(v,"color",g[1]?"#fff":"#1e1f29");let U=p;p=te(g),p!==U&&(d&&(le(),M(W[U],1,1,()=>{W[U]=null}),ie()),~p?(d=W[p],d||(d=W[p]=ee[p](g),d.c()),z(d,1),d.m(m,null)):d=null)},i(g){b||(z(f),z(d),b=!0)},o(g){M(f),M(d),b=!1},d(g){g&&O(s),f&&f.d(),~p&&W[p].d(),N=!1,X(Z)}}}function Pe(a,e,i){let t,s;K(a,H,m=>i(2,t=m)),K(a,Y,m=>i(3,s=m)),R(()=>window.scrollTo(0,0));let n;D(Y,s=t[1].name,s);let o=!0;document.body.classList.add("dark"),window.visualViewport.width>500&&(document.body.style.backgroundImage=`url(${ne})`);function _(){D(H,t[0].visible=!t[0].visible,t)}function h(m){for(let p=1;p<t.length-1;p++)D(H,t[p].visible=!1,t);D(H,t[m].visible=!0,t),D(Y,s=t[m].name,s),D(H,t[0].visible=!t[0].visible,t)}function T(){i(1,o=!o),o===!0?(document.body.classList.replace("light","dark"),window.visualViewport.width>500&&(document.body.style.backgroundImage=`url(${ne})`)):o===!1&&(document.body.classList.replace("dark","light"),window.visualViewport.width>500&&(document.body.style.backgroundImage=`url(${Ae})`))}function u(){i(0,n=Q.pageYOffset)}return[n,o,t,s,_,h,T,u,()=>h(1),()=>h(2),()=>h(3),()=>h(4),()=>h(6)]}class Oe extends S{constructor(e){super();C(this,e,Pe,Ge,E,{})}}new Oe({target:document.getElementById("app")});
