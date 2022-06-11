<template>
  <the-header></the-header>
  <the-main></the-main>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheMain from "@/components/TheMain";

export default {
  components: {TheHeader, TheMain},
  data() {
    return {};
  },
  created() {
    window.addEventListener("resize", this.onResize);
  },
  unmounted() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      this.$store.commit('setWindowWidth', window.innerWidth);
    },
  },

}

</script>

<style>

@font-face {
  font-family: 'ProximaNovaRegular';
  src: url('/public/fonts/ProximaNovaRegular.otf') format('opentype');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'ProximaNovaSemibold';
  src: url('/public/fonts/ProximaNovaSemibold.otf') format('opentype');
  font-weight: 600;
  font-style: normal;
}

.container {
  max-width: 847px !important;
  padding: 0;
  margin-top: 5% !important;

}
</style>