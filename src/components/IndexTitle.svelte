<script>
    import Age from "./Age.svelte";
    import Roulette from "./Roulette.svelte";
    import NGB from "./NGB.svelte";

    let b_date = "08/23/2002"
    let personal = ["developer", "student"]
    let hobbies = ["running.", "climbing.", "hiking.",              // Remember "."
                    "swimming.", "rowing.", "skiing.", "biking."]
</script>

<div class="lg:max-w-[1140px]">
    <div class="m-auto max-sm:px-4">
        <NGB />
        <h3 class="text-gray-400 text-xl font-light pt-12 pb-32 text-center lg:px-48 px-10">
            I'm a <span class="font-bold inline-block w-[9.5rem] bg-zinc-500 px-1">
                <Age client:load b_date={b_date}/>
            </span> year-old <span>
                <Roulette client:load items={personal} />
            </span> who enjoys programming, video games, and <span>
                <Roulette client:load items={hobbies} />
            </span> This website contains my class notes, ideas, and my programming projects.
        </h3>
    </div>
</div>
