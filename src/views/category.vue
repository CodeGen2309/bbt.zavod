<script setup>
  import TileList from "@/components/tileList.vue";
  import SectionList from "@/components/sectionList.vue";
  import SectionGrid from "@/components/sectionGrid.vue";
  import Banner from "@/components/banner.vue";
  import Podborka from "@/components/podborka.vue";


  import catHeader from "@/components/catHeader.vue";
  import tabs from "@/components/tabs.vue";

let tabData = [
  {title: 'хиты продаж' },
  {title: 'цена со скидкой' },
  {title: 'премиум' },
  {title: 'сначала популярное' },
  {title: 'полный окрас' },
  {title: 'декоративное покрытие' },
  {title: 'показать все фильтры' },
  {title: 'цена со скидкой' },
  {title: 'премиум' },
  {title: 'сначала популярное' },
  {title: 'полный окрас' },
  {title: 'декоративное покрытие' },
]


</script>

<template>
  <catHeader class="cHead"></catHeader>

<tabs class="tst__tabs" 
  :images="false" :tab-data="tabData"
/>

  <SectionGrid 
    title="Тротуарная плитка"
    class="trot__tiles"
  ></SectionGrid>


  <Banner class="ctlg__banner"></Banner>
  <!-- <Podborka></Podborka> -->

  <br><br>

  <SectionGrid 
    title="Тротуарная плитка"
    class="trot__tiles"
  ></SectionGrid>

  <SectionGrid 
    title="Тротуарная плитка"
    class="trot__tiles"
  ></SectionGrid>

  <SectionGrid 
    title="Тротуарная плитка"
    class="trot__tiles"
  ></SectionGrid>


  <div class="podsec">
  </div>

</template>


<style scopded>
.tst__tabs {
  margin: 60px 200px;
}

.tab {
  height: 40px;
}

.tab:hover {
  color: white;
  background: rgba(41, 128, 185,1.0);
}

.tst__holder {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 250px;
  grid-auto-flow: dense;
  gap: 30px;

  margin: 60px 150px;
  box-sizing: border-box;
}

.cHead {
  padding: 20px;
  margin: 20px;
}

.ctlg {
  position: relative;
}

.ctlg__title {
  display: none;
}

.trot__tiles {
  margin: 60px auto;
  max-width: 1200px;
}

.ctlg__banner {
  margin: 150px 0;
}


</style>