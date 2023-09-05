import styles from './SearchBar.module.css'

export default function SearchBar() {
  return (
    <div>
      <div className={ styles.searchContainer }>
        <input 
          className={ styles.searchField }
          // onChange={ handleChange } 
          // onKeyDown={ handleKeyDown }
          // value={ searchValue } 
          type='text'
          placeholder='Search for a book'
        />
        <button
          data-testid="search-button"
          className={ styles.searchButton }
          // onClick={ handleSearch }
        >
          Search
        </button>
      </div>
    </div>
  )
}