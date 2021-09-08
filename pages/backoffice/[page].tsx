import { NextPage } from 'next';
import React from 'react';
import Head from 'next/head'
import pages from '../../constants/pages';
import AuthGuard from '../../services/authentication/AuthGuard';

export interface PortalPageProps {
  page: typeof pages[number]
}

const Page: NextPage<PortalPageProps> = ({ page }) => (
  <AuthGuard reroute="/backoffice/sign">
    <Head>
      <title>Solla Dev</title>
      <meta name="description" content={`Solla dev portal ${page} page`} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1>{page}</h1>
  </AuthGuard>
)

export default Page;

export async function getStaticPaths() {
  return { paths: pages.map(page => ({ params: { page } })), fallback: false }
}

export interface PageStaticProps {
  params: {
    page: typeof pages[number]
  }
}

export async function getStaticProps({ params: { page } }: PageStaticProps) {
  return { props: { page } }
}