<script>
    import { fly, slide } from "svelte/transition";
    import white_house_big from "$lib/images/white_house_big.png"
    import yellow_house_with_deck_from_front from "$lib/images/yellow_house_with_deck_from_front.png";
    import house_with_beams from "$lib/images/house_with_beams.png"
    import commercial_spray_paint from "$lib/images/commercial_spray_paint.png"
    import { onMount } from "svelte";
    import Button from "$lib/components/Button.svelte";
    import BrushBg from "$lib/components/BrushBg.svelte";
    import BrushSeparator from "$lib/components/BrushSeparator.svelte";
    import { intersecting } from "$lib/actions/intersecting";
    import { intersections } from "$lib/stores/intersections";
    import RevealContainer from "$lib/components/RevealContainer.svelte";
    import Testimonials from "./Testimonials.svelte";
    import RevealingList from "$lib/components/RevealingList.svelte";
  import GetQuoteButton from "$lib/components/GetQuoteButton.svelte";
  import GetAQuoteSection from "./GetAQuoteSection.svelte";
  import WhatWeDo from "./WhatWeDo.svelte";

    const images = [white_house_big,yellow_house_with_deck_from_front,house_with_beams,commercial_spray_paint]
    let image = 0;

    onMount(() => {
        const interval = setInterval(() => {
            image = image === images.length - 1 ? 0 : image + 1;
        }, 4000)

        return () => {
            clearInterval(interval);
        }
    })
    
</script>

<section class="w-full flex bg-icicle-100 px-8 py-12">
    <div class="flex flex-col md:flex-row w-full max-w-vw-max mx-auto gap-4">
        <div class="md:basis-3/5 relative h-72 md:h-screen hero md:p-2">
            {#key image}
                <figure class="w-full absolute overflow-hidden h-full rounded-md"
                    transition:fly={{
                        x: '-50vw'
                    }}
                >
                    <img src="{images[image]}" alt="painting" class="absolute top-1/2 left-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 h-full" style="max-width: inherit" />
                </figure>
            {/key}
        </div>
        <div class="md:basis-2/5 mt-4 md:mt-0 md:p-8 flex flex-col justify-center">
            <h2 class="text-4xl text-grey-900 font-mont">Interior, exterior, commercial and residential painting service</h2>
            <div class="mt-4">
                <GetQuoteButton on:show-email-popup />
            </div>
        </div>
    </div>
</section>

<section class="px-8 py-12">
    <p class="text-2xl max-w-vw-limit mx-auto text-left md:text-center">
        Kinder Painting has been serving Western Washington for over 20 years, providing unparalleled customer service.
    </p>
</section>

<BrushSeparator />

<WhatWeDo />

<Testimonials />

<GetAQuoteSection />

<style>
    /*
    @keyframes grow {
        from {transform: translate(0, 0)}
        to {transform: translate(-10px, -5px)}
    }
    */

    @keyframes grow {
        from {transform: scale(1)}
        to {transform: scale(1.015)}
    }

    figure {
        animation-name: grow;
        animation-duration: 4s;
        animation-timing-function: linear;
        box-shadow: rgba(0, 0, 0, 0.55) 0px 25px 15px -10px;
    }

    .hero {
        max-height: 500px;
    }
</style>
