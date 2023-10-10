import axios from "axios";
import type {
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";

import { notFound } from "next/navigation";

// create axios
const service = axios.create({
  baseURL: process.env.HOST,
  timeout: 30000,
});

// add interceptors
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError) => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    console.log("error" + error); // for debug
    if (error.response!.status == 404) {
      notFound();
    } else {
      console.log(error);
    }
    return undefined;
  }
);

export default service;
