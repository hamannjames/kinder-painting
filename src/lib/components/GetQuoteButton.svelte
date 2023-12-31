<script>
    import { createEventDispatcher } from "svelte";
    import Button from "./Button.svelte";

    const dispatch = () => {
        window.dispatchEvent(new CustomEvent('show-email-popup'));
    }
</script>

<Button onClick={dispatch}>
    Get Your Free Quote
</Button>