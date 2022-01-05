import styles from '../styles/components/number.module.sass'

export default function Number({number, zero=false}){
  console.log(number)
  console.log(zero)
  return (
    <div className={`${styles.number} ${zero ? styles.zero : ''}`}>
      <p>{number}</p>
    </div>
  )
}
