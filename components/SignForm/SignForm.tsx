import styles from './SignForm.module.css'
import { Formik } from 'formik'



const SignForm = () => {
    return (
    <div className={styles.formCard}>
        <h1>Register with us</h1>
        <Formik 
        initialValues={{
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            cpassword: ''
        }}
        validate={
            values => {
                const errors = {};
                !values.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) ? errors.email = 'Invalid email address' : null
                !values.firstname ? errors.firstname = 'Required' : null
                !values.lastname ? errors.lastname = 'Required' : null
                !values.password ? errors.password = 'Required' : null
                !values.cpassword ? errors.cpassword = 'Required' : null
                return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(()=>{
                alert(JSON.stringify(values, null, 2))
                setSubmitting(false)
            }, 400)
        }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
            }) => (
            <form onSubmit={handleSubmit}>
            <div className={styles.formControl}>
                <label htmlFor="firstname">First Name:</label>
                <input name="firstname" value={values.firstname} onChange={handleChange} onBlur={handleBlur} type="text" placeholder='Enter your name'/>
                {errors.firstname ? <small>{errors.firstname}</small> : null }
            </div>
            <div className={styles.formControl}>
                <label htmlFor="lastname">Last Name:</label>
                <input name="lastname" value={values.lastname} onChange={handleChange} onBlur={handleBlur} type="text" placeholder='Enter your last name'/>
                {errors.lastname ? <small>{errors.lastname}</small> : null }
            </div>
            <div className={styles.formControl}>
                <label htmlFor="email">Email address:</label>
                <input name="email" value={values.email} onChange={handleChange} onBlur={handleBlur}  type="email" placeholder='Enter your email address'/>
                {errors.email ? <small>{errors.email}</small> : null}
            </div>
            
            <div className={styles.formControl}>
                <label htmlFor="Password">Password:</label>
                <input name="password" value={values.password} onChange={handleChange} onBlur={handleBlur}  type="password" placeholder='Enter your password'/>
                {errors.password ? <small>{errors.password}</small> : null }
            </div>
            <div className={styles.formControl}>
                <label htmlFor="confirmPassword">Confirm your password :</label>
                <input name="cpassword" value={values.cpassword} onChange={handleChange} onBlur={handleBlur}  type="password" placeholder='Confirm your password'/>
                {errors.cpassword ? <small>{errors.cpassword}</small> : null }
            </div>
            <div>
                <input type="checkbox" />
                <label htmlFor="checkbox">I accept the terms and privacy policy</label>
            </div>
            <button className={styles.submitBtn} disabled={isSubmitting} type='submit'>Register</button>
                </form>
           )}
        </Formik>
    </div>
)}
export default SignForm
