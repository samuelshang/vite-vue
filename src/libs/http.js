import axios from 'axios'
import {APP_KEYS} from './configs/keys'

function axiosGet(options){

    axios(options.url + '?key=' + APP_KEYS)
      .then((res) => {
        options.success(res)
      })
      .catch((err) => {
        options.error(err)
      })
    
}
export {
    axiosGet
}