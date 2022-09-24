import { exceptions } from "src/api/exceptions";
import queryService from "src/service/Query.service"
import { errorMessage } from "src/utils/messagens";

class PokemonFinderController {
  async findPokemon (data) {
    try {
      const response = await queryService.get(data)
      console.log(response)
      return response

    } catch (error) {
      console.log(error)
      errorMessage(error)
    }
  }
}

export default new PokemonFinderController()
