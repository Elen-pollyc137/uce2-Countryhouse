import '../styles/global.scss';
import { AppProps } from 'next/app';

import Header from '../components/Header';
import { AuthProvider } from '../contexts/AuthContext';
import Message from '../components/Message';
import Error from '../components/Error';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Header />
      <Message />
      <Error />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
