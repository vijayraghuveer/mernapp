import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaCheck, FaEdit } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext.js';
import axios from 'axios';

const UserProfile = () => {
  const [avatar, setAvatar] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')
  const [isAvatarTouched, setIsAvatarTouched] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate();

  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/${currentUser.id}`, {withCredentials: true, headers: {Authorization: `Bearer ${token}`}})
      const {name, email, avatar} = response.data;
      setName(name);
      setEmail(email);
      setAvatar(avatar);
    }
    getUser()
  }, [currentUser.id, token])

  const changeAvatarHandler = async () => {
    setIsAvatarTouched(false)
    try {
      const userData = new FormData();
      userData.set('avatar', avatar);
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/change-avatar`,
       userData, {withCredentials: true, headers: {Authorization: `Bearer ${token}`}})
      setAvatar(response?.data.avatar)
      console.log(response.data);

    } catch (error) {
      console.log(error)
    }
  }

  const updateUserDetail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`${process.env.REACT_APP_BASE_URL}/users/edit-user`,
       {name, email, currentPassword, newPassword, confirmNewPassword}, {withCredentials: true, headers: {Authorization: `Bearer ${token}`}})
      if(response.status === 200) {
        navigate('/logout')
      }
      
    } catch (error) {
      setError(error.response.data.message)
    }
  }

  return (
    <section className="profile">
      <div className="container profile_container">
        <Link to={`/myposts/${currentUser.id}`} className='btn profile-posts_button' >My Posts</Link>
        <div className="profile_details">
          <div className="avatar_wrapper">
            <div className="profile_avatar">
              <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${avatar}`} alt="" />
            </div>
            <form  className="avatar_form" >
              <input type="file" name='avatar' id='avatar' onChange={e => setAvatar(e.target.files[0])}
              accept='png, jpg, jpeg' />
              <label htmlFor="avatar" onClick={() => setIsAvatarTouched(true)}> <FaEdit/> </label>
            </form>
            {isAvatarTouched && <button className="profile_avatar-btn" onClick={changeAvatarHandler}><FaCheck/></button>}
          </div> 

          <h1>{currentUser.name}</h1> 


          <form  className="form profile_form" onSubmit={updateUserDetail}>
            {error &&<p className="form_error-message">{error}</p>}
            <input type="text" placeholder='Full Name' value={name} onChange={e => setName(e.target.value)} />
            <input type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder='current password' value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} />
            <input type="password" placeholder='New password' value={newPassword} onChange={e => setNewPassword(e.target.value)} />
            <input type="password" placeholder='Confirm new password' value={confirmNewPassword} onChange={e => setConfirmNewPassword(e.target.value)} />
            <button type='submit' className="btn primary">Update details</button>

          </form>


        </div>
      </div>
    </section>
  )
}

export default UserProfile