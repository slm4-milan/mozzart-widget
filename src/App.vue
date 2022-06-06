<template>
  <the-header></the-header>
  <the-main></the-main>
</template>

<script>
import TheHeader from "@/components/TheHeader";

export default {
  components: {TheHeader}
}
</script>

<style>

@font-face {
  font-family: 'ProximaNovaRegular';
  src: url('/public/fonts/ProximaNovaRegular.otf') format('otf');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'ProximaNovaSemibold';
  src: url('/public/fonts/ProximaNovaSemibold.otf') format('otf');
  font-weight: 600;
  font-style: normal;
}

.container {
  width: 847px;
  padding: 0;
}
</style>