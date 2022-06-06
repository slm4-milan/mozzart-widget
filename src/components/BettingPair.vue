<template>
  <div class="d-flex bet">
    <div class="game">
      <div class="time">
        <span>Uto. 21:00</span>
      </div>
      <div class="teams">
        <span>Chelsea</span>
        <span>Manchester Utd.</span>
      </div>
    </div>
    <div class="bets-num d-flex align-items-end ms-auto">
      <span>155</span>
    </div>
    <div class="odds align-items-center d-flex ">
      <bet-button></bet-button>
      <bet-button></bet-button>
      <bet-button></bet-button>
    </div>
  </div>
</template>

<script>
import BetButton from "@/components/BetButton";

export default {
  name: "BettingPair",
  components: {BetButton}
}
</script>

<style scoped>
.bet {
  /*ovo posle ide u media query*/
  width: calc(50% - 16px);
}

.teams span {
  display: block;
  font-family: ProximaNovaSemibold, sans-serif;
  font-size: 13px;
  line-height: 16px;
}

.teams > :first-child {
  /*margin-bottom: 7px;*/
}

.time {
  font-family: ProximaNovaRegular, sans-serif;
  font-size: 10px;
  line-height: 12px;
  color: #FDB913;
  /*margin-bottom: 4px;*/
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
</style>