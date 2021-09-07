import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Solla Dev</title>
        <meta name="description" content="Solla dev home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
    </>
  )
}

export default Home
