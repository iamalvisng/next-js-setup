import type { AppProps } from 'next/app';
import GlobalStyles from '../components/GlobalStyles';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <GlobalStyles />
      <Component {...pageProps} />
    </div>
  );
}
export default App;
