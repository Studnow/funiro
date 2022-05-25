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
      class="to-action-slider"
      :slides-per-view="2"
      :space-between="32"
      :navigation="{ nextEl: '.next', prevEl: '.prev' }"
      :pagination="{ clickable: true }"
      :breakpoints="this.breakpoints"
      :loop="true"
    >
      <div class="slider-nav z-10">
        <button class="prev slider-button-prev"></button>
        <button class="next slider-button-next"></button>
      </div>
      <swiper-slide v-slot="{ isNext }" v-for="slide in slides" :key="slide">
        <div class="slide">
          <picture class="relative">
            <source :srcset="slide.img.webp">
            <img loading="lazy" :src="slide.img.jpg" alt="couch" rel="preload" as="image" />
          </picture>
          <div class="slide-descr card-descr" v-show="isNext">
            <h3>{{ slide.name }}</h3>
            <span>{{ slide.desc }}</span>
            <span class="flex justify-between font-bold"
              >{{ slide.price }}
              <a href="#!" class="hover:text-primary" aria-label="product description">
                <arrow-right-icon class="w-6 h-6" />
              </a>
            </span>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
// import "swiper/swiper-bundle.css";
import { ArrowRightIcon } from "@heroicons/vue/outline";

// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

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
      slides: [
        {
          name: "Bohauss",
          desc: "Luxury big sofa 2-seat",
          price: "Rp 2.500.000",
          img: {
            webp: "/img/top-slider/couch-left.webp",
            jpg: "/img/top-slider/couch-left.jpg",
          },
        },
        {
          name: "Syltherine",
          desc: "Stylish double bed",
          price: "Rp 16.500.000",
          img: {
            webp: "/img/top-slider/bed.webp",
            jpg: "/img/top-slider/bed.jpg",
          },
        },
        {
          name: "Griffo",
          desc: "Big soft sofa 2-seat",
          price: "Rp 4.500.000",
          img: {
            webp: "/img/top-slider/couch-left.webp",
            jpg: "/img/top-slider/couch-left.jpg",
          },
        },
        {
          name: "Pingky",
          desc: "Soft double sofa",
          price: "Rp 7.500.000",
          img: {
            webp: "/img/top-slider/couch.webp",
            jpg: "/img/top-slider/couch.jpg",
          },
        },
      ],
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
  @apply block p-4 w-full bg-primary hover:bg-opacity-85 text-center font-bold text-white shadow-sm no-underline;
}
.to-action-slider {
  @apply;
}
.swiper-container {
  @apply min-h-screen-sm m-0 w-full;
}
.swiper-wrapper {
  @apply absolute top-10 md:bottom-0 md:top-auto h-max;
}
.slide {
  @apply bg-gray-50;
}
.slider-button-next,
.slider-button-prev {
  @apply bg-primary after:text-white after:font-bold w-12 h-12 rounded-full hover:bg-primary-light hover:after:text-primary;
}
.slider-button-next:after,
.slider-button-prev:after {
  font-family: "swiper-icons";
}
.slider-button-next:disabled,
.slider-button-prev:disabled {
  @apply bg-primary-light after:text-primary font-bold;
}
.slider-button-next::after {
  content: "next";
}
.slider-button-prev::after {
  content: "prev";
}
.slider-nav {
  @apply flex justify-between min-w-26 absolute top-5 right-6 xl:right-10 hidden md:flex;
}
.swiper-pagination {
  @apply top-3 xl:top-10 xl:pl-14 max-h-min h-min;
}
.swiper-pagination-bullet {
  @apply focus:ring-1 outline-transparent focus:ring-primary focus:ring-offset-6 focus:ring-offset-primary-light bg-description opacity-100 w-2 h-2;
}
.swiper-pagination-bullet-active {
  @apply bg-primary ring-1 ring-offset-6 ring-offset-primary-light ring-primary ring-opacity-100 opacity-100;
}
.slide-descr {
  /* filter: blur(12px); */
  @apply flex flex-col prose bg-white bg-opacity-50 backdrop-filter backdrop-blur-md absolute;
}
.card-descr {
  @apply min-w-xs max-w-xs bottom-10 p-6 right-10;
}
/* .swiper-slide:hover .slide-descr {
  display: block;
} */
</style>