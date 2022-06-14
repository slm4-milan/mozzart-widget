<template>
  <div class="d-flex align-items-center">
    <ul class="d-flex flex-row m-0 align-items-center">
      <li class="d-flex align-items-center"
          :class="{'active-sport': activeSport==='football'}"
          :style="footballImage"
          @click="activateSport('football')">
      </li>
      <li class="d-flex align-items-center"
          :class="{'active-sport': activeSport==='basketball'}"
          :style="basketballImage"
          @click="activateSport('basketball')">

      </li>
      <li class="d-flex align-items-center" :class="{'active-sport': activeSport==='tennis'}"
          :style="tennisImage" @click="activateSport('tennis')">

      </li>
      <li class="d-flex align-items-center" :style="hockeyImage"
          :class="{'active-sport': activeSport==='hockey'}" @click="activateSport('hockey')">
      </li>
      <li class="d-flex align-items-center" :style="volleyballImage"
          :class="{'active-sport': activeSport==='volleyball'}"
          @click="activateSport('volleyball')">

      </li>
      <li class="d-flex align-items-center" :style="handballImage"
          :class="{'active-sport': activeSport==='handball'}"
          @click="activateSport('handball')">
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "TheNav",
  data() {
    return {}
  },
  methods: {
    activateSport(sport) {
      this.$store.commit('activateSport', sport);
      this.setNumOfPages();
      this.setActivePage();
    },
    setNumOfPages() {
      this.$store.commit('setNumOfPages', this.pairs.length)
    },
    setActivePage() {
      this.$store.commit('setActivePage', 1);
    },
  },
  computed: {
    pairs() {
      return this.$store.getters.activeSportPairs;
    },
    activeSport() {
      return this.$store.getters.activeSport;
    },
    activeTip() {
      return this.$store.getters.getSelectedTip;
    },
    width() {
      return this.$store.getters.getWindowWidth;
    },
    footballImage() {
      if (this.width >= 538)
        return {'background-image': `url(${require('@/assets/images/sprite-big/fudbal2.png')})`}
      else {
        return {'background-image': `url(${require('@/assets/images/sprite-small/fudbal2.png')})`}
      }
    }, basketballImage() {
      if (this.width >= 538)
        return {'background-image': `url(${require('@/assets/images/sprite-big/kosarka2.png')})`}
      else {
        return {'background-image': `url(${require('@/assets/images/sprite-small/kosarka2.png')})`}
      }
    }, tennisImage() {
      if (this.width >= 538)
        return {'background-image': `url(${require('@/assets/images/sprite-big/tenis2.png')})`}
      else {
        return {'background-image': `url(${require('@/assets/images/sprite-small/tenis2.png')})`}
      }
    }, hockeyImage() {
      if (this.width >= 538)
        return {'background-image': `url(${require('@/assets/images/sprite-big/hokej1.png')})`}
      else {
        return {'background-image': `url(${require('@/assets/images/sprite-small/hokej1.png')})`}
      }
    }, volleyballImage() {
      if (this.width >= 538)
        return {'background-image': `url(${require('@/assets/images/sprite-big/odbojka1.png')})`}
      else {
        return {'background-image': `url(${require('@/assets/images/sprite-small/odbojka1.png')})`}
      }
    }, handballImage() {
      if (this.width >= 538)
        return {'background-image': `url(${require('@/assets/images/sprite-big/rukomet1.png')})`}
      else {
        return {'background-image': `url(${require('@/assets/images/sprite-small/rukomet1.png')})`}
      }
    },
  },
}
</script>

<style scoped>
ul {
  list-style: none;
}

li {
  margin: 0 8px;
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.active-sport {
  border-radius: 50%;
  box-shadow: 0 0 0 4.8px #40A3FF;
}

@media screen and (max-width: 537px) {
  .active-sport {
    box-shadow: 0 0 0 2.8px #40A3FF;
  }

  li {
    width: 16px;
    height: 16px;
    margin: 0 4px;
  }

  ul {
    padding-left: 0;
  }

}
</style>