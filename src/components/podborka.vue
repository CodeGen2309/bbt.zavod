<script setup>
  import { ref } from "vue";
  import podart from "../mocks/podart.json"
  import ProductMinicard from "@/views/productMinicard.vue";
  import { animate } from "motion"

  let currCard = ref(podart[0])

  async function changeCard(item) {
    await animate(
      '.pod__itemCard',
      { opacity: [1, 0], translateX: [0, -100] },
      { duration: .4 }
    )

    currCard.value = item
  }
</script>


<template>
  <div class="pod">
    <ProductMinicard class="pod__itemCard" 
      :item="currCard" :key="currCard.title"
    ></ProductMinicard>

    <div class="pod__thumbList">
      <img v-for="item in podart"
        @click="changeCard(item)"
        class="pod__thumb" 
        :src="item.cover"
      >
    </div>

  </div>

</template>



<style scoped>

  .pod {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 20px auto;
    max-width: 1200px;
  }

  .pod__thumbList {
    display: flex;
    gap: 20px;
  }
  .pod__thumb {
    height: 120px;
    border-radius: 10px;
    flex-grow: 1;
    object-fit: cover;
    object-position: center;

    transition: .3s;
    cursor: pointer;
  }

  .pod__thumb:hover {
    box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, .2);
    transform: scale(1.1);
  }

</style>