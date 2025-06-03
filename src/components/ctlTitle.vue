<script setup>

let props = defineProps(['title'])

</script>

<template>
  <div class="ctlg__title">
    <p class="ctlg__titleText">{{props.title}}</p>
    <div class="ctlg__titleDec"></div>
    <div class="ctlg__titleDec ctlg__titleDec_bottom"></div>
  </div>
</template>

<style scoped>

  .ctlg__title {
    position: relative;
  }

  .ctlg__titleText {
    margin: 0; padding: 10px 0;
    font-size: 26px;
  }

  .ctlg__titleDec {
    content: '';
    position: absolute;
    left: 0; bottom: 5px;
    width: 30%;
    height: 1px;
    background: rgba(0, 0, 0, .3);
  }

  .ctlg__titleDec_bottom {
    content: '';
    position: absolute;
    left: 0; bottom: 0;
    width: 100%;
    height: 1px;
    background: rgba(0, 0, 0, .3);
  }


</style>