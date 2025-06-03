<script setup>
  import sectionList from "../mocks/razdel.json"

</script>

<template>
  <div class="ctlg__sectionList">
    <div class="ctlg__sectionItem" v-for="item in sectionList">
      <img class="ctlg__sectionImg" :src="item.img">
      <p class="ctlg__sectionTitle" v-html="item.title"></p>
    </div>
  </div>
</template>


<style scoped>
  .ctlg__sectionList {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin: 100px 20px;
  }

  .ctlg__sectionItem {
    display: flex;
    height: 70px;

    box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, .2);
    border-radius: 10px;
    padding-right: 20px;
    gap: 20px;

    overflow: hidden;
    cursor: pointer;
    transition: .3s;
  }

  .ctlg__sectionItem:hover {
    transform: scale(1.05);
    box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, .4);
  }

  .ctlg__sectionImg {
    height: 100%;
    width: 150px;
    flex-grow: 1;
    object-fit: cover;
    object-position: center;
  }

  .ctlg__sectionTitle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    flex-grow: 1;
    font-size: 14px;
    font-weight: 400;
    color: rgba(0, 0, 0, .7 );

    margin: 0; padding: 0;
  }

</style>