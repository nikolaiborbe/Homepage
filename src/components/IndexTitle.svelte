<script>
    import Age from "./Age.svelte";
    import Roulette from "./Roulette.svelte";
    import NGB from "./NGB.svelte";
	import Button from "./Button.svelte";

    let b_date = "08/23/2002"
    let personal = ["developer", "student"]
    let hobbies = ["running.", "climbing.", "hiking.",              // Remember "."
                    "swimming.", "rowing.", "skiing.", "biking."]
</script>

<div class="lg:max-w-[1140px]">
    <div class="m-auto max-sm:px-4">
        <NGB />
        <h3 class="text-gray-400 text-xl font-light pt-12 pb-32 text-center lg:px-48 px-2 leading-relaxed">
            I'm a <span class="font-bold">
                <Age b_date={b_date}/>
            </span> year-old <span>
                <Roulette items={personal} />
            </span> who enjoys programming, video games, and <span>
                <Roulette items={hobbies} />
            <div class="pt-16">
                <Button />
            </div>
        </h3>
    </div>
</div>
