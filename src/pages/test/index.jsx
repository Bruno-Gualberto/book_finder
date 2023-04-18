import Link from 'next/link'
import Head from 'next/head';
import Layout from '../../components/layout';

export default function Testing() {
  return (
    <Layout>
      <Head>
        <title>Testing page</title>
      </Head>
      <div>
        <h1>I'm the Testing Component!!</h1>
        <Link href="/" >Take me Home!</Link>
      </div>
    </Layout>
  )
}