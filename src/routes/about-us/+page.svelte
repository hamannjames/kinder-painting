<script>
    import GetAQuoteSection from "../GetAQuoteSection.svelte";
    import headshot from "$lib/images/headshot.jpg";
</script>
<section class="px-8 py-12 text-base space-y-6 max-w-vw-limit mx-auto">
    <p class="text-2xl max-w-vw-limit mx-auto text-left md:text-center">
        Hello and thank you for visiting my new web-site.
    </p>
    <figure class="float-left w-72 mr-4 mb-4 mt-4">
        <img src="{headshot}" alt="Ken and Becky Kinder" />
        <figcaption class="text-sm italic">My lovely wife Becky and I</figcaption>
    </figure>
    <p class="">Let me tell you a little about our company. My name is Ken Kinder. My wife Becky and I started this business 20 years ago and are still going strong. Through the years we’ve seen a lot of changes, but one thing that hasn’t changed is our commitment to quality service and craftsmanship.</p>
    
    <p>Thorough preparation is essential to doing any job properly. Quality materials are important to acheive a long lasting paint job. You want to hire somebody who has the experience and the expertise to handle any problem that may arise when tackling your interior or exterior paint job. Kinder Painting is fully equipped to handle all your commercial and residential painting needs. We have built a reputation for quality workmanship and honest value. Most of our business comes from repeat customers and referrals from satisfied customers. When you call for a free, no-obligation, quote for your project you’ll receive a detailed and concise cost breakdown as well as product and procedural recommendations based on your needs and budget.</p>
    
    <p>We use primarily Sherwin Williams paint for their quality materials and deep product line. We also use products from a wide variety of other manufacturers. Here are a few of the services offered by Kinder Painting:
        Pressure washing, concrete sealing, siding repair, drywall repair, dry-rot repair, deck repair, lead testing, window replacement, door replacement, texturing, masonry cleaning & sealing, staining, trim installation and more.  As a general contractor, we can take care of larger projects as well.
    </p>
        <p>Give us a call and get scheduled for exterior, interior or repair projects. I look forward to hearing from you.</p>
</section>

<div class="bg-icicle-200">
    <GetAQuoteSection />
</div>

<style>
    .important {
        margin-top: 0 !important;
    }
</style>