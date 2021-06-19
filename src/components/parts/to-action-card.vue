<template>
  <div class="screen-slider relative w-full">
    <div class="card">
      <h1 class="font-bold">High-Quality Furniture Just For You</h1>
      <p class="font-medium text-description">
        Our furniture is made from selected and best quality materials that are
        suitable for your dream home
      </p>
      <a href="#!" class="card-link">Shop Now</a>
    </div>
    <swiper
      :slides-per-view="2"
      :space-between="32"
      :navigation="{ nextEl: '.next', prevEl: '.prev' }"
      :pagination="{ clickable: true }"
      :autoHeight="true"
      :breakpoints="this.breakpoints"
      :loop="true"
    >
      <div class="slider-nav z-10">
        <button class="prev"></button>
        <button class="next"></button>
      </div>
      <swiper-slide v-slot="{ isNext }">
        <div class="slide relative">
          <img src="../../assets/img/couch-left.jpg" alt="couch" />
          <div class="slide-descr" v-show="isNext">
            <h3>Bohauss</h3>
            <span>Luxury big sofa 2-seat</span>
            <span class="flex justify-between font-bold"
              >RP 17.000.000
              <a href="#!">
                <arrow-right-icon class="w-6 h-6" />
              </a>
            </span>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide v-slot="{ isNext }">
        <div class="slide relative">
          <img src="../../assets/img/couch.jpg" alt="couch" />
          <div class="slide-descr" v-show="isNext">
            <h3>Bohauss</h3>
            <span>Luxury big sofa 2-seat</span>
            <span class="flex justify-between font-bold"
              >RP 17.000.000
              <a href="#!">
                <arrow-right-icon class="w-6 h-6" />
              </a>
            </span>
          </div></div
      ></swiper-slide>
      <swiper-slide v-slot="{ isNext }"
        ><div class="slide relative">
          <img src="../../assets/img/bed.jpg" alt="couch" />
          <div class="slide-descr" v-show="isNext">
            <h3>Bohauss</h3>
            <span>Luxury big sofa 2-seat</span>
            <span class="flex justify-between font-bold"
              >RP 17.000.000
              <a href="#!">
                <arrow-right-icon class="w-6 h-6" />
              </a>
            </span>
          </div></div
      ></swiper-slide>
      <swiper-slide v-slot="{ isNext }"
        ><div class="slide relative">
          <img src="../../assets/img/couch-left.jpg" alt="couch" />
          <div class="slide-descr" v-show="isNext">
            <h3>Bohauss</h3>
            <span>Luxury big sofa 2-seat</span>
            <span class="flex justify-between font-bold"
              >RP 17.000.000
              <a href="#!">
                <arrow-right-icon class="w-6 h-6" />
              </a>
            </span>
          </div></div
      ></swiper-slide>
      <swiper-slide v-slot="{ isNext }"
        ><div class="slide relative">
          <img src="../../assets/img/couch.jpg" alt="couch" />
          <div class="slide-descr" v-show="isNext">
            <h3>Bohauss</h3>
            <span>Luxury big sofa 2-seat</span>
            <span class="flex justify-between font-bold"
              >RP 17.000.000
              <a href="#!">
                <arrow-right-icon class="w-6 h-6" />
              </a>
            </span>
          </div></div
      ></swiper-slide>
      <swiper-slide v-slot="{ isNext }"
        ><div class="slide relative">
          <img src="../../assets/img/bed.jpg" alt="couch" />
          <div class="slide-descr" v-show="isNext">
            <h3>Bohauss</h3>
            <span>Luxury big sofa 2-seat</span>
            <span class="flex justify-between font-bold"
              >RP 17.000.000
              <a href="#!">
                <arrow-right-icon class="w-6 h-6" />
              </a>
            </span>
          </div></div
      ></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { ArrowRightIcon } from "@heroicons/vue/outline";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const breakpoints = {
  320: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,
  },
};

export default {
  setup() {
    return {
      breakpoints,
    };
  },

  components: {
    Swiper,
    SwiperSlide,
    ArrowRightIcon,
  },
  methods: {},
};
</script>

<style>
.screen-slider {
  background: linear-gradient(to right, #f9f1e7 65%, #fcf8f3 65%);
}
.card {
  @apply max-w-md xl:max-w-lg max-h-lg md:max-h-md xl:max-h-lg p-8 sm:p-16 prose xl:prose-lg bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm absolute bottom-0 md:bottom-1/6 inset-x-1/12 z-10;
}
.card .card-link {
  @apply block p-4 w-full bg-primary hover:bg-opacity-85 text-center font-bold text-white shadow-sm no-underline hover:underline;
}
.swiper-container {
  @apply min-h-screen-sm m-0 w-full;
}
.swiper-wrapper {
  @apply absolute top-10 md:bottom-0 md:top-auto;
}
.swiper-slide {
  @apply bg-gray-50 relative;
}
.next,
.prev {
  @apply bg-primary after:text-white w-12 h-12 rounded-full;
}
.next:after,
.prev:after {
  font-family: "swiper-icons";
}
.next:disabled,
.prev:disabled {
  @apply bg-primary-light after:text-primary font-bold;
}
.next::after {
  content: "next";
}
.prev::after {
  content: "prev";
}
.slider-nav {
  @apply flex justify-between min-w-26 absolute top-5 xl:top-12 right-6 xl:right-10 hidden md:flex;
}
.swiper-pagination {
  @apply top-3 xl:top-15 xl:pl-14 max-h-min;
}
.swiper-pagination-bullet {
  @apply focus:ring-1 outline-transparent focus:ring-primary focus:ring-offset-6 focus:ring-offset-primary-light bg-description opacity-100 w-2 h-2;
}
.swiper-pagination-bullet-active {
  @apply bg-primary ring-1 ring-offset-6 ring-offset-primary-light ring-primary ring-opacity-100 opacity-100;
}
.slide-descr {
  @apply min-w-xs max-w-xs flex flex-col prose bg-white bg-opacity-50 backdrop-filter backdrop-blur-md absolute bottom-10 p-6 right-10;
}
/* .swiper-slide:hover .slide-descr {
  display: block;
} */
</style>