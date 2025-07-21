<script setup>
import CtlTitle from '@/components/ctlTitle.vue';
import ProdutSlider from '@/components/produtSlider.vue';
import {animate} from 'motion'
import { ref, Transition } from 'vue';

let sideIsOpen = false
let currside = ref('tech')

let techList = [
  { name: 'Толщина', values: ['60', '80'] },
  { name: 'Цветовое решение', values: ['Стандарт', 'Color Mix', 'Гранит Микс'] },
  { name: 'Цвет', values: ['Серый', 'Белый', 'Коричневый', 'Красный', 'Черный'] },
]

let desc = `
  Тротуарная плитка ТЕРРАСА выпускается высотой 60 или 80 мм, а также имеет геометрически правильную форму.  <br><br>
  Элементы тротуарной плитки максимально обеспечивают прилегание одной плитки к другой. 
  Тротуарная плитка ТЕРРАСА после укладки образует идеально ровную поверхность, а отсутствие фаски 
  создает идеальные условия для комфортного проезда детских колясок, тележек супермаркетов, 
  роликовых коньков и т.д. <br><br>

  Применяется для мощения тротуаров, придомовых территорий частных строений, 
  площадей, общественных пространств, посадочных площадок общественного 
  транспорта, стоянок легкового автотранспорта (паркингов).

`

function toggleSideBar () {
  if (sideIsOpen) { closeSideBar() } 
  else { openSideBar() } 
}

function  openSideBar () {
  sideIsOpen = true

  animate(
    '.prd__sideBar',
    { marginRight: '0', opacity: 1 },
    { duration: .6 }
  )
}


function  closeSideBar () {
  sideIsOpen = false

  animate(
    '.prd__sideBar',
    { marginRight: '-60%', opacity: 0 },
    { duration: .6 }
  )
}

function changeSide(side) {
  currside.value = side
  openSideBar()
  console.log(currside.value);
  
}

</script>


<template>
  <section class="prd">
    <CtlTitle class="prd__title" title="Терасса (плиточная система)"></CtlTitle>

    <div class="prd__content">
      <ProdutSlider class="prd__slider"></ProdutSlider>

      <div class="prd__sideBar">
        <Transition name="fadeAnim">
          <div class="techlist" v-if="currside == 'tech'">
            <div class="techlist__line" v-for="item in techList">
              <p class="techlist__title">{{item.name}}</p>
              
              <div class="techlist__list">
                <p class="techlist__item" v-for="value in item.values">
                  {{value}}
                </p>
              </div>

            </div>
          </div>
        </Transition>

        <Transition name="fadeAnim">
        <div class="sideDesc" 
          v-html="desc"
          v-if="currside == 'desc'"
        ></div>
        </Transition> 
      </div>

      
      <div class="prd__tofcHolder">
        <div class="prd__tofc">
          <p class="prd__tofcItem" @click="changeSide('tech')">Характеристики</p>
          <p class="prd__tofcItem" @click="changeSide('desc')">Опиcание</p>
          <p class="prd__tofcItem" @click="closeSideBar">Нормы загрузки</p>
        </div>
      </div>

      <div class="pdr__techList">
        <div class="pdr__techItem">
          <p class="pdr__techKey">Толщина</p>
          <p class="pdr__techValue">60мм</p>
        </div>

        <div class="pdr__techItem">
          <p class="pdr__techKey">Размеры</p>
          <p class="pdr__techValue">450*150,225*150,150*150</p>
        </div>

        <div class="pdr__techItem">
          <p class="pdr__techKey">Цветовое решение</p>
          <p class="pdr__techValue">Стандарт</p>
        </div>

        <div class="pdr__techItem">
          <p class="pdr__techKey">Цвет</p>
          <p class="pdr__techValue">Серый</p>
        </div>

        <div class="proDet__button slideAnim">В корзину</div>
      </div>
    </div>
  </section>

</template>


<style scoped>

  .prd {
    position: relative;
    padding: 100px 20px;
    padding-bottom: 0;
    overflow: hidden;
  }

  .prd__title {
    width: 60%;
  }

  .prd__slider {
    width: 70%;
  }

  .prd__content {
    display: flex;
    position: relative;
    padding-top: 40px;
    box-sizing: border-box;
    gap: 20px;
    overflow: hidden;
  }

  .prd__tofcHolder {
    display: flex;
    position: absolute;
    right: 0;

    padding: 0px 80px;
    background: white;
    transform: skewX(40deg);

  }

  .prd__tofc {
    display: flex;
    align-items: center;
    gap: 50px;
    transform: skewX(-40deg);
  }

  .prd__tofcItem {
    font-size: 18px;
    /* color: rgba(0, 0, 0, 1); */
    color: black;
    font-weight: 300;
    letter-spacing: 2px;
    cursor: pointer;

    font-family: 'Montserrat';
  }

  .pdr__techList {
    display: flex;
    flex-direction: column;
    justify-content: center;
    letter-spacing: 2px;
    
    gap: 60px;
    flex-grow: 1;
  }

  .pdr__techItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, .3);
  }

  .pdr__techKey {
    margin: 0; padding: 0;
    letter-spacing: 2px;
    font-size: 20px;
    color: rgba(0, 0, 0, 1);
  }

  .pdr__techValue {
    margin: 0;
    padding: 10px 0px;
    box-sizing: border-box;
    font-weight: 400;
    color: rgba(0, 0, 0, .6);

  }


  .prd__sideBar {
    display: flex;
    justify-content: center;
    align-items: center;


    position: absolute;
    padding: 20px;
    right: 0;
    background: rgba(255, 255, 255, .9);
    backdrop-filter: blur(8px);
    margin-right: -100%;

    width: 70%;
    min-height: 100%;
  }


  .techlist {
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    height: 100%;
    box-sizing: border-box;
    gap: 30px;
    padding: 50px 20px;
    flex-grow: 1;
    transition: .4s;
  }

  .techlist__line {
  }

  .techlist__title {
    font-size: 18px;
    letter-spacing: 1px;
    color: rgba(0, 0, 0, .8);
  }

  .techlist__list {
    display: flex;
    justify-content: center;
    align-items: stretch;
    overflow: scroll;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    border-top: 1px solid rgba(0, 0, 0, .2);
    width: 80%;
  }

  .techlist__list::-webkit-scrollbar {
    display: none;
  }

  .techlist__item {
    padding:  20px 40px;
    height: 100%;
    margin: 0;
    font-size: 18px;
    font-weight: 100;
    letter-spacing: 1px;
    cursor: pointer;
    color: rgba(0, 0, 0, .6);
    font-family: 'biocad';
    transition: .3s;
  }

  .techlist__item:hover {
    background: #74B9FF;
    color: white;
  }

  .sideDesc {
    position: absolute;
    display: flex;
    align-items: center;
    font-size: 18px;
    letter-spacing: 2px;
    color: rgba(0, 0, 0, .8);
    transition: .3s;
    margin: 40px;
  }


  .fadeAnim-enter-active, .fadeAnim-leave-active {
    opacity: 0;
    transform: translateY(-100px);
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
    align-self: flex-end;
    justify-self: flex-end;
    margin-top: 20px;

    transition: .3s;
    cursor: pointer;
  }

  .proDet__button:hover {
    background: #4e9fff;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, .2);
  }

</style>