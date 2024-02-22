import React from 'react'
import { Link } from 'react-router-dom'

function PostsItem({ postID, thumbnail, category, title, description }) {

  const shortdescription = description.length > 150 ? description.substring(0, 150) + '...' : description
  const shorttitle = title.length > 30 ? title.substring(0, 30) + '...' : title
  // Get the current date and time
  const currentDate = new Date();

  // Format the date and time as per your requirement
  const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;


  // Construct the time stamp string
  const time_stamp = `${formattedDate}`;

  return (
    <div>
      <article className='post'>

        <div className='post_thumbnail'>
          <img src={thumbnail} alt={title} />
        </div>

        <div className='post_content'>

          <Link to={`/posts/${postID}`}>
            <h3>{shorttitle}</h3>
          </Link>

          <p>{shortdescription}</p>

          <div className='time-stamp'>
            <h5>{`${time_stamp} - by Hari Preetham`}</h5>
          </div>

          <div className='post_footer'>
            <Link to={`/post/categories/${category} `} className='btn category '> {category} </Link>
          </div>

        </div>

      </article>

    </div>
  )
}

export default PostsItem
