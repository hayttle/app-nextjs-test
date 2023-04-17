import styles from "./Input.module.css"

export default function Input({text, type, value, placeholder}) {
  return (
    <div className={styles.container}>
      <label htmlFor={text}>{text}</label>
      <input name={text} type={type} value={value} placeholder={placeholder} />
    </div>
  )
}
