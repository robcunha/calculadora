import styles from '../styles/components/operator.module.sass'

export default function Operator({op}) {
  return (
    <div className={styles.operator}>
      <p>{op}</p>
    </div>
  )
}