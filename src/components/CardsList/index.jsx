import BookCard from '../BookCard'
import styles from './CardsList.module.css'

export default function CardsList () {
  return (
    <div>
      <input type="text" />
      <div className={styles.cards__container}>
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