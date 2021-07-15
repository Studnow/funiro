<template>
  <c-to-action-card />
  <c-advantages />
  <c-products />
  <c-rooms />
  <c-tips />
  <c-gallery />
</template>

<script>
// swiper
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
import "swiper/swiper-bundle.css";

import CToActionCard from "./parts/c-to-action-card.vue";
import CAdvantages from "./parts/c-advantages.vue";
import CProducts from './parts/c-products.vue';
import CRooms from './parts/c-rooms.vue';
import CTips from './parts/c-tips.vue';
import CGallery from './parts/c-gallery.vue';
export default {
  components: {
    CToActionCard,
    CAdvantages,
    CProducts,
    CRooms,
    CTips,
    CGallery
  },
  setup() {},
};
</script>

<style>

</style>