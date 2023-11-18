import axios from "axios" 
const request = axios.create()


request.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
}

request.defaults.timeout = 10000

export const httpClientRequest = Object.freeze({
  get: async (URL, payload) => {
    try { 
      const response = await axios.get(`${URL}`, payload) 
      return response.data
    } catch (error) {
      console.info(`Error on Get request: ${URL}, ${error}`) 
    }
  }, 
  post: async (URL, payload) => {
    try { 
      const response = await axios.post(`${URL}`, payload) 
      return response.data
    } catch (error) {
      console.info(`Error on POST request: ${URL}, ${error}`) 
    }
  }
})

 