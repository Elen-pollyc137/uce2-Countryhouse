import Cookies, { CookieGetOptions } from 'universal-cookie';
type IOptions = {
  expires: Date;
};

type IDefaultOptions = {
  path: string;
};

const cookie = new Cookies();

const defaultOptions: IDefaultOptions = {
  path: '/',
};
export const getCookie = (
  name: string,
  options?: CookieGetOptions | undefined
) => {
  if (!name) return null;

  return cookie.get(name, {
    ...defaultOptions,
    ...options,
  });
};
export const setCookie = (name: string, value: string, options: IOptions) => {
  if (!name || value === undefined) return null;

  cookie.set(name, value, { ...defaultOptions, ...options });

  return true;
};
export const removeCookie = (name: string, options: IOptions) => {
  if (!name) return null;
  cookie.remove(name, { ...defaultOptions, ...options });
};
