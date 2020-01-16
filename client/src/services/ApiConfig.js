import Axios from 'axios'

const Api = Axios.create({
  baseURL: 'https://daisywheel.herokuapp.com/'
})

export default Api