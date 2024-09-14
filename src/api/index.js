// import store from "@/store";
import axios from "axios";

const axiosConfig = {
  baseURL: "https://status.neuralgeneration.com/api/",
  timeout: 50000,
  headers: {}
};

const api = axios.create(axiosConfig);

const getCurrencies = () => {
  const options = {
    method: "GET",
    url: "currency"
  }
  api(options).then((response) => {
    // this.$set(row, 'amount', response.data.payload.prices.amount)
  })
  .catch((error) => {
    console.error(error.response)
  })
}

export default api;