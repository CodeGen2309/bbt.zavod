<script setup>
  import CtlTitle from './ctlTitle.vue';

  let props = defineProps(['title'])


</script>


<template>
  <div class="banner">
    <img class="banner__img" src="/img/bannerCover.jpg" >

    <div class="banner__cover banner__cover_first"></div>
    <div class="banner__cover banner__cover_second"></div>
    <div class="banner__cover banner__cover_third">
      <div class="banner__content">
        <div class="banner__title">Зимнее хранение</div>

        <p class="banner__desc">
          Закажите материалы по сниженной цене и оставьте 
          у нас на бесплатное хранение на зимний период
        </p>

        <div class="banner__button">Подробнее</div>
      </div>

    </div>

  </div>

</template>

<style scoped>
  .banner {
    position: relative;

    width: 100%;
    height: 600px;
  }

  .banner__img {
    position: absolute;
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center;
  }

  .banner__cover {
    position: absolute;
    top: 0; bottom: 0;
    width: 70%;

    background: rgba(15, 85, 133, 0.8);
    height: 100%;
    transform: skewX(20deg) translateX(-180px);
  }

  .banner__cover_first {
    transform: skewX(20deg) translateX(-140px);
  }

  .banner__cover_second {
    transform: skewX(20deg) translateX(-100px);
  }

  .banner__cover_third {
    background: linear-gradient(
      to right,
      rgba(41, 128, 185, .8),
      rgba(0, 0, 0, .3)
    );
  }

  .banner__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    padding: 40px 0 40px 200px;
    /* width: 50%; */
    height: 100%;
    box-sizing: border-box;

    position: relative;
    transform: skewX(-20deg);
    color: aliceblue;
    
  }

  .banner__title {
    font-size: 40px;
    margin: 0;
    font-weight: bold;
  }

  .banner__desc {
    font-size: 30px;
    font-weight: 100;
    padding: 20px 20px 0 0;
  }

  .banner__button {
    border: 1px solid white;
    padding: 15px 40px;
  }

</style>