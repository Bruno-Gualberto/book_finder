import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link';
import Layout from '../components/Layout';

const inter = Inter({ subsets: ['latin'] })

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
        <div>
          bla bla
        </div>
        <div style={{backgroundColor: 'lightcoral'}}>
          more bla bla
        </div>
      </Layout>
    </>
  )
}
