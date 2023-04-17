import styles from "./Input.module.css"

export default function Input(props) {
  

  return (
    <div className={styles.container}>
      <label htmlFor={props.name ? props.name : ''}>{props.text ? props.text : ''}</label>
      <input {...props} />
    </div>
  )
}
