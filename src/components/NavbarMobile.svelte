<script>
  import Logo from '/src/static/NGB-logo.svg'
  import Hamburger from "./Hamburger.svelte";
  import Menu from './Menu.svelte';

  let menu = false
  function handleClick() {
    menu = !menu
  }
</script>

<div class="navbar bg-base-100 flex justify-between px-6">
  <a href="/"><img src={Logo} alt="" class="w-14"></a>
  <button on:mousedown={handleClick}>
    <Hamburger />
  </button>
</div>

{#if menu == true}
    <Menu />
{/if}

<style>
  .navbar {
    border-bottom: thin solid rgb(66, 66, 66);
  }
</style>