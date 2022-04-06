//@ts-nocheck
import axios from "axios";

export const api = () => {
  return axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`,
  });
};
