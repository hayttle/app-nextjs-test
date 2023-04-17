import styles from "./Button.module.css"

export default function Button({text, type}) {
  return <button className={styles.btn} type={type}>{text}</button>
}
