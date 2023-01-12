<script>
    import Age from "./Age.svelte";
    import Roulette from "./Roulette.svelte";
    import NGB from "./NGB.svelte";

/*     let color = ["bg-gradient-to-tr from-orange-700 to-yellow-400", "bg-gradient-to-tr from-violet-800 to-rose-500", "bg-gradient-to-tr from-cyan-500 to-blue-800"]
    let titleColor = `text-transparent bg-clip-text ${color}` */

    /* let Nikolai_Color = ["text-transparent bg-clip-text bg-gradient-to-tr from-orange-700 to-yellow-400 ", "text-white", "text-white"] 
    let Grytvik_Color = ["md:px-8 max-md:py-2 text-white ", "md:px-8 max-md:py-2 text-transparent bg-clip-text bg-gradient-to-tr from-violet-800 to-rose-500", "md:px-8 max-md:py-2 text-white"]; 
    let Borbe_Color = ["text-white ", "text-white ", "text-transparent bg-clip-text bg-gradient-to-tr from-cyan-500 to-blue-800"];  */
    

    let b_date = "08/23/2002"
    let personal = ["developer", "student"]
    let hobbies = ["running.", "climbing.", "hiking."]
</script>

<div class="lg:max-w-[1140px]">
    <div class="m-auto max-sm:px-4">
        <NGB />
        <h3 class="text-gray-400 text-xl font-light pt-12 pb-32 text-center lg:px-48 px-10">
            I'm a <span class="font-bold"><Age client:load b_date={b_date}/></span> year-old <span><Roulette client:load items={personal} /></span> who enjoys programming, video games, and <span><Roulette client:load items={hobbies} /></span> This website contains my class notes, ideas, and my programming projects.
        </h3>
    </div>
</div>
