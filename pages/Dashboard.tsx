import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar/Navbar'
import TodoList from '../components/TodoList'
import Tickets from '../components/Tickets/Tickets'
import UserActivity from '../components/UserActivity'
import CreateTicket from '../components/CreateTicket/CreateTicket'
import Modal from '../components/Modal/Modal'

const Dashboard = () => {

const [openModal, setOpenModal] = useState(false)

    return (
        <>
        <Navbar />
        <CreateTicket onClick={() => setOpenModal(true)}/>
        {openModal && <Modal closeModal={setOpenModal}/>}
        <div className={styles.grid}>
        <div className={styles.section1}>
        <div className={styles.card}><TodoList /></div>
        <div className={styles.card}><UserActivity /></div>
        </div>
        <div className={styles.section2}>
        <div className={styles.card}><Tickets /></div>
        </div>
        </div>
        </>
    )
}

export default Dashboard
