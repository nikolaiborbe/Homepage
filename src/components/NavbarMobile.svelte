<script>
  import Logo from '../static/NGB-logo.svg'
  import Hamburger from "./Hamburger.svelte";

  let menu = false
  function handleClick(event) {
    menu = true
  }
</script>

<div class="navbar bg-base-100 flex justify-between px-6">
  <a href="/"><img src={Logo} alt="" class="w-14"></a>
  <button on:click={handleClick}>
    <Hamburger />
  </button>
  {#if menu == true}
    <div>
      TEST
    </div>
  {/if}
</div>

<style>
  .navbar {
    border-bottom: thin solid rgb(66, 66, 66);
  }
</style>