<script>
import Home from './lib/Home.svelte';
import Code from './lib/Code.svelte';
import Design from './lib/Design.svelte';
import Music from './lib/Music.svelte';
import About from './lib/About.svelte';
import { fly } from 'svelte/transition';

let nav = [
  {name: 'Nav', visible: false},
  {name: 'Tasman Kingsley', visible: true},
  {name: 'Code projects', visible: false},
  {name: 'Design portfolio', visible: false},
  {name: 'Music project', visible: false},
  {name: 'About', visible: false},
]

let y;

let title = nav[1].name;

function toggle_nav() {
  nav[0].visible = !nav[0].visible;
}

function toggle(num) {
  for (let i = 1; i < nav.length - 1; i++) {
    nav[i].visible = false;
  }
  nav[num].visible = true;
  title = nav[num].name;
  nav[0].visible = !nav[0].visible;
}
</script>

<svelte:window bind:scrollY={y}/>

<div>
  {#if nav[0].visible}
    <div class="nav" in:fly={{x: 400, duration: 500}} out:fly={{x: 400, duration: 500}}>
      <span class="nav-btn" on:click={() => toggle(1)}>Home</span>
      <span class="nav-btn" on:click={() => toggle(2)}>Code projects</span>
      <span class="nav-btn" on:click={() => toggle(3)}>Design portfolio</span>
      <span class="nav-btn" on:click={() => toggle(4)}>Music</span>
      <span class="nav-btn" on:click={() => toggle(5)}>About</span>
    </div>
  {/if}
  
  <div class="header">
    <span class="title">{title}</span>
  </div>

  <span class="burg" style="color: {y > 14.66 && !nav[0].visible ? '#fff':'#1e1f29'}"
    on:click={toggle_nav}>{!nav[0].visible ? '☰' : '✕'}</span>
  
  <div class="content">
    <!-- <span>{y}</span> -->
    {#if nav[1].visible}
      <Home/>
    {:else if nav[2].visible}
      <Code/>
    {:else if nav[3].visible}
      <Design/>
    {:else if nav[4].visible}
      <Music/>
    {:else if nav[5].visible}
      <About/>
    {/if}
  </div>
</div>


<style>
.nav {
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: #eef9ea;
  color: #1e1f29;
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(5, 1fr);
}

@media (min-width: 420px) {
  .nav {
    width: 420px;
    right: 0;
  }
  .header {
    text-align: center;
  }
}

.nav-btn {
  display: flex;
  align-items: center;
  margin: auto;
  width: 100%;
  height: 100%;
  text-align: center;
  border-bottom: 5px solid #eee;
  cursor: pointer;
  padding-left: 30px;
}

.nav-btn:hover {
  background-color: #eee;
}

.header {
  background-color: #99d2d4;
  color: #1e1f29;
  height: 45px;
  line-height: 45px;
  font-weight: 300;
}

.title {
  font-size: 1.5rem;
  padding-left: 10px;
}

.burg {
  font-size: 2rem;
  padding-right: 10px;
  line-height: 38px;
  cursor: pointer;
  position: fixed;
  top: 0;
  right: 0;
}

.content {
  display: grid;
  grid-auto-flow: row;
  margin: 15px;
  
}
</style>