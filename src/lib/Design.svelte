<script>
    import { fly } from 'svelte/transition';
</script>

<div class="grid" in:fly={{x: -400, duration: 500}}>
    <img class="persona" src="./images/persona-final.png" alt="">
    <div class="grid-content">
        <h2>George persona</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p>
    
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p><br>
    </div>

    <img class="persona" src="./images/Yuna-Persona.png" alt="">
    <div class="grid-content">
        <h2>Yuna persona</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p><br>
    </div>

    <iframe src="https://www.youtube.com/embed/yrPmsU8TLg0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="grid-content">
        <h2>Jamingle prototype app flow</h2>
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
    row-gap: 20px;
}
img {
    width: 100%;
    margin: auto;
    transition: width 1s;
}

@media (min-width: 950px) {
    img {
        width: 80%;
    }
}

iframe {
    width: 420px;
    height: 250px;
    margin: auto;
    transition: width 1s;
}

@media (min-width: 500px) {
    iframe {
        width: 500px;
        height: 300px;
    }
}

@media (min-width: 750px) {
    iframe {
        width: 750px;
        height: 450px;
    }
}
</style>