<template>
  <div class="d-flex align-items-center">
    <ul class="d-flex flex-row m-0 align-items-center">
      <li class="d-flex align-items-center"
          :class="{'active-sport': activeSport==='football'}"
          :style="footballImgBig"
          @click="activateSport('football')">
      </li>
      <li class="d-flex align-items-center"
          :class="{'active-sport': activeSport==='basketball'}"
          :style="basketballImgBig"
          @click="activateSport('basketball')">

      </li>
      <li class="d-flex align-items-center" :class="{'active-sport': activeSport==='tennis'}"
          :style="tennisImgBig" @click="activateSport('tennis')">

      </li>
      <li class="d-flex align-items-center" :style="hockeyImgBig"
          :class="{'active-sport': activeSport==='hockey'}" @click="activateSport('hockey')">
      </li>
      <li class="d-flex align-items-center" :style="volleyballImgBig"
          :class="{'active-sport': activeSport==='volleyball'}"
          @click="activateSport('volleyball')">

      </li>
      <li class="d-flex align-items-center" :style="handballImgBig"
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
    return {
      footballImgBig: {
        'background-image': `url(${require('@/assets/images/sprite-big/fudbal2.png')})`,
      },
      basketballImgBig: {
        'background-image': `url(${require('@/assets/images/sprite-big/kosarka2.png')})`,
      },
      tennisImgBig: {
        'background-image': `url(${require('@/assets/images/sprite-big/tenis2.png')})`,
      },
      hockeyImgBig: {
        'background-image': `url(${require('@/assets/images/sprite-big/hokej1.png')})`,
      },
      volleyballImgBig: {
        'background-image': `url(${require('@/assets/images/sprite-big/odbojka1.png')})`,
      },
      handballImgBig: {
        'background-image': `url(${require('@/assets/images/sprite-big/rukomet1.png')})`,
      },
    }
  },
  methods: {
    activateSport(sport) {
      this.$store.commit('activateSport', sport)
    }
  },
  computed: {
    activeSport() {
      return this.$store.getters.activeSport;
    },
    activeTip() {
      return this.$store.getters.getSelectedTip;
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
</style>