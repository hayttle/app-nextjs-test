import styles from "./LayoutCardSignIn.module.css"

export default function LayoutCardSignIn({children}) {
  return (
    <div className={styles.container}>
      <main>{children}</main>
    </div>
  )
}
