import axios from "axios";
import { API_ENDPOINT } from "../constants";

export const fetcher = (url: string) =>
  axios.get(`${API_ENDPOINT}/api${url}`).then((res) => res.data);
