import styles from './select.module.css'

export default function Select(props) {
  return (
    <div className={styles.container}>
      <label htmlFor={props.name ? props.name : ''}>{props.text ? props.text : ''}</label>
      <select name={props.name} id={props.name}>
        <option value="">Selecione</option>
        <option value="">Option 1</option>
        <option value="">Option 2</option>
      </select>
    </div>
  )
}
