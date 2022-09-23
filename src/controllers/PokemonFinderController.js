import { exceptions } from "src/api/exceptions";
import queryService from "src/service/Query.service"
import { errorMessage } from "src/utils/messagens";

class PokemonFinderController {
  async findPokemon (data) {
    try {
      console.log('to aqui')
      const response = await queryService.get(data)
      return response

    } catch (error) {
      errorMessage(exceptions(error))
    }
  }
}

export default new PokemonFinderController()
