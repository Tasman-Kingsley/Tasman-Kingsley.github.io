import{w as le,S,i as C,s as N,e as o,a as j,b as c,c as z,d as P,f as r,l as $,n as q,g as I,h as Y,j as G,k as O,r as R,m as U,o as M,p as ce,t as te,q as x,u as H,v as se,x as ae,y as pe,z as de,A as ie,B as K,C as E,D as J}from"./vendor.7384cd90.js";const ue=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}};ue();let D=le([{name:"Nav",visible:!1},{name:"Tasman Kingsley",visible:!0},{name:"Web app projects",visible:!1},{name:"Website projects",visible:!1},{name:"Design portfolio",visible:!1},{name:"Music project",visible:!1},{name:"About",visible:!1}]),F=le("");var he="/assets/apps.2489986f.jpg",me="/assets/giddy-grocery.e94d6cec.jpg",fe="/assets/persona-collage.c8b1d3c9.jpg",oe="/assets/waves.e979ddb3.jpeg";function ge(i){let e,a,t,s,n,l,_,p,w,d,f,g,T,y,L,h,u,b;return{c(){e=o("div"),a=o("div"),a.innerHTML=`<p class="svelte-pfeueb">Hello, Tasman here. This is my portfolio page.</p> 
        <p class="svelte-pfeueb">Feel free to potter about and peruse my projects if you feel like it \u{1F601}</p>`,t=j(),s=o("div"),n=o("div"),l=o("div"),l.innerHTML='<span class="svelte-pfeueb">Web apps</span>',_=j(),p=o("div"),w=o("div"),w.innerHTML='<span class="svelte-pfeueb">Websites</span>',d=j(),f=o("div"),g=o("div"),g.innerHTML='<span class="svelte-pfeueb">Design porfolio</span>',T=j(),y=o("div"),L=o("div"),L.innerHTML='<span class="svelte-pfeueb">About</span>',c(l,"class","card-txt svelte-pfeueb"),c(n,"class","img svelte-pfeueb"),z(n,"background-image","url("+he+")"),c(w,"class","card-txt svelte-pfeueb"),c(p,"class","img svelte-pfeueb"),z(p,"background-image","url("+me+")"),c(g,"class","card-txt svelte-pfeueb"),c(f,"class","img svelte-pfeueb"),z(f,"background-image","url("+fe+")"),c(L,"class","card-txt svelte-pfeueb"),c(y,"class","img svelte-pfeueb"),z(y,"background-image","url("+oe+")"),c(s,"class","inner-grid svelte-pfeueb"),c(e,"class","outer-grid svelte-pfeueb")},m(k,B){P(k,e,B),r(e,a),r(e,t),r(e,s),r(s,n),r(n,l),r(s,_),r(s,p),r(p,w),r(s,d),r(s,f),r(f,g),r(s,T),r(s,y),r(y,L),u||(b=[$(n,"click",i[1]),$(p,"click",i[2]),$(f,"click",i[3]),$(y,"click",i[4])],u=!0)},p:q,i(k){h||I(()=>{h=Y(e,G,{x:-400,duration:500}),h.start()})},o:q,d(k){k&&O(e),u=!1,R(b)}}}function ve(i,e,a){let t,s;U(i,D,d=>a(5,t=d)),U(i,F,d=>a(6,s=d)),window.scrollTo(0,0);function n(d){for(let f=1;f<t.length-1;f++)M(D,t[f].visible=!1,t);M(D,t[d].visible=!0,t),M(F,s=t[d].name,s)}return[n,()=>n(2),()=>n(3),()=>n(4),()=>n(6)]}class be extends S{constructor(e){super();C(this,e,ve,ge,N,{})}}function ye(i){let e,a;return{c(){e=o("div"),e.innerHTML=`<iframe src="https://pods.netlify.app/" width="380" height="700" class="svelte-1mes0ar"></iframe> 

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
        <p>This app is built with javascript, css, and html.</p><br/></div>`,c(e,"class","grid svelte-1mes0ar")},m(t,s){P(t,e,s)},p:q,i(t){a||I(()=>{a=Y(e,G,{x:-400,duration:500}),a.start()})},o:q,d(t){t&&O(e)}}}function ke(i){return window.scrollTo(0,0),[]}class _e extends S{constructor(e){super();C(this,e,ke,ye,N,{})}}function we(i){let e,a;return{c(){e=o("div"),e.innerHTML=`<img src="/images/giddy-grocery.jpg" class="svelte-sqtg0y"/> 

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
        <p>This website is built with javascript, jquery, json, css, and html.</p><br/></div>`,c(e,"class","grid svelte-sqtg0y")},m(t,s){P(t,e,s)},p:q,i(t){a||I(()=>{a=Y(e,G,{x:-400,duration:500}),a.start()})},o:q,d(t){t&&O(e)}}}function Te(i){return window.scrollTo(0,0),[]}class $e extends S{constructor(e){super();C(this,e,Te,we,N,{})}}function je(i){let e,a;return{c(){e=o("div"),e.innerHTML=`<img class="persona svelte-12ypox" src="./images/persona-final.png" alt=""/> 
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
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p></div>`,c(e,"class","grid svelte-12ypox")},m(t,s){P(t,e,s)},p:q,i(t){a||I(()=>{a=Y(e,G,{x:-400,duration:500}),a.start()})},o:q,d(t){t&&O(e)}}}function Le(i){return window.scrollTo(0,0),[]}class Ae extends S{constructor(e){super();C(this,e,Le,je,N,{})}}function ze(i){let e,a;return{c(){e=o("div"),e.innerHTML=`<img src="./images/choco-profile.jpg" alt="" class="svelte-19x6bx6"/> 
    <span style="color: #b2c6d3; padding: 20px;" class="svelte-19x6bx6">About me</span> 
    <p class="svelte-19x6bx6">Hello fellow human! My name is Tasman. <br/><br/>
    I am an amateur Interaction Designer, Software Developer, and Music Producer.<br/><br/>
    Thanks for finding your way to my portfolio page. Be sure to poke around and look at my projects if you&#39;d like.<br/><br/>
    Also, check out my music if you find yourself curious, i appreciate the time and curiosity.<br/><br/>
    You can contact me at <a href="mailto: tasmankingsley@gmail.com" style="color: #d3c7b8;">tasmankingsley@gmail.com</a></p>`,c(e,"class","content-div svelte-19x6bx6")},m(t,s){P(t,e,s)},p:q,i(t){a||I(()=>{a=Y(e,G,{x:-400,duration:500}),a.start()})},o:q,d(t){t&&O(e)}}}class qe extends S{constructor(e){super();C(this,e,null,ze,N,{})}}var ne="/assets/background-dark.f1a90866.png",xe="/assets/background-light.fa5a2698.png";const{window:Q}=de;function re(i){let e,a,t,s,n,l,_,p,w,d,f,g,T,y,L;return{c(){e=o("div"),a=o("div"),a.innerHTML='<span class="btn-txt svelte-zdf6av">Home</span>',t=j(),s=o("div"),s.innerHTML='<span class="btn-txt svelte-zdf6av">Web app projects</span>',n=j(),l=o("div"),l.innerHTML='<span class="btn-txt svelte-zdf6av">Website projects</span>',_=j(),p=o("div"),p.innerHTML='<span class="btn-txt svelte-zdf6av">Design portfolio</span>',w=j(),d=o("div"),d.innerHTML='<span class="btn-txt svelte-zdf6av">About</span>',c(a,"class","nav-btn svelte-zdf6av"),c(s,"class","nav-btn svelte-zdf6av"),c(l,"class","nav-btn svelte-zdf6av"),c(p,"class","nav-btn svelte-zdf6av"),c(d,"class","nav-btn svelte-zdf6av"),c(e,"class","nav svelte-zdf6av"),z(e,"background-image","url("+oe+")")},m(h,u){P(h,e,u),r(e,a),r(e,t),r(e,s),r(e,n),r(e,l),r(e,_),r(e,p),r(e,w),r(e,d),T=!0,y||(L=[$(a,"click",i[8]),$(s,"click",i[9]),$(l,"click",i[10]),$(p,"click",i[11]),$(d,"click",i[12])],y=!0)},p:q,i(h){T||(I(()=>{g&&g.end(1),f=Y(e,G,{x:400,duration:500}),f.start()}),T=!0)},o(h){f&&f.invalidate(),g=ce(e,G,{x:400,duration:500}),T=!1},d(h){h&&O(e),h&&g&&g.end(),y=!1,R(L)}}}function Me(i){let e,a;return e=new qe({}),{c(){K(e.$$.fragment)},m(t,s){E(e,t,s),a=!0},i(t){a||(x(e.$$.fragment,t),a=!0)},o(t){H(e.$$.fragment,t),a=!1},d(t){J(e,t)}}}function He(i){let e,a;return e=new Ae({}),{c(){K(e.$$.fragment)},m(t,s){E(e,t,s),a=!0},i(t){a||(x(e.$$.fragment,t),a=!0)},o(t){H(e.$$.fragment,t),a=!1},d(t){J(e,t)}}}function De(i){let e,a;return e=new $e({}),{c(){K(e.$$.fragment)},m(t,s){E(e,t,s),a=!0},i(t){a||(x(e.$$.fragment,t),a=!0)},o(t){H(e.$$.fragment,t),a=!1},d(t){J(e,t)}}}function We(i){let e,a;return e=new _e({}),{c(){K(e.$$.fragment)},m(t,s){E(e,t,s),a=!0},i(t){a||(x(e.$$.fragment,t),a=!0)},o(t){H(e.$$.fragment,t),a=!1},d(t){J(e,t)}}}function Ge(i){let e,a;return e=new be({}),{c(){K(e.$$.fragment)},m(t,s){E(e,t,s),a=!0},i(t){a||(x(e.$$.fragment,t),a=!0)},o(t){H(e.$$.fragment,t),a=!1},d(t){J(e,t)}}}function Pe(i){let e=!1,a=()=>{e=!1},t,s,n,l,_,p,w,d,f,g,T=i[2][0].visible?"\u2715":"\u2630",y,L,h,u,b,k,B,V;I(i[7]);let v=i[2][0].visible&&re(i);const Z=[Ge,We,De,He,Me],W=[];function ee(m,A){return m[2][1].visible?0:m[2][2].visible?1:m[2][3].visible?2:m[2][4].visible?3:m[2][6].visible?4:-1}return~(u=ee(i))&&(b=W[u]=Z[u](i)),{c(){s=o("div"),v&&v.c(),n=j(),l=o("div"),_=o("span"),p=te(i[3]),w=j(),d=o("span"),d.textContent="\u262F",f=j(),g=o("span"),y=te(T),L=j(),h=o("div"),b&&b.c(),c(_,"class","title svelte-zdf6av"),c(d,"class","mode svelte-zdf6av"),c(d,"style",""),c(l,"class","header svelte-zdf6av"),z(l,"background-color",i[1]?"#191a22":"#eee"),z(l,"color",i[1]?"#eee":"#1e1f29"),c(g,"class","burg svelte-zdf6av"),z(g,"color",i[1]?"#fff":"#1e1f29"),c(h,"class","content svelte-zdf6av")},m(m,A){P(m,s,A),v&&v.m(s,null),r(s,n),r(s,l),r(l,_),r(_,p),r(l,w),r(l,d),r(s,f),r(s,g),r(g,y),r(s,L),r(s,h),~u&&W[u].m(h,null),k=!0,B||(V=[$(Q,"scroll",()=>{e=!0,clearTimeout(t),t=setTimeout(a,100),i[7]()}),$(d,"click",i[6]),$(g,"click",i[4])],B=!0)},p(m,[A]){A&1&&!e&&(e=!0,clearTimeout(t),scrollTo(Q.pageXOffset,m[0]),t=setTimeout(a,100)),m[2][0].visible?v?(v.p(m,A),A&4&&x(v,1)):(v=re(m),v.c(),x(v,1),v.m(s,n)):v&&(ie(),H(v,1,1,()=>{v=null}),se()),(!k||A&8)&&ae(p,m[3]),(!k||A&2)&&z(l,"background-color",m[1]?"#191a22":"#eee"),(!k||A&2)&&z(l,"color",m[1]?"#eee":"#1e1f29"),(!k||A&4)&&T!==(T=m[2][0].visible?"\u2715":"\u2630")&&ae(y,T),(!k||A&2)&&z(g,"color",m[1]?"#fff":"#1e1f29");let X=u;u=ee(m),u!==X&&(b&&(ie(),H(W[X],1,1,()=>{W[X]=null}),se()),~u?(b=W[u],b||(b=W[u]=Z[u](m),b.c()),x(b,1),b.m(h,null)):b=null)},i(m){k||(x(v),x(b),k=!0)},o(m){H(v),H(b),k=!1},d(m){m&&O(s),v&&v.d(),~u&&W[u].d(),B=!1,R(V)}}}function Ie(i,e,a){let t,s;U(i,D,h=>a(2,t=h)),U(i,F,h=>a(3,s=h)),pe(()=>window.scrollTo(0,0));let n;M(F,s=t[1].name,s);let l=!0;document.body.classList.add("dark"),document.body.style.backgroundImage=`url(${ne})`;function _(){M(D,t[0].visible=!t[0].visible,t)}function p(h){for(let u=1;u<t.length-1;u++)M(D,t[u].visible=!1,t);M(D,t[h].visible=!0,t),M(F,s=t[h].name,s),M(D,t[0].visible=!t[0].visible,t)}function w(){a(1,l=!l),l===!0?(document.body.classList.replace("light","dark"),document.body.style.backgroundImage=`url(${ne})`,document.body.style.backgroundAttachment="fixed"):l===!1&&(document.body.classList.replace("dark","light"),document.body.style.backgroundImage=`url(${xe})`,document.body.style.backgroundAttachment="fixed")}function d(){a(0,n=Q.pageYOffset)}return[n,l,t,s,_,p,w,d,()=>p(1),()=>p(2),()=>p(3),()=>p(4),()=>p(6)]}class Oe extends S{constructor(e){super();C(this,e,Ie,Pe,N,{})}}new Oe({target:document.getElementById("app")});
