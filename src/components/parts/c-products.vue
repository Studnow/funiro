<template>
  <div class="products">
    <h2 class="text-center">Our Products</h2>
    <div class="product-cards">
      <div class="product-card" v-for="card in cards" :key="card">
        <picture>
          <source
            :srcset="card.img.avif"
            type="image/avif"
          >
          <source
            :srcset="card.img.webp"
            type="image/webp"
          >
          <img
            loading="lazy"
            class="product-img !mt-0"
            :src="card.img.jpg"
            :alt="card.name"
          />
        </picture>
        <div class="product-card-descr">
          <h3 class="product-header">{{ card.name }}</h3>
          <span class="text-description">{{ card.desc }}</span>
          <div class="prices grid grid-cols-1 xl:grid-cols-2 justify-stretch">
            <div class="product-price font-bold">{{ card.price }}</div>
            <div
              class="product-discount line-through"
              v-if="card.discount.length"
            >
              {{ card.discount }}
            </div>
          </div>
        </div>
        <div class="hints">
          <span class="hint bg-danger" v-show="card.hints.discount">
            {{ card.hints.discount }}
          </span>
          <span class="hint bg-success" v-show="card.hints.novelty">
            {{ card.hints.novelty }}
          </span>
        </div>
        <div class="card-overlay">
          <button class="button button-card_top-grid">Add to cart</button>
          <button class="button button-card_bottom-grid justify-self-center">
            <ShareIcon class="w-6 h-6 mr-2" />
            <span>Share</span>
          </button>
          <button class="button button-card_bottom-grid justify-self-center">
            <HeartIcon class="w-6 h-6" />
            <span>Like</span>
          </button>
        </div>
      </div>
    </div>
    <button href="#!" class="button button-outline py-2 px-20">
      Show more
    </button>
  </div>
</template>

<script>
import { ShareIcon, HeartIcon } from "@heroicons/vue/outline";
export default {
  components: {
    ShareIcon,
    HeartIcon,
  },
  setup() {
    return {
      cards: [
        {
          name: "Syltherine",
          desc: "Stylish cafe chair",
          price: "Rp 2.500.000",
          discount: "Rp 3.500.000",
          img: {
            avif: "/img/cards/syltherine.avif",
            webp: "/img/cards/syltherine.webp",
            jpg: "/img/cards/syltherine.jpg",
          },
          hints: {
            discount: "30%",
            novelty: "New",
          },
        },
        {
          name: "Leviosa",
          desc: "Stylish cafe chair",
          price: "Rp 2.500.000",
          discount: "",
          img: {
            avif: "/img/cards/pingky.avif",
            webp: "/img/cards/pingky.webp",
            jpg: "/img/cards/pingky.jpg",
          },
          hints: {
            discount: "",
            novelty: "",
          },
        },
        {
          name: "Lolito",
          desc: "Stylish cafe chair",
          price: "Rp 2.500.000",
          discount: "",
          img: {
            avif: "/img/cards/syltherine.avif",
            webp: "/img/cards/syltherine.webp",
            jpg: "/img/cards/syltherine.jpg",
          },
          hints: {
            discount: "",
            novelty: "New",
          },
        },
        {
          name: "Respira",
          desc: "Stylish cafe chair",
          price: "Rp 2.500.000",
          discount: "Rp 3.500.000",
          img: {
            avif: "/img/cards/pingky.avif",
            webp: "/img/cards/pingky.webp",
            jpg: "/img/cards/pingky.jpg",
          },
          hints: {
            discount: "30%",
            novelty: "",
          },
        },
        {
          name: "Grifo",
          desc: "Stylish cafe chair",
          price: "Rp 2.500.000",
          discount: "",
          img: {
            avif: "/img/cards/syltherine.avif",
            webp: "/img/cards/syltherine.webp",
            jpg: "/img/cards/syltherine.jpg",
          },
          hints: {
            discount: "",
            novelty: "",
          },
        },
        {
          name: "Muggo",
          desc: "Stylish cafe chair",
          price: "Rp 2.500.000",
          discount: "Rp 3.500.000",
          img: {
            avif: "/img/cards/pingky.avif",
            webp: "/img/cards/pingky.webp",
            jpg: "/img/cards/pingky.jpg",
          },
          hints: {
            discount: "30%",
            novelty: "",
          },
        },
        {
          name: "Pingky",
          desc: "Stylish cafe chair",
          price: "Rp 2.500.000",
          discount: "",
          img: {
            avif: "/img/cards/syltherine.avif",
            webp: "/img/cards/syltherine.webp",
            jpg: "/img/cards/syltherine.jpg",
          },
          hints: {
            discount: "",
            novelty: "New",
          },
        },
        {
          name: "Potty",
          desc: "Stylish cafe chair",
          price: "Rp 2.500.000",
          discount: "Rp 3.500.000",
          img: {
            avif: "/img/cards/pingky.avif",
            webp: "/img/cards/pingky.webp",
            jpg: "/img/cards/pingky.jpg",
          },
          hints: {
            discount: "30%",
            novelty: "",
          },
        },
      ],
    };
  },
};
</script>

<style>
.products {
  @apply container max-w-screen-2xl mx-auto px-4 prose flex flex-col items-center mb-10;
}
.product-cards {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8;
}
.product-card {
  @apply relative flex flex-col bg-description-light;
}
.product-card-descr {
  @apply prose px-4 py-2;
}
.card-overlay {
  @apply hidden h-full w-full absolute inset-0 bg-dark-200 bg-opacity-70 grid-cols-2 grid-rows-2 gap-y-8;
}
.product-card:hover .card-overlay {
  display: grid;
}
.product-card:hover .hints {
  @apply hidden;
}
.button {
  @apply flex justify-evenly font-medium;
}
.button-card_top-grid {
  @apply py-2 px-14 col-start-1 col-end-3 max-h-12 self-end justify-self-center bg-white hover:text-white hover:bg-opacity-20 text-primary;
}
.button-card_bottom-grid {
  @apply max-h-12 text-white hover:text-primary;
}
.button-products {
  @apply py-2 px-20 border border-primary border-2 text-primary hover:bg-primary hover:text-white;
}
.hints {
  @apply py-4 absolute flex justify-end w-full;
}
.hint {
  @apply mr-4 rounded-full w-12 h-12 flex justify-center items-center text-white;
}
</style>