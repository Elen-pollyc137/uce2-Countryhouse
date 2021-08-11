import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { apiFormData, apiPost } from '../services/Api';
import Router from 'next/router';
import {
  setCookUser,
  setToken,
  removeToken,
  removeCookUser,
} from '../helpers/Cookies';

type ICreate = {
  email: string;
  password: string;
  name: string;
  phone: string;
  passwordConfirm: string;
};
type ILogin = {
  email: string;
  password: string;
};

export function useUser() {
  const {
    user,
    setUser,

    login,
    setLogin,

    loading,
    setLoading,

    error,
    setError,

    message,
    setMessage,
  } = useContext(AuthContext);

  async function userLogin({ email, password }: ILogin) {
    try {
      setLoading(true);
      setError(false);
      const { data } = await apiPost('/api/login', {
        email,
        password,
      });

      const { user, token } = await data;

      setLogin(true);
      setUser(user);
      setToken(token);
      setCookUser(user);

      Router.push('/register');
    } catch (error) {
      const { data, status } = await error.response;
      const { message } = await data;
      if (status === 500) {
        setError('Error servidor');
      }

      setError(message);
    } finally {
      setLoading(false);
    }
  }
  async function userCreate({
    email,
    password,
    phone,
    name,
    passwordConfirm,
  }: ICreate) {
    try {
      setLoading(true);
      setError(false);
      setMessage(false);

      const { data } = await apiPost('/api/create', {
        email,
        password,
        passwordConfirm,
        name,
        phone,
      });
      const { message } = await data;
      setMessage(message);
      setTimeout(() => {
        Router.push('/');
      }, 4000);
    } catch (error) {
      const { data, status } = await error.response;
      const { message } = await data;
      if (status === 500) {
        setError('Error servidor');
      }

      setError(message);
    } finally {
      setLoading(false);
    }
  }

  return {
    user,
    userLogin,
    login,
    // userLogout,
    loading,
    error,
    userCreate,
    message,
    // userResetPassword,
    // setError,
  };
}
