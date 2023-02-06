import axios from 'axios';
import React, { useState } from 'react'

const Register = () => {
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = async (e) => {

        e.preventDefault();
        const formData = new FormData();

        formData.append('first_name', first_name);
        formData.append('last_name', last_name);
        formData.append('email', email);
        formData.append('password', password);

        await axios.post('http://127.0.0.1:8000/api/products', formData).then(({ data }) => {
            console.log(data.message);
            window.location.reload(false);
        })
    }

    return (
        <div>
            <form className='form'>
                <h1>Register page</h1>
                <input type='text' name='first_name' placeholder='Entre your first name' />

                <input type='text' name='last_name' placeholder='Entre your last name' />

                <span className='info-text'>Email is required *</span>
                <input type='email' name='email' placeholder='Entre your email' />

                <span className='info-text'>Password is required *</span>
                <input type='password' name='password' placeholder='Entre your password' />

                <div className='controle'>
                    <button className='btn btn-primary'>Register</button>
                    <a href='/login' className='link'>I already have account</a>
                </div>
            </form>
        </div>
    )
}

export default Register