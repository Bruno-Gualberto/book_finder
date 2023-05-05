import styles from './BookCard.module.css'
import Image from 'next/image'

export default function BookCard({bookData}) {
  const {title, authors, imageLinks, infoLink, publishedDate, publisher} = bookData;

  const handleInfos = (info, fallbackStr) => info ? info : fallbackStr;

  const handleAuthors = authors => {
    let authorsList = '';
    authors && authors.map((author, index) => {
      index === authors.length - 1 ? 
      authorsList += `${author}`
      :
      authorsList += `${author}, `;
    });

    return (
      authors ? (
      <p>
        <b>{authors.length - 1 > 0 ? 'Authors: ' : 'Author: '}</b>{ authorsList }
      </p>
      ) : (
        <p><b>Author: </b>No author available</p>
      )
    )
  }

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.card__content}>
        <Image
          src={ imageLinks && 
            handleInfos(imageLinks.thumbnail, '/images/book.png') 
          }
          alt='book cover'
          width={150}
          height={150}
          className={styles.book__image}
        />
        <div>
          { handleAuthors(authors) }

          <p>
            <b>Publisher:</b> { handleInfos(publisher, 'No publisher available') }
          </p>

          <p>
            <b>Published:</b> { handleInfos(publishedDate, 'No published date available') }
          </p>

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