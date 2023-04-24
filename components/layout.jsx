import Navbar from "./Navbar"
import Footer from "./Footer"
import styles from "./Layout.module.css"

export default function Layout({children}) {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
