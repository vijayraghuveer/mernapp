import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword:''
  })

  const changeInputHandler = (e) => {
    setUserData(prevState =>{
      return {...prevState,[e.target.name]:e.target.value}
    })
  }
  return (
    <section className="register">
      <div className="container">
        <h2>Sign Up</h2>
        <form action="" className="form register_form">
          <p className="form_error-message">This is an error message</p>
          <input type="text" name="name" placeholder='Full Name' value={userData.name} onChange={changeInputHandler} autoFocus/>
          <input type="email" name="email" placeholder='Email' value={userData.email} onChange={changeInputHandler} autoFocus/>
          <input type="password" name="password" placeholder='Password' value={userData.password} onChange={changeInputHandler} autoFocus/>
          <input type="password" name="confirmPassword" placeholder='Confirm Password' value={userData.confirmPassword} onChange={changeInputHandler} autoFocus/>
          <button type='submit' className='btn primary'>Register</button>
        </form>
        <small>Already have an account? <Link to="/login" >sign in</Link> </small>
      </div>
    </section>
  )
}

export default Register