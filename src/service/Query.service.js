import { api } from "src/boot/axios";

class QueryService {
  async post (data) {
    const instance = api(true)
    const response = await instance.post('', data)

    return response;
  }

  async get (query) {
    const instance = api(false)
    const response = await instance.get('/pokemon/' + query, {})

    return response;
  }
}

export default new QueryService();
