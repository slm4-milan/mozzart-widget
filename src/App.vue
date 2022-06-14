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
  computed: {
    width() {
      return this.$store.getters.getWindowWidth;
    },
  },
  created() {
    window.addEventListener("resize", this.onResize);
    this.$store.commit('setWindowWidth', window.innerWidth);
    this.setItemsPerPage(this.width)
  },
  unmounted() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      this.$store.commit('setWindowWidth', window.innerWidth);
      this.setItemsPerPage(this.width)
      console.log(this.$store.getters.getNumOfPages)
    },
    setItemsPerPage(width) {
      console.log(this.width)
      if (width >= 538) {
        console.log('najveci')
        this.$store.commit('setItemsPerPage', 8);
      } else if (width > 361 && width <= 537) {
        console.log('srednji')

        this.$store.commit('setItemsPerPage', 4);
      } else if (width <= 361) {
        console.log('usao u minimum')
        this.$store.commit('setItemsPerPage', 3);
      }
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
  /*margin-top: 5% !important;*/

}
</style>