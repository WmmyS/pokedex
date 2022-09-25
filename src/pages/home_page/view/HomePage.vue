<template>
  <q-page>
    <div class="section">
      <div class="presentation">
        <h2><strong>Encontre</strong> todos os seus <strong>Pokémons</strong> favoritos</h2>
        <h4>Você pode conhecer o tipo do Pokémon, suas vantagens, fraquesas e abilidades</h4>
        <q-btn class="q-px-xl q-py-md" style="background: #73D642; color: black; border-radius: 13px; font-size: 18px;" label="Veja Pokémons" href="/pokedex" no-caps />
      </div>
    </div>
    <div id="bannerBackground">
    </div>
  </q-page>
</template>
<script>
  import { defineComponent } from 'vue'

  export default defineComponent({
  name: 'HomePage'
})
</script>
<style lang="scss">
  @import '../../../css/quasar.variables.scss';

  .q-page {
    background-image: map-get($gradients , yellowGradient);
  }

  .bannerComplete {
    position: absolute;
    top: 100px;
    right: 0%;
  }

  .section {
    margin-top: 100px;
    position: fixed;
    width: 100%;
    text-align: left;
    z-index: 1;
  }

  .presentation {
    width: 75%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    z-index: 0;
  }

  .presentation h2 {
    width: 55%;
    letter-spacing: 2px;
    line-height: 1.2;
    //backdrop-filter: blur(5px);
    border-radius: 10px;
  }

  .presentation h4 {
    padding-top: 10px;
    padding-bottom: 20px;
    width: 50%;
    letter-spacing: 2px;
    line-height: 1.6;
    backdrop-filter: blur(5px);
    border-radius: 10px;
  }

  #bannerBackground {
    background-image: url('../../../assets/banner.png');
    background-position: top 60px right 0px;
    width: 100%;
    height: 780px;
    margin-right: 0px;
    margin-left: auto;
    padding-top: 80px;
    background-repeat: no-repeat;
  }

</style>
