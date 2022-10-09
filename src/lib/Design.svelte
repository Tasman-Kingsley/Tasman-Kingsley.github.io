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
            <h2>Design Thinking and User Experience Design (UxD)</h2>
            <h3>My thoughts on design</h3>
            <p>Design is about discovering someone’s needs or desires (sometimes unbeknownst to them), using your empathy, openness, sensitivity, and psychological understanding to help fulfil their needs/desires through creativity, intuition, ideation, and the design thinking iterative process.</p>
            
            <h3>Design thinking</h3>
            <p>Design thinking is a process and a mindset to approach designing and innovating products or services for people.
                There are many different design approaches and design philosophies. The approaches i have learnt were taught to me in University while studying Interaction Design, and these ideas were
                very much influenced by Don Norman, who is considered by many to be the father of Human Centered Design (HCD) - he also coined the term 'User Experience'.<br><br>

                In Don Norman's great book 'The Design of Everyday Things', he breaks down his formulation of design thinking, and it can be well summated in this excerpt from chapter 6 of his book:</p>
                <blockquote>“The key emphasis of this book is the importance of developing products that fit the needs and capabilities of people. Design can be driven by many different concerns. 
                    Sometimes it is driven by technology, sometimes by competitive pressures or by aesthetics. Some designs explore the limits of technological possibilities; some explore the range of imagination, of society, of art or fashion. 
                    Engineering design tends to emphasize reliability, cost, and efficiency. The focus of this book, and of the discipline called human-centered design, is to ensure that the result fits human desires, needs, and capabilities. 
                    After all, why do we make products? We make them for people to use.”</blockquote>

            <h3>User experience design</h3>
            <p>UxD is an ambiguous term because it can mean different design approaches to different people. After learning some of the history and reading the progression of design in the book 'Interaction Design: Beyond Human-Computer Interaction' by Sharp, Preece, and Rogers, 
                it begins to make sense as to why there is some confusion around this term. UxD can mean any one of the following depending on who you ask: Interaction Design (IxD), Human Centered Design (HCD), User Centered Design (UCD), Experience Centered Design (ECD), or Paticipatory Design (PD).
            </p>
            <p>
                Many of these overlap but can have vastly different philosophies and values. For instance, ECD focuses on empathising with and genuinely trying to understand the hopes and desires of people, before trying to design meaningful experiences for people, with an emphasis on the experience. 
                Whereas UCD is more focused on understanding the psychology of people, and tailoring the design of the product to work more efficiently with the person, often prioritising user engagement and seamless usability. My Uni subjects focused on putting into practice IxD/HCD and ECD primarily.
            </p>

            <h3>The common design approach</h3>
            <p>
            The design approaches i have learnt usually encorporate the five phases of design thinking - 1. Empathize, 2. Define, 3. Ideate, 4. Prototype, and 5. Test. These phases are iterated over until a suitable design is created and implemented.
            There are several design tools that are widely used for each phase in the process. I have practiced all methods mentioned below in my uni design subjects: Fundamentals of Interaction Design and Experience Centered Design.
            </p>
            <ul><span>1. Empathize: </span>Learning how to ask the right question. Conducting desk research (studying what has already been done), User research (interviews with the target audience). Using affinity diagramming based on interview data to collate problem areas.</ul>
            <ul><span>2. Define: </span>Discovering the correct problem to solve. Creating personas based on affinity diagramming to capture and define the essence of the design direction.</ul>
            <ul><span>3. Ideate: </span>Ideating ideas with a group of other designers, using experience stories or storyboards to illustrate ideas before prototyping.</ul>
            <ul><span>4. Prototype: </span>Lo-fi prototyping (paper prototypes) and Hi-fi prototyping (using protyping software like Adobe Xd for mocking up closer to production designs).</ul>
            <ul><span>5. Test: </span>Taking the prototypes and testing them with the user base, and communicating the design with the team eg. in video edits. Testing almost always results in needing to go back and iterate over the previous phases to revise the design (as required) based on user feedback, before the prototype becomes production ready.</ul>

        </div>
    </div>

    <img class="img affinity-img" src="./images/affinity.jpg" on:click={() => display("./images/affinity.jpg")} alt="">

    <div class="affinity content">
        <div class="card" style="background-color: {$dark_mode ? 'rgba(25, 26, 33, 0.8)' : 'rgba(238, 238, 238, 0.8)'};">
            <h2>Affinity Diagramming</h2>
            <p>Affinity diagramming is a design thinking tool to brainstorm with fellow designers based on user research/interview data. The purpose of the diagramming is to try to gather relevant needs, desires, and problem areas the user or target base is having.<br><br> 
                Displayed here is an example of one of the affinity diagrams i participated in for a group project in a subject called Experience Centered Design (full disclosure - i only contributed to this diagram and do not take complete credit at all, i was using the blue post-it notes and can only take credit for them.). We used a miro board for the diagramming software.</p>
        </div>    
    </div>

    <div class="personas content">
        <div class="card" style="background-color: {$dark_mode ? 'rgba(25, 26, 33, 0.8)' : 'rgba(238, 238, 238, 0.8)'};">
            <h2>Personas</h2>
            <p>Personas are one of the tools or methods that can be used in the process of design thinking. 
                They are often used early on in the empathise-define phase, and are used to empathise with and humanise the people in which we are designing for.
                They enable us to collate together a fictional and archetypal person who represents the people we are designing for, and to capture the essense of the design problem.<br>
                Displayed below are two personas which i have created during the design process for two seperate group University projects (the designs are completely mine, group personas were created after we made individual ones).</p>
        </div>    
    </div>

    <img class="img p1" src="./images/Yuna-Persona.png" on:click={() => display("./images/Yuna-Persona.png")} alt="">
    <img class="img p2" src="./images/persona-final.png" on:click={() => display("./images/persona-final.png")} alt="">
    
    <div class="prototypes content">
        <div class="card" style="background-color: {$dark_mode ? 'rgba(25, 26, 33, 0.8)' : 'rgba(238, 238, 238, 0.8)'};">
            <h2>Prototypes</h2>
            <p>Prototypes are another tool in the design toolbelt, and are used in the prototyping and testing phase. 
                Below are two examples of hi-fi prototypes which i have created.
                I created both prototypes for the University projects (The Jamingle prototype idea corresponds to the Yuna persona, and the HiDoge prototype idea matches with the George persona). Both were created using adobe xd, photoshop, and illustrator.
            </p>
        </div>    
    </div>


    <img class="img jimg" src="./images/jamingle-layout.jpg" on:click={() => display("./images/jamingle-layout.jpg")} alt="">

    <iframe class="jvid" src="https://www.youtube.com/embed/yrPmsU8TLg0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
    <div class="jamingle content">
        <div class="card" style="background-color: {$dark_mode ? 'rgba(25, 26, 33, 0.8)' : 'rgba(238, 238, 238, 0.8)'};">
            <h3>Jamingle prototype app flow</h3>
            <p>This is a prototype which i made for a group University project in a subject called Experience Centered Design.
                The topic question my group chose was: 
                <i>"How can digital interactions involving music make the experience of university students doing online learning due to COVID more meaningful?".</i> The theme was disconnection. 
                After each of us (seperately and together) went through the process of: desk research, user research, affinity diagramming, persona creation, ideation, experience stories, story boarding, and lo-fi paper prototyping,
                we finally came to end up using the hi-fi prototype shown in this youtube video (The design of this prototype was created by me in adobe xd).  
            </p>
            <p>Jamingle is a social networking applicaion based in MS Teams where users share their interest in music in novel ways through proximity bubble maps and a level-up system. 
                It aims to connect students, who feel physically disconnected due to Covid-19, by linking people of similar music taste and encouraging social interactions.</p>
        </div>
    </div>

    <img class="img himg" src="./images/hidoge-layout.jpg" on:click={() => display("./images/hidoge-layout.jpg")} alt="">

    <iframe class="hvid" src="https://www.youtube.com/embed/jPtX_QU5gz4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
    <div class="hidoge content">
        <div class="card" style="background-color: {$dark_mode ? 'rgba(25, 26, 33, 0.8)' : 'rgba(238, 238, 238, 0.8)'};">
            <h3>HiDoge prototype app flow</h3>
            <p>This is a prototype which i made for a group University project in a subject called Fundamentals of Interaction Design.
                Similarly to the Jamingle prototype, for the HiDoge project i carried out: user research, affinity diagramming, persona creation, ideation, experience stories, story boarding, and lo-fi paper prototyping,
                before developing this hi-fi prototype shown in the youtube video (again the design of this prototype was created by me in adobe xd).
            </p>
        </div>
    </div>


    <div class="journal content">
        <div class="card" style="background-color: {$dark_mode ? 'rgba(25, 26, 33, 0.8)' : 'rgba(238, 238, 238, 0.8)'};">
            <h2>Design Principles Journal</h2>
            <p>Here is an example of a 'journal entry' which is a tool used to analyse the underlying design principles of a design. I chose to analyse the Spotify IOS app for this journal. I used a combination of Gestalt principles, Jakob Nielsen's usability heuristics, and fundamental
                psychological concepts of interaction as outlined my Don Norman, including: affordances, signifiers, constraints, mappings, feedback, and visibility.
                This journal is an example from an interaction design subject at Uni. It showcases some of the design principles i have learnt and put into practice.

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
                        'affinity'
                        'affinity-img'
                        'pcont'
                        'p1'
                        'p2'
                        'prototypes'
                        'jimg'
                        'jvid'
                        'jcont'
                        'himg'
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
    color: #fff;
}

span {
    color: #7e9ec7;
    font-weight: 400;
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

.affinity {
    grid-area: affinity;
}

.affinity-img {
    grid-area: affinity-img;
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

.jamingle {
    grid-area: jcont;
}

.hidoge {
    grid-area: hcont;
}

.jimg {
    grid-area: jimg;
}

.himg {
    grid-area: himg;
}

.jvid {
    grid-area: jvid;
}

.hvid {
    grid-area: hvid;
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

h3 {
    color: #7e9ec7;
    font-size: 1.3rem;
}

p, ul, blockquote, span {
    /* font-size: 1.2rem; */
}

iframe {
    width: 100%;
    height: 250px;
    margin: auto;
    transition: width 1s;
    /* grid-area: jvid; */
}

blockquote {
    font-family: 'Helvetica Neue', sans-serif;
    font-style: italic;
    font-size: 1.2rem;
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
                            'affinity affinity-img'
                            'pcont pcont'
                            'p1 p2'
                            'prototypes prototypes'
                            'jimg jcont'
                            'jvid jcont'
                            'hcont himg'
                            'hcont hvid'
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