import { NextPage } from 'next';
import React from 'react';
import Head from 'next/head'
import pages from '../../constants/pages';

export interface PortalPageProps {
  page: typeof pages[number]
}

const PortalPage: NextPage<PortalPageProps> = ({ page }) => (
  <>
    <Head>
      <title>Solla Dev</title>
      <meta name="description" content={`Solla dev portal ${page} page`} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1>{page}</h1>
  </>
)

export default PortalPage;

export async function getStaticPaths() {
  return { paths: pages.map(page => ({ params: { page } })), fallback: false }
}

export interface PortalPageStaticProps {
  params: {
    page: typeof pages[number]
  }
}

export async function getStaticProps({ params: { page } }: PortalPageStaticProps) {
  return { props: { page } }
}