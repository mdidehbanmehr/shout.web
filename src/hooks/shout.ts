import { useQuery } from "react-query";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
// import * as dotenv from "dotenv";


interface Response {
  id: number;
  email: string;
  author: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

// dotenv.config();
const API = axios.create({
  baseURL: process.env.REACT_APP_API_PATH,
  timeout: 10000,
});

const get = async <REQ, RES = undefined>(
  url: string,
  config?: AxiosRequestConfig | undefined
): Promise<AxiosResponse<RES>> => {
  return await API.get<REQ, AxiosResponse<RES>>(url, config);
};

const getShouts = async () => {
  const url = "shout";
  const { data }: { data: Response[] } = await get(url, {});
  console.log(data)
  return data;
};


export const useGetShouts = () => {
    console.log(process.env.REACT_APP_API_PATH)
    return useQuery(["getResturants",], () =>
      getShouts()
    );
  };
