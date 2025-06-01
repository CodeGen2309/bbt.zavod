<script setup>
  import sectionList from "../mocks/razdel.json";

</script>


<template>
  <section class="ctlg">
    <div class="ctlg__tiles">
      <div class="ctlg__tile ctlg__tile_big">
        <img class="ctlg__tileImg" src="/public/img/1.jpg">
        <div class="ctlg__tileDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Quibusdam itaque atque quos, excepturi aperiam laboriosam beatae 
          voluptate tempora repellat quasi? Iure perspiciatis, doloremque nam enim 
          earum numquam dolor alias tempora consequatur soluta corporis 
          perferendis obcaecati nisi voluptates magni optio autem iste quisquam, 
          expedita ipsum repudiandae.
        </div>
        <div class="ctlg__tileFormer">
          <div class="ctlg__tileName">title</div>
        </div>
      </div>
      
      <div class="ctlg__tile ctlg__tile_wide">
        <img class="ctlg__tileImg" src="/public/img/1.jpg">
        <div class="ctlg__tileFormer">
          <div class="ctlg__tileName">title</div>
        </div>
      </div>
      
      <div class="ctlg__tile ctlg__tile_small">
        <img class="ctlg__tileImg" src="/public/img/1.jpg">
        <div class="ctlg__tileFormer">
          <div class="ctlg__tileName">title</div>
        </div>
      </div>
      
      <div class="ctlg__tile ctlg__tile_small">
        <img class="ctlg__tileImg" src="/public/img/1.jpg">
        <div class="ctlg__tileFormer">
          <div class="ctlg__tileName">title</div>
        </div>
      </div>
      
      <div class="ctlg__tile ctlg__tile_wide">
        <img class="ctlg__tileImg" src="/public/img/1.jpg">
        <div class="ctlg__tileFormer">
          <div class="ctlg__tileName">title</div>
        </div>
      </div>
    </div>

    <div class="ctlg__sectionList">
      <div class="ctlg__sectionItem" v-for="item in sectionList">
        <img class="ctlg__sectionImg" :src="item.img">
        <p class="ctlg__sectionTitle">{{ item.title }}</p>
      </div>
      
    </div>
  </section>
</template>


<style>
  .ctlg {
    position: relative;
  }

  .ctlg__tiles {
    display: grid;
    grid-template-columns: repeat( 10, 1fr );
    grid-template-rows: repeat( 2, 1fr );
    gap: 20px;


    height: 70vh;
    padding: 40px 60px 0px 60px;
    box-sizing: border-box;
    margin: auto;
  }

  .ctlg__tile {
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
    border-radius: 10px;
    overflow: hidden;
  }

  .ctlg__tile_big {
    grid-column: span 5;
    grid-row: span 2;
  }

  .ctlg__tile_wide {
    grid-column: span 3;
  }

  .ctlg__tile_small {
    grid-column: span 2;
  }

  .ctlg__tileImg {
    position: absolute;
    width: 100%; height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .ctlg__tileFormer {
    position: relative;
    transform: skewX(40deg) translateX(-30px);
    background: white;
  }

  .ctlg__tile_small .ctlg__tileFormer {
    width: 150%;
  }

  .ctlg__tileName {
    position: relative;
    padding: 15px 70px;
    margin: 0;
    transform: skewX(-40deg);
  }

  .ctlg__tileDesc {
    position: absolute;
    background: rgba(0, 0, 0, .5);
    color: white;
    padding: 20px;
    transition: .3s;
  }

  .ctlg__tile:hover .ctlg__tileDesc{
    padding-bottom: 60px;
  }

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
    gap: 20px;
    padding-right: 10px;

    box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, .2);
    border-radius: 10px;
    overflow: hidden;
    transition: .3s;
    cursor: pointer;
  }

  .ctlg__sectionImg {
    height: 100%;
    width: 50%;
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
    color: rgba(0, 0, 0, .7);

    margin: 0; padding: 0;
  }


</style>