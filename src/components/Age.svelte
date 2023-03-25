<script>
    import { exactAge } from "../lib/func";

    export let b_date;

    let age = 0

    setInterval(() => {
        age = exactAge(b_date)
    }, 30)
</script>

<div class="inline-block">  
    <span class="font-bold font-mono text-white">{age}</span>
</div>