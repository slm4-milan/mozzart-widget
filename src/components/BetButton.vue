<template>
  <div class="odd d-flex align-items-center justify-content-center">
    <span>1.85</span>
  </div>
</template>

<script>
export default {
  name: "BetButton"
}
</script>

<style scoped>
.odd {
  width: 64px;
  height: 40px;
  background: #41444D;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  border-radius: 2px;
  margin-left: 4px;
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
</style>