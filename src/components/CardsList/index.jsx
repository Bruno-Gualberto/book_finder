import { useEffect, useState } from 'react'
import BookCard from '../BookCard'
import styles from './CardsList.module.css'

export default function CardsList ({ mostRelevantBooks }) {
  const [searchValue, setSearchValue] = useState('');
  const [booksList, setBooksList] = useState([]);
  const [error, setError] = useState(false);

  const mapBooks = books => books.items.map(item => item.volumeInfo)

  useEffect(() => {
    setBooksList(mapBooks(mostRelevantBooks))
  }, [])

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  }
// useQuery - react query
// swr

  const fetchData = async () => {
    const req = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&orderBy=relevance`);
    return await req.json();
  }

  const handleSearch = async () => {
    try {
      const searchResult = await fetchData();
      setBooksList(mapBooks(searchResult));
      setError(false);
    } catch {
      setError(true);
    }
  }

  const handleKeyDown = async (e) => {
    e.key === "Enter" ? handleSearch() : null;
  }

  return (
    <div>
      <div className={ styles.searchContainer }>
        <input 
          className={ styles.searchField }
          onChange={ handleChange } 
          onKeyDown={ handleKeyDown }
          value={ searchValue } 
          type='text'
          placeholder='Search for a book'
        />
        <button
          className={ styles.searchButton }
          onClick={ handleSearch }
        >
          Search
        </button>
      </div>
      { error ? 
          <p className={ styles.errorMessage }>Sorry, there's nothing to show</p>
        :
          (
            <div className={ styles.cardsContainer }>
              {
                booksList.map((bookData, index) => {
                  return <BookCard bookData={ bookData } key={ index }/>
                })
              }
            </div>
          )
      }
    </div>
  )
}