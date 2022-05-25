<template>
  <div class="gallery">
    <span class="block mb-2 text-center font-bold text-xl text-description"
      >Share your setup with</span
    >
    <h2 class="text-center font-bold text-4xl">#FuniroFurniture</h2>
    <div class="gallery-slider" @mousemove="getParentWidth" v-touch-scroll>
      <div class="gallery-slide" @mouseover="getGalleryWidth">
        <div class="gallery-slide_grid">
          <div class="grid_left-top-block">
            <figure
              class="slide-img gallery-slide_item"
              v-for="img in gallery.leftTop"
              :key="img.alt"
            >
              <img
                loading="lazy"
                class=""
                :src="img.img"
                :alt="img.alt"
                :width="img.width"
                :height="img.height"
              />
            </figure>
          </div>
          <div class="grid_center-block">
            <figure
              class="gallery-slide_item"
              v-for="img in gallery.center"
              :key="img.alt"
            >
              <img
                loading="lazy"
                class=""
                :src="img.img"
                :alt="img.alt"
                :width="img.width"
                :height="img.height"
              />
            </figure>
          </div>
          <div class="grid_right-top-block">
            <figure
              class="slide-img gallery-slide_item"
              v-for="img in gallery.rightTop"
              :key="img.alt"
            >
              <img
                loading="lazy"
                class=""
                :src="img.img"
                :alt="img.alt"
                :width="img.width"
                :height="img.height"
              />
            </figure>
          </div>
          <div class="grid_left-bottom-block">
            <figure
              class="slide-img gallery-slide_item"
              v-for="img in gallery.leftBottom"
              :key="img.alt"
            >
              <img
                loading="lazy"
                class=""
                :src="img.img"
                :alt="img.alt"
                :width="img.width"
                :height="img.height"
              />
            </figure>
          </div>

          <div class="grid_right-bottom-block">
            <figure
              class="slide-img gallery-slide_item"
              v-for="img in gallery.rightBottom"
              :key="img.alt"
            >
              <img
                loading="lazy"
                class=""
                :src="img.img"
                :alt="img.alt"
                :width="img.width"
                :height="img.height"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      gallery: {
        leftTop: [
          {
            img: "/img/gallery/shelf.jpg",
            alt: "shelf",
            width: "274",
            height: "382",
          },
          {
            img: "/img/gallery/table.jpg",
            alt: "table",
            width: "451",
            height: "312",
          },
        ],
        leftBottom: [
          {
            img: "/img/gallery/chair.jpg",
            alt: "chair",
            width: "381",
            height: "323",
          },
          {
            img: "/img/gallery/chairs.jpg",
            alt: "chairs",
            width: "344",
            height: "242",
          },
        ],
        center: [
          {
            img: "/img/gallery/meetingroom.jpg",
            alt: "meetingroom",
            width: "425",
            height: "433",
          },
        ],
        rightTop: [
          {
            img: "/img/gallery/bedroom.jpg",
            alt: "apron",
            width: "290",
            height: "348",
          },
          {
            img: "/img/gallery/dinner.jpg",
            alt: "apron",
            width: "295",
            height: "392",
          },
        ],
        rightBottom: [
          {
            img: "/img/gallery/vase.jpg",
            alt: "apron",
            width: "178",
            height: "242",
          },
          {
            img: "/img/gallery/apron.jpg",
            alt: "apron",
            width: "258",
            height: "196",
          },
        ],
      },
      mouseX: 0,
      galleryParentWidth: 1,
      galleryWidth: 1,
      scroll: 0,
      time: 0,
      img: {},
    };
  },
  mounted() {},
  methods: {
    getParentWidth(e) {
      this.galleryParentWidth = e.currentTarget.clientWidth;
      this.mouseX = e.screenX / this.galleryParentWidth;
      this.scrollG(e.currentTarget);
      this.myLoop(this.position);
    },
    myLoop(pos) {
      this.scroll += this.easeInQuad(this.time) * (pos - this.scroll);
    },
    easeInCubic(t) {
      return t * t * t;
    },
    easeInQuad(t) {
      return t * t;
    },
    getGalleryWidth(e) {
      this.galleryWidth = e.currentTarget.offsetWidth;
    },
    scrollG(el) {
      el.scrollLeft = this.scroll;
      if (this.time < 1) {
        this.time += 0.02;
        requestAnimationFrame(this.myLoop);
      }
    },
  },
  computed: {
    position() {
      return (this.galleryWidth - this.galleryParentWidth) * this.mouseX;
    },
  },
};
</script>

<style>
.gallery-slider {
  @apply md:min-h-[80vh] md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-[1440px] mx-auto;
  overflow: scroll hidden;
  scrollbar-width: none;
  /* scroll-behavior: smooth; */
}
.gallery-slider::-webkit-scrollbar {
  opacity: 0;
}
.gallery-slide {
  @apply w-screen-sm md:w-screen relative;
}
.gallery-slide_grid {
  @apply grid grid-cols-[.9fr] lg:grid-cols-[.5fr,.5fr] xl:grid-cols-[.4fr,.16fr,.4fr] grid-rows-2 max-h-[80vh] gap-4;
}
.grid_center-block {
  @apply row-span-2 self-center hidden xl:block;
}
.grid_left-top-block,
.grid_left-bottom-block,
.grid_right-top-block,
.grid_right-bottom-block {
  @apply flex gap-4;
}
.grid_left-top-block,
.grid_left-bottom-block {
  @apply justify-self-end;
}
.grid_right-top-block,
.grid_right-bottom-block {
  @apply justify-self-start;
}
.grid_left-top-block,
.grid_right-top-block {
  @apply items-end;
}
.grid_right-top-block,
.grid_right-bottom-block {
  @apply hidden lg:flex;
}
.gallery-slide-item {
  @apply max-w-min;
}
</style>