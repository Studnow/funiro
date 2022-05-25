<template>
  <div class="advantages">
    <ul class="advantage-list flex flex-row flex-wrap justify-between gap-6 py-20 px-4">
      <li class="prose grid grid-cols-[40px,1fr] grid-rows-2 items-center gap-x-4">
        <svg class="advantage-icon row-start-1 row-end-3 justify-self-end">
          <use xlink:href="#trophy 1"></use>
        </svg>
        <span class="self-end font-bold text-lg">High Quality</span>
        <span class="self-start">crafted from top materials</span>
      </li>
      <li class="prose grid grid-cols-[40px,1fr] grid-rows-2 items-center gap-x-4">
        <svg class="advantage-icon row-start-1 row-end-3 justify-self-end">
          <use xlink:href="#guarantee"></use>
        </svg>
        <span class="self-end font-bold text-lg">Warrany Protection</span>
        <span class="self-start">Over 2 years</span>
      </li>
      <li class="prose grid grid-cols-[40px,1fr] grid-rows-2 items-center gap-x-4">
        <svg class="advantage-icon row-start-1 row-end-3 justify-self-end">
          <use xlink:href="#shipping"></use>
        </svg>
        <span class="self-end font-bold text-lg">Free Shipping</span>
        <span class="self-start">Order over 150 $</span>
      </li>
      <li class="prose grid grid-cols-[40px,1fr] grid-rows-2 items-center gap-x-4">
        <svg class="advantage-icon row-start-1 row-end-3 justify-self-end">
          <use xlink:href="#customer-support"></use>
        </svg>
        <span class="self-end font-bold text-lg">24/7 Support</span>
        <span class="self-start">Dedicated support</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  setup() {
    
  },
}
</script>

<style>
.advantages {
  @apply w-full lg:max-w-screen-2xl lg:mx-auto px-4;
}
.advantage-icon {
  @apply w-10 h-10;
}
</style>