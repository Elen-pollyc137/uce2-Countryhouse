import '../styles/global.scss';
import { AppProps } from 'next/app';
<<<<<<< HEAD
import  Header  from '../components/Header';
=======
import Header from '../components/Header';
>>>>>>> dev-heberth
import { AuthProvider } from '../contexts/AuthContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Header />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
