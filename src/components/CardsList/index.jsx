import { useEffect, useState } from 'react'
import BookCard from '../BookCard'
import styles from './CardsList.module.css'
import { searchBooks } from '../../utils/api'

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

  const handleSearch = async () => {
    try {
      const searchResult = await searchBooks(searchValue);
      setBooksList(mapBooks(searchResult));
      setError(false);
    } catch {
      setError(true);
    }
  }

  const handleKeyDown = (e) => {
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
          data-testid="search-button"
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