<template>
  <div class="rooms">
    <div class="rooms-desc">
      <h2 class="font-bold">50+ Beautiful rooms inspiration</h2>
      <p class="text-description font-medium">
        Our designer already made a lot of beautiful prototipe of rooms that
        inspire you
      </p>
      <button class="button button-outline py-2 px-8 mx-auto md:mx-0">
        Explore more
      </button>
    </div>
    <swiper
      :slides-per-view="1"
      :breakpoints="this.breakpoints"
      :space-between="32"
      :navigation="navigation"
      :pagination="{ clickable: true }"
      :loop="true"
      class="rooms-slider"
    >
      <div class="slider-nav rooms-nav">
        <button class="rooms-next slider-button-next shadow-md"></button>
      </div>
      <swiper-slide
        v-slot="{ isActive }"
        class="rooms-slide"
        v-for="slide in roomsSlides"
        :key="slide.number"
        ><div class="slide-wrapper">
          <img loading='lazy' class="" :src="slide.img" :alt="slide.name" />
          <div class="slide-descr rooms-slide-desc prose-lg" v-show="isActive">
            <span>01 - Bed Room</span>
            <span class="font-bold text-2xl">Inner Peace</span>
            <a href="#!" class="slide-descr_link group">
              <span class="opacity-0 w-0 h-0 block">Show room</span>
              <arrow-right-icon
                class="w-8 h-8 text-white group-hover:text-primary"
              />
            </a>
          </div></div
      ></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { ArrowRightIcon } from "@heroicons/vue/outline";

const breakpoints = {
  320: {
    slidesPerView: 1,
  },
  1024: {
    slidesPerView: 2,
  },
  1280: {
    slidesPerView: 3,
  },
  1921: {
    slidesPerView: 4,
  },
  2200: {
    slidesPerView: 5,
  },
};

export default {
  components: {
    Swiper,
    SwiperSlide,
    ArrowRightIcon,
  },
  setup() {
    return {
      navigation: {
        nextEl: ".rooms-next",
      },
      roomsSlides: [
        {
          name: "Pew",
          number: 1,
          desc: "bla",
          img: "/img/rooms/bedroom.jpg",
        },
        {
          name: "Paw",
          number: 2,
          desc: "blo",
          img: "/img/rooms/cuisine.jpg",
        },
        {
          name: "Gsom",
          number: 3,
          desc: "blu",
          img: "/img/rooms/corner.jpg",
        },
        {
          name: "Gsom",
          number: 3,
          desc: "blu",
          img: "/img/rooms/bedroom.jpg",
        },
        {
          name: "Gsom",
          number: 3,
          desc: "blu",
          img: "/img/rooms/cuisine.jpg",
        },
        {
          name: "Gsom",
          number: 3,
          desc: "blu",
          img: "/img/rooms/corner.jpg",
        },
      ],
      breakpoints,
    };
  },
};
</script>

<style>
.rooms {
  @apply p-4 overflow-hidden md:min-h-2xl bg-primary-lighter grid grid-cols-1 grid-rows-[35%,75%] md:grid-rows-none md:grid-cols-[55%,40%] lg:grid-cols-[40%,70%] xl:grid-cols-[40%,80%] justify-items-center items-center;
}
.rooms-desc {
  @apply prose-xl max-w-md md:max-w-4/6;
}
.rooms-slider {
  @apply max-w-xs md:max-w-full;
}
.rooms-slider .swiper-pagination {
  @apply hidden top-6/8 lg:block lg:pl-40 xl:pl-0 top-auto;
}
.rooms-slider > .swiper-pagination-bullets > .swiper-pagination-bullet {
  @apply w-3 h-3 mx-2;
}
.rooms-slide img {
  @apply max-h-full md:max-h-md object-contain;
}
.rooms .swiper-slide-active img {
  @apply max-h-full;
}
.slide-wrapper {
  @apply min-w-full relative;
}
.rooms-slide-desc {
  @apply p-8 bottom-1/12 left-5;
}
.slide-descr_link {
  @apply bg-primary p-2 hover:bg-primary-light font-bold absolute bottom-0 -right-12;
}
.rooms-nav {
  @apply z-10 top-1/3 hidden lg:block lg:right-[43%] xl:right-[27%];
}
</style>