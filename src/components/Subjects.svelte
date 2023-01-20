<script>
    import Card from "./Card.svelte";

    export let posts;
    export let subjects;
    export let chapters;

    let searchTerm = "";
    let select_subject;
    let select_chapter;
    let subject_search = "";
    let chapter_search = "";
    let search = "";

    $: if (subjects.includes(select_subject)) {
      subject_search = `${select_subject}`
    } else {
      subject_search = "";
    }
    $: if (chapters.includes(select_chapter)) {
      chapter_search = `${select_chapter}`
    } else {
      chapter_search = "";
    }


    $: searchedPosts = posts.filter((post) => {
      // let s_title = post.frontmatter.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
      let s_chapters = post.frontmatter.chapter.toLowerCase().includes(chapter_search.toLowerCase().trim())
      let s_subjects = post.frontmatter.subject.toLowerCase().includes(subject_search.toLowerCase().trim())
      // let out = [s_title, s_chapters, s_subjects]
      console.log(s_subjects)
      return s_subjects
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
