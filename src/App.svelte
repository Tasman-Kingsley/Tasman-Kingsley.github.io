<script>
import { nav, title } from './lib/store.js';
import { onMount } from "svelte";
import Home from './lib/Home.svelte';
import Code from './lib/Code.svelte';
import Pages from './lib/Pages.svelte';
import Design from './lib/Design.svelte';
import Music from './lib/Music.svelte';
import About from './lib/About.svelte';
import waves from './assets/waves.jpeg';
import dark from  './assets/background-dark.png';
import light from  './assets/background-light.png';
import { fly } from 'svelte/transition';

onMount(() => window.scrollTo(0,0));

let y;

// Init title to home title
$title = $nav[1].name;

// Init theme to dark mode
let dark_mode = true;
document.body.classList.add('dark');
document.body.style.backgroundImage = `url(${dark})`;

// Burg toggle for nav
function toggle_nav() {
  $nav[0].visible = !$nav[0].visible;
}

// Selects page screen to make visable based on nav input
function toggle(num) {
  for (let i = 1; i < $nav.length - 1; i++) {
    $nav[i].visible = false;
  }
  $nav[num].visible = true;
  $title = $nav[num].name;
  $nav[0].visible = !$nav[0].visible;
}

function toggle_mode() {
  dark_mode = !dark_mode;

  if (dark_mode === true) {
    document.body.classList.replace('light', 'dark');
    document.body.style.backgroundImage = `url(${dark})`;
  } 
  else if (dark_mode === false) {
    document.body.classList.replace('dark', 'light');
    document.body.style.backgroundImage = `url(${light})`;
  }
}
</script>

<svelte:window bind:scrollY={y}/>

<div>
  {#if $nav[0].visible}
    <div class="nav" in:fly={{x: 400, duration: 500}} out:fly={{x: 400, duration: 500}}
    style="background-image: url({waves});">
      <div class="nav-btn" on:click={() => toggle(1)}><span class="btn-txt">Home</span></div>
      <div class="nav-btn" on:click={() => toggle(2)}><span class="btn-txt">Web app projects</span></div>
      <div class="nav-btn" on:click={() => toggle(3)}><span class="btn-txt">Website projects</span></div>
      <div class="nav-btn" on:click={() => toggle(4)}><span class="btn-txt">Design portfolio</span></div>
      <!-- <div class="nav-btn" on:click={() => toggle(4)}><span class="btn-txt">Music</span></div> -->
      <div class="nav-btn" on:click={() => toggle(6)}><span class="btn-txt">About</span></div>
    </div>
  {/if}
  
  <div class="header"  style="background-color: {!dark_mode ? '#eee' : '#191a22'}; color: {!dark_mode ? '#1e1f29' : '#eee'};">
    <span class="title">{$title}</span>
    <span class="mode" on:click={toggle_mode} style="">☯</span>
  </div>

  <span class="burg" style="color: {dark_mode ? '#fff' : '#1e1f29'};" on:click={toggle_nav}>
      {!$nav[0].visible ? '☰' : '✕'}
  </span>

  <!-- <span>{y}</span> -->
  
  <div class="content">
    {#if $nav[1].visible}
      <Home/>
    {:else if $nav[2].visible}
      <Code/>
    {:else if $nav[3].visible}
      <Pages/>
    {:else if $nav[4].visible}
      <Design/>
    <!-- {:else if $nav[5].visible}
      <Music/> -->
    {:else if $nav[6].visible}
      <About/>
    {/if}
  </div>
</div>


<style>
:global(body.dark) {
  background-color: #1e1f29;
  color: white;
  background-position: cover;
  background-attachment: fixed;
}

:global(body.light) {
  background-color: white;
  color: #1e1f29;
  background-position: cover;
  background-attachment: fixed;
}

span:hover {
  opacity: 0.8;
}

.nav {
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: #b2c6d3;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #1e1f29;
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(5, 1fr);
  z-index: 2;
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
  opacity: 0.9;
}

.btn-txt {
  background-color: #eee;
  padding: 2px;
  border-radius: 2px;
  font-size: 1.2rem;
}

.header {
  background-color: #eee;
  color: #1e1f29;
  height: 60px;
  line-height: 60px;
  font-weight: 300;
}

.title {
  font-size: 1.8rem;
  padding-left: 10px;
  float: left;
  cursor: pointer;
}

.mode {
  font-size: 2.5rem;
  position: absolute;
  top: 0;
  right: 60px;
  cursor: pointer;
  z-index: 1;
  height: 60px;
  line-height: 55px;
}

.mode:enabled  {
  animation-name: spin;
  animation-duration: 1s;
}

@keyframes spin {
  from {transform: rotate(0deg);}
  to {transform: rotate(180deg);}
}


.burg {
  font-size: 2.5rem;
  padding-right: 10px;
  line-height: 50px;
  background-color: none;
  border-radius: 2px;
  opacity: 0.9;
  cursor: pointer;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
  
}
</style>