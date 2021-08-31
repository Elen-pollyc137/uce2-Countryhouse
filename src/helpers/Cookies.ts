import { CookieGetOptions } from 'universal-cookie';
import { getCookie, removeCookie, setCookie } from './Store';
type IOptions = {
  expires: Date;
};
const expires = new Date();
expires.setFullYear(expires.getFullYear() + 1);

const options = { expires } as CookieGetOptions;
const optionsExpires: IOptions = { expires };

export const COOKIE_USER = 'user_next';
export const COOKIE_TOKEN = 'tk_netx';

export const setCookUser = (account: any) => {
  setCookie(COOKIE_USER, account, optionsExpires);
};
export const getCookUser = () => {
  return getCookie(COOKIE_USER, options);
};
export const removeCookUser = () => removeCookie(COOKIE_USER, optionsExpires);

export const setToken = (token: string) =>
  setCookie(COOKIE_TOKEN, token, optionsExpires);
export const getToken = () => getCookie(COOKIE_TOKEN, options);
export const removeToken = () => removeCookie(COOKIE_TOKEN, optionsExpires);
