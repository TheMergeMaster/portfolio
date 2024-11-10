<script>
  let props = $props();
  const { imgPath, name, desc, tags } = props;
</script>

<div
  class="border border-white border-opacity-20 rounded-2xl card-gradient backdrop-blur px-6 py-8 lg:p-9 flex flex-col"
>
  <!--
  <div class="rounded-xl mb-3">
    <img
      class="rounded-xl w-full object-cover"
      src={imgPath}
      alt={name + " screenshot"}
    />
  </div>
  -->
  <div class="font-bold text-2xl lg:text-3xl">
    {name}
  </div>
  <p class="text-white text-opacity-70 mt-1">
    {desc}
  </p>
  <div class="flex flex-wrap gap-2 pt-5 mt-auto">
    {#each tags as tag}
      <div
        class="px-3 py-1 text-sm rounded-full bg-white bg-opacity-15 text-white text-opacity-80"
      >
        {tag}
      </div>
    {/each}
  </div>
</div>
