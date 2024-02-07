import React from 'react'
import { Link } from 'react-router-dom'

function PostsItem({postID,thumbnail,category,title,description}) {

  const shortdescription = description.length>150 ? description.substring(0,150) + '...' : description 
  const shorttitle = title.length>30 ? title.substring(0,30) + '...' : title
  return (
    <div>
      <article className='post'>
        
        <div className='post_thumbnail'>
          <img src={thumbnail} alt={title}/>
        </div>

        <div className='post_content'>
          <Link to={`/posts/${postID}`}>
            <h3>{shorttitle}</h3>
          </Link>
          <p>{shortdescription}</p>
          <div className='post_footer'>
            <Link to={`/post/categories/${category}`} className='btn category '> {category} </Link>
          </div>
        </div>
      </article>
      
    </div>
  )
}

export default PostsItem
