import styles from '../../styles/Home.module.css'

const SignForm = () => {
    return (
    <div className={styles.formCard}>
        <h1>Register with us</h1>
        <form action="" method="post">
            <div className={styles.formControl}>
                <label htmlFor="Firstname">First Name:</label><br />
                <input type="text" placeholder='Enter your name'/>
                <small>error message</small>
            </div>
            <div className={styles.formControl}>
                <label htmlFor="lastname">Last Name:</label><br />
                <input type="text" placeholder='Enter your last name'/>
                <small>error message</small>
            </div>
            <div className={styles.formControl}>
                <label htmlFor="email">Email address:</label><br />
                <input type="email" placeholder='Enter your email address'/>
                <small>error message</small>
            </div>
            <div className={styles.formControl}>
                <label htmlFor="Password">Password:</label><br />
                <input type="password" placeholder='Enter your password'/>
                <small>error message</small>
            </div>
            <div className={styles.formControl}>
                <label htmlFor="confirmPassword">Confirm your password :</label><br />
                <input type="tepasswirdxt" placeholder='Confirm your password'/>
                <small>error message</small>
            </div>
            <div>
                <input type="checkbox" />
                <label htmlFor="checkbox">I accept the terms and privacy policy</label>
            </div>
            <button className={styles.submitBtn} type='submit'>Register</button>
        </form>
    </div>
)}
export default SignForm