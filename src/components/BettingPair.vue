<template>
  <div class="d-flex bet">
    <div class="game">
      <div class="time">
        <span>{{ time }}</span>
      </div>
      <div class="teams">
        <span>{{ team1 }}</span>
        <span>{{ team2 }}</span>
      </div>
    </div>
    <div class="bets-num d-flex align-items-end ms-auto">
      <span>{{ numOfGames }}</span>
    </div>
    <div class="odds align-items-center d-flex">
      <bet-button v-for="odd in odds" :tipKey="odd.tip" :key="odd.tip" :id="id"
                  :tip="odd.odd"></bet-button>
    </div>
  </div>
</template>

<script>
import BetButton from "@/components/BetButton";

export default {
  props: ['time', 'team1', 'team2', 'numOfGames', 'odds', 'id'],
  name: "BettingPair",
  components: {BetButton},
  computed: {},

}
</script>

<style scoped>
.bet {
  width: calc(50% - 16px);
}

.teams span {
  display: block;
  font-family: ProximaNovaSemibold, sans-serif;
  font-size: 13px;
  line-height: 16px;
}

.teams > :first-child {

}

.time {
  font-family: ProximaNovaRegular, sans-serif;
  font-size: 10px;
  line-height: 12px;
  color: #FDB913;

}

.bet {
  margin: 0px 8px;
  border-bottom: solid 1px #41444D;
  padding: 4px 0;

}

.bets-num {
  font-family: ProximaNovaRegular, sans-serif;
  font-size: 13px;
  line-height: 16px;
  color: #40A3FF;
  text-shadow: 0 0 10px;
  margin-bottom: 3px;
  margin-right: 7px;
}

@media screen and (max-width: 537px) {
  .bet {
    width: calc(100% - 16px);
  }
}


</style>