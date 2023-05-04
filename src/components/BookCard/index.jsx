import styles from './BookCard.module.css'
import Image from 'next/image'

export default function BookCard({bookData}) {
  const {title, authors, imageLinks, infoLink, publishedDate, publisher} = bookData;

  const handleAuthors = authors => {
    let authorsList = '';
    authors.map((author, index) => {
      index === authors.length - 1 ? 
      authorsList += `${author}`
      :
      authorsList += `${author}, `;
    })
    return authorsList;
  }

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.card__content}>
        <Image
          src={imageLinks ? imageLinks.thumbnail : '/images/book.png'}
          alt='book cover'
          width={150}
          height={150}
          className={styles.book__image}
        />
        <div>
          { authors.length - 1 > 0 ? 
            <p><b>Authors:</b> {handleAuthors(authors)}</p> 
            :
            <p><b>Author:</b> {handleAuthors(authors)}</p> 
          }
          <p><b>Publisher:</b> {publisher ? publisher : 'No publisher available'}</p>
          <p><b>Published:</b> {publishedDate ? publishedDate : 'No published date available'}</p>
          { infoLink ? 
            <a href={infoLink} target="_blank">Read more about this book</a>
            :
            null
          }
        </div>
      </div>
    </div>
  )
}