<template>
  <div class="odd d-flex align-items-center justify-content-center"
       :class="{'active-tip': !!activeTip && activeTip.gameId===id && activeTip.tipKey === tipKey}"
       @click="setTip({tipKey, gameId: id, tip})">
    <span>{{ tip }}</span>
  </div>
</template>

<script>
export default {
  props: ['tip', 'id', 'tipKey'],
  name: "BetButton",
  methods: {
    setTip(tip) {
      if (!!this.activeTip && this.activeTip.gameId === this.id && this.activeTip.tipKey === this.tipKey) {
        this.$store.commit('setTip', null)
      } else {
        this.$store.commit('setTip', tip)
      }

      console.log(tip);
      // const activeSport = this.activeSport;
    },

  },
  computed: {
    activeTip() {
      return this.$store.getters.getSelectedTip;
    },
  },

}
</script>

<style scoped>
.odd {
  width: 64px;
  height: 40px;
  background: #41444D;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  border-radius: 2px;
  margin-left: 2px;
}

.odd span {
  font-family: ProximaNovaSemibold, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  text-align: center;

  color: #FFFFFF;
}

div {
  cursor: pointer;
}

::selection {
  background: transparent;
}

.active-tip {
  background-color: #FDB913;
}

.active-tip span {
  color: #2A2D35;
}

@media screen and (max-width: 687px) {
  .odd {
    width: 40px;
    height: 40px;
  }

  .odd span {
    font-size: 17px;
    line-height: 21px;
  }
}

@media screen and (max-width: 537px) {
  .odd {
    width: 64px;
    height: 40px;
  }

  .odd span {
    font-size: 18px;
    line-height: 22px;
  }
}
</style>