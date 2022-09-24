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

const api = (isQuery) => {
  console.log(isQuery)
  console.log(process.env.API + '/pokemon/')
  return axios.create({
    baseURL: isQuery ? process.env.POKEAPI : process.env.API,
    headers: isQuery ? pokeHeaders : apiheaders,

    validateStatus: (status) => {
      console.log(status)
      if (status !== 200) {
        console.log('Erro ao acessar a API')
      }
    }
  })
}


export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api
})

export { api }
