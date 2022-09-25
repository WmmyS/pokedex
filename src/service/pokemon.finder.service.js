import { api } from '../boot/axios'
import { formatName, formatRomanNumbers } from 'src/tools/formatStrings'
import { LocalStorage } from 'quasar'
import pokemonAspectsService from './pokemon.aspects.service'

class PokemonFinderService {

  async findPokemon (aspects, pokemonName ) {
    const instance = api()
    return await instance.get(`pokemon/${pokemonName.toLowerCase()}`)
    .then((response) => {
      if (response.status === 200) {
        const pokemonCards = []
        const types = []
        response.data.types.forEach(element => {
          types.push(element.type.name)
        });
        const pokemonCard = {
          name: response.data.forms[0].name,
          attack: response.data.stats.find(data => data.stat.name === 'attack').base_stat,
          defense: response.data.stats.find(data => data.stat.name === 'defense').base_stat,
          image: response.data.sprites.other.dream_world.front_default,
          types: types
        }
        pokemonCards.push(pokemonCard)
        return pokemonCards
      } else {
        console.log('aqui 2')
        return LocalStorage.get.item('initalCards')
      }
    })
  }

  async getRandomPokemons (pokemonMaxCount, quantity) {
    if (LocalStorage.getItem('initalCards') === null) {
      const instance = api()
    const pokemonCards = []
    for (let index = 0; index <= quantity; index++ ) {
      await instance.get(`pokemon/${Math.ceil(Math.random() * ((pokemonMaxCount - 249) - 1) + 1)}`)
      .then((response) => {
        if (response.status === 200) {
          const types = []
          response.data.types.forEach(element => {
            types.push(element.type.name)
          });
          const pokemonCard = {
            name: response.data.forms[0].name,
            attack: response.data.stats.find(data => data.stat.name === 'attack').base_stat,
            defense: response.data.stats.find(data => data.stat.name === 'defense').base_stat,
            image: response.data.sprites.other.dream_world.front_default,
            types: types
          }
          pokemonCards.push(pokemonCard)
        }
      })
    }
    LocalStorage.set('initalCards', pokemonCards)
    return pokemonCards
    } else {
      return LocalStorage.getItem('initalCards')
    }
  }
}

export default new PokemonFinderService();
