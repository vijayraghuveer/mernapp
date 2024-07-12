import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/avatar15.jpg'
import { FaCheck, FaEdit } from 'react-icons/fa'

const UserProfile = () => {
  const [avatar, setAvatar] = useState('')
  return (
    <section className="profile">
      <div className="container profile_container">
        <Link to={`/posts/users/id`} className='btn profile-posts_button' >My Posts</Link>
        <div className="profile_details">
          <div className="avatar_wrapper">
            <img className='profile_avatar' src={Avatar} alt="" />
          </div>
          <form  className="avatar_form">
            <input type="file" name='avatar' id='avatar' onChange={e => setAvatar(e.target.files[0])}
             accept='png, jpg, jpeg' />
             <label htmlFor="avatar"> <FaEdit/> </label>
          </form>
          <buttton className="profile_avatar-btn"><FaCheck/></buttton>
        </div>

        <h1>Ernest Achiever</h1>
      </div>
    </section>
  )
}

export default UserProfile