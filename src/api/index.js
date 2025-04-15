
import axios from "axios";

const axiosConfig = {
  baseURL: "https://status.neuralgeneration.com/api/",
  timeout: 50000,
  headers: {}
};

const api = axios.create(axiosConfig);

const getCurrencies = async () => {
  try {
    const response = await api.get("currency");
    return response.data
  }
  catch(error) {
    console.error(error.response)
  };
}

export { getCurrencies };