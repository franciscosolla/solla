import type { NextPage } from 'next'
import Head from 'next/head'
import AuthGuard from '../../services/authentication/AuthGuard'

const Backoffice: NextPage = () => (
  <AuthGuard reroute="/backoffice/sign">
    <Head>
      <title>Solla Dev</title>
      <meta name="description" content="Solla dev portal page" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <h1>Backoffice</h1>
    </main>
  </AuthGuard>
)

export default Backoffice
