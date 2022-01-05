import styles from '../styles/components/display.module.sass'

export default function Display(props) {
  return (
    <div className={styles.display}>
      <p>{props.expression}</p>
    </div>
  )
}