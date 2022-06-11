<template>
  <section :style="backgroundHeader" class="header-background row align-items-center m-0">
    <div class="d-flex header-content justify-content-between">
      <div class="align-self-center">
        <img :src="logoUrlBig" alt="">
      </div>
      <the-nav v-if="width >= 538"></the-nav>
      <div class="d-flex">
        <div class="text-white" v-if="activeTip">
          <div class="bet-checkout d-flex flex-wrap align-items-center"
               :class="justifyContent">
            <div class="picked-odd d-flex align-items-center">
              <span class="odd-text">Kvota:</span>
              <span class="odd-value">{{ activeTip.tip }}</span>
            </div>
            <div class="payment-proceed">
              <span>Uplati</span>
            </div>
          </div>
        </div>
        <div v-else class="d-flex align-items-center justify-content-end instructions">
          <div class="d-flex justify-content-end">
            <div class="test-2 d-flex flex-wrap align-items-center justify-content-center ms-auto">
              <div class="">
                <p class="text-white m-0 pick-bet">klikni na kvotu</p>
              </div>
              <div class="">
                <p class="text-white fill-bet">popuni tiket</p>
              </div>
              <div class="test"></div>
            </div>
          </div>
          <div class="warning">
            <p class="text-white m-0">18+</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import TheNav from "@/components/TheNav";

export default {
  name: "TheHeader",
  components: {TheNav},
  data() {
    return {
      backgroundHeader: {
        'background-image': `url(${require('@/assets/images/header-pozadina.png')})`,
      },
      logoUrlBig: require('@/assets/images/logo/logo-veci.png'),

    }
  },
  computed: {
    activeTip() {
      return this.$store.getters.getSelectedTip;
    },
    width() {
      return this.$store.getters.getWindowWidth;
    },

    justifyContent() {
      return this.width >= 538 && this.width <= 687 ? 'justify-content-center' : 'justify-content-between';
    },

  },
}
</script>

<style scoped>


.header-background {
  width: 100%;
  height: 56px;
  background-size: cover;
}

.header-content {
  padding: 0 8px;
}

.pick-bet {
  font-family: ProximaNovaRegular, sans-serif;
  font-size: 11px;
  line-height: 13px;
}

.fill-bet {
  font-family: ProximaNovaSemibold, sans-serif;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  text-shadow: 0 0 7px #FFFFFF;
  margin: 0 7px
}

.warning p {
  font-family: ProximaNovaSemibold, sans-serif;
  font-size: 6.681px;
  line-height: 8px;
  text-transform: uppercase;
  text-shadow: 0 0 7px #FFFFFF;
  padding-left: 1px;
}

.warning {
  border-radius: 50%;
  border: 1px solid #FFFFFF;
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  opacity: 0.5;
}

.bet-checkout {
  width: 197px;
  height: 40px;
  background-color: #347E58;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.45);
  border-radius: 1px;
  padding: 0 15px;
}

.instructions {
  /*max-width: 197px;*/
  width: 197px;
  /*padding-left: 21.46px;*/
}

.odd-text {
  font-family: ProximaNovaRegular, sans-serif;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: #FFFFFF;
}

.odd-value {
  font-family: ProximaNovaSemibold, sans-serif;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  color: #FDB913;
  text-shadow: 0px 0px 11px rgba(253, 185, 19, 0.2);
  margin-left: 1px;
}

.payment-proceed {
  text-transform: uppercase;
  font-family: ProximaNovaSemibold, sans-serif;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  text-shadow: 0 0 7px #FFFFFF;
  cursor: pointer;
}

@media screen and (min-width: 538px) and (max-width: 687px) {
  .bet-checkout {
    width: 124px;
  }
}

@media screen and (max-width: 687px) {
  .instructions {
    /*max-width: 197px;*/
    width: 124px;
    /*padding-left: 21.46px;*/
  }
}

@media screen and (max-width: 537px) {
  .test {
    width: 14px;
    height: 8px;
    background: linear-gradient(158.75deg, rgba(255, 255, 255, 0) 39%, #FFFFFF 81.5%), #FDB913;
    box-shadow: 0px 0px 4px rgba(253, 185, 19, 0.7);
    border-radius: 0.5px;
    transform: rotate(180deg);
  }

  .test-2 {
    margin-right: 24%;
    width: 135px;
  }
}


</style>