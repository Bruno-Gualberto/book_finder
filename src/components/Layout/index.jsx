import styles from './Layout.module.css';
import Header from '../Header';
import Footer from '../Footer';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className={styles.container}>
        {children}
      </div>
      <Footer />
    </>
  );
}