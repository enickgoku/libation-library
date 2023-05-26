import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  results: T[];
}

const axiosInstace = axios.create({
  baseURL: "http://localhost:5001",
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
}

export default APIClient;
