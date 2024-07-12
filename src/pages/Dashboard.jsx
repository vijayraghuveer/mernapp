import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { DUMMY_POSTS } from '../data'
const Dashboard = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);

  return (
    <section className="dashboard">
      {posts.length ? (
        <div className="container dashboard_container">
          {posts.map(post => (
            <article key={post.id} className="dashboard_post">
              <div className="dashboard_post-info">
                <div className="dashboard_post-thumbnail">
                  <img src={post.thumbnail} alt="" />
                </div>
                <h5>{post.title}</h5>
              </div>
              <div className="dashboard_post-actions">
                <Link to={`/posts/${post.id}`} className="btn sm">View</Link>
                <Link to={`/posts/${post.id}/edit`} className="btn sm primary">Edit</Link>
                <Link to={`/posts/${post.id}/delete`} className="btn sm danger">Delete</Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p>No posts available</p>
      )}
    </section>
  );
};

export default Dashboard

