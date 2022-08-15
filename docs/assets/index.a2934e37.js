import{w as re,S,i as Y,s as C,e as o,a as j,b as c,c as A,d as P,f as l,l as $,n as q,g as I,h as N,j as G,k as O,r as R,m as U,o as M,p as ce,t as te,q as x,u as H,v as se,x as ie,y as pe,z as de,A as ae,B as K,C as E,D as J}from"./vendor.7384cd90.js";const ue=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function i(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(s){if(s.ep)return;s.ep=!0;const n=i(s);fetch(s.href,n)}};ue();let D=re([{name:"Nav",visible:!1},{name:"Tasman Kingsley",visible:!0},{name:"Web app projects",visible:!1},{name:"Website projects",visible:!1},{name:"Design portfolio",visible:!1},{name:"Music project",visible:!1},{name:"About",visible:!1}]),F=re("");var he="/assets/apps.2489986f.jpg",me="/assets/giddy-grocery.e94d6cec.jpg",ge="/assets/persona-collage.c8b1d3c9.jpg",oe="/assets/waves.e979ddb3.jpeg";function fe(a){let e,i,t,s,n,r,_,p,w,d,g,f,T,y,L,h,u,b;return{c(){e=o("div"),i=o("div"),i.innerHTML=`<p class="svelte-pfeueb">Hello, Tasman here. This is my portfolio page.</p> 
        <p class="svelte-pfeueb">Feel free to potter about and peruse my projects if you feel like it \u{1F601}</p>`,t=j(),s=o("div"),n=o("div"),r=o("div"),r.innerHTML='<span class="svelte-pfeueb">Web apps</span>',_=j(),p=o("div"),w=o("div"),w.innerHTML='<span class="svelte-pfeueb">Websites</span>',d=j(),g=o("div"),f=o("div"),f.innerHTML='<span class="svelte-pfeueb">Design porfolio</span>',T=j(),y=o("div"),L=o("div"),L.innerHTML='<span class="svelte-pfeueb">About</span>',c(r,"class","card-txt svelte-pfeueb"),c(n,"class","img svelte-pfeueb"),A(n,"background-image","url("+he+")"),c(w,"class","card-txt svelte-pfeueb"),c(p,"class","img svelte-pfeueb"),A(p,"background-image","url("+me+")"),c(f,"class","card-txt svelte-pfeueb"),c(g,"class","img svelte-pfeueb"),A(g,"background-image","url("+ge+")"),c(L,"class","card-txt svelte-pfeueb"),c(y,"class","img svelte-pfeueb"),A(y,"background-image","url("+oe+")"),c(s,"class","inner-grid svelte-pfeueb"),c(e,"class","outer-grid svelte-pfeueb")},m(k,B){P(k,e,B),l(e,i),l(e,t),l(e,s),l(s,n),l(n,r),l(s,_),l(s,p),l(p,w),l(s,d),l(s,g),l(g,f),l(s,T),l(s,y),l(y,L),u||(b=[$(n,"click",a[1]),$(p,"click",a[2]),$(g,"click",a[3]),$(y,"click",a[4])],u=!0)},p:q,i(k){h||I(()=>{h=N(e,G,{x:-400,duration:500}),h.start()})},o:q,d(k){k&&O(e),u=!1,R(b)}}}function ve(a,e,i){let t,s;U(a,D,d=>i(5,t=d)),U(a,F,d=>i(6,s=d)),window.scrollTo(0,0);function n(d){for(let g=1;g<t.length-1;g++)M(D,t[g].visible=!1,t);M(D,t[d].visible=!0,t),M(F,s=t[d].name,s)}return[n,()=>n(2),()=>n(3),()=>n(4),()=>n(6)]}class be extends S{constructor(e){super();Y(this,e,ve,fe,C,{})}}function ye(a){let e,i;return{c(){e=o("div"),e.innerHTML=`<iframe src="https://pods.netlify.app/" width="380" height="700" class="svelte-1mes0ar"></iframe> 

    <div class="grid-content svelte-1mes0ar"><h2>Podcast catcher webapp</h2> 
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

    <iframe src="https://tasmankingsley.github.io/kana-kuizu/" width="380" height="700" class="svelte-1mes0ar"></iframe> 

    <div class="grid-content svelte-1mes0ar"><h2>Kana quiz app</h2> 
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

    <iframe src="https://tasmankingsley.github.io/todo/" width="380" height="700" class="svelte-1mes0ar"></iframe> 

    <div class="grid-content svelte-1mes0ar"><h2>Minimal to-do list</h2> 
        <span><a href="https://tasmankingsley.github.io/todo/">Web link</a></span><br/> 
        <span><a href="https://github.com/tasmankingsley/todo">Github repo</a></span> 
        <h3>Description</h3> 
        <p>A minimal to-do list app. The user can input to-do items and check off the items
            when completed. The app features the ability to edit and remove the list items.
            The user&#39;s list will also be saved in browser local storage for the ability to
            return to list after closinng the page.</p> 

        <h3>Technology stack</h3> 
        <p>This app is built with the svelte framework, javascript, css, and html.</p><br/></div> 

    <iframe src="https://tasmankingsley.github.io/consistency-graph/" width="380" height="700" class="svelte-1mes0ar"></iframe> 

    <div class="grid-content svelte-1mes0ar"><h2>Github-style consistency graph</h2> 
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

    <iframe src="https://tasmankingsley.github.io/tetris/" width="380" height="700" class="svelte-1mes0ar"></iframe> 

    <div class="grid-content svelte-1mes0ar"><h2>Tetris clone</h2> 
        <span><a href="https://tasmankingsley.github.io/tetris/">Web link</a></span><br/> 
        <span><a href="https://github.com/tasmankingsley/tetris">Github repo</a></span> 
        <h3>Description</h3> 
        <p>A simple tetris clone. Arrow keys to move, rotate, and drop faster.</p> 

        <h3>Technology stack</h3> 
        <p>This app is built with javascript, css, and html.</p><br/></div> 

    <iframe src="https://tasmankingsley.github.io/new-tab/" width="380" height="700" class="svelte-1mes0ar"></iframe> 

    <div class="grid-content svelte-1mes0ar"><h2>New tab - customisable home page</h2> 
        <span><a href="https://tasmankingsley.github.io/new-tab/">Web link</a></span><br/> 
        <span><a href="https://github.com/tasmankingsley/new-tab">Github repo</a></span> 
        <h3>Description</h3> 
        <p>Designed to be set as a home page or new tab page, intended for displaying and 
            customising favourite links/bookmarks.</p> 

        <h3>Technology stack</h3> 
        <p>This app is built with the svelte framework, javascript, css, and html.</p><br/></div> 

    <iframe src="https://tasmankingsley.github.io/calc/" width="280" height="350" class="svelte-1mes0ar"></iframe> 

    <div class="grid-content svelte-1mes0ar"><h2>Simple calculator</h2> 
        <span><a href="https://tasmankingsley.github.io/calc/">Web link</a></span><br/> 
        <span><a href="https://github.com/tasmankingsley/calc">Github repo</a></span> 
        <h3>Description</h3> 
        <p>A very simple calculator app inspired by the Mac OS calculator.
            One of my first forays into web programming.</p> 

        <h3>Technology stack</h3> 
        <p>This app is built with javascript, css, and html.</p><br/></div>`,c(e,"class","grid svelte-1mes0ar")},m(t,s){P(t,e,s)},p:q,i(t){i||I(()=>{i=N(e,G,{x:-400,duration:500}),i.start()})},o:q,d(t){t&&O(e)}}}function ke(a){return window.scrollTo(0,0),[]}class _e extends S{constructor(e){super();Y(this,e,ke,ye,C,{})}}function we(a){let e,i;return{c(){e=o("div"),e.innerHTML=`<img src="/images/giddy-grocery.jpg" class="svelte-sqtg0y"/> 

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

    <img src="/images/car-rental.jpg" class="svelte-sqtg0y"/> 

    <div class="grid-content svelte-sqtg0y"><h2>Car rental fake business</h2> 
        <span><a href="https://tasmankingsley.github.io/psuedo-business/">Web link</a></span> 
        <span><a href="https://github.com/tasmankingsley/psuedo-business">Github repo</a></span> 
        <h3>Description</h3> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p> 

        <h3>Technology stack</h3> 
        <p>This website is built with javascript, jquery, json, css, and html.</p><br/></div>`,c(e,"class","grid svelte-sqtg0y")},m(t,s){P(t,e,s)},p:q,i(t){i||I(()=>{i=N(e,G,{x:-400,duration:500}),i.start()})},o:q,d(t){t&&O(e)}}}function Te(a){return window.scrollTo(0,0),[]}class $e extends S{constructor(e){super();Y(this,e,Te,we,C,{})}}function je(a){let e,i;return{c(){e=o("div"),e.innerHTML=`<img class="persona svelte-12ypox" src="./images/persona-final.png" alt=""/> 
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
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p></div>`,c(e,"class","grid svelte-12ypox")},m(t,s){P(t,e,s)},p:q,i(t){i||I(()=>{i=N(e,G,{x:-400,duration:500}),i.start()})},o:q,d(t){t&&O(e)}}}function Le(a){return window.scrollTo(0,0),[]}class ze extends S{constructor(e){super();Y(this,e,Le,je,C,{})}}function Ae(a){let e,i;return{c(){e=o("div"),e.innerHTML=`<img src="./images/choco-profile.jpg" alt="" class="svelte-19x6bx6"/> 
    <span style="color: #b2c6d3; padding: 20px;" class="svelte-19x6bx6">About me</span> 
    <p class="svelte-19x6bx6">Hello fellow human! My name is Tasman. <br/><br/>
    I am an amateur Interaction Designer, Software Developer, and Music Producer.<br/><br/>
    Thanks for finding your way to my portfolio page. Be sure to poke around and look at my projects if you&#39;d like.<br/><br/>
    Also, check out my music if you find yourself curious, i appreciate the time and curiosity.<br/><br/>
    You can contact me at <a href="mailto: tasmankingsley@gmail.com" style="color: #d3c7b8;">tasmankingsley@gmail.com</a></p>`,c(e,"class","content-div svelte-19x6bx6")},m(t,s){P(t,e,s)},p:q,i(t){i||I(()=>{i=N(e,G,{x:-400,duration:500}),i.start()})},o:q,d(t){t&&O(e)}}}class qe extends S{constructor(e){super();Y(this,e,null,Ae,C,{})}}var ne="/assets/background-dark.f1a90866.png",xe="/assets/background-light.fa5a2698.png";const{window:Q}=de;function le(a){let e,i,t,s,n,r,_,p,w,d,g,f,T,y,L;return{c(){e=o("div"),i=o("div"),i.innerHTML='<span class="btn-txt svelte-1l1oz3v">Home</span>',t=j(),s=o("div"),s.innerHTML='<span class="btn-txt svelte-1l1oz3v">Web app projects</span>',n=j(),r=o("div"),r.innerHTML='<span class="btn-txt svelte-1l1oz3v">Website projects</span>',_=j(),p=o("div"),p.innerHTML='<span class="btn-txt svelte-1l1oz3v">Design portfolio</span>',w=j(),d=o("div"),d.innerHTML='<span class="btn-txt svelte-1l1oz3v">About</span>',c(i,"class","nav-btn svelte-1l1oz3v"),c(s,"class","nav-btn svelte-1l1oz3v"),c(r,"class","nav-btn svelte-1l1oz3v"),c(p,"class","nav-btn svelte-1l1oz3v"),c(d,"class","nav-btn svelte-1l1oz3v"),c(e,"class","nav svelte-1l1oz3v"),A(e,"background-image","url("+oe+")")},m(h,u){P(h,e,u),l(e,i),l(e,t),l(e,s),l(e,n),l(e,r),l(e,_),l(e,p),l(e,w),l(e,d),T=!0,y||(L=[$(i,"click",a[8]),$(s,"click",a[9]),$(r,"click",a[10]),$(p,"click",a[11]),$(d,"click",a[12])],y=!0)},p:q,i(h){T||(I(()=>{f&&f.end(1),g=N(e,G,{x:400,duration:500}),g.start()}),T=!0)},o(h){g&&g.invalidate(),f=ce(e,G,{x:400,duration:500}),T=!1},d(h){h&&O(e),h&&f&&f.end(),y=!1,R(L)}}}function Me(a){let e,i;return e=new qe({}),{c(){K(e.$$.fragment)},m(t,s){E(e,t,s),i=!0},i(t){i||(x(e.$$.fragment,t),i=!0)},o(t){H(e.$$.fragment,t),i=!1},d(t){J(e,t)}}}function He(a){let e,i;return e=new ze({}),{c(){K(e.$$.fragment)},m(t,s){E(e,t,s),i=!0},i(t){i||(x(e.$$.fragment,t),i=!0)},o(t){H(e.$$.fragment,t),i=!1},d(t){J(e,t)}}}function De(a){let e,i;return e=new $e({}),{c(){K(e.$$.fragment)},m(t,s){E(e,t,s),i=!0},i(t){i||(x(e.$$.fragment,t),i=!0)},o(t){H(e.$$.fragment,t),i=!1},d(t){J(e,t)}}}function We(a){let e,i;return e=new _e({}),{c(){K(e.$$.fragment)},m(t,s){E(e,t,s),i=!0},i(t){i||(x(e.$$.fragment,t),i=!0)},o(t){H(e.$$.fragment,t),i=!1},d(t){J(e,t)}}}function Ge(a){let e,i;return e=new be({}),{c(){K(e.$$.fragment)},m(t,s){E(e,t,s),i=!0},i(t){i||(x(e.$$.fragment,t),i=!0)},o(t){H(e.$$.fragment,t),i=!1},d(t){J(e,t)}}}function Pe(a){let e=!1,i=()=>{e=!1},t,s,n,r,_,p,w,d,g,f,T=a[2][0].visible?"\u2715":"\u2630",y,L,h,u,b,k,B,V;I(a[7]);let v=a[2][0].visible&&le(a);const Z=[Ge,We,De,He,Me],W=[];function ee(m,z){return m[2][1].visible?0:m[2][2].visible?1:m[2][3].visible?2:m[2][4].visible?3:m[2][6].visible?4:-1}return~(u=ee(a))&&(b=W[u]=Z[u](a)),{c(){s=o("div"),v&&v.c(),n=j(),r=o("div"),_=o("span"),p=te(a[3]),w=j(),d=o("span"),d.textContent="\u262F",g=j(),f=o("span"),y=te(T),L=j(),h=o("div"),b&&b.c(),c(_,"class","title svelte-1l1oz3v"),c(d,"class","mode svelte-1l1oz3v"),c(d,"style",""),c(r,"class","header svelte-1l1oz3v"),A(r,"background-color",a[1]?"#191a22":"#eee"),A(r,"color",a[1]?"#eee":"#1e1f29"),c(f,"class","burg svelte-1l1oz3v"),A(f,"color",a[1]?"#fff":"#1e1f29"),c(h,"class","content svelte-1l1oz3v")},m(m,z){P(m,s,z),v&&v.m(s,null),l(s,n),l(s,r),l(r,_),l(_,p),l(r,w),l(r,d),l(s,g),l(s,f),l(f,y),l(s,L),l(s,h),~u&&W[u].m(h,null),k=!0,B||(V=[$(Q,"scroll",()=>{e=!0,clearTimeout(t),t=setTimeout(i,100),a[7]()}),$(d,"click",a[6]),$(f,"click",a[4])],B=!0)},p(m,[z]){z&1&&!e&&(e=!0,clearTimeout(t),scrollTo(Q.pageXOffset,m[0]),t=setTimeout(i,100)),m[2][0].visible?v?(v.p(m,z),z&4&&x(v,1)):(v=le(m),v.c(),x(v,1),v.m(s,n)):v&&(ae(),H(v,1,1,()=>{v=null}),se()),(!k||z&8)&&ie(p,m[3]),(!k||z&2)&&A(r,"background-color",m[1]?"#191a22":"#eee"),(!k||z&2)&&A(r,"color",m[1]?"#eee":"#1e1f29"),(!k||z&4)&&T!==(T=m[2][0].visible?"\u2715":"\u2630")&&ie(y,T),(!k||z&2)&&A(f,"color",m[1]?"#fff":"#1e1f29");let X=u;u=ee(m),u!==X&&(b&&(ae(),H(W[X],1,1,()=>{W[X]=null}),se()),~u?(b=W[u],b||(b=W[u]=Z[u](m),b.c()),x(b,1),b.m(h,null)):b=null)},i(m){k||(x(v),x(b),k=!0)},o(m){H(v),H(b),k=!1},d(m){m&&O(s),v&&v.d(),~u&&W[u].d(),B=!1,R(V)}}}function Ie(a,e,i){let t,s;U(a,D,h=>i(2,t=h)),U(a,F,h=>i(3,s=h)),pe(()=>window.scrollTo(0,0));let n;M(F,s=t[1].name,s);let r=!0;document.body.classList.add("dark"),document.body.style.backgroundImage=`url(${ne})`,document.body.onscroll=()=>{document.body.style.backgroundPositionY=window.scrollY+"px"};function _(){M(D,t[0].visible=!t[0].visible,t)}function p(h){for(let u=1;u<t.length-1;u++)M(D,t[u].visible=!1,t);M(D,t[h].visible=!0,t),M(F,s=t[h].name,s),M(D,t[0].visible=!t[0].visible,t)}function w(){i(1,r=!r),r===!0?(document.body.classList.replace("light","dark"),document.body.style.backgroundImage=`url(${ne})`):r===!1&&(document.body.classList.replace("dark","light"),document.body.style.backgroundImage=`url(${xe})`)}function d(){i(0,n=Q.pageYOffset)}return[n,r,t,s,_,p,w,d,()=>p(1),()=>p(2),()=>p(3),()=>p(4),()=>p(6)]}class Oe extends S{constructor(e){super();Y(this,e,Ie,Pe,C,{})}}new Oe({target:document.getElementById("app")});
