<script>
import { fly } from 'svelte/transition';
import { onMount } from "svelte";
import { dark_mode } from './store';

window.scrollTo(0, 0);

// transition elements in as they enter view
onMount(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // entry.target.classList.toggle('show', entry.isIntersecting);
            
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const hidden_elements = document.querySelectorAll('.hidden');

    hidden_elements.forEach((el) => observer.observe(el));
    
});
    
</script>

<div class="grid" in:fly={{x: -400, duration: 500}}>

    <div class="a1">
        <iframe src="https://pods.netlify.app/" width="360" height="700"></iframe>
    </div>

    <div class="content c1">
        <h2>Podcast app</h2>

        <div class="link-div">
            <img src={$dark_mode ? "./images/link-light.png" : "./images/link.png"} alt="">
            <a href="https://pods.netlify.app/">Web link</a>
            <img src={$dark_mode ? "./images/github-light.png" : "./images/github.png"} alt="">
            <a href="https://github.com/tasmankingsley/podcast-app">Github repo</a>
        </div>

        <h3>Description</h3>
        <p>This is my version of a podcast rss feed catcher. This app will allow you to 
            either manually add rss feeds, or search for a podcast feed (via the itunes api)
            and add podcasts that way.
            Added podcast shows will then be displayed on the home tab, you can then 
            navigate through to the show episodes, view the episode notes, and play episodes.
        </p>
        <p>The app features a player which will continue to play an episode even while 
            browsing through the app or minimising the web browser.
            The app will remember your added shows when you return to the app via browser
            local storage.
        </p>

        <h3>Technology stack</h3>
        <p>This app is built with the svelte framework, netlify functions, itunes search api, 
            javascript, css, and html.</p>

        <h3>Future considerations and implementations</h3>
        <p>I would like upgrade this into a progressive web app (PWA), i also need to fix a CORS issue for some podcasts.</p><br>
    </div>



    <div class="a2 hidden">
        <iframe src="https://kana-kuizu.web.app" width="360" height="700"></iframe>
    </div>
    
    <div class="content c2 hidden">
        <h2>Kana quiz app</h2>

        <div class="link-div">
            <img src={$dark_mode ? "./images/link-light.png" : "./images/link.png"} alt="">
            <a href="https://kana-kuizu.web.app">Web link</a>
            <img src={$dark_mode ? "./images/github-light.png" : "./images/github.png"} alt="">
            <a href="https://github.com/tasmankingsley/kana-kuizu">Github repo</a>
        </div>

        <h3>Description</h3>
        <p>A simple quiz app for learning the Japanese kana syllabaries: hiragana and katakana.
            The app features an option menu on the home page where you can choose whether to
            study hiragana, katakana, or both at the same time.
        </p>
        <p>
            The quiz presents a randomized grid of the kana, and invites the user to remember
            the kana and input the corresponding romaji. The app will renforce learning and memory
            by validating the input and giving color feedback to the user for correct/incorrect answers.
        </p>
        <p>
            Upon completing or ending the quiz, the user will get their score and feeback on the results screen.
        </p>

        <h3>Technology stack</h3>
        <p>This app is built with the vue framework, javascript, css, and html.</p>
    </div>



    <div class="a3 hidden">
        <iframe src="https://tasmankingsley.github.io/todo/" width="360" height="700"></iframe>
    </div>

    <div class="content c3 hidden">
        <h2>Minimal to-do list</h2>

        <div class="link-div">
            <img src={$dark_mode ? "./images/link-light.png" : "./images/link.png"} alt="">
            <a href="https://tasmankingsley.github.io/todo/">Web link</a>
            <img src={$dark_mode ? "./images/github-light.png" : "./images/github.png"} alt="">
            <a href="https://github.com/tasmankingsley/todo">Github repo</a>
        </div>

        <h3>Description</h3>
        <p>A minimal to-do list app. The user can input to-do items and check off the items
            when completed. The app features the ability to edit and remove the list items.
            The user's list will also be saved in browser local storage for the ability to
            return to list after closinng the page.
        </p>

        <h3>Technology stack</h3>
        <p>This app is built with the svelte framework, javascript, css, and html.</p>
    </div>



    <div class="a4 hidden">
        <iframe src="https://japanesejisho.web.app" width="360" height="700"></iframe>
    </div>

    <div class="content c4 hidden">
        <h2>Japanese dictionary app</h2>

        <div class="link-div">
            <img src={$dark_mode ? "./images/link-light.png" : "./images/link.png"} alt="">
            <a href="https://japanesejisho.web.app">Web link</a>
            <img src={$dark_mode ? "./images/github-light.png" : "./images/github.png"} alt="">
            <a href="https://github.com/tasmankingsley/japanese-jisho">Github repo</a>
        </div>

        <h3>Description</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem atque vitae quia optio reiciendis earum cum. Quia officia labore, dolor eveniet dolores facilis illo mollitia minima, sequi omnis tempore saepe.
        </p>

        <h3>Technology stack</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nostrum, maiores consectetur voluptates necessitatibus odit reiciendis officiis repellat, quas pariatur veritatis harum laborum. Aliquam, quae eos quos iure perferendis quis!</p>
    </div>



    <div class="a5 hidden">
        <iframe src="https://tasmankingsley.github.io/consistency-graph/" width="360" height="700"></iframe>
    </div>
    
    <div class="content c5 hidden">
        <h2>Github-style consistency graph</h2>

        <div class="link-div">
            <img src={$dark_mode ? "./images/link-light.png" : "./images/link.png"} alt="">
            <a href="https://tasmankingsley.github.io/consistency-graph/">Web link</a>
            <img src={$dark_mode ? "./images/github-light.png" : "./images/github.png"} alt="">
            <a href="https://github.com/tasmankingsley/consistency-graph">Github repo</a>
        </div>

        <h3>Description</h3>
        <p>A daily visual progress tracker inspired by the github contribution graph.
            The app will allow the user to check the day off as done (for tracking any goal).
            Progress will be saved in browser storage, and the graph will keep track of time and
            advance forward each day. 
        </p>
        <p>
            The user can initialize the graph, manually advance the day (for testing), and 
            add or delete graphs.
        </p>

        <h3>Technology stack</h3>
        <p>This app is built with the svelte framework, javascript, css, and html.</p>
    </div>



    <div class="a6 hidden">
        <iframe src="https://tasmankingsley.github.io/tetris/" width="360" height="700"></iframe>
    </div>

    <div class="content c6 hidden">
        <h2>Tetris clone</h2>

        <div class="link-div">
            <img src={$dark_mode ? "./images/link-light.png" : "./images/link.png"} alt="">
            <a href="https://tasmankingsley.github.io/tetris/">Web link</a>
            <img src={$dark_mode ? "./images/github-light.png" : "./images/github.png"} alt="">
            <a href="https://github.com/tasmankingsley/tetris">Github repo</a>
        </div>

        <h3>Description</h3>
        <p>A simple tetris clone. Arrow keys to move, rotate, and drop faster.</p>

        <h3>Technology stack</h3>
        <p>This app is built with javascript, css, and html.</p>
    </div>



    <div class="a7 hidden">
        <iframe src="https://tasmankingsley.github.io/new-tab/" width="360" height="700"></iframe>
    </div>

    <div class="content c7 hidden">
        <h2>New tab - customisable home page</h2>

        <div class="link-div">
            <img src={$dark_mode ? "./images/link-light.png" : "./images/link.png"} alt="">
            <a href="https://tasmankingsley.github.io/new-tab/">Web link</a>
            <img src={$dark_mode ? "./images/github-light.png" : "./images/github.png"} alt="">
            <a href="https://github.com/tasmankingsley/new-tab">Github repo</a>
        </div>

        <h3>Description</h3>
        <p>Designed to be set as a home page or new tab page, intended for displaying and 
            customising favourite links/bookmarks.
        </p>

        <h3>Technology stack</h3>
        <p>This app is built with the svelte framework, javascript, css, and html.</p>
    </div>


    
    <div class="a8 hidden">
        <iframe src="https://tasmankingsley.github.io/calc/" width="280" height="350"></iframe>
    </div>

    <div class="content c8 hidden">
        <h2>Simple calculator</h2>

        <div class="link-div">
            <img src={$dark_mode ? "./images/link-light.png" : "./images/link.png"} alt="">
            <a href="https://tasmankingsley.github.io/calc/">Web link</a>
            <img src={$dark_mode ? "./images/github-light.png" : "./images/github.png"} alt="">
            <a href="https://github.com/tasmankingsley/calc">Github repo</a>
        </div>

        <h3>Description</h3>
        <p>A very simple calculator app inspired by the Mac OS calculator.
            One of my first forays into web programming.
        </p>

        <h3>Technology stack</h3>
        <p>This app is built with javascript, css, and html.</p>
    </div>

</div>

<style>
.grid {
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: 1fr;
    grid-template-areas: 
                            'a1''c1'
                            'a2''c2'
                            'a3''c3'
                            'a4''c4'
                            'a5''c5'
                            'a6''c6'
                            'a7''c7'
                            'a8''c8';
    column-gap: 20px;
    row-gap: 20px;
    justify-items: center;

}

.a1 { grid-area: a1; }
.a2 { grid-area: a2; }
.a3 { grid-area: a3; }
.a4 { grid-area: a4; }
.a5 { grid-area: a5; }
.a6 { grid-area: a6; }
.a7 { grid-area: a7; }
.a8 { grid-area: a8; }
.c1 { grid-area: c1; }
.c2 { grid-area: c2; }
.c3 { grid-area: c3; }
.c4 { grid-area: c4; }
.c5 { grid-area: c5; }
.c6 { grid-area: c6; }
.c7 { grid-area: c7; }
.c8 { grid-area: c8; }

h2 {
    font-size: 1.5rem;
}

h3 {
    color: #7e9ec7;
}

iframe {
    border: 12px solid black;
    border-radius: 40px;
    margin: auto;
}

img {
    width: 20px;
}

.link-div {
    display: grid;
    place-items: left;
    grid-template-rows: 1fr;
    grid-template-columns: 20px 100px 20px 1fr;
    gap: 5px;
    line-height: 20px;
}

:global(.hidden) {
    opacity: 0;
    filter: blur(5px);
    transform: translateX(-100%);
    transition: all 2s;
}

:global(.show) {
    opacity: 1;
    filter: blur(0);
    transform: translateX(0);
}

@media (min-width: 800px) {
    .grid {
        grid-template-columns: 1fr 1fr;
        grid-template-areas: 
                            'a1 c1'
                            'c2 a2'
                            'a3 c3'
                            'c4 a4'
                            'a5 c5'
                            'c6 a6'
                            'a7 c7'
                            'c8 a8';
        row-gap: 100px;
    }

    .content {
        margin-left: 50px;
        margin-right: 50px;
    }   
}

@media (min-width: 950px) {
    .grid {
        grid-template-columns: 1fr 1fr;
        row-gap: 100px;
    }
}

</style>