import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import GlobalStyles from '../components/GlobalStyles';
import store from '../redux/store';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div>
        <GlobalStyles />
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}
export default App;
