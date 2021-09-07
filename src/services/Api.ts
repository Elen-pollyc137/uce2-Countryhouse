import axios from 'axios';
import { getToken } from '../helpers/Cookies';
const URI = process.env.NEXT_PUBLIC_API as string;

export const getApiUrl = (path: string) => {
  console.log('***URI', URI + path);
  return 'https://countryhouse-sand.vercel.app' + path;
};

export const getHeaders = () => {
  const token = getToken() as string;
  if (!token) return {};

  return {
    Authorization: `Bearer ${token}`,
  };
};
export const apiGet = (path: string) => {
  const url = getApiUrl(path);

  console.log('*** url api', url);
  const options = {
    headers: getHeaders(),
  };
  return axios.get(url, options);
};

export const apiPost = (path: string, data: any) => {
  const url = getApiUrl(path);

  const options = { headers: getHeaders() };

  return axios.post(url, data, options);
};

export const apiPut = (path: string, data: any) => {
  const url = getApiUrl(path);

  const options = { headers: getHeaders() };

  return axios.put(url, data, options);
};

export const apiDelete = (path: string) => {
  const url = getApiUrl(path);

  const options = { headers: getHeaders() };

  return axios.delete(url, options);
};

export const apiFormData = (path: string, data: any) => {
  const url = getApiUrl(path);
  const token = getToken();
  const options = {
    headers: {
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': `multipart/form-data`,
      Authorization: `Bearer ${token}`,
    },
  };

  return axios.post(url, data, options);
};
export const apiFormDataPut = (path: string, data: any) => {
  const url = getApiUrl(path);
  const token = getToken();
  const options = {
    headers: {
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': `multipart/form-data`,
      Authorization: `Bearer ${token}`,
    },
  };

  return axios.put(url, data, options);
};
