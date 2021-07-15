<template>
  <div class="tips">
    <h3 class="tips-header">Tips & Tricks</h3>
    <swiper
      :space-between="32"
      :breakpoints="this.breakpoints"
      :navigation="navigation"
      :pagination="{ clickable: true }"
      :loop="true"
      class="tips-slider"
    >
      <button class="tips-prev slider-button-prev left-0"></button>
      <button class="tips-next slider-button-next right-0"></button>
      <swiper-slide
        class="tips-slide"
        v-for="slide in tips"
        :key="slide.number"
      >
        <div class="slide-wrapper group">
          <img loading='lazy' class="tips-slide-img" :src="slide.img" :alt="slide.name" />
          <div class="tips-descr">
            <h3 class="group-hover:text-primary">
              <a href="#!" class="font-bold">{{ slide.name }}</a>
            </h3>
            <span class="text-description">{{ slide.date }}</span>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

const breakpoints = {
  320: {
    slidesPerView: 1,
  },
  640: {
    slidesPerView: 2,
  },
  1280: {
    slidesPerView: 3,
  },
};

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      navigation: {
        prevEl: ".tips-prev",
        nextEl: ".tips-next",
      },
      tips: [
        {
          number: 1,
          name: "How to create a living room to love",
          date: "20 jan 2020",
          img: "/img/tips/love.jpg",
        },
        {
          number: 2,
          name: "Solution for clean look working space",
          date: "20 jan 2020",
          img: "/img/tips/work.jpg",
        },
        {
          number: 3,
          name: "Make your cooking activity more fun with good setup",
          date: "20 jan 2020",
          img: "/img/tips/cook.jpg",
        },
      ],
      breakpoints,
    };
  },
};
</script>

<style>
.tips {
  @apply py-10;
}
.tips-header {
  @apply font-bold text-center text-4xl mb-6;
}
.tips-slider {
  @apply min-h-lg mx-auto max-w-sm sm:max-w-screen-sm lg:max-w-screen-lg xl:max-w-screen-2xl px-6;
}
.tips-slide {
  @apply ;
}
.tips-slider .swiper-wrapper {
  @apply top-0;
}
.slide-wrapper {
  @apply flex flex-col justify-center;
}
.tips .swiper-slide-next .slide-wrapper {
  @apply shadow-lg;
}
.tips-descr {
  @apply p-4 prose-lg;
}
.tips-prev,
.tips-next {
  @apply hidden sm:block shadow-md absolute z-10 top-1/3;
}
.tips-slider > .swiper-pagination-bullets > .swiper-pagination-bullet {
  @apply w-3 h-3 mx-2;
}
.tips-slider > .swiper-pagination-bullets {
  @apply top-[80%] sm:top-[85%] lg:top-[95%] p-0;
}
</style>