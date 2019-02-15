import axios from 'axios';

const baseURL = 'https://min-api.cryptocompare.com/';

let api = {};

api.get = async(endpoint) => {
    const response =  await axios.get(baseURL + endpoint);
    return response.data;
};


  export default api;
