//@ts-nocheck
import axios from "axios";

export const api = () => {
  const token = window?.localStorage?.getItem("auth")

  return axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`,
    headers: {
      Authorization: token ? token : ''
    }
  });
};
