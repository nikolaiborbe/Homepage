<script>
  export let url = "";
  export let title;
  export let description;

  import { difInDays } from "../lib/func";
</script>

<a href={url}>
  <div
    class="card w-[450px] h-[450px] max-sm:w-[350px] max-sm:h-[350px] bg-base-100 shadow-xl cursor-pointer hover:scale-[1.02] transition-all"
  >
    <div class="card-body">
      <h2 class="card-title">
        {title}
      </h2>
      <p>{description}</p>
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
