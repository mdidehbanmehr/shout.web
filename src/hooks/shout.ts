import { useQuery } from "react-query";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
// import * as dotenv from "dotenv";

interface Shout {
  id: number;
  profilePicture: string,
  email: string;
  author: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

interface User {
  name: string;
  email: string;
  avatar: string;
}

interface CreateShoutParams {
  email: string;
  profilePicture: string,
  author: string;
  message: string;
}

// dotenv.config();
const API = axios.create({
  baseURL: process.env.REACT_APP_API_PATH,
  timeout: 10000,
  withCredentials: true,
});

const get = async <REQ, RES = undefined>(
  url: string,
  config?: AxiosRequestConfig | undefined
): Promise<AxiosResponse<RES>> => {
  return await API.get<REQ, AxiosResponse<RES>>(url, config);
};

const post = async <REQ, RES = undefined>(
  url: string,
  data?: CreateShoutParams | undefined
): Promise<AxiosResponse<RES>> => {
  return await API.post<REQ, AxiosResponse<RES>>(url, data);
};

const getShouts = async () => {
  const url = "shout";
  const { data }: { data: Shout[] } = await get(url, {});
  return data;
};

export const useGetShouts = (change: Boolean) => {
  return useQuery([change], () => getShouts());
};

const postShout = async (params: CreateShoutParams) => {
  const url = "shout";
  const { data }: { data: Shout[] } = await post(url, params);
  return data;
};

export const submitShouts = (params: CreateShoutParams) => {
  return postShout(params);
};

export const googleLogin = async () => {
  const url = API.defaults.baseURL + "login";
  window.open(url, "_blank");
};

export const useGetUser = () => {
  return useQuery([googleLogin], () => getUser());
};

const getUser = async () => {
  const url = "get-user";
  const { data }: { data: User } = await get(url, {});
  return data;
};