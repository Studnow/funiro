<template>
  <Header />
  <to-action-card />
</template>

<script>
import Header from "./components/appHeader.vue";
import ToActionCard from "./components/parts/to-action-card.vue"

export default {
  name: "App",
  components: {
    Header,
    ToActionCard
  },
};
</script>

<style>
@font-face {
  font-family: "Gilroy";
  src: url("./assets/fonts/Gilroy-Regular.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Gilroy";
  src: url("./assets/fonts/Gilroy-Medium.woff") format("woff");
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: "Gilroy";
  src: url("./assets/fonts/Gilroy-Bold.woff") format("woff");
  font-weight: bold;
  font-style: normal;
}

#app {
  font-family: Gilroy;
  min-width: 100%;
}

html {
  font-size: 16px;
}
</style>
