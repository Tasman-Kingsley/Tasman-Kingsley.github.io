<script>
import { fly } from 'svelte/transition';
import { dark_mode } from "./store"

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
        <div class="card" style="background-color: {$dark_mode ? 'rgba(25, 26, 33, 0.8)' : 'rgba(238, 238, 238, 0.8)'};">
            <h2>Design thinking</h2>
            <p>Design thinking is a process and a mindset to approach designing and innovating products or services for people.
                There are many different design approaches and design philosophies, the approaches i have learnt were taught to me in University, and the ideas that were taught to me were
                very much influenced by Don Norman - who is considered by many to be the father of Human Centered Design (HCD).<br><br>
                
                Introduce the idea of design thinking and human centered design. Mention HCD vs UCD, UxD, ECD, and PD  Mention how
                Don Norman was the father of HCD. The five phases of deign thinking - 1. Empathize, 2. Define, 3. Ideate, 4. Prototype and 5. Test.
                The different subsets and philosophies of design.
                How i approached design in my Uni subjects.
                From learning how to ask the right question, to doing desk research, conducting user research, creating a persona, 
                using this persona and others to capture the essence with the group in affinity diagraming, 
                ideating ideas with the group, experience stories and storyboards, lo-fi and hi-fi prototyping, 
                and finally communicating the design in a video edit.</p>
        </div>
    </div>

    <img class="img p1" src="./images/persona-final.png" on:click={() => display("./images/persona-final.png")} alt="">
    <img class="img p2" src="./images/Yuna-Persona.png" on:click={() => display("./images/Yuna-Persona.png")} alt="">
    
    <div class="personas content">
        <div class="card" style="background-color: {$dark_mode ? 'rgba(25, 26, 33, 0.8)' : 'rgba(238, 238, 238, 0.8)'};">
            <h2>Personas</h2>
            <p>Personas are one of the tools or methods that can be used in the process of design thinking. 
                They are often used early on in the process, and are used to empathise with and humanise the people in which we are designing for.
                They enable us to collate together a fictional archetypal person who represents the people we are designing for.<br>
                Displayed above are two personas which i have created for uni projects.</p>
        </div>    
    </div>
    
    <div class="prototypes content">
        <div class="card" style="background-color: {$dark_mode ? 'rgba(25, 26, 33, 0.8)' : 'rgba(238, 238, 238, 0.8)'};">
            <h2>Prototypes</h2>
            <p>Below are two examples of hi-fi prototypes which i have created.
                Both were created for University projects, and both were created using adobe xd.
            </p>
        </div>    
    </div>


    <iframe src="https://www.youtube.com/embed/yrPmsU8TLg0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
    <div class="jamingle content">
        <div class="card" style="background-color: {$dark_mode ? 'rgba(25, 26, 33, 0.8)' : 'rgba(238, 238, 238, 0.8)'};">
            <h2>Jamingle prototype app flow</h2>
            <p>This project was about...</p>
        </div>
    </div>

    <iframe src="https://www.youtube.com/embed/jPtX_QU5gz4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
    <div class="hidoge content">
        <div class="card" style="background-color: {$dark_mode ? 'rgba(25, 26, 33, 0.8)' : 'rgba(238, 238, 238, 0.8)'};">
            <h2>HiDoge prototype app flow</h2>
            <p>This project was about...</p>
        </div>
    </div>


    <div class="journal content">
        <div class="card" style="background-color: {$dark_mode ? 'rgba(25, 26, 33, 0.8)' : 'rgba(238, 238, 238, 0.8)'};">
            <h2>Design principles journal</h2>
            <p>Here is an example of some of a 'journal entry' which is used to analyse the underlying design principles of a design.
                This journal is an example from an interaction design subject at Uni. It showcases some of the design principles i have learned and put into practice.

            </p>
        </div>
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
    align-items: center;
}

.card {
    padding: 5px 20px 5px 20px;
    border-radius: 10px;
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
        margin-left: 20px;
        margin-right: 20px;
    }
    .journal-img {
        grid-template-columns: repeat(4, 1fr);
    }
}
</style>