import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Login.css'

const Login = () => {

    const { signIn } = useContext(AuthContext);

    const navigate = useNavigate()
    const location = useLocation()

    const from = location?.state?.from?.pathname || '/'

    const handleSubmit = (event) => {
        event.preventDefault()

        const form = event.target

        const email = form.email.value
        const password = form.password.value

        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(e => {
                console.error(e.message)
            })
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" required />
                </div>
                <input type="submit" value="Login" className='btn-submit' />
            </form>
            <p className='create-new-link'>New To Ema-John ? <Link to='/signup'>Create New Account</Link></p>
        </div>
    );
};

export default Login;