<template>
  <q-page>
    <div class="row justify-center">
      <div style="width: 75%;">
        <div style="text-align: center;">
          <h4> 800 <strong>Pokémons</strong> para você escolher o seu favorito</h4>
          <q-input rounded outlined label="Encontre seu pokémon ..." />
        </div>
        <div class="q-mt-lg fit row wrap justify-between items-start content-start">
          <q-btn-dropdown dense label="Tipo">
            <q-list>
              <q-item v-close-popup v-for="item in types" :key="item.title">
                <q-checkbox v-model="selection" val="teal" :label="item.title" color="teal" />
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-btn-dropdown dense label="Ataque">
            <q-list>
              <q-item v-close-popup v-for="item in types" :key="item.title">
                <q-checkbox v-model="selection" val="teal" :label="item.title" color="teal" />
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-btn-dropdown dense label="Experiência">
            <q-list>
              <q-item v-close-popup v-for="item in types" :key="item.title">
                <q-checkbox v-model="selection" val="teal" :label="item.title" color="teal" />
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
  import { defineComponent } from 'vue'
  import { ref } from 'vue'
  import pokemonTypeController from '../../../controllers/PokemonTypeController'
  import pokemonFinderController from '../../../controllers/PokemonFinderController'


  export default defineComponent({
  name: 'PokedexPage',
  data () {
    return {
      teste: 'elétrico',
      testeArray: ['normal', 'fogo'],
      types: [
        {
          title: 'Fire',
          selected: ''
        },
        {
          title: 'Normal',
          selected: ''
        },
        {
          title: 'Eletric',
          selected: ''
        }
      ]
    }
  },
  setup () {
    return {
    }
  },
  methods: {
    getPokemonTypes: async function () {
      return await pokemonFinderController.findPokemon('ditto')
    }
  },
  async mounted () {
    await this.getPokemonTypes()
  }
})

</script>
<style lang="scss">
  @import '../../../css/quasar.variables.scss';

  .q-page {
    background-image: map-get($gradients , greyGradient);
  }

</style>
