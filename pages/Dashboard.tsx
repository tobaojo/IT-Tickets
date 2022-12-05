import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar/Navbar'
import TodoList from '../components/TodoList'
import Tickets from '../components/Tickets/Tickets'

const Dashboard = () => {
    return (
        <>
        <Navbar />
        <div className={styles.card}><TodoList /></div>
        <div className={styles.card}><Tickets /></div>
        </>
    )
}

export default Dashboard
