<script>
    import Card from "./Card.svelte";

    export let posts;
    export let subjects;
    export let chapters;


    let searchTerm = "";
    $: searchedPosts = posts.filter((post) => {
      let out = post.frontmatter.title.toLowerCase().includes(searchTerm.toLowerCase()) +
      post.frontmatter.chapter.toLowerCase().includes(searchTerm.toLowerCase()) +
      post.frontmatter.subject.toLowerCase().includes(searchTerm.toLowerCase())
      return out
    } )

    let selected_chapter;
    let selected_subject;

</script>

<div class="grid justify-center p-5 mb-5">
  <input 
    type="text" 
    placeholder="Search" 
    class="input input-bordered sm:w-[35rem] max-sm:w-[22rem] rounded-3xl mb-4" 
    bind:value={searchTerm}
  />

  <div class="grid grid-cols-2 gap-5 justify-center max-sm:px-5">

    <div class="max-sm:hidden">
      <select bind:value={selected_subject} class="bg-black select select-bordered w-full">
        <option selected class="text-zinc-500">Select subject</option>
        {#each subjects as subject}
          <option value={subject}>{subject}</option>
        {/each}
      </select>
    </div>
    <div class="sm:hidden">
      <select bind:value={selected_subject} class="bg-black">
        <option selected class="text-zinc-500">Select subject</option>
        {#each subjects as subject}
          <option value={subject}>{subject}</option>
        {/each}
      </select>
    </div>
  
    <div class="max-sm:hidden">
      <select bind:value={selected_chapter} class="bg-black select select-bordered w-full">
        <option selected class="text-zinc-500">Select chapter</option>
        {#each chapters as chapter}
          <option value={chapter}>{chapter}</option>
        {/each}
      </select>
    </div>
    
    <div class="sm:hidden">
      <select bind:value={selected_chapter} class="bg-black">
        <option selected class="text-zinc-500">Select chapter</option>
        {#each chapters as chapter}
          <option value={chapter}>{chapter}</option>
        {/each}
      </select>
    </div>
  </div>
</div>


<div class="flex flex-wrap gap-5 justify-center">
  {#each searchedPosts as post}
    <Card
      url={post.url}
      title={post.frontmatter.title}
      description={post.frontmatter.description}
      image={post.frontmatter.image}
      tags={post.frontmatter.chapter}
      pubDate={post.frontmatter.pubDate}
      subject={post.frontmatter.subject}
    />
  {/each}
</div>
