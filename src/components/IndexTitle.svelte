<script>
    import Age from "./Age.svelte";
    import Roulette from "./Roulette.svelte";

/*     let color = ["bg-gradient-to-tr from-orange-700 to-yellow-400", "bg-gradient-to-tr from-violet-800 to-rose-500", "bg-gradient-to-tr from-cyan-500 to-blue-800"]
    let titleColor = `text-transparent bg-clip-text ${color}` */

    /* let Nikolai_Color = ["text-transparent bg-clip-text bg-gradient-to-tr from-orange-700 to-yellow-400 ", "text-white", "text-white"] 
    let Grytvik_Color = ["md:px-8 max-md:py-2 text-white ", "md:px-8 max-md:py-2 text-transparent bg-clip-text bg-gradient-to-tr from-violet-800 to-rose-500", "md:px-8 max-md:py-2 text-white"]; 
    let Borbe_Color = ["text-white ", "text-white ", "text-transparent bg-clip-text bg-gradient-to-tr from-cyan-500 to-blue-800"];  */

    let Nikolai_Color = true
    let Grytvik_Color = false
    let Borbe_Color = false


    let count = 1
    let colorTable = ["bg-gradient-to-tr from-orange-700 to-yellow-400", "bg-gradient-to-tr from-violet-800 to-rose-500", "bg-gradient-to-tr from-cyan-500 to-blue-800"]
    let color = ""

    setInterval(() => {
        setColor()
        count += 1
        if (count > 2) {
            count = 0
        }
    }, 3000)


    function setColor() {
        if (count == 0) {
            Nikolai_Color = true
            Grytvik_Color = false
            Borbe_Color = false
        }
        else if (count == 1) {
            Nikolai_Color = false
            Grytvik_Color = true
            Borbe_Color = false
        }
        else if (count == 2) {
            Nikolai_Color = false
            Grytvik_Color = false
            Borbe_Color = true
        }
    }

    let b_date = "08/23/2002"
    let personal = ["developer", "student"]
    let hobbies = ["running.", "climbing.", "hiking."]

</script>

<div class="lg:max-w-[1140px]">
    <div class="m-auto max-sm:px-4">
        <h1 class="lg:text-8xl max-lg:text-7xl max-md:flex flex-col text-center">
            <span class={Nikolai_Color ? "text-transparent bg-clip-text bg-gradient-to-tr from-orange-700 to-yellow-400 transition-all ease-in duration-1000" : "text-white"}>Nikolai</span><span class={Grytvik_Color ? "md:px-8 max-md:py-2 text-transparent bg-clip-text bg-gradient-to-tr from-violet-800 to-rose-500 transition-all ease-in duration-1000 " : "md:px-8 max-md:py-2 text-white"}>Grytvik</span><span class={Borbe_Color ? "text-transparent bg-clip-text bg-gradient-to-tr from-cyan-500 to-blue-800 transition-all ease-in duration-1000 " : "text-white"}>Borbe</span>
        </h1>
        <h3 class="text-gray-400 text-xl font-light pt-12 pb-32 text-center lg:px-48 px-10">
            I'm a <span class="font-bold"><Age client:load b_date={b_date}/></span> year-old <span><Roulette client:load items={personal} color={color} /></span> who enjoys programming, video games, and <span><Roulette client:load items={hobbies} color={color}/></span> This website contains my class notes, ideas, and my programming projects.
        </h3>
    </div>
</div>
