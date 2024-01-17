<script>
  import BrushBg from "$lib/components/BrushBg.svelte";
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

    let testimonials = [
        {
            content: 'Thank you for the good work! Your attention to detail is exemplary. We think it looks great.',
            author: 'Michael, Satisfied Customer'
        },
        {
            content: 'Thanks so much. I\'m really happy with the paint job and colors.',
            author: 'Sandy, Satisfied Customer'
        },
        {
            content: 'Thank you for surpassing all of our expectations! Thank you for the thoroughness and attention to detail, from set up to clean up/',
            author: 'A Catisfied Customer'
        },
        {
            content: 'Thank you for the great paint job. I love the color and such a nice job!',
            author: 'Sharon, Satisfied Customer'
        },
        {
            content: 'Thank you! We love the house and garage.',
            author: 'Cindy and Tammy, Satisfied Customers'
        },
        {
            content: 'Thank you again for getting a very big job done at our house. You were great to work with, and we love the outcome of our newly painted house.',
            author: 'Mike and Shawn, VERY Satisfied Customers'
        }
    ];

    let pointer = 0;

    onMount(() => {
        const interval = setInterval(() => {
            pointer = pointer >= testimonials.length - 1 ? 0 : pointer + 1;
        }, 7000)

        return () => {
            clearInterval(interval);
        }
    })
</script>

<section class="px-8 py-12 bg-icicle-200">
    <h2 class="text-lg md:text-center mb-8 font-bold">What are People Saying About Kinder Painting?</h2>
    <div class="brush relative">
    {#key pointer}
        <div 
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center" 
            in:fly={{
                x: '50vw'
            }}
            out:fly={{
                x: '-50vw'
            }}
        >
            <BrushBg className="max-w-vw-limit text-center before:bg-ramie-400 flex items-center justify-center">
                <p class="relative p-12 sm:p-24 text-grey-700 font-bold text-base font-mont">
                    {testimonials[pointer].content}<br>
                    –{testimonials[pointer].author}
                </p>
            </BrushBg>
        </div>
    {/key}
    </div>
    <h2 class="text-lg text-center mt-8 font-bold">
        Good Things!
    </h2>
</section>

<style>

    @keyframes wobble {
        0% {
            transform: translatey(0px) rotate(0) scale(1);
        }
        33% {
            transform: translatey(-5px) rotate(1.5deg) scale(1);
        }
        66% {
            transform: translatey(-10px) rotate(-1.2deg) scale(1.01);
        }
        100% {
            transform: translatey(0px) scale(1);
        }
    }

    .brush {
        animation: wobble 4s linear infinite;
        height: clamp(10rem, 30rem - 10vw, 55rem);
    }
</style>