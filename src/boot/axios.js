import { boot } from 'quasar/wrappers'
import axios from 'axios'

const pokeHeaders = {
  'Content-Type':'application/json',
  'X-Method-Used':'graphiql',
  'Access-Control-Allow-Origin': '*'
}

const apiheaders = {
  'Content-Type':'application/json',
  'Access-Control-Allow-Origin': '*'
}

const api = async function execute (isQuery) {
  console.log(isQuery)
  console.log(pokeHeaders)
  console.log(apiheaders)
  return axios.create({
    baseURL: isQuery ? process.env.POKEAPI : process.env.API,
    headers: isQuery ? pokeHeaders : apiheaders,

    validateStatus: (status) => {
      console.log(status)
      if (status === 401) {
        console.log('Erro ao acessar a API')
      } else {
        return status <= 550
      }
    }
  })
}


export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { api }
