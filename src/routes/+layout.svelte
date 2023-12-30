<script>
    export const prerender = true;
    
    import { fade, fly, slide } from "svelte/transition";
    import "../app.css";
    import Header from "./Header.svelte";
    import { onMount } from "svelte";
    import { backIn, backOut, circIn, cubicIn, cubicOut } from "svelte/easing";
    import Footer from "./Footer.svelte";

    let timeout = false;
    let loaded = true;

    let moving = false;
    let down = false;

    const numCols = 8

    let boxStart = null;
    let boxEnd = null;
    let boxPivot = null;
    let drawPoints = ''
    let prevCoord = null;
    let followPoints = [];

    const fills = ['#303a4c', '#dcdfe1', '#cbc1a3', '#a69674'];
    let activeFills = null;
    let fillPointer = 0;
    let fillUp = true;

    onMount(() => {
        timeout = true
    })

    const upListener = () => {
        down = false;
        if (fillUp && fillPointer === fills.length - 1) {
            fillUp = false;
        }

        if (!fillUp && fillPointer === 0) {
            fillUp = true;
        }

        fillPointer = fillUp ? fillPointer + 1 : fillPointer - 1;
        resetBox();
    }

    const downListener = () => {
        down = true;
        moving = false;
    }

    const moveListener = (e) => {
        moving = true;

        if (down) {
            drawBox(e);
        } else {
            drawFollow(e);
        }
    }

    const resetBox = () => {
        boxStart = null;
        boxEnd = null;
        boxPivot = null;
        drawPoints = ''
        prevCoord = null;
        activeFills = null;
        followPoints = [];
    }

    const drawBox = ({pageX, pageY, clientX, clientY}) => {
        if (!boxPivot) {
            boxPivot = {x: pageX, y: pageY}
            boxStart = {x: pageX, y: pageY}
            boxEnd = {x: pageX, y: pageY};
            drawPoints = followPoints.reduce((c, p) => `${c}${p.x},${p.y} `,'');
            prevCoord = {x: clientX, y: clientY};
            activeFills = [];
            followPoints = [];
        } else {
            prevCoord.x = pageX;
            prevCoord.y = pageY;

            if (pageX < boxPivot.x) {
                drawNegativeXCoord({pageX, pageY});
            } else {
                drawPositiveXCoord({pageX, pageY})
            }

            drawPath({x: clientX, y: clientY})
        }
    }

    function throttle(mainFunction, delay) {
        let timerFlag = null; // Variable to keep track of the timer

        // Returning a throttled version 
        return (...args) => {
            if (timerFlag === null) { // If there is no timer currently running
            mainFunction(...args); // Execute the main function 
            timerFlag = setTimeout(() => { // Set a timer to clear the timerFlag after the specified delay
                timerFlag = null; // Clear the timerFlag to allow the main function to be executed again
            }, delay);
            }
        };
    }

    const drawPath = throttle(({x, y}) => {
        drawPoints = `${drawPoints} ${x},${y} `;
    }, 30);

    const drawFollow = throttle(({clientX, clientY}) => {
        const slice = followPoints.slice(-1);
        followPoints = [...slice, {x: clientX, y: clientY}];
    }, 5);

    const changeColor = throttle(() => {
        if (fillUp && fillPointer === fills.length - 1) {
            fillUp = false;
        }

        if (!fillUp && fillPointer === 0) {
            fillUp = true;
        }

        fillPointer = fillUp ? fillPointer + 1 : fillPointer - 1;

        activeFills = [...activeFills, fills[fillPointer]];

        console.log(activeFills)
    }, 500);

    const drawNegativeXCoord = ({pageX, pageY}) => {
        boxStart.x = pageX

        if (pageY < boxPivot.y) {
            boxStart.y = pageY;
        } else {
            boxEnd.y = pageY
        }
    }

    const drawPositiveXCoord = ({pageX, pageY}) => {
        boxEnd.x = pageX;

        if (pageY < boxPivot.y) {
            boxStart.y = pageY;
        } else {
            boxEnd.y = pageY
        }
    }
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,400;0,700;1,200;1,400;1,700&family=Nunito+Sans:ital,opsz,wght@0,6..12,200;0,6..12,400;0,6..12,700;1,6..12,200;1,6..12,400;1,6..12,700&display=swap" rel="stylesheet">
</svelte:head>

{#if !loaded && timeout}
<div class="app h-screen w-screen flex absolute z-10">
    {#each Array.from(Array(numCols)) as col, i}
    <div 
        class="flex-1 h-full bg-naval-700" 
        in:fly|global={{
            delay: i * 150,
            duration: 600,
            opacity: 1,
            y: '-100vh'
        }}
        out:fly|global={{
            duration: 800,
            y: '100vh',
            opacity: 1
        }}
        on:introend={() => {
            if (i === numCols - 1) {
                loaded = true
            }
        }}
    ></div>
    {/each}
</div>
{/if}

{#if loaded}
{#if boxStart && boxEnd && drawPoints}
<!--
<div out:fade class="fixed z-50 bg-black pointer-events-none" style={`background-color: #000000; top: ${boxStart.y}px; left: ${boxStart.x}px; width: ${boxEnd.x - boxStart.x}px; height: ${boxEnd.y - boxStart.y}px; clip-path: path('M 0 0 C ${(boxEnd.x - boxStart.x) / 4} ${(boxEnd.x - boxStart.x) / 4}, ${mouseX + 10} ${mouseY + 10}, ${mouseX} ${mouseY}')`}></div>
-->
<svg out:fade class="fixed w-screen z-50 h-screen pointer-events-none">
    <polyline points={drawPoints} stroke="{fills[fillPointer]}" fill="transparent" stroke-width="15" stroke-linejoin="bevel" stroke-linecap="round" />
</svg>
{/if}
{#if followPoints.length > 0}
<svg out:fade class="fixed w-screen z-50 h-screen pointer-events-none">
    <polyline points={followPoints.reduce((c, p) => `${c}${p.x},${p.y} `,'')} stroke="{fills[fillPointer]}" fill="transparent" stroke-width="15" stroke-linejoin="bevel" stroke-linecap="round" />
</svg>
{/if}
<div class="text-grey-900 cursor-paintbrush overflow-x-hidden" on:contextmenu={upListener} on:mousedown={downListener} on:mousemove={moveListener} on:mouseup={upListener} role="presentation">
    <Header />
    <div class="app min-h-screen flex flex-col pt-40 sm:pt-20">
        <main class="flex-1">
            <slot />
        </main>
    </div>
    <Footer />
</div>
<style>
    p, h1, h2, h3, h4, h5, h6, button, input, textarea, li {
        cursor: auto;
    }

    a {
        cursor: pointer;
    }
</style>
{/if}