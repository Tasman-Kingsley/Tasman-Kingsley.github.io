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
    <div class="design content">
        <h2>Design thinking</h2>
        <p>From learning how to ask the right question, to doing desk research, conducting user research, creating a persona, 
            using this persona and others to capture the essence with the group in affinity diagraming, 
            ideating ideas with the group, experience stories and storyboards, lo-fi and hi-fi prototyping, 
            and finally communicating the design in a video edit.</p>    
    </div>

    <img class="img p1" src="./images/persona-final.png" on:click={() => display("./images/persona-final.png")} alt="">
    <img class="img p2" src="./images/Yuna-Persona.png" on:click={() => display("./images/Yuna-Persona.png")} alt="">
    
    <div class="personas content">
        <h2>Personas</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia nesciunt ipsam corrupti vitae dolore illo, nisi voluptates eum ea vel commodi quae perspiciatis qui esse pariatur amet assumenda beatae necessitatibus!</p>    
    </div>
    
    <div class="prototypes content">
        <h2>Prototypes</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia nesciunt ipsam corrupti vitae dolore illo, nisi voluptates eum ea vel commodi quae perspiciatis qui esse pariatur amet assumenda beatae necessitatibus!</p>    
    </div>


    <iframe src="https://www.youtube.com/embed/yrPmsU8TLg0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
    <div class="jamingle content">
        <h2>Jamingle prototype app flow</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p> 
    </div>

    <iframe src="https://www.youtube.com/embed/jPtX_QU5gz4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
    <div class="hidoge content">
        <h2>HiDoge prototype app flow</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p> 
    </div>


    <div class="journal content">
        <h2>Design principles journal</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse eligendi 
            laudantium maiores, dolore maxime iusto molestias error vel velit magnam tempora 
            distinctio aut amet fugiat nihil doloribus tenetur temporibus!</p> 
    </div>

    <div class="journal-img">
        <img class="img" src="./images/journal-p1.jpg" on:click={() => display("./images/journal-p1.jpg")}/>
        <img class="img" src="./images/journal-p2.jpg" on:click={() => display("./images/journal-p2.jpg")}/>
        <img class="img" src="./images/journal-p3.jpg" on:click={() => display("./images/journal-p3.jpg")}/>
        <img class="img" src="./images/journal-p4.jpg" on:click={() => display("./images/journal-p4.jpg")}/>
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
                        'design'
                        'p1'
                        'p2'
                        'pcont'
                        'prototypes'
                        'jvid'
                        'jcont'
                        'hvid'
                        'hcont'
                        'journal'
                        'journal-img';
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
    font-size: 40px;
    cursor: pointer;
}

.img {
    width: 100%;
    margin: auto;
    cursor: pointer;
    transition: width 1s;
}

.design {
    grid-area: design;
}

.prototypes {
    grid-area: prototypes;
}

.p1 {
    grid-area: p1;
}

.p2 {
    grid-area: p2;
}

.personas {
    grid-area: pcont;
}

.journal  {
    grid-area: journal;
}

.journal-img {
    grid-area: journal-img;
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
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
                            'design design'
                            'p1 p2'
                            'pcont pcont'
                            'prototypes prototypes'
                            'jvid jcont'
                            'hvid hcont'
                            'journal journal'
                            'journal-img journal-img';
        row-gap: 40px;
    }
    .content {
        margin-left: 30px;
        margin-right: 30px;
    }
    .journal-img {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>