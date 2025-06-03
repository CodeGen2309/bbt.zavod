<script setup>
  import CtlTitle from '@/components/ctlTitle.vue';
  import { animate, stagger } from 'motion'
  import { onMounted } from 'vue';

  let props = defineProps(['item'])

  onMounted(() => {
    animate(
      '.proDet__cover',
      { opacity: [0, 1] },
      { duration: .6 }
    )

    animate(
      '.slideAnim',
      { opacity: [0, 1], translateX: [100, 0] },
      { duration: .6 , delay: stagger(.2)}
    )
  })

</script>


<template>
  <div class="proDet">
    <div class="proDet__cover">
      <img class="proDet__coverImg" :src="item.cover">
      
      <div class="proDet__priceHolder">
        <p class="proDet__price"> {{ item.price }} руб.</p>
      </div>
    </div>

    <div class="proDet__content">
      <CtlTitle class="slideAnim" :title="item.title"></CtlTitle>
      <div class="proDet__desc slideAnim" v-html="item.desc" ></div>
      <div class="proDet__button slideAnim">В корзину</div>
    </div>
  </div>
</template>



<style scoped>
  .proDet {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    height: 500px;
    gap: 20px;
  }

  .proDet__cover {
    width: 50%;
    border-radius: 10px;
    overflow: hidden;
    opacity: 0;

    position: relative;
  }

  .proDet__coverImg {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    object-fit: cover;
    object-position: center;
    filter: contrast(1.2) saturate(1.2);
  }

  .proDet__coverFilter {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, .5) 4%,
      rgba(0, 0, 0, 0)
    );
  }

  .proDet__priceHolder {
    position: absolute;
    background: white;
    bottom: 0; left: 0;
    padding: 20px 100px;
    transform: skewX(40deg) translateX(-30px);
  }

  .proDet__price {
    transform: skewX(-40deg);
    font-size: 18px;
    margin: 0; padding: 0;
  }

  .proDet__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
  }
  .proDet__title {
  }
  .proDet__desc {
  }
  .proDet__button {
    display: flex;
    justify-content: center;
    width: 100%;
    background: #74B9FF;
    box-sizing: border-box;
    color: white;
    padding: 20px;
    border-radius: 10px;
    font-size: 18px;
    margin-top: 150px;

    transition: .3s;
    cursor: pointer;
  }

  .proDet__button:hover {
    background: #4e9fff;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, .2);
  }

  .slideAnim {
    opacity: 0;
  }
</style>