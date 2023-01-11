<script>
    // Add most used formulas
    import Katex from 'svelte-katex'

    export let func;
</script>

<div class="text-lg grid justify-items-center py-5">
    <Katex>
        {func}
    </Katex>
</div>