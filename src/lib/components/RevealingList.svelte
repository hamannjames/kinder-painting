<script>
    import { intersecting } from "$lib/actions/intersecting";
    import { increment, intersections } from "$lib/stores/intersections";
    import { onMount } from "svelte";
    import { fade, fly } from "svelte/transition";

    export let theTransition = fly;
    export let options = {
        x: '50vw',
        duration: 300
    }
    export let items = [];

    let show = false;
    let id;
    let node;

    if (!show) {
        increment();
        id = $intersections;
    }

    onMount(() => {
        const handleShow = () => show = true;

        node.addEventListener(`intersection-${id}-enter`, handleShow);

        return () => {
            node.removeEventListener(`intersection-${id}-enter`, handleShow);
        }
    })
</script>

<div bind:this={node} use:intersecting={{id}}>
{#if show}
    <ul class="text-base text-center italic">
    {#each items as item, i}
        <li transition:theTransition|global={{delay: i * 100 + 100, ...options}}>
            <slot {item} />
        </li>
    {/each}
    </ul>
{/if}
</div>