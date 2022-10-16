import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './SignUp.css'

const SignUp = () => {

    const [error, setError] = useState(null)

    const { createUser } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault()

        setError('')

        const form = event.target

        const email = form.email.value
        const password = form.password.value
        const confirm = form.confirm.value

        console.log(email, password, confirm);

        if (password.length < 6) {
            setError('Password Must Be Six Character')
            return
        }
        if (password !== confirm) {
            setError('Your Password Not Match')
            return
        }

        createUser(email, password)
            .then(result => {
                const user = result.user
                form.reset()
                console.log(user);
            })
            .catch(e => {
                console.error(e.message);
            })

    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" id="confirm" required />
                </div>
                <input type="submit" value="Sign Up" className='btn-submit' />
            </form>
            <p className='create-new-link'>Already Have an Account ? <Link to='/login'>Login</Link></p>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default SignUp;