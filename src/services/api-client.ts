import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ff0ed9a8b4a044c8a61dcd3d4e38a49f"
  }
});