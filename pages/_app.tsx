import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "../components/Layout/Layout";
import NProgress from 'nprogress';
import { Router } from "next/router";
import Head from "next/head";

function MyApp({Component, pageProps}: AppProps) {
    NProgress.configure({ showSpinner: false });

    Router.events.on('routeChangeStart', () => {
        NProgress.start();
    });

    Router.events.on('routeChangeComplete', () => {
        NProgress.done();
    });
    return (
        <>
            <Head>

            </Head>
            <ChakraProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ChakraProvider>
        </>
    )
}

export default MyApp
