<template>
  <div class="d-flex bet">
    <div class="game">
      <div class="time">
        Uto. 21:00
      </div>
      <div class="teams">
        <span>Chelsea</span>
        <span>Manchester Utd.</span>
      </div>
    </div>
    <div class="bets-num d-flex align-items-end ms-auto">
      3
    </div>
  </div>
</template>

<script>
export default {
  name: "BettingPair"
}
</script>

<style scoped>
div .bet {
  /*ovo posle ide u media query*/
  width: 50%;
}

.teams span {
  display: block;
  font-family: ProximaNovaSemibold, sans-serif;
  font-size: 13px;
  line-height: 16px;
}

.teams > :first-child {
  margin-bottom: 7px;
}

.time {
  font-family: ProximaNovaRegular, sans-serif;
  font-size: 10px;
  line-height: 12px;
  color: #FDB913;
  margin-bottom: 4px;
}

.bet {
  padding: 4px 8px;
}

.bets-num {
  font-family: ProximaNovaRegular, sans-serif;
  font-size: 13px;
  line-height: 16px;
  color: #40A3FF;
  text-shadow: 0 0 10px
}
</style>