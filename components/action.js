import styles from '../styles/components/action.module.sass'

export default function Action({ac}) {
  return (
    <div className={styles.action}>
      <p>{ac}</p>
    </div>
  )
}