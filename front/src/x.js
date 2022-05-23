import axios from 'axios';


export default {
  get: (url, params) => {
    return axios.get("http://localhost:8000/api/v1/petshop/test", { params });
  }
}
