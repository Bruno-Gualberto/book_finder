import Head from 'next/head'
import Layout from '../components/Layout';
import CardsList from '../components/CardsList';

export default function Home() {
  return (
    <>
      <Head>
        <title>Book finder</title>
        <meta name="description" content="Book finder, to find any book" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <CardsList />
      </Layout>
    </>
  )
}