import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar/Navbar'
import TodoList from '../components/TodoList'
import Tickets from '../components/Tickets/Tickets'
import UserActivity from '../components/UserActivity'

const Dashboard = () => {
    return (
        <>
        <Navbar />
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
