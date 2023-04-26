import { useState } from 'react'
import BookCard from '../BookCard'
import styles from './CardsList.module.css'

export default function CardsList () {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  }

  const handleSearch = () => {
    console.log(searchValue);
  }

  return (
    <div>
      <div className={styles.searchContainer}>
        <input 
          className={styles.searchField}
          onChange={handleChange} 
          value={searchValue} 
          type='text'
          placeholder='Search for a book'
        />
        <button
          className={styles.searchButton}
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className={styles.cardsContainer}>
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </div>
  )
}