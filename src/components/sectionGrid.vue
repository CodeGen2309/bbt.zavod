<script setup>
  import CtlTitle from './ctlTitle.vue';
  import trot from '../mocks/ctlgTrot.json'


  let props = defineProps(['title'])


</script>


<template>
  <div class="sgrid__holder">
    <CtlTitle :title="props.title"></CtlTitle>

    <div class="sgrid__list">
      <div class="grid__item" 
        v-for="item in trot"
        :class="item.class"
      >
        <img class="grid__itemImg" :src="item.img">

        <p class="grid__itemDesc">
          <p class="grid__itemDescText" v-html="item.desc"></p>

          <div class="grid__buyButton">Подробнее</div>
        </p>

        <p class="grid__itemTitle">{{ item.title }}</p>

        <div class="grid__itemFormer">
          <p class="grid__itemPrice">{{ item.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .sgrid__holder {
    
  }

  .sgrid__list {
    display: grid;
    grid-template-columns: repeat( 4, 1fr );
    grid-template-rows: repeat( 2, 1fr );
    gap: 20px;

    margin: 30px 0;
    height: 60vh;
  }

  .grid__item {
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;

    border-radius: 10px;
    background: #f2f2f2;
    overflow: hidden;

    transition: all .3s ease;
    cursor: pointer;
  }

  .grid__item:hover {
    box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, .4);
  }

  .grid__item_big {
    grid-column: span 2;
    grid-row: span 2;
  }

  .grid__item_big .grid__itemDesc {
    display: block;
  }

  .grid__item_wide {
    grid-column: span 2;
  }


  .grid__itemImg {
    position: absolute;
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center;
  }

  .grid__itemTitle {
    position: relative;
    margin: 0; padding: 10px 20px;
    font-size: 20px;
    background: white;
    align-self: stretch;
  }

  .grid__itemDesc {
    display: none;
    position: relative;
    margin: 0;
    font-size: 14x;
    font-weight: 100;
    background: white;
    align-self: stretch
  }

  .grid__itemDescText {
    padding: 20px;
  }

  .grid__itemFormer {
    position: relative;
    background: white;
    transform: skewX(20deg) translateX(-15%);
  }

  .grid__itemPrice {
    position: relative;
    margin: 0; padding: 10px 40px;
    font-size: 16px;
    font-weight: 400;
    transform: skewX(-20deg);
    color: rgba(0, 0, 0, .7);
  }


  .grid__buyButton {
    display: none;
    position: relative;
    background: #4e9fff;
    color: white;
    letter-spacing: 1px;
    font-weight: 500;
    padding: 20px 40px;
    width: 100%;
    margin-top: 20px;
    box-sizing: border-box;
    border-radius: 10px;
  }

</style>