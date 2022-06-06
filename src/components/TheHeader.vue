<template>
  <section :style="backgroundHeader" class="header-background row align-items-center m-0">
    <div class="d-flex header-content justify-content-between">
      <div class="align-self-center">
        <img :src="logoUrlBig" alt="">
      </div>
      <div class="d-flex align-items-center">
        <ul class="d-flex flex-row m-0 align-items-center">
          <li class="d-flex align-items-center active-sport" :style="footballImgBig">
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
      <div class="d-flex">
        <div class="d-flex flex-row align-items-center">
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
export default {
  name: "TheHeader",
  data() {
    return {
      backgroundHeader: {
        'background-image': `url(${require('@/assets/images/header-pozadina.png')})`,
      },
      logoUrlBig: require('@/assets/images/logo/logo-veci.png'),
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
}
</script>

<style scoped>


.header-background {
  width: 100%;
  height: 56px;
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
}

.warning {
  border-radius: 50%;
  border: 0.8px solid #FFFFFF;
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  opacity: 0.5;
}

ul {
  list-style: none;
}

li {
  margin: 0 8px;
  width: 20px;
  height: 20px;
}

.active-sport {
  border-radius: 50%;
  box-shadow: 0 0 0 4.8px #40A3FF;
}

</style>