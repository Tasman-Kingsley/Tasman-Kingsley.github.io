<script>
    import { fly } from 'svelte/transition';
</script>

<div class="grid" in:fly={{x: -400, duration: 500}}>
    <iframe src="https://tasmankingsley.github.io/podcast-app/" width="350" height="650"></iframe>

    <div class="grid-content">
        <h2>this project is blah blah..</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p><br>
    </div>

    <iframe src="https://tasmankingsley.github.io/todo/" width="350" height="650"></iframe>

    <div class="grid-content">
        <h2>this project is blah blah..</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p>

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
    border: 2px solid white;
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