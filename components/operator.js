import styles from '../styles/components/operator.module.sass'

export default function Operator({value, ...props}) {
  return (
    <div className={styles.operator} {...props}>
      <p>{value}</p>
    </div>
  )
}