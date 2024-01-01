<script>
    import { intersecting } from "$lib/actions/intersecting";
    import { intersections, increment } from "$lib/stores/intersections";
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";

    export let theTransition = fade;
    export let options = {};
    export let className = '';

    let show = false;
    let node;

    if (!show) {
        increment();
    }

    const intersectingId = $intersections;

    const handleReveal = () => {
        show = true;
    }

    onMount(() => {

        node.addEventListener(`intersection-${intersectingId}-enter`, handleReveal);

        return () => {
            node.removeEventListener(`intersection-${intersectingId}-enter`, handleReveal);
        }
    })
</script>

<div bind:this={node} use:intersecting={{id: intersectingId}} class="{className}">
{#if show}
    <div transition:theTransition={options}>
        <slot />
    </div>
{/if}
</div>