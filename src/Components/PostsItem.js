import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDatabase, ref, get } from 'firebase/database';
import app from '../firebase';

function PostsItem({ postID }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const db = getDatabase(app);
        const postRef = ref(db, `posts/${postID}`);
        const postSnapshot = await get(postRef);

        if (postSnapshot.exists()) {
          setPost(postSnapshot.val());
        } else {
          console.log('No data available for postID:', postID);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching post:', error);
        setLoading(false);
      }
    };

    fetchPost();
  }, [postID]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return null;
  }

  const { thumbnailUrl, category, title, description, timestamp } = post;

  const shortDescription =
    description.length > 150 ? description.substring(0, 150) + '...' : description;
  const shortTitle = title.length > 30 ? title.substring(0, 30) + '...' : title;

  return (
    <div>
      <article className="post">
        <div className="post_thumbnail">
          <img src={thumbnailUrl} alt={title} />
        </div>

        <div className="post_content">
          <Link to={`/posts/${postID}`}>
            <h3>{shortTitle}</h3>
          </Link>

          <p>{shortDescription}</p>

          <div className="time-stamp">
            <h5>{`${timestamp} - by Hari Preetham`}</h5>
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
