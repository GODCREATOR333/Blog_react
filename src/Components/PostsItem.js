import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDatabase, ref, get } from 'firebase/database';
import app from '../firebase';

function PostsItem({ sortOption }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getDatabase();
        const postRef = ref(db, 'posts');
        const snapshot = await get(postRef);
        if (snapshot.exists()) {
          const postsArray = Object.entries(snapshot.val()).map(([id, data]) => ({
            id,
            ...data,
          }));

          // Sort posts based on the selected option
          let sortedPosts = [...postsArray];
          if (sortOption === 'latest') {
            sortedPosts.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
          } else if (sortOption === 'oldest') {
            sortedPosts.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
          } else if (sortOption === 'Alphabetically(A-Z)') {
            sortedPosts.sort((a, b) => a.title.localeCompare(b.title));
          } else if (sortOption === 'Alphabetically(Z-A)') {
            sortedPosts.sort((a, b) => b.title.localeCompare(a.title));
          }
          
          setPosts(sortedPosts);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [sortOption]);

  if (posts.length === 0) {
    return null; // or render a loading indicator
  }

  return (
    <div className='container posts post_container'>
      {posts.map(post => {
        // Shorten description to 30 characters and add "..." if longer
        const shortDescription =
          post.description.length > 250
            ? post.description.slice(0, 250) + "..."
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
                  to={`/post/categories/${post.category}`}
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

export default PostsItem;
