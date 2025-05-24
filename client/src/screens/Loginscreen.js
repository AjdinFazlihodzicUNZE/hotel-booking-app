import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';
import Error from '../components/Error';
import { Link } from 'react-router-dom';

function Loginscreen() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState();

    async function Login() {
        const user = {
            email,
            password
        }
        try {
            setloading(true);
            const response = await axios.post('/api/users/login', user);
            const result = response.data;

            setloading(false);

            localStorage.setItem('currentUser', JSON.stringify(result));
            window.location.href = "/home"
        } catch (error) {
            console.log(error)
            setloading(false);
            seterror(true)
        }

    }

    return (
        <div>
            {loading && (<Loader />)}
            <div className='row justify-content-center mt-5'>
                <div className='col-md-5 mt-5'>

                    <div className='shadowbox'>
                        <h2>Login</h2>
                        <input type="text" className='form-control' placeholder='email' value={email} onChange={(e) => { setemail(e.target.value) }} />
                        <input type="password" className='form-control' placeholder='password' value={password} onChange={(e) => { setpassword(e.target.value) }} />
                        <button className='btn luxury-button mt-3' onClick={Login}>Login</button>
                        <div className="text-center mt-3">
                            <p>
                                If you don't have an account,{" "}
                                <Link to="/register" className="text-decoration-none" style={{ color: "#bfa06a", fontWeight: "bold" }}>
                                    Sign up here
                                </Link>
                            </p>
                        </div>

                    </div>
                    {error && (<Error message="Invalid email or password" />)}
                </div>

            </div>
        </div>
    )
}
export default Loginscreen;