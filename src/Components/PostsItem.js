import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDatabase, ref, get } from 'firebase/database'; // Import get function
import app from '../firebase';

function PostsItem({ postID }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const db = getDatabase(app);
        const postRef = ref(db, `posts/${postID}`);
        const postSnapshot = await get(postRef); // Use get function to fetch data

        if (postSnapshot.exists()) {
          setPost(postSnapshot.val());
        } else {
          console.log('No data available');
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [postID]);

  if (!post) {
    return <div>Loading...</div>;
  }

  const { thumbnailUrl, category, title, description, timestamp } = post; // Ensure your data keys match here

  const shortDescription =
    description.length > 150 ? description.substring(0, 150) + '...' : description;
  const shortTitle = title.length > 30 ? title.substring(0, 30) + '...' : title;

  return (
    <div>
      <article className="post">
        <div className="post_thumbnail">
          <img src={thumbnailUrl} alt={title} /> {/* Ensure to use the correct key for thumbnail URL */}
        </div>

        <div className="post_content">
          <Link to={`/posts/${postID}`}>
            <h3>{shortTitle}</h3>
          </Link>

          <p>{shortDescription}</p>

          <div className="time-stamp">
            <h5>{`${timestamp} - by Author Name`}</h5> {/* Replace 'Author Name' with actual author */}
          </div>

          <div className="post_footer">
            <Link to={`/post/categories/${category}`} className="btn category">
              {category}
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

export default PostsItem;
