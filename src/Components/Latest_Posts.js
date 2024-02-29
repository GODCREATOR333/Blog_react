import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDatabase, ref, get,query, orderByKey, limitToLast } from 'firebase/database';
import app from '../firebase';

function Latest_Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getDatabase();
        const postRef = ref(db, 'posts');
        const postQuery = query(postRef, orderByKey(), limitToLast(5)); // Query to get last 5 posts
        const snapshot = await get(postQuery);
        
        if (snapshot.exists()) {
          const postsArray = Object.entries(snapshot.val()).reverse().map(([id, data]) => ({ // Reverse the array to get latest posts first
            id,
            ...data,
          }));
          setPosts(postsArray);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  if (posts.length === 0) {
    return null; // or render a loading indicator
  }

  return (
    <div className=' container posts post_container'>
      {posts.map(post => {
        // Shorten description to 30 characters and add "......" if longer
        const shortDescription =
          post.description.length > 250
            ? post.description.slice(0, 250) + "......"
            : post.description;

        return (
          <article className="post" key={post.id}>
            <div className="post_thumbnail">
              <img src={post.thumbnailUrl} alt={post.title} />
            </div>

            <div className="post_content">
              <Link to={`/posts/${post.id}`}>
                <h3>{post.title}</h3>
              </Link>

              <p>{shortDescription}</p>

              <div className="time-stamp">
                <h5>{`${post.timestamp} - by Hari Preetham`}</h5>
              </div>

              <div className="post_footer">
                <Link
                  to={`/posts/categories/${post.category}`}
                  className="btn category"
                >
                  {post.category}
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Latest_Posts;
