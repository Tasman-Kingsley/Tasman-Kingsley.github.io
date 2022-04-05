<script>
    import { fly } from 'svelte/transition';
</script>

<div class="grid" in:fly={{x: -400, duration: 500}}>
    <iframe src="https://pods.netlify.app/" width="350" height="650"></iframe>

    <div class="grid-content">
        <h2>Podcast catcher webapp</h2>
        <span><a href="https://pods.netlify.app/">Web link</a></span><br>
        <span><a href="https://github.com/tasmankingsley/podcast-app">Github repo</a></span>
        <h3>Description</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p>

        <h3>Technology stack</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p><br>
    </div>

    <iframe src="https://tasmankingsley.github.io/todo/" width="350" height="650"></iframe>

    <div class="grid-content">
        <h2>Minimal to-do list</h2>
        <span><a href="https://tasmankingsley.github.io/todo/">Web link</a></span><br>
        <span><a href="https://github.com/tasmankingsley/todo">Github repo</a></span>
        <h3>Description</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p>

        <h3>Technology stack</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p><br>
    </div>

    <iframe src="https://tasmankingsley.github.io/consistency-graph/" width="350" height="650"></iframe>

    <div class="grid-content">
        <h2>Github-style consistency graph</h2>
        <span><a href="https://tasmankingsley.github.io/consistency-graph/">Web link</a></span><br>
        <span><a href="https://github.com/tasmankingsley/consistency-graph">Github repo</a></span>
        <h3>Description</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p>

        <h3>Technology stack</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p><br>
    </div>

    <iframe src="https://tasmankingsley.github.io/tetris/" width="370" height="630"></iframe>

    <div class="grid-content">
        <h2>Tetris clone</h2>
        <span><a href="https://tasmankingsley.github.io/tetris/">Web link</a></span><br>
        <span><a href="https://github.com/tasmankingsley/tetris">Github repo</a></span>
        <h3>Description</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p>

        <h3>Technology stack</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p><br>
    </div>

    <iframe src="https://tasmankingsley.github.io/new-tab/" width="370" height="630"></iframe>

    <div class="grid-content">
        <h2>New tab - customisable home page</h2>
        <span><a href="https://tasmankingsley.github.io/new-tab/">Web link</a></span><br>
        <span><a href="https://github.com/tasmankingsley/new-tab">Github repo</a></span>
        <h3>Description</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p>

        <h3>Technology stack</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p><br>
    </div>

    <iframe src="https://tasmankingsley.github.io/psuedo-business/" width="100%" height="630"></iframe>

    <div class="grid-content">
        <h2>Car rental fake business</h2>
        <span><a href="https://tasmankingsley.github.io/psuedo-business/">Web link</a></span><br>
        <span><a href="https://github.com/tasmankingsley/psuedo-business">Github repo</a></span>
        <h3>Description</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p>

        <h3>Technology stack</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p><br>
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
</style>