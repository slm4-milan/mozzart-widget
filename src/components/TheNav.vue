<template>
  <div class="d-flex align-items-center">
    <ul class="d-flex flex-row m-0 align-items-center">
      <li class="d-flex align-items-center active-sport" :style="footballImgBig"
          @click="activeSport">
      </li>
      <li class="d-flex align-items-center" :style="basketballImgBig">

      </li>
      <li class="d-flex align-items-center" :style="tennisImgBig">

      </li>
      <li class="d-flex align-items-center" :style="hockeyImgBig">

      </li>
      <li class="d-flex align-items-center" :style="volleyballImgBig">

      </li>
      <li class="d-flex align-items-center" :style="handballImgBig">
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
  computed: {},
  methods: {
    activeSport() {
      // const test = Object.keys(this.$store.getters.pickedSport);
      console.log(this.$store.getters.pickedSport.football[0].gameId)
    },
  }
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