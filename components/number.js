import styles from '../styles/components/number.module.sass'

export default function Number({value, zero=false, ...props}){
  
  return (
    <div className={`${styles.number} ${zero ? styles.zero : ''}`} value={value} {...props}>
      <p>{value}</p>
    </div>
  )
}
