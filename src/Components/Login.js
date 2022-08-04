import React, {useState} from 'react'
import '../styles/Login.css'
import {Link, useNavigate} from 'react-router-dom'
import { auth } from '../firebase';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const[password, setPassword] = useState("")


  const handleLogin = (event) => {
    try {
      event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate('/')
      })
    } catch (error) {
      alert(error.message)
    }
  }

  const handleRegister = (event) => {
    try {
      event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate('/')
      })
    } catch (error) {
      alert(error.message)
    }
  }

 

  return (
    <div className='login'>
      <Link to='/'>
        <img
        className='login-logo'
        src='data:image/png;base64,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'
        alt=''
        />
        </Link>

        <div className='login-container'>
            <h5>Sign In</h5>
            <form>
              <h5>Email</h5>
              <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" />
              <h5>Password</h5>
              <input onChange={(e) => setPassword(e.target.value)} value={password} type='password'/>
              <button onClick={handleLogin} type='submit' className='login-signin'>Sign In</button>
              </form>
                <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
              <button onClick={handleRegister} className='register-btn'>Create your Amazon account</button>
        </div>
    </div>
  )
}

export default Login