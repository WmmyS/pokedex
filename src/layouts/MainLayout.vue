<template>
  <q-layout class="bg-grey-1" style="heigth: 500px;">
    <q-header elevated>
      <div id="menu">
        <div class="flexMenu">
          <div>
            <img class="logomain"
            alt="Pokémon logo"
            src="~assets/Logo.svg"
            style="width: 157px; height: 85px; position: static;"
            >
          </div>
          <div>
            <ul class="text-h6 menuItens">
              <li v-for="item in menuList" :key="item.title">
                <a class="" :href="item.link" >{{ item.title }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer>
      <div id="footer">
        <div class="flexFooter">
          <div>
            <p>Feito com &#10084; para Beatriz</p>
          </div>
          <div>
            <p>Wesley Santos</p>
          </div>
        </div>
      </div>

    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  data () {
    return {
      menuList: [
        {
          title: 'Home',
          link: '/'
        },
        {
          title: 'Pokedéx',
          link: '/pokedex'
        },
        {
          title: 'Lendários',
          link: '/lendarios'
        },
        {
          title: 'Documentação',
          link: '/documentacao'
        }
      ]
    }
  },
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
    }
  }
})
</script>
<style lang="scss">
  @import '../css/quasar.variables.scss';
  @import url('https://fonts.googleapis.com/css2?family=Karla&display=swap');

  .q-header {
    background-color: $third;
    height: 93px;
    font-family: 'Karla', sans-serif;
  }

  #menu {
    max-width: 75%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .flexMenu {
    display:flex;
    position: static;
    align-items: center;
    justify-content: space-between;
  }

  .menuItens {
    list-style-type: none;
    display: inline-flex;
    text-decoration: none;
    width: 700px;
    justify-content: space-between;
  }

  .menuItens li a {
    text-decoration: none;
    color: $black;
  }

  .logomain {
    width: 80%;
    height: 100%;
    position: absolute;
  }

  .q-footer {
    background-color: rgba(184, 175, 175, 0);
  }

  #footer {
    max-width: 75%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .flexFooter {
    justify-content: space-between;
    display: flex;
  }

  .q-footer p {
    text-align: center;
    color: $black;
    font-family: 'Karla', sans-serif;
    font-size: 15pt;
    height: 50px;
  }

</style>
