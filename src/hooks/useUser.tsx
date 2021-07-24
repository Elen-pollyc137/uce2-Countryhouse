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

type ISignIn = {
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
  } = useContext(AuthContext);

  async function userLogin({ email, password }: ISignIn) {
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

  // async function userResetPassword(data) {
  //   const response = await apiFormData(data);

  //   console.log(response);
  // }

  // function userLogout() {
  //   setError(false);
  //   setUser(null);
  //   setLoading(false);
  //   setOrderKey({ key: false, status: false });
  //   setOrderTransfer(false);
  //   setOrder(false);
  //   setListOrder([]);
  //   setUser(null);
  //   setLogin(false);
  //   removeCookieUser();
  //   removeToken();

  //   history.push("/");
  // }

  return {
    user,
    userLogin,
    login,
    // userLogout,
    loading,
    error,
    // userResetPassword,
    // setError,
  };
}
