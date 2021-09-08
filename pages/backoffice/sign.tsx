import React from 'react';
import type { NextPage } from 'next'
import Head from 'next/head';

const Sign: NextPage = () => (
  <>
    <Head>
      <title>Solla Dev</title>
      <meta name="description" content="Solla dev backoffice sign page" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <input></input>
      <button>Sign In</button>
    </main>
  </>
)

export default Sign