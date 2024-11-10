<script>
  import headshot from "@assets/me-headshot.png";
  import Card from "@lib/Card.svelte";
  import { socialLinks, projects } from "@lib/constants.js";
</script>

<main>
  <section
    class="bg-gradient-to-b from-[var(--clr-green-900)] to-[var(--clr-green-800)]"
  >
    <div
      class="container px-5 pt-10 pb-5 mx-auto flex flex-col justify-center items-center"
    >
      <div
        class="relative w-32 md:w-40 lg:w-52 transition-[width] aspect-square rounded-full border-4 border-[var(--clr-green-800)] group"
      >
        <img
          src={headshot}
          alt="gautam tiwari headshot"
          class="saturate-100 group-hover:saturate-[105%] transition-[filter]"
        />
      </div>
      <h2 class="font-extrabold text-4xl md:text-5xl mt-4">Gautam Tiwari</h2>
      <p class="md:text-2xl mt-2">
        I know how to figure things out in software
      </p>
      <div class="flex items-center gap-4 mt-5">
        {#each socialLinks as link}
          <a
            href={link.url}
            title={link.name}
            class="size-6 md:size-8 hover:scale-105 transition-transform"
          >
            <img src={link.iconPath} alt={link.name} />
          </a>
        {/each}
      </div>
    </div>
  </section>

  <section
    class="bg-gradient-to-b from-[var(--clr-green-800)] to-[var(--clr-green-700)]"
  >
    <div class="container py-10 px-5 lg:px-20 mx-auto">
      <h2 class="text-2xl md:text-4xl font-bold mb-4">Portfolio</h2>
      <div class="grid gap-y-10 gap-x-5 sm:grid-cols-2 xl:grid-cols-3">
        {#each projects as projectItem}
          <Card {...projectItem} />
        {/each}
      </div>
    </div>
  </section>

  <section
    class="bg-gradient-to-b from-[var(--clr-green-700)] to-[var(--clr-green-600)] min-h-[clamp(35vh,540px,70vh)] grid items-center"
  >
    <div class="md:container py-10 px-5 mx-auto">
      <h2 class="font-bold text-6xl md:text-8xl text-center mb-2">email me</h2>
      <p class="text-center md:text-2xl">
        at <a
          href="mailto:gautamtiwari.dev@gmail.com"
          class="underline text-[var(--clr-fg-link)] inline-block hover:-translate-y-[1px] hover:scale-[102%] transition-transform"
          >gautamtiwari.dev@gmail.com</a
        >
      </p>
    </div>
  </section>
</main>
<footer
  class="bg-gradient-to-b from-[var(--clr-green-600)] to-[var(--clr-green-500)]"
>
  <div class="md:container py-5 px-5 mx-auto grid items-center">
    <a
      href="https://github.com/TheMergeMaster/portfolio"
      class="underline text-[var(--clr-fg-link)] text-center lg:text-xl hover:scale-105 transition-transform"
      >source code</a
    >
  </div>
</footer>

<style>
</style>
