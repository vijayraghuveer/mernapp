import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../context/userContext.js';
import axios from 'axios';
import Loader from '../components/Loader.jsx';

const DeletePost = () => {
  const navigate = useNavigate();
  const [error,setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;

    useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  if(isLoading){
    <Loader/>
  }
  const {id} = useParams()   
  const deleteHandler = async (e) => {
    e.preventDefault()
    
    setIsLoading(true)
    try {
      const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/posts/${id}`, {withCredentials: true,
        headers: {
          
          'Authorization': `Bearer ${token}`
        }
      });
      if(response.status === 200){
        return navigate('/')
      }
    } catch (err) {
      setError(err.response.data.message);
    }
    setIsLoading(false)

  }

  return (
    <button onClick={deleteHandler} className='btn sm danger' >Delete</button>

  )
}

export default DeletePost