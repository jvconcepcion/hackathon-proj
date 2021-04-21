import React from 'react';
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {

  MyApp.getInitialProps = async ({ Component, ctx }) => {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return { pageProps };
  }

  return <Component {...pageProps} />
}

export default MyApp
