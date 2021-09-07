import React from 'react';
import Head from 'next/head'
import Drawer from '../../components/Drawer';
import { NextPage } from 'next';

const Dashboard: NextPage = () => (
  <>
    <Head>
      <title>Solla Dev</title>
      <meta name="description" content="Solla dev portal page" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Drawer />
  </>
);

export default Dashboard;