<script>
    export let items;

    let item = items[items.length - 1]
    let count = 0
    
    setInterval(() => {
        item = items[count]
        count += 1
        if (count > items.length - 1) {
            count = 0
        }
    }, 1000)

</script>

<div class="inline-block m-[2px] w-28 rounded-md bg-zinc-800">
    <span class="font-bold">{item}</span>
</div>