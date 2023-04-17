import styles from "./Navbar.module.css"
import Link from "next/link"

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/signup">Registrar</Link>
        </li>
      </ul>
    </div>
  )
}
