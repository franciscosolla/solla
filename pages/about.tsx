import React from 'react';
import { NextPage } from 'next/types/index';
import Head from 'next/head'

import Page from '../components/Page';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

const About: NextPage = () => (
  <Page>
    <Head>
      <title>Solla - About</title>
      <meta name="description" content="About Solla" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <Main>

    </Main>
    <Footer />
  </Page>
)

export default About