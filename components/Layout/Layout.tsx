import * as React from 'react';
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";

type Props = {
    children: JSX.Element;
};

export function Layout(props: Props) {
    return (
        <>
            <Head>
                <title>Real Estate</title>
            </Head>
            <Box maxWidth={'1280px'} m={'auto'}>
                <header>
                    <Navbar/>
                </header>
                <main>
                    {props.children}
                </main>
                <footer>
                    <Footer/>
                </footer>
            </Box>
        </>
    );
};