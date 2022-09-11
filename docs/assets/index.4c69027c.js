import{w as le,S as O,i as C,s as N,e as o,a as q,b as c,c as A,d as P,f as r,l as j,n as x,g as z,h as Y,j as I,k as S,r as X,m as E,o as D,p as ce,t as te,q as M,u as H,v as se,x as ie,y as pe,z as de,A as ae,B as V,C as B,D as K}from"./vendor.7384cd90.js";const ue=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function i(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(s){if(s.ep)return;s.ep=!0;const n=i(s);fetch(s.href,n)}};ue();let W=le([{name:"Nav",visible:!1},{name:"Tasman Kingsley",visible:!0},{name:"Web app projects",visible:!1},{name:"Website projects",visible:!1},{name:"Design portfolio",visible:!1},{name:"Music project",visible:!1},{name:"About",visible:!1}]),J=le("");var he="/assets/apps.2489986f.jpg",me="/assets/giddy-grocery.e94d6cec.jpg",fe="/assets/persona-collage.c8b1d3c9.jpg",oe="/assets/waves.e979ddb3.jpeg";function ge(a){let e,i,t,s,n,l,w,p,_,d,f,g,T,y,$,h,u,b;return{c(){e=o("div"),i=o("div"),i.innerHTML=`<p class="svelte-pfeueb">Hello, Tasman here. This is my portfolio page.</p> 
        <p class="svelte-pfeueb">Feel free to potter about and peruse my projects if you feel like it \u{1F601}</p>`,t=q(),s=o("div"),n=o("div"),l=o("div"),l.innerHTML='<span class="svelte-pfeueb">Web apps</span>',w=q(),p=o("div"),_=o("div"),_.innerHTML='<span class="svelte-pfeueb">Websites</span>',d=q(),f=o("div"),g=o("div"),g.innerHTML='<span class="svelte-pfeueb">Design porfolio</span>',T=q(),y=o("div"),$=o("div"),$.innerHTML='<span class="svelte-pfeueb">About</span>',c(l,"class","card-txt svelte-pfeueb"),c(n,"class","img svelte-pfeueb"),A(n,"background-image","url("+he+")"),c(_,"class","card-txt svelte-pfeueb"),c(p,"class","img svelte-pfeueb"),A(p,"background-image","url("+me+")"),c(g,"class","card-txt svelte-pfeueb"),c(f,"class","img svelte-pfeueb"),A(f,"background-image","url("+fe+")"),c($,"class","card-txt svelte-pfeueb"),c(y,"class","img svelte-pfeueb"),A(y,"background-image","url("+oe+")"),c(s,"class","inner-grid svelte-pfeueb"),c(e,"class","outer-grid svelte-pfeueb")},m(k,F){P(k,e,F),r(e,i),r(e,t),r(e,s),r(s,n),r(n,l),r(s,w),r(s,p),r(p,_),r(s,d),r(s,f),r(f,g),r(s,T),r(s,y),r(y,$),u||(b=[j(n,"click",a[1]),j(p,"click",a[2]),j(f,"click",a[3]),j(y,"click",a[4])],u=!0)},p:x,i(k){h||z(()=>{h=Y(e,I,{x:-400,duration:500}),h.start()})},o:x,d(k){k&&S(e),u=!1,X(b)}}}function ve(a,e,i){let t,s;E(a,W,d=>i(5,t=d)),E(a,J,d=>i(6,s=d)),window.scrollTo(0,0);function n(d){for(let f=1;f<t.length-1;f++)D(W,t[f].visible=!1,t);D(W,t[d].visible=!0,t),D(J,s=t[d].name,s)}return[n,()=>n(2),()=>n(3),()=>n(4),()=>n(6)]}class be extends O{constructor(e){super();C(this,e,ve,ge,N,{})}}function ye(a){let e,i;return{c(){e=o("div"),e.innerHTML=`<iframe src="https://pods.netlify.app/" width="360" height="700" class="svelte-1k2yd30"></iframe> 

    <div class="grid-content svelte-1k2yd30"><h2>Podcast catcher webapp</h2> 
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

    <iframe src="https://kana-kuizu.web.app" width="360" height="700" class="svelte-1k2yd30"></iframe> 

    <div class="grid-content svelte-1k2yd30"><h2>Kana quiz app</h2> 
        <span><a href="https://kana-kuizu.web.app">Web link</a></span><br/> 
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

    <iframe src="https://tasmankingsley.github.io/todo/" width="360" height="700" class="svelte-1k2yd30"></iframe> 

    <div class="grid-content svelte-1k2yd30"><h2>Minimal to-do list</h2> 
        <span><a href="https://tasmankingsley.github.io/todo/">Web link</a></span><br/> 
        <span><a href="https://github.com/tasmankingsley/todo">Github repo</a></span> 
        <h3>Description</h3> 
        <p>A minimal to-do list app. The user can input to-do items and check off the items
            when completed. The app features the ability to edit and remove the list items.
            The user&#39;s list will also be saved in browser local storage for the ability to
            return to list after closinng the page.</p> 

        <h3>Technology stack</h3> 
        <p>This app is built with the svelte framework, javascript, css, and html.</p><br/></div> 

    <iframe src="https://japanesejisho.web.app" width="360" height="700" class="svelte-1k2yd30"></iframe> 

    <div class="grid-content svelte-1k2yd30"><h2>Japanese Jisho</h2> 
        <span><a href="https://japanesejisho.web.app">Web link</a></span><br/> 
        <span><a href="https://github.com/tasmankingsley/japanese-jisho">Github repo</a></span> 
        <h3>Description</h3> 
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem atque vitae quia optio reiciendis earum cum. Quia officia labore, dolor eveniet dolores facilis illo mollitia minima, sequi omnis tempore saepe.</p> 

        <h3>Technology stack</h3> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nostrum, maiores consectetur voluptates necessitatibus odit reiciendis officiis repellat, quas pariatur veritatis harum laborum. Aliquam, quae eos quos iure perferendis quis!</p><br/></div> 

    <iframe src="https://tasmankingsley.github.io/consistency-graph/" width="360" height="700" class="svelte-1k2yd30"></iframe> 

    <div class="grid-content svelte-1k2yd30"><h2>Github-style consistency graph</h2> 
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

    <iframe src="https://tasmankingsley.github.io/tetris/" width="360" height="700" class="svelte-1k2yd30"></iframe> 

    <div class="grid-content svelte-1k2yd30"><h2>Tetris clone</h2> 
        <span><a href="https://tasmankingsley.github.io/tetris/">Web link</a></span><br/> 
        <span><a href="https://github.com/tasmankingsley/tetris">Github repo</a></span> 
        <h3>Description</h3> 
        <p>A simple tetris clone. Arrow keys to move, rotate, and drop faster.</p> 

        <h3>Technology stack</h3> 
        <p>This app is built with javascript, css, and html.</p><br/></div> 

    <iframe src="https://tasmankingsley.github.io/new-tab/" width="360" height="700" class="svelte-1k2yd30"></iframe> 

    <div class="grid-content svelte-1k2yd30"><h2>New tab - customisable home page</h2> 
        <span><a href="https://tasmankingsley.github.io/new-tab/">Web link</a></span><br/> 
        <span><a href="https://github.com/tasmankingsley/new-tab">Github repo</a></span> 
        <h3>Description</h3> 
        <p>Designed to be set as a home page or new tab page, intended for displaying and 
            customising favourite links/bookmarks.</p> 

        <h3>Technology stack</h3> 
        <p>This app is built with the svelte framework, javascript, css, and html.</p><br/></div> 

    <iframe src="https://tasmankingsley.github.io/calc/" width="280" height="350" class="svelte-1k2yd30"></iframe> 

    <div class="grid-content svelte-1k2yd30"><h2>Simple calculator</h2> 
        <span><a href="https://tasmankingsley.github.io/calc/">Web link</a></span><br/> 
        <span><a href="https://github.com/tasmankingsley/calc">Github repo</a></span> 
        <h3>Description</h3> 
        <p>A very simple calculator app inspired by the Mac OS calculator.
            One of my first forays into web programming.</p> 

        <h3>Technology stack</h3> 
        <p>This app is built with javascript, css, and html.</p><br/></div>`,c(e,"class","grid svelte-1k2yd30")},m(t,s){P(t,e,s)},p:x,i(t){i||z(()=>{i=Y(e,I,{x:-400,duration:500}),i.start()})},o:x,d(t){t&&S(e)}}}function ke(a){return window.scrollTo(0,0),[]}class we extends O{constructor(e){super();C(this,e,ke,ye,N,{})}}function _e(a){let e,i;return{c(){e=o("div"),e.innerHTML=`<img src="/images/giddy-grocery.jpg" class="svelte-sqtg0y"/> 

    <div class="grid-content svelte-sqtg0y"><h2>Giddy Grocery - online grocery store</h2> 
        <span><a href="https://tasmankingsley.github.io/giddy-grocery/">Web link</a></span> 
        <span><a href="https://github.com/tasmankingsley/giddy-grocery">Github repo</a></span> 
        <h3>Description</h3> 
        <p>This website was a project initally built for a university assignment. The project
            had a specification to fulfill including: the use of image maps for the catalogue, 
            a product details section, a functional shopping cart, and a checkout confirmation and order form page.</p> 
        <p>For the assignment, the app was built with php and mysql for the backend and database on aws.
            However, i have since re-written the php code in js on the front end accompanied with json instead of
            mysql - in order to more easily host the website on github.</p> 

        <h3>Technology stack</h3> 
        <p>This website is built with javascript, jquery, php, sql, json, css, and html.</p><br/></div> 

    <img src="/images/portfolio.jpg" class="svelte-sqtg0y"/> 

    <div class="grid-content svelte-sqtg0y"><h2>This portfolio website</h2> 
        <span><a href="https://tasmankingsley.github.io/">Web link</a></span> 
        <span><a href="https://github.com/tasmankingsley/tasmankingsley.github.io">Github repo</a></span> 
        <h3>Description</h3> 
        <p>The website you are currently looking at!</p> 
        <p>It hosts my coding and design projects.
            It is a SPA style svelte website. It features a custom sweeping navagation system, responsive grid
            layouts, interactive mobile-style web apps, and a dark/light mode toggle.</p> 

        <h3>Technology stack</h3> 
        <p>This website is built with svelte, js, css, and html. This website utilises a 
            single page app (SPA) design - for the time being.</p><br/></div> 

    <img src="/images/artist-website.jpg" class="svelte-sqtg0y"/> 

    <div class="grid-content svelte-sqtg0y"><h2>Artist website</h2> 
        <span><a href="https://artistwebsite.vercel.app/">Web link</a></span> 
        <span><a href="https://github.com/tasmankingsley/artist-website">Github repo</a></span> 
        <h3>Description</h3> 

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aperiam ullam voluptates, itaque nihil repellat ipsa pariatur illo dolorum fugit necessitatibus nobis velit maxime praesentium sed. Modi excepturi sequi officiis!</p> 
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, aliquam necessitatibus quibusdam illo dicta porro! Sint velit odio corporis nihil laboriosam voluptate quia ad quam ipsa culpa! Fugit, excepturi vero.</p> 

        <h3>Technology stack</h3> 
        <p>This website is built with nuxt, vue and javascript</p><br/></div> 

    <img src="/images/car-rental.jpg" class="svelte-sqtg0y"/> 

    <div class="grid-content svelte-sqtg0y"><h2>Car rental fake business</h2> 
        <span><a href="https://tasmankingsley.github.io/psuedo-business/">Web link</a></span> 
        <span><a href="https://github.com/tasmankingsley/psuedo-business">Github repo</a></span> 
        <h3>Description</h3> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p> 

        <h3>Technology stack</h3> 
        <p>This website is built with javascript, jquery, json, css, and html.</p><br/></div>`,c(e,"class","grid svelte-sqtg0y")},m(t,s){P(t,e,s)},p:x,i(t){i||z(()=>{i=Y(e,I,{x:-400,duration:500}),i.start()})},o:x,d(t){t&&S(e)}}}function Te(a){return window.scrollTo(0,0),[]}class je extends O{constructor(e){super();C(this,e,Te,_e,N,{})}}function qe(a){let e,i;return{c(){e=o("div"),e.innerHTML=`<img class="persona svelte-12ypox" src="./images/persona-final.png" alt=""/> 
    <div class="grid-content"><h2>George persona</h2> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p></div> 

    <img class="persona svelte-12ypox" src="./images/Yuna-Persona.png" alt=""/> 
    <div class="grid-content"><h2>Yuna persona</h2> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p></div> 

    <iframe src="https://www.youtube.com/embed/yrPmsU8TLg0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" class="svelte-12ypox"></iframe> 
    <div class="grid-content"><h2>Jamingle prototype app flow</h2> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p></div> 

    <div class="grid-content"><h2>Hi Doge app flow</h2> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p></div>`,c(e,"class","grid svelte-12ypox")},m(t,s){P(t,e,s)},p:x,i(t){i||z(()=>{i=Y(e,I,{x:-400,duration:500}),i.start()})},o:x,d(t){t&&S(e)}}}function $e(a){return window.scrollTo(0,0),[]}class Le extends O{constructor(e){super();C(this,e,$e,qe,N,{})}}function Ae(a){let e,i;return{c(){e=o("div"),e.innerHTML=`<img src="./images/choco-profile.jpg" alt="" class="svelte-19x6bx6"/> 
    <span style="color: #b2c6d3; padding: 20px;" class="svelte-19x6bx6">About me</span> 
    <p class="svelte-19x6bx6">Hello fellow human! My name is Tasman. <br/><br/>
    I am an amateur Interaction Designer, Software Developer, and Music Producer.<br/><br/>
    Thanks for finding your way to my portfolio page. Be sure to poke around and look at my projects if you&#39;d like.<br/><br/>
    Also, check out my music if you find yourself curious, i appreciate the time and curiosity.<br/><br/>
    You can contact me at <a href="mailto: tasmankingsley@gmail.com" style="color: #d3c7b8;">tasmankingsley@gmail.com</a></p>`,c(e,"class","content-div svelte-19x6bx6")},m(t,s){P(t,e,s)},p:x,i(t){i||z(()=>{i=Y(e,I,{x:-400,duration:500}),i.start()})},o:x,d(t){t&&S(e)}}}class xe extends O{constructor(e){super();C(this,e,null,Ae,N,{})}}var ne="/assets/background-dark.f1a90866.png",Me="/assets/background-light.fa5a2698.png";const{window:Q}=de;function re(a){let e,i,t,s,n,l,w,p,_,d,f,g,T,y,$;return{c(){e=o("div"),i=o("div"),i.innerHTML='<span class="btn-txt svelte-1q2y0jf">Home</span>',t=q(),s=o("div"),s.innerHTML='<span class="btn-txt svelte-1q2y0jf">Web app projects</span>',n=q(),l=o("div"),l.innerHTML='<span class="btn-txt svelte-1q2y0jf">Website projects</span>',w=q(),p=o("div"),p.innerHTML='<span class="btn-txt svelte-1q2y0jf">Design portfolio</span>',_=q(),d=o("div"),d.innerHTML='<span class="btn-txt svelte-1q2y0jf">About</span>',c(i,"class","nav-btn svelte-1q2y0jf"),c(s,"class","nav-btn svelte-1q2y0jf"),c(l,"class","nav-btn svelte-1q2y0jf"),c(p,"class","nav-btn svelte-1q2y0jf"),c(d,"class","nav-btn svelte-1q2y0jf"),c(e,"class","nav svelte-1q2y0jf"),A(e,"background-image","url("+oe+")")},m(h,u){P(h,e,u),r(e,i),r(e,t),r(e,s),r(e,n),r(e,l),r(e,w),r(e,p),r(e,_),r(e,d),T=!0,y||($=[j(i,"click",a[8]),j(s,"click",a[9]),j(l,"click",a[10]),j(p,"click",a[11]),j(d,"click",a[12])],y=!0)},p:x,i(h){T||(z(()=>{g&&g.end(1),f=Y(e,I,{x:400,duration:500}),f.start()}),T=!0)},o(h){f&&f.invalidate(),g=ce(e,I,{x:400,duration:500}),T=!1},d(h){h&&S(e),h&&g&&g.end(),y=!1,X($)}}}function De(a){let e,i;return e=new xe({}),{c(){V(e.$$.fragment)},m(t,s){B(e,t,s),i=!0},i(t){i||(M(e.$$.fragment,t),i=!0)},o(t){H(e.$$.fragment,t),i=!1},d(t){K(e,t)}}}function He(a){let e,i;return e=new Le({}),{c(){V(e.$$.fragment)},m(t,s){B(e,t,s),i=!0},i(t){i||(M(e.$$.fragment,t),i=!0)},o(t){H(e.$$.fragment,t),i=!1},d(t){K(e,t)}}}function We(a){let e,i;return e=new je({}),{c(){V(e.$$.fragment)},m(t,s){B(e,t,s),i=!0},i(t){i||(M(e.$$.fragment,t),i=!0)},o(t){H(e.$$.fragment,t),i=!1},d(t){K(e,t)}}}function Ge(a){let e,i;return e=new we({}),{c(){V(e.$$.fragment)},m(t,s){B(e,t,s),i=!0},i(t){i||(M(e.$$.fragment,t),i=!0)},o(t){H(e.$$.fragment,t),i=!1},d(t){K(e,t)}}}function Ie(a){let e,i;return e=new be({}),{c(){V(e.$$.fragment)},m(t,s){B(e,t,s),i=!0},i(t){i||(M(e.$$.fragment,t),i=!0)},o(t){H(e.$$.fragment,t),i=!1},d(t){K(e,t)}}}function Pe(a){let e=!1,i=()=>{e=!1},t,s,n,l,w,p,_,d,f,g,T=a[2][0].visible?"\u292B":"=",y,$,h,u,b,k,F,R;z(a[7]);let v=a[2][0].visible&&re(a);const Z=[Ie,Ge,We,He,De],G=[];function ee(m,L){return m[2][1].visible?0:m[2][2].visible?1:m[2][3].visible?2:m[2][4].visible?3:m[2][6].visible?4:-1}return~(u=ee(a))&&(b=G[u]=Z[u](a)),{c(){s=o("div"),v&&v.c(),n=q(),l=o("div"),w=o("span"),p=te(a[3]),_=q(),d=o("span"),d.textContent="\u262F",f=q(),g=o("span"),y=te(T),$=q(),h=o("div"),b&&b.c(),c(w,"class","title svelte-1q2y0jf"),c(d,"class","mode svelte-1q2y0jf"),c(d,"style",""),c(l,"class","header svelte-1q2y0jf"),A(l,"background-color",a[1]?"#191a22":"#eee"),A(l,"color",a[1]?"#eee":"#1e1f29"),c(g,"class","burg svelte-1q2y0jf"),A(g,"color",a[1]?"#fff":"#1e1f29"),c(h,"class","content svelte-1q2y0jf")},m(m,L){P(m,s,L),v&&v.m(s,null),r(s,n),r(s,l),r(l,w),r(w,p),r(l,_),r(l,d),r(s,f),r(s,g),r(g,y),r(s,$),r(s,h),~u&&G[u].m(h,null),k=!0,F||(R=[j(Q,"scroll",()=>{e=!0,clearTimeout(t),t=setTimeout(i,100),a[7]()}),j(d,"click",a[6]),j(g,"click",a[4])],F=!0)},p(m,[L]){L&1&&!e&&(e=!0,clearTimeout(t),scrollTo(Q.pageXOffset,m[0]),t=setTimeout(i,100)),m[2][0].visible?v?(v.p(m,L),L&4&&M(v,1)):(v=re(m),v.c(),M(v,1),v.m(s,n)):v&&(ae(),H(v,1,1,()=>{v=null}),se()),(!k||L&8)&&ie(p,m[3]),(!k||L&2)&&A(l,"background-color",m[1]?"#191a22":"#eee"),(!k||L&2)&&A(l,"color",m[1]?"#eee":"#1e1f29"),(!k||L&4)&&T!==(T=m[2][0].visible?"\u292B":"=")&&ie(y,T),(!k||L&2)&&A(g,"color",m[1]?"#fff":"#1e1f29");let U=u;u=ee(m),u!==U&&(b&&(ae(),H(G[U],1,1,()=>{G[U]=null}),se()),~u?(b=G[u],b||(b=G[u]=Z[u](m),b.c()),M(b,1),b.m(h,null)):b=null)},i(m){k||(M(v),M(b),k=!0)},o(m){H(v),H(b),k=!1},d(m){m&&S(s),v&&v.d(),~u&&G[u].d(),F=!1,X(R)}}}function ze(a,e,i){let t,s;E(a,W,h=>i(2,t=h)),E(a,J,h=>i(3,s=h)),pe(()=>window.scrollTo(0,0));let n;D(J,s=t[1].name,s);let l=!0;document.body.classList.add("dark"),window.visualViewport.width>500&&(document.body.style.backgroundImage=`url(${ne})`);function w(){D(W,t[0].visible=!t[0].visible,t)}function p(h){for(let u=1;u<t.length-1;u++)D(W,t[u].visible=!1,t);D(W,t[h].visible=!0,t),D(J,s=t[h].name,s),D(W,t[0].visible=!t[0].visible,t)}function _(){i(1,l=!l),l===!0?(document.body.classList.replace("light","dark"),window.visualViewport.width>500&&(document.body.style.backgroundImage=`url(${ne})`)):l===!1&&(document.body.classList.replace("dark","light"),window.visualViewport.width>500&&(document.body.style.backgroundImage=`url(${Me})`))}function d(){i(0,n=Q.pageYOffset)}return[n,l,t,s,w,p,_,d,()=>p(1),()=>p(2),()=>p(3),()=>p(4),()=>p(6)]}class Se extends O{constructor(e){super();C(this,e,ze,Pe,N,{})}}new Se({target:document.getElementById("app")});
