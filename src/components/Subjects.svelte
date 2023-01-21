<script>
    import Card from "./Card.svelte";

    export let posts;
    export let subjects;
    export let chapters;
    chapters.sort();

    let searchTerm = "";
    let select_subject;
    let select_chapter;
    let subject_search = "";
    let chapter_search = "";

    $: if (subjects.includes(select_subject)) {       // This search & sort algorithm
      subject_search = `${select_subject}`            // might well be the most
    } else {                                          // horrible possible way to implement
      subject_search = "";                            // a pagination. But it works,
    }                                                 // PERFECTLY!
    $: if (chapters.includes(select_chapter)) {
      chapter_search = `${select_chapter}`
    } else {
      chapter_search = "";
    }


    $: searchedPosts = posts.filter((post) => {
      return post.frontmatter.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
    })

    $: filtered_subjects = posts.filter((post) => {
      return post.frontmatter.subject.toLowerCase().includes(subject_search.toLowerCase().trim())
    })

    $: filtered_chapters = posts.filter((post) => {
      return post.frontmatter.chapter.toLowerCase().includes(chapter_search.toLocaleLowerCase().trim())
    })

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

      <select bind:value={select_subject} class="bg-black select select-bordered w-full">
        <option selected class="text-zinc-500">Select subject</option>
        {#each subjects as subject}
          <option value={subject}>{subject}</option>
        {/each}
      </select>

    </div>
    <div class="sm:hidden">
      <select bind:value={select_subject} class="bg-black">
        <option selected class="text-zinc-500">Select subject</option>
        {#each subjects as subject}
          <option value={subject}>{subject}</option>
        {/each}
      </select>
    </div>
  
    <div class="max-sm:hidden">
      <select bind:value={select_chapter} class="bg-black select select-bordered w-full">
        <option selected class="text-zinc-500">Select chapter</option>
        {#each chapters as chapter}
          <option value={chapter}>{chapter}</option>
        {/each}
      </select>
    </div>
    
    <div class="sm:hidden">
      <select bind:value={select_chapter} class="bg-black">
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
    {#each filtered_subjects as sub}
      {#each filtered_chapters as chap}
        {#if sub == post & chap == post}            <!-- Just look at this horribleness-->
          <Card
            url={post.url}
            title={post.frontmatter.title}
            description={post.frontmatter.description}
            image={post.frontmatter.image}
            tags={post.frontmatter.chapter}
            pubDate={post.frontmatter.pubDate}
            subject={post.frontmatter.subject}
          />
        {/if}
      {/each}
    {/each}
  {/each}
</div>
