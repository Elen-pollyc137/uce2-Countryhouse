import axios from 'axios';
import { getToken } from '../helpers/Cookies';

export const getApiUrl = (path: string) => {
  return `http://localhost:3000${path}`;
};

export const getheaders = () => {
  const token = getToken();
  if (!token) return {};

  return {
    Authorization: `Bearer ${token}`,
  };
};
export const apiGet = (path: string) => {
  const url = getApiUrl(path);
  const options = {
    headers: getheaders(),
  };
  return axios.get(url, options);
};

export const apiPost = (path: string, data: any) => {
  const url = getApiUrl(path);

  const options = { headers: getheaders() };

  return axios.post(url, data, options);
};

export const apiFormData = (path: string, data: any) => {
  const url = getApiUrl(path);
  const token = getToken();
  const options = {
    headers: {
      'Content-Type': `multipart/form-data`,
      Authorization: `Bearer ${token}`,
    },
  };

  return axios.post(url, data, options);
};
