import{S as G,i as W,s as O,e as h,a as d,b as M,n as b,c as D,d as P,f as L,g as H,h as A,j as I,k as p,l as $,m as Z,r as V,t as F,o as _,p as j,q as Q,u as U,v as X,w as S,x as C,y as N}from"./vendor.94da27d3.js";const ee=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&t(u)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}};ee();function te(a){let e,s;return{c(){e=h("div"),e.innerHTML=`<p>Hello, Tasman here. <br/> This is my portfolio page.</p> 
    <p>Feel free to potter about, <br/> and check out some of my projects if you fancy \u{1F604}</p> 

    
    <iframe src="https://tasmankingsley.github.io/cube-three/" width="400" height="400" class="svelte-fhr5eo"></iframe>`,d(e,"class","svelte-fhr5eo")},m(t,i){M(t,e,i)},p:b,i(t){s||D(()=>{s=P(e,L,{x:-400,duration:500}),s.start()})},o:b,d(t){t&&H(e)}}}class se extends G{constructor(e){super();W(this,e,null,te,O,{})}}function ie(a){let e,s;return{c(){e=h("div"),e.innerHTML=`<iframe src="https://pods.netlify.app/" width="380" height="700" class="svelte-uz1jgf"></iframe> 

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
        <p>This website is build with javascript, jquery, json, css, and html.</p><br/></div>`,d(e,"class","grid svelte-uz1jgf")},m(t,i){M(t,e,i)},p:b,i(t){s||D(()=>{s=P(e,L,{x:-400,duration:500}),s.start()})},o:b,d(t){t&&H(e)}}}class ae extends G{constructor(e){super();W(this,e,null,ie,O,{})}}function re(a){let e,s;return{c(){e=h("div"),e.innerHTML=`<img class="persona svelte-zvs1wy" src="./images/persona-final.png" alt=""/> 
    <div class="grid-content"><h2>George persona</h2> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p></div> 

    <img class="persona svelte-zvs1wy" src="./images/Yuna-Persona.png" alt=""/> 
    <div class="grid-content"><h2>Yuna persona</h2> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p></div> 

    <iframe src="https://www.youtube.com/embed/yrPmsU8TLg0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" class="svelte-zvs1wy"></iframe> 
    <div class="grid-content"><h2>Jamingle prototype app flow</h2> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p></div>`,d(e,"class","grid svelte-zvs1wy")},m(t,i){M(t,e,i)},p:b,i(t){s||D(()=>{s=P(e,L,{x:-400,duration:500}),s.start()})},o:b,d(t){t&&H(e)}}}class ne extends G{constructor(e){super();W(this,e,null,re,O,{})}}function le(a){let e,s;return{c(){e=h("div"),e.innerHTML=`<img id="profile" src="./images/spotify-profile.jpg" alt="" class="svelte-11avz68"/> 
    <p class="svelte-11avz68">Artist - Tasman Kingsley</p> 
    <iframe src="https://open.spotify.com/embed/artist/761DscW9vfSQMmnKEJNHbH" frameborder="0" allowtransparency="true" allow="encrypted-media" class="svelte-11avz68"></iframe>`,d(e,"class","svelte-11avz68")},m(t,i){M(t,e,i)},p:b,i(t){s||D(()=>{s=P(e,L,{x:-400,duration:500}),s.start()})},o:b,d(t){t&&H(e)}}}class oe extends G{constructor(e){super();W(this,e,null,le,O,{})}}function ce(a){let e,s;return{c(){e=h("div"),e.innerHTML=`<img src="./images/choco-profile.jpg" alt="" class="svelte-19x6bx6"/> 
    <span style="color: #b2c6d3; padding: 20px;" class="svelte-19x6bx6">About me</span> 
    <p class="svelte-19x6bx6">Hello fellow human! My name is Tasman. <br/><br/>
    I am an amateur Interaction Designer, Software Developer, and Music Producer.<br/><br/>
    Thanks for finding your way to my portfolio page. Be sure to poke around and look at my projects if you&#39;d like.<br/><br/>
    Also, check out my music if you find yourself curious, i appreciate the time and curiosity.<br/><br/>
    You can contact me at <a href="mailto: tasmankingsley@gmail.com" style="color: #d3c7b8;">tasmankingsley@gmail.com</a></p>`,d(e,"class","content-div svelte-19x6bx6")},m(t,i){M(t,e,i)},p:b,i(t){s||D(()=>{s=P(e,L,{x:-400,duration:500}),s.start()})},o:b,d(t){t&&H(e)}}}class pe extends G{constructor(e){super();W(this,e,null,ce,O,{})}}var ue="/assets/waves.e979ddb3.jpeg";function R(a){let e,s,t,i,n,u,f,v,q,m,y,k,z,g,l;return{c(){e=h("div"),s=h("div"),s.innerHTML='<span class="btn-txt svelte-11ax4f3">Home</span>',t=A(),i=h("div"),i.innerHTML='<span class="btn-txt svelte-11ax4f3">Code projects</span>',n=A(),u=h("div"),u.innerHTML='<span class="btn-txt svelte-11ax4f3">Design portfolio</span>',f=A(),v=h("div"),v.innerHTML='<span class="btn-txt svelte-11ax4f3">Music</span>',q=A(),m=h("div"),m.innerHTML='<span class="btn-txt svelte-11ax4f3">About</span>',d(s,"class","nav-btn svelte-11ax4f3"),d(i,"class","nav-btn svelte-11ax4f3"),d(u,"class","nav-btn svelte-11ax4f3"),d(v,"class","nav-btn svelte-11ax4f3"),d(m,"class","nav-btn svelte-11ax4f3"),d(e,"class","nav svelte-11ax4f3"),I(e,"background-image","url("+ue+")")},m(o,w){M(o,e,w),p(e,s),p(e,t),p(e,i),p(e,n),p(e,u),p(e,f),p(e,v),p(e,q),p(e,m),z=!0,g||(l=[$(s,"click",a[6]),$(i,"click",a[7]),$(u,"click",a[8]),$(v,"click",a[9]),$(m,"click",a[10])],g=!0)},p:b,i(o){z||(D(()=>{k&&k.end(1),y=P(e,L,{x:400,duration:500}),y.start()}),z=!0)},o(o){y&&y.invalidate(),k=Z(e,L,{x:400,duration:500}),z=!1},d(o){o&&H(e),o&&k&&k.end(),g=!1,V(l)}}}function he(a){let e,s;return e=new pe({}),{c(){S(e.$$.fragment)},m(t,i){C(e,t,i),s=!0},i(t){s||(_(e.$$.fragment,t),s=!0)},o(t){j(e.$$.fragment,t),s=!1},d(t){N(e,t)}}}function de(a){let e,s;return e=new oe({}),{c(){S(e.$$.fragment)},m(t,i){C(e,t,i),s=!0},i(t){s||(_(e.$$.fragment,t),s=!0)},o(t){j(e.$$.fragment,t),s=!1},d(t){N(e,t)}}}function fe(a){let e,s;return e=new ne({}),{c(){S(e.$$.fragment)},m(t,i){C(e,t,i),s=!0},i(t){s||(_(e.$$.fragment,t),s=!0)},o(t){j(e.$$.fragment,t),s=!1},d(t){N(e,t)}}}function me(a){let e,s;return e=new ae({}),{c(){S(e.$$.fragment)},m(t,i){C(e,t,i),s=!0},i(t){s||(_(e.$$.fragment,t),s=!0)},o(t){j(e.$$.fragment,t),s=!1},d(t){N(e,t)}}}function ge(a){let e,s;return e=new se({}),{c(){S(e.$$.fragment)},m(t,i){C(e,t,i),s=!0},i(t){s||(_(e.$$.fragment,t),s=!0)},o(t){j(e.$$.fragment,t),s=!1},d(t){N(e,t)}}}function ve(a){let e=!1,s=()=>{e=!1},t,i,n,u,f,v,q,m,y=a[0][0].visible?"\u2715":"\u2630",k,z,g,l,o,w,K,E;D(a[5]);let c=a[0][0].visible&&R(a);const J=[ge,me,fe,de,he],x=[];function B(r,T){return r[0][1].visible?0:r[0][2].visible?1:r[0][3].visible?2:r[0][4].visible?3:r[0][5].visible?4:-1}return~(l=B(a))&&(o=x[l]=J[l](a)),{c(){i=h("div"),c&&c.c(),n=A(),u=h("div"),f=h("span"),v=F(a[2]),q=A(),m=h("span"),k=F(y),z=A(),g=h("div"),o&&o.c(),d(f,"class","title svelte-11ax4f3"),d(u,"class","header svelte-11ax4f3"),d(m,"class","burg svelte-11ax4f3"),I(m,"color",a[1]>14&&!a[0][0].visible?"#fff":"#1e1f29"),d(g,"class","content svelte-11ax4f3")},m(r,T){M(r,i,T),c&&c.m(i,null),p(i,n),p(i,u),p(u,f),p(f,v),p(i,q),p(i,m),p(m,k),p(i,z),p(i,g),~l&&x[l].m(g,null),w=!0,K||(E=[$(window,"scroll",()=>{e=!0,clearTimeout(t),t=setTimeout(s,100),a[5]()}),$(m,"click",a[3])],K=!0)},p(r,[T]){T&2&&!e&&(e=!0,clearTimeout(t),scrollTo(window.pageXOffset,r[1]),t=setTimeout(s,100)),r[0][0].visible?c?(c.p(r,T),T&1&&_(c,1)):(c=R(r),c.c(),_(c,1),c.m(i,n)):c&&(X(),j(c,1,1,()=>{c=null}),Q()),(!w||T&4)&&U(v,r[2]),(!w||T&1)&&y!==(y=r[0][0].visible?"\u2715":"\u2630")&&U(k,y),(!w||T&3)&&I(m,"color",r[1]>14&&!r[0][0].visible?"#fff":"#1e1f29");let Y=l;l=B(r),l!==Y&&(o&&(X(),j(x[Y],1,1,()=>{x[Y]=null}),Q()),~l?(o=x[l],o||(o=x[l]=J[l](r),o.c()),_(o,1),o.m(g,null)):o=null)},i(r){w||(_(c),_(o),w=!0)},o(r){j(c),j(o),w=!1},d(r){r&&H(i),c&&c.d(),~l&&x[l].d(),K=!1,V(E)}}}function be(a,e,s){let t=[{name:"Nav",visible:!1},{name:"Tasman Kingsley",visible:!0},{name:"Code projects",visible:!1},{name:"Design portfolio",visible:!1},{name:"Music project",visible:!1},{name:"About",visible:!1}],i,n=t[1].name;function u(){s(0,t[0].visible=!t[0].visible,t)}function f(g){for(let l=1;l<t.length-1;l++)s(0,t[l].visible=!1,t);s(0,t[g].visible=!0,t),s(2,n=t[g].name),s(0,t[0].visible=!t[0].visible,t)}function v(){s(1,i=window.pageYOffset)}return[t,i,n,u,f,v,()=>f(1),()=>f(2),()=>f(3),()=>f(4),()=>f(5)]}class ye extends G{constructor(e){super();W(this,e,be,ve,O,{})}}new ye({target:document.getElementById("app")});
