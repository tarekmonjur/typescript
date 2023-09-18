import type { ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { wrapper } from './../store/store';
import Layout from './layout';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, ...pageProps }: AppPropsWithLayout) {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...props.pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;

// export default wrapper.withRedux(MyApp);

// perpage layout
// export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
//   // Use the layout defined at the page level, if available
//   const getLayout = Component.getLayout ?? ((page) => page)

//   return getLayout(<Component {...pageProps} />)
// }
