import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword:''
  })
  const[error, setError] = useState('')
  const navigate = useNavigate()

  const changeInputHandler = (e) => {
    setUserData(prevState =>{
      return {...prevState,[e.target.name]:e.target.value}
    })
  }

  const registerUser = async(e) => {
    e.preventDefault()
    try{
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/register`, userData)
      const newUser = response.data
      console.log(newUser)
      if(!newUser){
        setError("Couldn't register user. Please try agian.")
      }
      navigate('/login')
    }catch(err){
      setError(err.response.data.message)
    }
  }
  return (
    <section className="register">  
      <div className="container">
        <h2>Sign Up</h2>
        <form action="" className="form register_form" onSubmit={registerUser}>
          {error && <p className="form_error-message">{error}</p>}
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