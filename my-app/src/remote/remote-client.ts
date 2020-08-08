import axios from 'axios'
import { environment } from './environment'


export const reduxClient = axios.create({
    baseURL:environment.webflicksBaseUrl, //the base network address with no URI's on 
    headers:
    {
        'Content-Type': 'application/json'
    },
    withCredentials:true
})