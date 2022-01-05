import styles from '../styles/components/action.module.sass'

export default function Action({value, ...props}) {
  return (
    <div className={styles.action} {...props}>
      <p>{value}</p>
    </div>
  )
}