<script>
    import Card from "./Card.svelte";

    export let posts;
    export let subjects;
    export let chapters;
</script>

<div>
    <div class="flex flex-wrap justify-center p-5 gap-5">
        <select class="select select-bordered w-full max-w-xs">
          <option selected class="text-gray-500">Select subject</option>
          {#each subjects as item}
          <!-- 
          HOW TO DO IT
          https://svelte.dev/tutorial/svelte-options 
          
          ALSO ADD SEARCHBAR
          https://www.youtube.com/watch?v=Ju6VSLKXrJg
          -->
            <option value={item}>{item}</option>
          {/each}
        </select>

        <select class="select select-bordered w-full max-w-xs">
          <option selected class="text-gray-500">Select chapter</option>
          {#each chapters as item}
            <option value="item">{item}</option>
          {/each}
        </select>
    </div>
    
    <div class="flex flex-wrap gap-5 justify-center">
        {#each posts as post}
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
</div>