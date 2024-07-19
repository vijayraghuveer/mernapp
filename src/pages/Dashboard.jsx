import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../context/userContext.js';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../components/Loader.jsx';
import axios from 'axios';
import DeletePost from './DeletePost.jsx';

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [isLoading,setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  

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

  useEffect(() => {
    const fetchPosts = async () => {
      
      setIsLoading(true)
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/users/${id}`, {withCredentials: true,
          headers: {
            
            'Authorization': `Bearer ${token}`
          }
        });
        setPosts(response.data)
        console.log(response.data)
        setIsLoading(false)
      } catch (err) {
        setError(err.response.data.message);
      }

    };
    fetchPosts();
  }, [id])
  

  return (
    <section className="dashboard">
      {posts.length ? (
        <div className="container dashboard_container">
          {posts.map(post => (
            <article key={post._id} className="dashboard_post">
              <div className="dashboard_post-info">
                <div className="dashboard_post-thumbnail">
                  <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${post.thumbnail}`} alt="" />
                </div>
                <h5>{post.title}</h5>
              </div>
              <div className="dashboard_post-actions">
                <Link to={`/posts/${post._id}`} className="btn sm">View</Link>
                <Link to={`/posts/${post._id}/edit`} className="btn sm primary">Edit</Link>
                <DeletePost postId={post._id}/>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <h2 className='center'>No Posts Found</h2>
      )}
    </section>
  );
};

export default Dashboard

