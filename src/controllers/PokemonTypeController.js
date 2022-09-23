import { exceptions } from "src/api/exceptions";
import queryService from "src/service/Query.service"
import { errorMessage } from "src/utils/messagens";

class PokemonTypeController {
  async getAllTypes () {
    try {
      console.log('to aqui')
      const response = await queryService.post({"query":"query samplePokeAPIquery {\n  generations: pokemon_v2_generation {\n    name\n    pokemon_species: pokemon_v2_pokemonspecies_aggregate {\n      aggregate {\n        count\n      }\n    }\n    pokemon_v2_types {\n      id,name\n    }\n  }\n}\n","variables":null,"operationName":"samplePokeAPIquery"});

      console.log(response)

      if (response !== null) {
        if (response.status === 200) {
          return {
            generations: response.data.generations.find(data => {
              if (data === 'pokemon_v2_types') {
                console.log(data)
              }
            })
          }
        } else {
          errorMessage(exceptions('Error ao carregar os tipos'))
          return null
        }
      } else {
        errorMessage(exceptions('Error ao carregar os tipos'))
        return null
      }
    } catch (error) {
      errorMessage(exceptions(error))
    }
  }
}

export default new PokemonTypeController()
