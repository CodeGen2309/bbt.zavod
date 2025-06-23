<script setup>
  import TileList from "@/components/tileList.vue";
  import SectionList from "@/components/sectionList.vue";
  import SectionGrid from "@/components/sectionGrid.vue";
  import Banner from "@/components/banner.vue";
  import Podborka from "@/components/podborka.vue";
  


</script>


<template>
  <section class="ctlg">
    <TileList></TileList>
    <SectionList></SectionList>

    <SectionGrid 
      title="Тротуарная плитка"
      class="trot__tiles"
    ></SectionGrid>

    <Banner class="ctlg__banner"></Banner>
    <Podborka></Podborka>

  </section>
</template>


<style>
  .ctlg {
    position: relative;
  }

  .trot__tiles {
    margin: 60px auto;
    max-width: 1200px;
  }

  .ctlg__banner {
    margin: 150px 0;
  }
</style>