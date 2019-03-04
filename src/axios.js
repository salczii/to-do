import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://todo-18fae.firebaseio.com/'
})

export default instance