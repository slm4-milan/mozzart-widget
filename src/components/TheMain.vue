<template>
  <section class="d-flex flex-wrap">
    <betting-pair></betting-pair>
    <betting-pair></betting-pair>
    <betting-pair></betting-pair>
    <betting-pair></betting-pair>
    <betting-pair></betting-pair>
    <betting-pair></betting-pair>
    <betting-pair></betting-pair>
    <betting-pair></betting-pair>
  </section>
</template>

<script>
import BettingPair from "@/components/BettingPair";

export default {
  name: "TheMain",
  components: {BettingPair}
}
</script>

<style scoped>
section {
  background: #2A2D35;
  color: white;
}

</style>