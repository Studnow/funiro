<template>
  <sprites-svg />
  <app-header />
  <app-body />
  <app-footer />
</template>

<script>
import AppHeader from "./components/appHeader.vue";
import AppBody from "./components/app-body.vue";
import AppFooter from "./components/app-footer.vue";
import spritesSvg from "./components/parts/c-svg-sprites.vue"

export default {
  name: "App",
  components: {
    AppHeader,
    AppBody,
    AppFooter,
    spritesSvg,
  },
};
</script>

<style>
@font-face {
  font-family: "Gilroy";
  src: url("/fonts/Gilroy-Regular.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: auto;
}
@font-face {
  font-family: "Gilroy";
  src: url("/fonts/Gilroy-Medium.woff") format("woff");
  font-weight: 500;
  font-style: normal;
  font-display: auto;
}
@font-face {
  font-family: "Gilroy";
  src: url("/fonts/Gilroy-Bold.woff") format("woff");
  font-weight: bold;
  font-style: normal;
  font-display: auto;
}

#app {
  font-family: Gilroy;
  min-width: 100%;
}

html {
  font-size: 16px;
}
.button {
  @apply flex justify-evenly font-medium;
}
.button-outline {
  @apply border border-primary border-2 text-primary hover:bg-primary hover:text-white;
}
</style>
