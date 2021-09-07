import { NextPage } from 'next';
import React from 'react';
import Head from 'next/head'
import pages from '../constants/pages';

export interface PageProps {
  page: typeof pages[number]
}

const HomePage: NextPage<PageProps> = ({ page }) => (
  <>
    <Head>
      <title>Solla Dev</title>
      <meta name="description" content={`Solla dev home ${page} page`} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1>{page}</h1>
  </>
)

export default HomePage;

export async function getStaticPaths() {
  return { paths: pages.map(page => ({ params: { page } })), fallback: false }
}

export interface HomePageStaticProps {
  params: {
    page: typeof pages[number]
  }
}

export async function getStaticProps({ params: { page } }: HomePageStaticProps) {
  return { props: { page } }
}