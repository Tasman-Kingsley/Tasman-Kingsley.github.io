<script>
    import { fly } from 'svelte/transition';
</script>

<div class="grid" in:fly={{x: -400, duration: 500}}>
    <iframe src="https://pods.netlify.app/" width="380" height="700"></iframe>

    <div class="grid-content">
        <h2>Podcast catcher webapp</h2>
        <span><a href="https://pods.netlify.app/">Web link</a></span><br>
        <span><a href="https://github.com/tasmankingsley/podcast-app">Github repo</a></span>
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
            javascript, css, and html.</p><br>
    </div>

    <iframe src="https://tasmankingsley.github.io/kana-kuizu/" width="380" height="700"></iframe>

    <div class="grid-content">
        <h2>Kana quiz app</h2>
        <span><a href="https://tasmankingsley.github.io/kana-kuizu/">Web link</a></span><br>
        <span><a href="https://github.com/tasmankingsley/kana-kuizu">Github repo</a></span>
        <h3>Description</h3>
        <p>A simple quiz app for learning the Japanese kana syllabaries: hiragana and katakana.
            The app features an option menu on the home page where you can choose whether to
            study hiragana, katakana, or both at the same time.
        </p>
        <p>
            The quiz presents a randomized grid of the kana and invites the user to remember
            the kana and input the corresponding romaji. The app will renforce learning and memory
            by validating the input and giving color feedback to the user for correct/incorrect answers.
        </p>

        <h3>Technology stack</h3>
        <p>This app is built with the vue framework, javascript, css, and html.</p><br>
    </div>

    <iframe src="https://tasmankingsley.github.io/todo/" width="380" height="700"></iframe>

    <div class="grid-content">
        <h2>Minimal to-do list</h2>
        <span><a href="https://tasmankingsley.github.io/todo/">Web link</a></span><br>
        <span><a href="https://github.com/tasmankingsley/todo">Github repo</a></span>
        <h3>Description</h3>
        <p>A minimal to-do list app. The user can input to-do items and check off the items
            when completed. The app features the ability to edit and remove the list items.
            The user's list will also be saved in browser local storage for the ability to
            return to list after closinng the page.
        </p>

        <h3>Technology stack</h3>
        <p>This app is built with the svelte framework, javascript, css, and html.</p><br>
    </div>

    <iframe src="https://tasmankingsley.github.io/consistency-graph/" width="380" height="700"></iframe>

    <div class="grid-content">
        <h2>Github-style consistency graph</h2>
        <span><a href="https://tasmankingsley.github.io/consistency-graph/">Web link</a></span><br>
        <span><a href="https://github.com/tasmankingsley/consistency-graph">Github repo</a></span>
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
        <p>This app is built with the svelte framework, javascript, css, and html.</p><br>
    </div>

    <iframe src="https://tasmankingsley.github.io/tetris/" width="380" height="700"></iframe>

    <div class="grid-content">
        <h2>Tetris clone</h2>
        <span><a href="https://tasmankingsley.github.io/tetris/">Web link</a></span><br>
        <span><a href="https://github.com/tasmankingsley/tetris">Github repo</a></span>
        <h3>Description</h3>
        <p>A simple tetris clone. Arrow keys to move, rotate, and drop faster.</p>

        <h3>Technology stack</h3>
        <p>This app is built with javascript, css, and html.</p><br>
    </div>

    <iframe src="https://tasmankingsley.github.io/new-tab/" width="380" height="700"></iframe>

    <div class="grid-content">
        <h2>New tab - customisable home page</h2>
        <span><a href="https://tasmankingsley.github.io/new-tab/">Web link</a></span><br>
        <span><a href="https://github.com/tasmankingsley/new-tab">Github repo</a></span>
        <h3>Description</h3>
        <p>Designed to be set as a home page or new tab page, intended for displaying and 
            customising favourite links/bookmarks.
        </p>

        <h3>Technology stack</h3>
        <p>This app is built with the svelte framework, javascript, css, and html.</p><br>
    </div>

    <iframe src="https://tasmankingsley.github.io/calc/" width="280" height="350"></iframe>

    <div class="grid-content">
        <h2>Simple calculator</h2>
        <span><a href="https://tasmankingsley.github.io/calc/">Web link</a></span><br>
        <span><a href="https://github.com/tasmankingsley/calc">Github repo</a></span>
        <h3>Description</h3>
        <p>A very simple calculator app inspired by the Mac OS calculator.
            One of my first forays into web programming.
        </p>

        <h3>Technology stack</h3>
        <p>This app is built with javascript, css, and html.</p><br>
    </div>

    <img src="/images/giddy-grocery.jpg">

    <div class="grid-content">
        <h2>Giddy Grocery - online grocery store</h2>
        <span><a href="https://tasmankingsley.github.io/giddy-grocery/">Web link</a></span><br>
        <span><a href="https://github.com/tasmankingsley/giddy-grocery">Github repo</a></span>
        <h3>Description</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p>

        <h3>Technology stack</h3>
        <p>This website is built with javascript, jquery, php, sql, json, css, and html.</p><br>
    </div>

    <img src="/images/car-rental.jpg">

    <div class="grid-content">
        <h2>Car rental fake business</h2>
        <span><a href="https://tasmankingsley.github.io/psuedo-business/">Web link</a></span><br>
        <span><a href="https://github.com/tasmankingsley/psuedo-business">Github repo</a></span>
        <h3>Description</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p>

        <h3>Technology stack</h3>
        <p>This website is built with javascript, jquery, json, css, and html.</p><br>
    </div>

</div>

<style>
.grid {
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: 1fr;
    column-gap: 20px;
    row-gap: 20px;
}

.grid-content {
    /* margin-right: 20%; */
}

iframe {
    border: 2px solid black;
    border-radius: 20px;
    margin: auto;
}

@media (min-width: 750px) {
    .grid {
        grid-template-columns: 1fr 1fr;
        row-gap: 50px;
    }
}

@media (min-width: 950px) {
    .grid {
        grid-template-columns: 1fr 1fr;
        row-gap: 50px;
    }
    .grid-content {
        margin-right: 15%;
    }
}

img {
    max-width: 100%;
    border-radius: 20px;
}
</style>