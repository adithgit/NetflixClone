import axios from 'axios'
import {url} from './../constants/constants';
const instance = axios.create({
    baseURL : url
});

  export default instance;