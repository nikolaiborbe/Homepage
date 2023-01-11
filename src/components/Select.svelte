<script>
  export let items;
  export let title;
</script>

<select class="select select-bordered w-full max-w-xs">
  <option selected class="text-gray-500">{title}</option>
  {#each items as item}
    <option value="item" >{item}</option>
  {/each}
</select>
