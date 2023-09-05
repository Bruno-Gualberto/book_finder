import Head from 'next/head'
import Layout from '../components/Layout';
import CardsList from '../components/CardsList';
import SearchBar from '../components/SearchBar'

function Home({ mostRelevantBooks }) {
  return (
    <>
      <Head>
        <title>Book finder</title>
        <meta name="description" content="Book finder, to find any book" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1>Book finder</h1>
        <SearchBar />
        <CardsList mostRelevantBooks={ mostRelevantBooks }/>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes?&q=aorderBy=relevance`);
  const mostRelevantBooks = await res.json();

  return {
    props: { 
      mostRelevantBooks
    }
  }
}

export default Home;