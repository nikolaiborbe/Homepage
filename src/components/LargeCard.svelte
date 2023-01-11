<script>
    export let image;
    export let title;
    export let description;
</script>

<div class="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={image} alt="Album"/></figure>
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p>{description}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Listen</button>
    </div>
  </div>
</div>