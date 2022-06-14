<template>

  <section class="d-flex flex-wrap">
    <div class="d-flex tip align-items-center">
      <span v-if="width >= 538" @click="test"
            class="justify-content-start">Najigraniji mečevi</span>
      <the-nav v-else></the-nav>
      <div class="d-flex ms-auto" v-if="width >= 538">
        <div class="tip-1x2 d-flex justify-content-center align-items-center ms-auto">
          <span>1</span>
        </div>
        <div v-if="activeSport !== 'tennis' && activeSport !== 'volleyball'"
             class="tip-1x2 d-flex justify-content-center align-items-center ms-auto">
          <span>x</span>
        </div>
        <div class="tip-1x2 d-flex justify-content-center align-items-center ms-auto">
          <span>2</span>
        </div>
      </div>

    </div>
    <div class="d-flex tip-2 tip align-items-center">
      <div class="d-flex ms-auto">
        <div class="tip-1x2 d-flex justify-content-center align-items-center ms-auto">
          <span>1</span>
        </div>
        <div v-if="activeSport !== 'tennis' && activeSport !== 'volleyball'"
             class="tip-1x2 d-flex justify-content-center align-items-center ms-auto">
          <span>x</span>
        </div>
        <div class="tip-1x2 d-flex justify-content-center align-items-center ms-auto">
          <span>2</span>
        </div>
      </div>
    </div>
    <betting-pair v-for="pair in pairsPerPage" :key="pair.gameId" :id="pair.gameId"
                  :time="pair.time" :team1="pair.pairs[0].name"
                  :team2="pair.pairs[1].name" :numOfGames="pair.numberOfGames"
                  :odds="pair.offer">

    </betting-pair>
    <div class="d-flex align-items-center carousel-wrapper">
      <div @click="setActivePage(index)" v-for="index in numOfButtons" :key="index"
           class="carousel" :class="{'carousel-active': this.activePage === index}"></div>

    </div>

  </section>
</template>

<script>
import BettingPair from "@/components/BettingPair";
import TheNav from "@/components/TheNav";

export default {
  name: "TheMain",
  components: {
    BettingPair, TheNav
  },
  data() {
    return {};
  },
  computed: {
    pairsPerPage() {
      const firstIndex = (this.activePage - 1) * this.itemsPerPage;
      const lastIndex = this.activePage * this.itemsPerPage;

      return this.pairs.slice(firstIndex, lastIndex);
    },
    numOfButtons() {
      return this.$store.getters.getNumOfPages;
    },
    pairs() {
      return this.$store.getters.activeSportPairs;
    },
    activeSport() {
      return this.$store.getters.activeSport;
    },
    width() {
      return this.$store.getters.getWindowWidth;
    },

    activePage() {
      return this.$store.getters.getActivePage;
    },
    itemsPerPage() {
      return this.$store.getters.getNumOfItemsPerPage;
    },
  },
  methods: {
    setActivePage(pageNum) {
      this.$store.commit('setActivePage', pageNum)
    },
  },
  created() {
    this.$store.commit('setNumOfPages', this.pairs.length);
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

.tip-2:first-child {
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

.carousel {
  width: 33px;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  margin-left: 8px;
  cursor: pointer;
}

.carousel-active {
  background: #40A3FF;

}

.carousel-wrapper {
  padding: 8px 0;
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

  .tip {
    margin-left: 2px;
    width: calc(40% - 10px);
  }

  .tip-2 {
    width: calc(60% - 10px);
  }
}

@media screen and (max-width: 361px) {
  .tip-1x2 {
    width: 44px;
    margin-left: 1px !important;
  }

  .tip {
    margin-left: 2px;
    width: calc(50% - 10px);
  }

  .tip-2 {
    width: calc(50% - 10px);
  }
}

</style>