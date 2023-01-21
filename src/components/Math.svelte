<script>
    // Add most used formulas
    import Katex from 'svelte-katex'

    export let func;
</script>

<div class="text-md grid justify-items-center py-5">
    <Katex>
        {func}
    </Katex>
</div>