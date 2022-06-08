<template>
  <section :style="backgroundHeader" class="header-background row align-items-center m-0">
    <div class="d-flex header-content justify-content-between">
      <div class="align-self-center">
        <img :src="logoUrlBig" alt="">
      </div>
      <the-nav></the-nav>
      <div class="d-flex">
        <div class="text-white" v-if="activeTip">{{ activeTip.tip }}</div>
        <div v-else class="d-flex flex-row align-items-center">
          <div class="">
            <p class="text-white m-0 pick-bet">klikni na kvotu</p>
          </div>
          <div>
            <p class="text-white fill-bet">popuni tiket</p>
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


</style>