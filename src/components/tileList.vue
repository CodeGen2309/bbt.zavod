<script setup>

</script>

<template>
  <div class="ctlg__tiles">
    <div class="ctlg__tile ctlg__tile_big">
      <img class="ctlg__tileImg" src="/img/tiles/park.jpg">
      <div class="ctlg__tileDesc"></div>
      <div class="ctlg__tileFormer">
        <div class="ctlg__tileName">Награда "Лучший парк 2024" </div>
      </div>
    </div>
    
    <div class="ctlg__tile ctlg__tile_wide">
      <img class="ctlg__tileImg" src="/img/tiles/plit.jpg">
      <div class="ctlg__tileFormer">
        <div class="ctlg__tileName">Тротуарная плитка</div>
      </div>
    </div>
    
    <div class="ctlg__tile ctlg__tile_small">
      <img class="ctlg__tileImg" src="/img/tiles/oblic.jpg">
      <div class="ctlg__tileFormer">
        <div class="ctlg__tileName">Облицовочный кирпич</div>
      </div>
    </div>
    
    <div class="ctlg__tile ctlg__tile_small">
      <img class="ctlg__tileImg" src="/img/tiles/betonbort.jpg">
      <div class="ctlg__tileFormer">
        <div class="ctlg__tileName">Бортовой камень</div>
      </div>
    </div>

    <div class="ctlg__tile ctlg__tile_wide">
      <img class="ctlg__tileImg" src="/img/tiles/tarkosale.jpg">
      <div class="ctlg__tileFormer">
        <div class="ctlg__tileName">Благоустройство г. Тарко-Сале</div>
      </div>
    </div>
    

  </div>
</template>

<style scoped>
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

    transition: .3s;
    cursor: pointer;
  }

  .ctlg__tile:hover {
    box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, .2);
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
    filter: brightness(1.1) saturate(1.2) sepia(0.2);
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
    padding: 15px 50px;
    margin: 0;
    transform: skewX(-40deg);
    font-size: 16px;
  }

  .ctlg__tileDesc {
    position: absolute;
    background: rgba(0, 0, 0, .6);
    backdrop-filter: blur(8px);
    font-size: 20px;
    margin-bottom: -300px;
    letter-spacing: 2px;
    font-weight: 300;
    color: white;
    padding: 20px;
    transition: .5s;
    display: none;
  }

  .ctlg__tile:hover .ctlg__tileDesc{
    padding-bottom: 400px;
  }
</style>