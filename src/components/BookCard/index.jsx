import styles from './BookCard.module.css'
import Image from 'next/image'

export default function BookCard() {
  return (
    <div className={styles.card}>
      <h1>The Lord of the Rings</h1>
      <div className={styles.card__content}>
        <Image
          src="/images/book.jpg"
          alt='book cover'
          width={150}
          height={400}
          className={styles.book__image}
        />
        <div>
          <p><b>Author:</b> Tolkien</p>
          <p><b>Description:</b> This is an awesome book that you would love to read!</p>
          <p><b>Published:</b> March 8th, 1927</p>
        </div>
      </div>
    </div>
  )
}