import Head from "next/head";

import type { AppProps } from "next/app";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MercadoFree - Sin comisiones</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content="MercadoFree" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
