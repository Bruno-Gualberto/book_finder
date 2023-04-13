import Link from 'next/link'
import Head from 'next/head';

export default function Testing() {
  return (
    <>
      <Head>
        <title>Testing page</title>
      </Head>
      <div>
        <h1>I'm the Testing Component!!</h1>
        <Link href="/" >Take me Home!</Link>
      </div>
    </>
  )
}