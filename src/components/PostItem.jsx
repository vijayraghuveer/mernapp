import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'

const PostItem = ({postID, thumbnail, category, title, description, authorID, createdAt}  ) => {
    const shortDescription = description.length > 145 ? description.substr(0,145) + '...' : description;
    const postTitle = title.length > 30 ? title.substr(0,30) + '...' : title; 
    return (
    <article className="post">
        <div className="post_thumbnail">
            <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${thumbnail}`} alt={title} />
        </div>
        <div className="post_content">
            <Link to={`/posts/${postID}`} >
                <h3>{postTitle}</h3>
            </Link>
            <p dangerouslySetInnerHTML={{__html: shortDescription}}></p>
            <div className="post_footer">
                <PostAuthor authorID={authorID} createdAt={createdAt} />
                <Link to={`/posts/categories/${category}`} className='btn category' >{category}</Link> 
            </div>
        </div>
    </article>
  )
}

export default PostItem