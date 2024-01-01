<script>
    import { intersecting } from "$lib/actions/intersecting";
    import { increment, intersections } from "$lib/stores/intersections";
    import { onMount } from "svelte";
    import { fade, fly } from "svelte/transition";

    export let className = '';
    export let itemClassName = '';
    export let containerClassName='';
    export let theTransition = fly;
    export let options = {};
    export let items = [];
    export let spacing = 100;
    export let animate = true;

    if (!animate) {
        spacing = 0;
    }

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

<div bind:this={node} use:intersecting={{id}} class="{containerClassName}">
{#if show}
    <ul class="text-base italic {className}">
    {#each items as item, i}
        <li transition:theTransition|global={{x: '50vw', duration: 300, delay: i * spacing + 100, ...options}} class="{itemClassName}">
            <slot {item} />
        </li>
    {/each}
    </ul>
{/if}
</div>