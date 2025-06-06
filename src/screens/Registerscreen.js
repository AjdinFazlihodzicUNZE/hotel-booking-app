import React, { useState,} from 'react';
import axios from 'axios';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Success from '../components/Success';
import { Link } from 'react-router-dom';


function Registerscreen() {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')

    const [loading, setloading] = useState(false);
    const [error, seterror] = useState();
    const [success, setsuccess] = useState();


    async function register() {
        if (password === cpassword) {
            const user = {
                name,
                email,
                password,
                cpassword
            }

            try {
                setloading(true)
                await axios.post('/api/users/register', user);
                setloading(false)
                setsuccess(true)

                setname('')
                setemail('')
                setpassword('')
                setcpassword('')

            } catch (error) {
                console.log(error)
                setloading(false)
                seterror(true)
            }
        } else {
            alert("Password not matched")
        }
    }

    return (
        <div>

            {loading && (<Loader />)}
            {error && (<Error />)}

            <div className='row justify-content-center mt-5'>
                <div className='col-md-5 mt-5'>

                    <div className='shadowbox'>
                        <h2>Register</h2>
                        <input type="text" className='form-control' placeholder='Name' value={name} onChange={(e) => { setname(e.target.value) }} />
                        <input type="text" className='form-control' placeholder='Email' value={email} onChange={(e) => { setemail(e.target.value) }} />
                        <input type="password" className='form-control' placeholder='Password' value={password} onChange={(e) => { setpassword(e.target.value) }} />
                        <input type="password" className='form-control' placeholder='Confirm Password' value={cpassword} onChange={(e) => { setcpassword(e.target.value) }} />
                        <button className='btn luxury-button mt-3' onClick={register}>Register</button>
                        <div className="text-center mt-3">
                            <p>
                                Already have an account?{" "}
                                <Link to="/login" className="text-decoration-none" style={{ color: "#bfa06a", fontWeight: "bold" }}>
                                    Log in here
                                </Link>
                            </p>
                        </div>

                    </div>
                    {success && (<Success message="Registration success" />)}
                </div>

            </div>
        </div>
    )
}
export default Registerscreen;