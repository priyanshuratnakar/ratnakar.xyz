import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Analytics } from '@vercel/analytics/react';


import { ChakraProvider } from "@chakra-ui/react";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>priyanshuratnakar.com</title>
        <link rel="shortcut icon" href="fav.png" />
        <meta property="og:title" content="Priyanshu Ratnakar" />
        <meta name="description" content="researcher, weaving threads as a modern day polymath" key="desc"/>
        <meta property="og:image" content="fav.png"/>
        <meta property="og:url" content="https://www.priyanshuratnakar.com"/>
        <meta property="og:type" content="website"/>

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="priyanshuratnakar.com/" key="twt-url" />
        <meta name="twitter:title" content="Priyanshu Ratnakar" key="twt-title" />
        <meta name="twitter:description" content="weaving threads as a modern day polymath" key="twt-desc" />
        <meta name="twitter:image" content="fav.png" key="twt-img"/>

      </Head>
      <Analytics />
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
