import { boot } from 'quasar/wrappers'
import axios from 'axios'

const apiheaders = {
  'Content-Type':'application/json',
  'Access-Control-Allow-Origin': '*'
}

const api = () => {
  return axios.create({
    baseURL: process.env.API,
    headers: apiheaders,
    responseType: 'json',

    validateStatus: (status) => {
      console.log(status)
      if (status === 200) {
        return true
      }
    }
  })
}

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api
})

export { api }
