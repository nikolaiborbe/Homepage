<script>
    import { onInterval } from "../lib/func";

    export let callback;
    export let interval = 50;

    onInterval(callback, interval)
</script>