import { api } from '../boot/axios'
import { formatName, formatRomanNumbers } from 'src/tools/formatStrings'

class PokemonAspectsService {

  async getAllPokemonTypes () {
    const instance = api ()
    return await instance.get(`type`)
    .then((response) => {
      if (response.status === 200) {
        const types = []
        response.data.results.forEach((data) => {
          types.push(formatName(data.name));
        })

        return types
      }
    })
  }

  async getAllPokemonGenerations () {
    const instance = api ()
    return await instance.get(`generation`)
    .then((response) => {
      if (response.status === 200) {
        const generations = []
        response.data.results.forEach((data) => {
          generations.push(formatRomanNumbers(data.name));
        })

        return generations
      }
    })
  }

  async getAllPokemonsCount () {
    const instance = api ()
    return await instance.get(`pokemon`)
    .then((result) => {
      let count = 800
      if (result.status === 200) {
        if (result.data.count) {
          count = result.data.count
        }
      }

      return count
    })
  }

  async findPokemon (query) {
    const instance = api()
    return await instance.get(`pokemon/${query}`);
  }
}

export default new PokemonAspectsService();
