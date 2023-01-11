<script>
    export let items;
    export let color;

    let item = items[items.length - 1]
    let count = 0
    
    setInterval(() => {
        item = items[count]
        count += 1
        if (count > items.length - 1) {
            count = 0
        }
    }, 1000)

    let styles = `inline-block w-24 rounded-md ${color}`
</script>

<div class={styles}>
    <span class="font-bold">{item}</span>

</div>


