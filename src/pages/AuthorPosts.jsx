import React from 'react'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import PostItem from '../components/PostItem'
import Loader from '../components/Loader'
import { useParams } from 'react-router-dom'
import { UserContext } from '../context/userContext'



const AuthorPosts = () => {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { id } = useParams()
  const {currentUser} = useContext(UserContext)
  const navigate = useNavigate()


  const token = currentUser?.token;

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);
  
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/users/${id}`, {withCredentials: true, headers: {Authorization: `Bearer ${token}`}})
        setPosts(response?.data) 
      } catch (error) {
        console.log(error)
      }
      setIsLoading(false)
    }
    fetchPosts()
  }, [id])

  if (isLoading) {
    return <Loader />
  }
  
  return (
    <section className="posts">
        {
            posts.length > 0 ? <div className='container posts_container'>
               {
                posts.map(({_id: id, thumbnail, category, title, description, creator, createdAt}) => <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} 
                description={description} authorID={creator} createdAt={createdAt} />)
               } 
            </div> : <h2 className='center'>No Posts Found</h2>
        }
    </section>
  )
}

export default AuthorPosts