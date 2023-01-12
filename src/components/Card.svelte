<script>
  export let url;
  export let image;
  export let title;
  export let description;
  export let tags;
  export let pubDate;
  export let subject = false;
  
  import { difInDays } from "../lib/func";

</script>


<a href={url}>
  <div class="card w-[450px] h-[450px] max-sm:w-[350px] max-sm:h-[350px] bg-base-100 shadow-xl cursor-pointer hover:scale-105 transition-all">
    <figure><img src={image} alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">
        {title}
        {#if difInDays(pubDate) < 5}
          <div class="badge badge-secondary">NEW</div>
        {/if}
      </h2>
      <p>{description}</p>
      {#if subject != false}
        <div class="flex justify-between items-center pt-4">
          <div class="badge badge-accent badge-outline">{subject}</div>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">{tags}</div>
          </div>
        </div>
      {:else}
        <div class="card-actions justify-end pt-4">
          {#each tags as tag}
          <div class="badge badge-outline">{tag}</div>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</a>

<style>
  .card {
    background-color: black;
    border-bottom: 1px solid white;
    border-radius: 2.5rem;
  }
</style>