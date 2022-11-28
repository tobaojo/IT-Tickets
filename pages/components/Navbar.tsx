import styles from '../../styles/Home.module.css'

const Navbar = () => {
    return <nav className={styles.nav}>
        <a href="http://" className={styles.title}>IT Tickets</a>
        <ul>
            <li>
                <a href="http://">dashboard</a>
            </li>
            <li>
                <a href="http://">pricing</a>
            </li>
            <li>
                <a href="http://">about</a>
            </li>
        </ul>
    </nav>
}

export default Navbar
