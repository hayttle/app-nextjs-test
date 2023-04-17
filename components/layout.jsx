import Navbar from './navbar' 
import Footer from './footer' 
import styles from './Layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  )
}