import React from 'react'

const Login = () => {
    return (
        <div>

            <div className='form'>
                <h1>Login page</h1>
                <input type='email' name='email' placeholder='Entre your email' />
                <input type='password' name='password' placeholder='Entre your password' />
                <div className='controle'>
                    <button className='btn btn-primary'>Login</button>
                    <a href='/register' className='link'>I don't have account</a>
                </div>
            </div>
        </div>
    )
}

export default Login