<script>
    function back() {
        setTimeout(() => {
            text = "Contact";
        }, 1500);
    }

    let text = "Contact"
    function copyText() {
        const textToCopy = "nikolaiborbe@gmail.com";
        navigator.clipboard.writeText(textToCopy).then(() => {
            text = "Copied to clipboard."
            back();
        })
    }
</script>

<button class="hover:scale-[1.02] transition-all"
        on:click={copyText}
        on:click={showModal}
        >
        <div class="font-bold">
            {text}
        </div>
</button>


<style>
    button {
        background: linear-gradient(45deg, #ff6b6b, #4c8bf5); /* Gradient for the border */
        border: none;
        color: white;
        padding: 10px 70px;
        font-size: 16px;
        border-radius: 8px; /* Rounded corners */
        position: relative;
        z-index: 1;
        overflow: hidden;
        cursor: pointer;
    }

    button::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, #ff6b6b, #4c8bf5); /* Same gradient */
        z-index: -1;
        margin: -2px; /* Adjust this for border thickness */
        border-radius: inherit;
    }

    button::after {
        content: "";
        position: absolute;
        top: 2px;
        left: 2px;
        right: 2px;
        bottom: 2px;
        background: black; /* Button inner background */
        z-index: -1;
        border-radius: inherit;
    }
</style>