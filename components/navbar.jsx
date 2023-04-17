import styles from "./Navbar.module.css"
import Link from "next/link"

export default function Navbar() {
  return (
    <div className={styles.container}>
      <h2>LOGO</h2>
      <ul className={styles.navbar}>
        <li>
          <Link href="/">Dashboard</Link>
        </li>
        <li>
          <Link href="/signin">Login</Link>
        </li>
        <li>
          <Link href="/signup">Cadastro</Link>
        </li>
        <li>
          <Link href="/about">Sobre</Link>
        </li>
      </ul>
    </div>
  )
}
