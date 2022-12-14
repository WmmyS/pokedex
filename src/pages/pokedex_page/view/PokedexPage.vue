<template>
  <q-page>
    <div class="row justify-center">
      <div style="width: 75%">
        <div style="text-align: center">
          <h4>
            {{count}} <strong>Pokémons</strong> para você escolher o seu favorito
          </h4>
          <q-input rounded outlined label="Encontre seu pokémon ..." v-model="query" @keyup.enter="findPokemon" />
        </div>
        <div
          class="q-mt-lg row  justify-around items-start content-start">
          <q-btn-dropdown dense label="Tipo">
            <q-list>
              <q-item v-close-popup v-for="type in types" :key="type.label">
                <q-checkbox
                  v-model="type.value"
                  :label="type.label"
                  color="gray"
                />
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-btn-dropdown dense label="Geração">
            <q-list>
              <q-item v-close-popup v-for="generation in generations" :key="generation.label">
                <q-checkbox
                  v-model="generation.value"
                  :label="generation.label"
                  color="gray"
                />
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-btn-dropdown dense label="Experiência">
            <q-list>
              <q-item v-close-popup v-for="item in types" :key="item.title">
                <q-checkbox
                  v-model="selection"
                  :label="item.title"
                  color="teal"
                />
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
        <div class="q-pa-md row items-start q-gutter-md justify-between">
          <div v-for="result in results" :key="result.image" class="" style="">
            <q-card class="my-card">
              <div class="card-image-arround" :style="result.color">
                <div :style="{'background-image': 'url(' + result.image + ')', 'background-repeat': 'no-repeat', 'width': '100%', 'height': '100%', 'background-attachment': 'static', 'background-position': '50%', 'background-size':'contain'}"></div>
              </div>
              <q-card-section style="position:relative; float: left; text-align:center">
               <div class="text-h6" style="position: absolute;">{{result.name}}</div>
             </q-card-section>
              <div class="specificationContainer">
                <div style="display: flex; justify-content:space-between; width: 100px;">
                  <div style="text-align:center;">
                  <div class="circle"> {{ result.attack }}</div>
                  <p>Ataque</p>
                </div>
                <div style="text-align:center;">
                  <div class="circle"> {{ result.defense }}</div>
                  <p>Defesa</p>
                  </div>
                </div>
                <div class="pokemonTypesContainer">
                  <div class="pokemonType" v-for="type in result.types" :key="type" :style="{ backgroundColor: '#'+type.color }"> {{ type.name }}</div>
                </div>
              </div>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
import { defineComponent } from 'vue';
import pokemonAspectsService from '../../../service/pokemon.aspects.service'
import pokemonFinderService from '../../../service/pokemon.finder.service'
import { animatedCounter } from '../../../tools/animatedCounter'
import { showLoading, hideLoading } from '../../../utils/loading'

export default defineComponent({
  name: 'PokedexPage',
  data() {
    return {
      query: '',
      types: [],
      generations: [],
      results: [],
      count: 0
    };
  },
  setup() {
    return {};
  },
  methods: {
    getPokemonTypes: async function () {
      const result = await pokemonAspectsService.getAllPokemonTypes()
      result.forEach((data) => {
        this.types.push({
          label: data,
          value: false,
        })
      })
    },
    getPokemonGenerations: async function () {
      const result = await pokemonAspectsService.getAllPokemonGenerations()
      result.forEach((data) => {
        this.generations.push({
          label: data,
          value: false,
        })
      })
    },
    setPokemonsCount: async function () {
      this.count = await pokemonAspectsService.getAllPokemonsCount()
      animatedCounter(this.count)
    },
    findPokemon: async function () {
      try {
        showLoading()
        const result = await pokemonFinderService.findPokemon('', this.query)
        if (result.length == 0) {
          this.results = await pokemonFinderService.getRandomPokemons(count, 8);
        } else {
          this.results = result
        }
        hideLoading()
      } catch (error) {
        hideLoading()
        this.query = ''
      }

    },
    getRandomPokemons: async function (count) {
      this.results = await pokemonFinderService.getRandomPokemons(count, 8);
    },
    getPokemonFromApi: async function () {
      const response = await api(false).get(`pokemon/ditto`)
      this.results = response
    },
    getPokemonFromAxios: async function () {
      this.count = await this.$axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
    }
  },
  async mounted() {
    showLoading()
    await this.setPokemonsCount();
    await this.getRandomPokemons(this.count);
    await this.getPokemonTypes();
    await this.getPokemonGenerations();
    hideLoading()
  },
});
</script>
<style lang="scss">
@import '../../../css/quasar.variables.scss';

.q-page {
  background-image: map-get($gradients, greyGradient);
}

.cards-container {
  margin-top: 50px;
}

.pokemon-cards img{
  width: 150px
}

.my-card {
  width: 365px;
  height: 160px;
  background-image: map-get($gradients, greyGradient);
}

.card-image-arround {
  width: 65%;
  height: 160px;
  position:relative;
  float:right;
}

.circle {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: white;
  border: 4px solid #212121;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pokemonType {
  border-radius: 10px;
  max-width:50px;
  text-align: center;
  min-width: 70px;
}

.pokemonTypesContainer {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    width: 150px;
    margin-top: -10px;
}

.specificationContainer {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  width: 160px;
  position:absolute;
  margin-top: 55px;
  margin-left: 10px;
}

</style>
