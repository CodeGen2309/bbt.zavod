<script setup>
  import { onMounted } from 'vue';
  import { ref } from 'vue';
  import { animate } from 'motion';


  let currSlide = ref('/img/product/1.jpeg')

  async function changeSlide(ent) {
    await animate(
      '.pslider__mainImg',
      { opacity: [1, 0], translateX: [0, 100] },
      { duration: .2 }
    )

    currSlide.value = ent.target.src

    await animate(
      '.pslider__mainImg',
      { opacity: [0, 1], translateX: [100, 0] },
      { duration: .2 }
    )
  }


</script>



<template>

  <div class="pslider">
    <div class="pslider__thumbs">
      <img class="pslider__thumb" src="/img/product/1.jpeg" @click="changeSlide">
      <img class="pslider__thumb" src="/img/product/2.jpeg" @click="changeSlide">
      <img class="pslider__thumb" src="/img/product/3.jpg" @click="changeSlide">
      <img class="pslider__thumb" src="/img/product/4.jpeg" @click="changeSlide">
      <img class="pslider__thumb" src="/img/product/5.jpg" @click="changeSlide">
      <img class="pslider__thumb" src="/img/product/6.jpg" @click="changeSlide">
    </div>

    <div class="pslider__main">
      <img class="pslider__mainImg" :src="currSlide">
    </div>
  </div>

</template>


<style scoped>

  .pslider {
    position: relative;
    display: flex;
    gap: 20px;
    height: 76vh;
    max-height: 80vh;
    overflow: hidden;
  }


  .pslider__thumbs {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 70px;
  }

  .pslider__thumb {
    object-fit: cover;
    object-position: center;
    flex-grow: 1;
    border-radius: 4px;
    overflow: hidden;

    cursor: pointer;
    transition: .3s;
  }

  .pslider__thumb:hover {
    box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, .2);
  }

  .pslider__main {
    position: relative;
    display: flex;
    height: 100%;
    flex-grow: 1;
  }

  .pslider__mainImg {
    width: 100%; height: 100%;
    object-fit: cover;
    object-position: center;
    filter: brightness(1.1) contrast(1.2) saturate(1.2);
  }


</style>