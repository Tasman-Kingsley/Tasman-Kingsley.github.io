<script>
  import { fly } from 'svelte/transition';
  
  let y;

  let nav_visible = false;

  function toggle_nav() {
    nav_visible = !nav_visible;
  }


</script>

<svelte:window bind:scrollY={y}/>

<div>
  {#if nav_visible}
    <div class="nav" in:fly={{x: 400, duration: 800}} out:fly={{x: 400, duration: 800}}>
      <span class="nav-btn">Home</span>
      <span class="nav-btn">Code portfolio</span>
      <span class="nav-btn">Design portfolio</span>
      <span class="nav-btn">Music</span>
      <span class="nav-btn">About</span>
    </div>
  {/if}
  
  <div class="header">
    <span class="title">Tasman Kingsley</span>
  </div>
  <span class="burg" style="color: {y > 14.66 && !nav_visible ? '#fff':'#1e1f29'}"
    on:click={toggle_nav}>{!nav_visible ? '☰' : '✕'}</span>
  
  <div class="content">
    
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Cupiditate, temporibus ratione deleniti impedit voluptatum 
      incidunt totam nostrum maxime! Nobis nesciunt temporibus nulla, 
      pariatur aliquid velit. Odit nesciunt quam ipsum magni?</p>

      <span>{y}</span>

    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Cupiditate, temporibus ratione deleniti impedit voluptatum 
      incidunt totam nostrum maxime! Nobis nesciunt temporibus nulla, 
      pariatur aliquid velit. Odit nesciunt quam ipsum magni?</p>
        
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Cupiditate, temporibus ratione deleniti impedit voluptatum 
      incidunt totam nostrum maxime! Nobis nesciunt temporibus nulla, 
      pariatur aliquid velit. Odit nesciunt quam ipsum magni?</p>

    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Cupiditate, temporibus ratione deleniti impedit voluptatum 
      incidunt totam nostrum maxime! Nobis nesciunt temporibus nulla, 
      pariatur aliquid velit. Odit nesciunt quam ipsum magni?</p>

    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Cupiditate, temporibus ratione deleniti impedit voluptatum 
      incidunt totam nostrum maxime! Nobis nesciunt temporibus nulla, 
      pariatur aliquid velit. Odit nesciunt quam ipsum magni?</p>

    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Cupiditate, temporibus ratione deleniti impedit voluptatum 
      incidunt totam nostrum maxime! Nobis nesciunt temporibus nulla, 
      pariatur aliquid velit. Odit nesciunt quam ipsum magni?</p>
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
  will-change: transform;
}

@media (min-width: 420px) {
  .nav {
    width: 420px;
    right: 0;
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
  margin: 15px;
}

</style>