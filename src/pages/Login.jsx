import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })

  const changeInputHandler = (e) => {
    setUserData(prevState =>{
      return {...prevState,[e.target.name]:e.target.value}
    })
  }
  return (
    <section className="login">
      <div className="container">
        <h2>Sign In</h2>
        <form action="" className="form login_form">
          <p className="form_error-message">This is an error message</p>
          <input type="email" name="email" placeholder='Email' value={userData.email} onChange={changeInputHandler} autoFocus/>
          <input type="password" name="password" placeholder='Password' value={userData.password} onChange={changeInputHandler} autoFocus/>
          <button type='submit' className='btn primary'>Login</button>
        </form>
        <small>Don't have an account? <Link to="/register" >sign up</Link> </small>
      </div>
    </section>
  )
}

export default Login