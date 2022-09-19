<script>
import { fly } from 'svelte/transition';

window.scrollTo(0, 0);

let display_img = {
    src: '',
    visible: false
};

function display(src) {
    display_img.src = src;
    display_img.visible = true;
}

</script>

<div class="grid" in:fly={{x: -400, duration: 500}}>
    <img class="persona p1" src="./images/persona-final.png" on:click={() => display("./images/persona-final.png")} alt="">
    <img class="persona p2" src="./images/Yuna-Persona.png" on:click={() => display("./images/Yuna-Persona.png")} alt="">
    <div class="persona-content">
        <h2>Personas</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p>    
    </div>


    <iframe src="https://www.youtube.com/embed/yrPmsU8TLg0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="grid-content">
        <h2>Jamingle prototype app flow</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p> 
    </div>

    <iframe src="https://www.youtube.com/embed/jPtX_QU5gz4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="grid-content">
        <h2>HiDoge prototype app flow</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p> 
    </div>

    {#if display_img.visible}
    <div class="display" on:click={() => display_img.visible = false}>
        <span class="close">⤫</span>
        <img class="display-img" src={display_img.src} />
    </div>
    {/if}
</div>

<style>
.grid {
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: 1fr;
    grid-template-areas: 
                        'p1'
                        'p2'
                        'pcont'
                        'jvid'
                        'jcont';
    row-gap: 20px;
    column-gap: 20px;
    /* place-items: center; */
}

.display {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
}

.display-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.close {
    position: fixed;
    top: 0;
    left: 15px;
    font-size: 35px;
    cursor: pointer;
}

.persona-content {
    grid-area: pcont;
}

.persona {
    width: 100%;
    margin: auto;
    cursor: pointer;
    transition: width 1s;
}

.p1 {
    grid-area: p1;
}

.p2 {
    grid-area: p2;
}

iframe {
    width: 100%;
    height: 250px;
    margin: auto;
    transition: width 1s;
    /* grid-area: jvid; */
}

@media (max-width: 500px) {
    iframe {
        width: 100%;
        height: 240px;
    }
}

@media (min-width: 500px) {
    iframe {
        width: 100%;
        height: 300px;
    }
}

@media (min-width: 800px) {
    iframe {
        width: 100%;
        height: 400px;
    }
    .grid {
        grid-template-columns: 1fr 1fr;
        grid-template-areas: 
                            'p1       p2'
                            'pcont pcont'
                            'jvid jcont';
        row-gap: 80px;
    }
}
</style>