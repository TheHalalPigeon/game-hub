import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance =  axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ff0ed9a8b4a044c8a61dcd3d4e38a49f"
  }
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then(res => res.data);
  }

  get = (id: number | string) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint + "/" + id)
      .then(res => res.data);
  }
}

export default APIClient;