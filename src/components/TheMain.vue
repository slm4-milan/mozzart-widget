<template>

  <section class="d-flex flex-wrap">
    <div class="d-flex tip align-items-center">
      <span class="justify-content-start">Najigraniji mečevi</span>
      <div class="d-flex ms-auto">
        <div class="tip-1x2 d-flex justify-content-center align-items-center ms-auto">
          <span>1</span>
        </div>
        <div class="tip-1x2 d-flex justify-content-center align-items-center ms-auto">
          <span>x</span>
        </div>
        <div class="tip-1x2 d-flex justify-content-center align-items-center ms-auto">
          <span>2</span>
        </div>
      </div>

    </div>
    <div class="d-flex tip align-items-center">
      <div class="d-flex ms-auto">
        <div class="tip-1x2 d-flex justify-content-center align-items-center ms-auto">
          <span>1</span>
        </div>
        <div class="tip-1x2 d-flex justify-content-center align-items-center ms-auto">
          <span>x</span>
        </div>
        <div class="tip-1x2 d-flex justify-content-center align-items-center ms-auto">
          <span>2</span>
        </div>
      </div>
    </div>

    <betting-pair v-for="pair in pairs" :key="pair.gameId" :id="pair.gameId"
                  :time="pair.time" :team1="pair.pairs[0].name"
                  :team2="pair.pairs[1].name" :numOfGames="pair.numberOfGames"
                  :odds="pair.offer"></betting-pair>

  </section>
</template>

<script>
import BettingPair from "@/components/BettingPair";

export default {
  name: "TheMain",
  components: {BettingPair},
  data() {
    return {};
  },
  computed: {
    pairs() {
      return this.$store.getters.activeSportPairs;
    },
  },
}

</script>

<style scoped>
section {
  background: #2A2D35;
  color: white;
}

.tip {
  width: calc(50% - 16px);
  margin: 3px 8px 0 8px;
}

.tip:first-child {
  font-family: ProximaNovaRegular, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */
  letter-spacing: 0.02em;
  color: #40A3FF;
  text-shadow: 0px 0px 10px rgba(64, 163, 255, 0.6);
}

.tip-1x2 {
  width: 64px;
  margin-left: 1px !important;
}

.tip-1x2 span {
  font-family: ProximaNovaSemibold, sans-serif;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  text-shadow: none;
  text-transform: uppercase;

}

@media screen and (max-width: 687px) {
  .tip-1x2 {
    width: 40px;
    margin-left: 1px !important;
  }
}

@media screen and (max-width: 537px) {
  .tip-1x2 {
    width: 64px;
    margin-left: 1px !important;
  }
}

</style>