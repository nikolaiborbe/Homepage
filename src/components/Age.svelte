<script>
    import { exactAge } from "../lib/func";

    export let b_date;

    let age = 0

    setInterval(() => {
        age = exactAge(b_date)
    }, 10)
</script>

<span>{age}</span>