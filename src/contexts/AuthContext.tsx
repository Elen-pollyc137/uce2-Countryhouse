import { createContext, useState } from 'react';

type IUser = {
  name: string;
} | null;
type IError = string | boolean;

type IMessage = string | boolean;
type IAuthProvider = {
  user: IUser;
  setUser: (user: IUser) => void;
  login: boolean;
  setLogin: (status: boolean) => void;

  loading: boolean;
  setLoading: (status: boolean) => void;

  error: IError;
  setError: (status: IError) => void;

  message: IMessage;
  setMessage: (status: IMessage) => void;

  myLocal: any;
  setMyLocal: (status: any) => void;

  form: any;
  setForm: (status: any) => void;
};

export const AuthContext = createContext({} as IAuthProvider);

const { Provider } = AuthContext;

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<IUser>(null);
  const [login, setLogin] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<IError>(false);
  const [message, setMessage] = useState<IMessage>(false);
  const [myLocal, setMyLocal] = useState<any>(false);
  const [form, setForm] = useState<boolean>(false);

  if (error || message) {
    setTimeout(() => {
      setError(false);
      setMessage(false);
    }, 4000);
  }

  return (
    <Provider
      value={{
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
      }}
    >
      {children}
    </Provider>
  );
}
