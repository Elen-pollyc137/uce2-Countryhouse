import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import {
  apiDelete,
  apiFormData,
  apiFormDataPut,
  apiGet,
  apiPost,
} from '../services/Api';
import Router from 'next/router';
import {
  getCookUser,
  getToken,
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
  const [local, setLocal] = useState<any>(false);

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

    myLocal,
    setMyLocal,

    form,
    setForm,
  } = useContext(AuthContext);
  async function fetchLocal() {
    try {
      setLoading(true);
      setError(false);
      const { data } = await apiGet('/api/location');
      setMyLocal(data);
    } catch (error) {
      const { data, status } = await error.response;
      const { message } = await data;
      if (status === 500) {
        setError('Error servidor');
      }
      if (status === 401) {
        Router.push('/');
        setError(message);
      }
      setError(message);
    } finally {
      setLoading(false);
    }
  }
  async function fetchLocalEdit(body: any, id: string) {
    try {
      setLoading(true);
      setError(false);
      const formData = new FormData();

      formData.append('available', body === true ? '1' : '0');

      const { data } = await apiFormDataPut(`/api/${id}`, formData);
      setMessage('Alterado com sucesso!');
    } catch (err) {
      const { data, status } = await err.response;
      const { message } = await data;
      if (status === 500) {
        setError('Error servidor');
      }
      if (status === 401) {
        Router.push('/');
        setError(message);
      }

      setError(message);
    } finally {
      setLoading(false);
    }
  }
  async function fetchLocalDelete(id: string) {
    try {
      setLoading(true);
      setError(false);
      const { data } = await apiDelete(`/api/${id}`);
      data && setMessage('Deletado com sucesso!');
      fetchLocal();
    } catch (err) {
      const { data, status } = await err.response;
      const { message } = await data;
      if (status === 500) {
        setError('Error servidor');
      }
      if (status === 401) {
        Router.push('/');
        setError(message);
      }
      setLocal(false);

      setError(message);
    } finally {
      setLoading(false);
    }
  }
  async function fetchCreateLocal(body: any, lat: any, lng: any, file: any) {
    try {
      setLoading(true);
      setError(false);
      const formData = new FormData();
      formData.append('file', file.raw);
      formData.append('name', body.name);
      formData.append('description', body.description);
      formData.append('lat', lat?.toString() as string);
      formData.append('lng', lng?.toString() as string);
      formData.append('price', String(body.price) as string);
      formData.append('available', body.available === true ? '1' : '0');

      const { data } = await apiFormData('/api/file', formData);
      if (data) {
        fetchLocal();
        setMessage('Criado com sucesso!');
        setForm(false);
      }
    } catch (err) {
      const { data, status } = await err.response;
      const { message } = await data;
      if (status === 500) {
        setError('Error servidor');
      }
      if (status === 401) {
        Router.push('/');
        setError(message);
      }
      setError(message);
    } finally {
      setLoading(false);
    }
  }
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
      setMessage('Login efetuado com sucesso');
      Router.push('/register');
    } catch (error) {
      const { data, status } = await error.response;
      const { message } = await data;
      if (status === 500) {
        setError('Error servidor');
      }
      if (status === 401) {
        setError(message);
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
  function userLogout() {
    setError(false);
    setUser(null);
    setLoading(false);
    setLocal(false);
    setMyLocal(false);
    setUser(null);
    setLogin(false);
    removeCookUser();
    removeToken();
    Router.push('/');
  }

  async function AutoLogin() {
    if (getToken()) {
      try {
        setLoading(true);
        setError(false);
        const { data } = await apiGet('/api/location');
        setMyLocal(data);

        setUser(getCookUser());
        setLogin(true);
      } catch (error) {
        const { data, status } = await error.response;
        const { message } = await data;
        if (status === 500) {
          setError('Error servidor');
        }
        if (status === 401) {
          Router.push('/');
          userLogout();
          setError(message);
        }
        setError(message);
      } finally {
        setLoading(false);
      }
    }
  }

  useEffect(() => {
    AutoLogin();
    // eslint-disable-next-line
  }, []);

  return {
    user,
    userLogin,
    login,
    userLogout,
    // userLogout,
    loading,
    error,
    userCreate,
    message,
    setError,
    // userResetPassword,
    // setError,
    myLocal,
    fetchLocal,
    fetchLocalEdit,
    fetchLocalDelete,
    fetchCreateLocal,

    setLocal,
    local,

    setForm,
    form,
  };
}
