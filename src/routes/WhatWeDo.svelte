<script>
    import RevealContainer from "$lib/components/RevealContainer.svelte";
    import RevealingList from "$lib/components/RevealingList.svelte";
    import brushIcon from "$lib/icons/iconmonstr-paintbrush-3.svg"
    import wrenchIcon from "$lib/icons/iconmonstr-wrench-24.svg"
    import { fade, fly, scale } from "svelte/transition";
    import navyHouse from "$lib/images/navy_house_front.webp";
    import navyHouseJpg from "$lib/images/navy_house_front.png";
    import houseBlueFront from "$lib/images/house_blue_front.webp";
    import houseBlueFrontJpg from "$lib/images/house_blue_front.png";
    import greenHouseFar from "$lib/images/green_house_far.webp";
    import greenHouseFarJpg from "$lib/images/green_house_far.png";
    import garageDoor from "$lib/images/garage_door.webp";
    import garageDoorJpg from "$lib/images/garage_door.jpg";
    import apartmentCommercial from "$lib/images/apartment_commercial.webp"
    import apartmentCommercialJpg from "$lib/images/apartment_commercial.png"
    import workersWithBoat from "$lib/images/workers_with_boat.webp";
    import workersWithBoatJpg from "$lib/images/workers_with_boat.png";
    import deckFromSide from "$lib/images/deck_from_side.webp";
    import deckFromSideJpg from "$lib/images/deck_from_side.png";
    import concrete from "$lib/images/concrete.webp";
    import concreteJpg from "$lib/images/concrete.jpg";
    import { base } from "$app/paths";
</script>
<section class="px-8 py-12">
    <h2 class="text-xl lg:text-center font-bold font-mont">What services do we offer?</h2>
    <div class="mt-8">
        <div class="flex flex-col lg:flex-row gap-8 mx-auto justify-center">
            <RevealingList
                items={[
                    [navyHouse, navyHouseJpg],
                    [houseBlueFront, houseBlueFrontJpg],
                    [greenHouseFar, greenHouseFarJpg],
                    [garageDoor, garageDoorJpg]
                ]}
                theTransition={scale}
                options={{duration: 500}}
                let:item
                className="flex flex-wrap"
                itemClassName="w-1/2 p-4"
                containerClassName="max-w-screen-lg"
            >
                <figure class="relative overflow-hidden aspect-video rounded-md">
                    <picture>
                        <source srcset="{item[0]}" />
                        <img src="{item[1]}" alt="Some of our work" />
                    </picture>
                </figure>
            </RevealingList>
            <RevealContainer
                className="min-w-96"
                theTransition={fly}
                options={{x: '40vw', duration: 500}}
            >
                <h3 class="text-lg font-bold font-mont mb-2">We paint of course!</h3>
                <ul class="text-base">
                    <li><img src="{brushIcon}" class="inline-block w-6" alt="paintrbush"/> Walls</li>
                    <li><img src="{brushIcon}" class="inline-block w-6" alt="paintrbush"/> Celings</li>
                    <li><img src="{brushIcon}" class="inline-block w-6" alt="paintrbush"/> Wood Trim</li>
                    <li><img src="{brushIcon}" class="inline-block w-6" alt="paintrbush"/> Garages</li>
                    <li><img src="{brushIcon}" class="inline-block w-6" alt="paintrbush"/> Sheds</li>
                    <li><img src="{brushIcon}" class="inline-block w-6" alt="paintrbush"/> Decks (staining, painting)</li>
                    <li><img src="{brushIcon}" class="inline-block w-6" alt="paintrbush"/> New Construction</li>
                    <li><img src="{brushIcon}" class="inline-block w-6" alt="paintrbush"/> Interiors</li>
                    <li><img src="{brushIcon}" class="inline-block w-6" alt="paintrbush"/> Exteriors</li>
                </ul>
            </RevealContainer>
        </div>
        <div class="flex flex-col lg:flex-row gap-8 mx-auto justify-center mt-24">
            <RevealingList
                items={[
                    [apartmentCommercial, apartmentCommercialJpg],
                    [deckFromSide, deckFromSideJpg],
                    [concrete, concreteJpg],
                    [workersWithBoat, workersWithBoatJpg]
                ]}
                theTransition={scale}
                options={{duration: 500}}
                let:item
                className="flex flex-wrap"
                itemClassName="w-1/2 p-4"
                containerClassName="max-w-screen-lg"
            >
                <figure class="relative overflow-hidden aspect-video">
                    <picture>
                        <source srcset="{item[0]}" />
                        <img src="{item[1]}" alt="Some of our work" />
                    </picture>
                </figure>
            </RevealingList>
            <RevealContainer className="min-w-96" theTransition={fly} options={{duration: 500, x: '50vw'}}>
                <h3 class="text-lg font-bold mb-2">And we offer other contracting<br> services</h3>
                <ul class="text-base">
                    <li><img src="{wrenchIcon}" class="inline-block w-6" alt="wrench"/> Pressure Washing</li>
                    <li><img src="{wrenchIcon}" class="inline-block w-6" alt="wrench"/> Wallpaper Removal</li>
                    <li><img src="{wrenchIcon}" class="inline-block w-6" alt="wrench"/> Siding Repair</li>
                    <li><img src="{wrenchIcon}" class="inline-block w-6" alt="wrench"/> Dryrot Repair</li>
                    <li><img src="{wrenchIcon}" class="inline-block w-6" alt="wrench"/> Sheetrock Repair</li>
                    <li><img src="{wrenchIcon}" class="inline-block w-6" alt="wrench"/> Trim Installation</li>
                    <li><img src="{wrenchIcon}" class="inline-block w-6" alt="wrench"/> Color Consultation</li>
                    <li><img src="{wrenchIcon}" class="inline-block w-6" alt="wrench"/> General Contracting</li>
                </ul>
            </RevealContainer>
        </div>
    </div>
</section>

<style>
    figure {
        box-shadow: rgba(0, 0, 0, 0.55) 0px 15px 15px -10px;
    }
</style>