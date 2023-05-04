import { useState } from 'react'
import BookCard from '../BookCard'
import styles from './CardsList.module.css'

export default function CardsList () {
  const [searchValue, setSearchValue] = useState('');
  const [booksList, setBooksList] = useState([]);


  const handleChange = (e) => {
    setSearchValue(e.target.value);
  }
// useQuery - react query
// swr

  const handleSearch = async () => {
    const req = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&orderBy=relevance`);
    const searchResult = await req.json();

    const booksInfo = searchResult.items.map(item => {
      return item.volumeInfo;
    })

    setBooksList(booksInfo);
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
        {booksList.length ? 
          booksList.map((bookData, index) => {
            return <BookCard bookData={bookData} key={index}/>
          })
          :
          null
        }
      </div>
    </div>
  )
}