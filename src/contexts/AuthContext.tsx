import { createContext, useState } from 'react';

type IUser = {
  name: string;
} | null;
type IError = string | boolean;

type IAuthProvider = {
  user: IUser | boolean;
  setUser: (user: IUser) => void;
  login: boolean;
  setLogin: (status: boolean) => void;

  loading: boolean;
  setLoading: (status: boolean) => void;

  error: IError;
  setError: (status: IError) => void;
};

export const AuthContext = createContext({} as IAuthProvider);

const { Provider } = AuthContext;

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<IUser>(null);
  const [login, setLogin] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<IError>(false);
  if (error) {
    setTimeout(() => {
      setError(false);
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
      }}
    >
      {children}
    </Provider>
  );
}
