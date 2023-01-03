import React from 'react'
import styles from './CreateTicket.module.css'



type Props = {
  onClick: () => void
}

const CreateTicket: React.FC<Props> = ({ onClick }) => {
  return (
    <nav className={styles.navbar}>
        <button onClick={onClick} className={styles.btn}>Create Ticket</button>
    </nav>
  )
}

export default CreateTicket