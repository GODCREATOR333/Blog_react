// PostByCategory.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDatabase, ref, get } from 'firebase/database';

function PostsByCategory() {
  const { category } = useParams();
  const [categoryPosts, setCategoryPosts] = useState([]);

  useEffect(() => {
    const fetchCategoryPosts = async () => {
      try {
        const db = getDatabase();
        const postRef = ref(db, 'posts');
        const snapshot = await get(postRef);
        if (snapshot.exists()) {
          const postsArray = Object.entries(snapshot.val()).map(([id, data]) => ({
            id,
            ...data,
          }));

          const filteredPosts = postsArray.filter(post => post.category === category);
          setCategoryPosts(filteredPosts);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategoryPosts();
  }, [category]);

  if (categoryPosts.length === 0) {
    return <div>No posts found for this category.</div>;
  }

  return (
    <div className='container posts post_container'>
      {categoryPosts.map(post => {
        const shortDescription =
          post.description.length > 250
            ? post.description.slice(0, 250) + "..."
            : post.description;

        return (
            <div className='post-by-category'> 
          <article className="post" key={post.id}>
            <div className="post_thumbnail">
              <img src={post.thumbnailUrl} alt={post.title} />
            </div>
            <div className="post_content">
              <h3>{post.title}</h3>
              <p>{shortDescription}</p>
              <div className="time-stamp">
                <h5>{`${post.timestamp} - by Hari Preetham`}</h5>
              </div>
              <div className="post_footer">
                <button className="btn category">{post.category}</button>
              </div>
            </div>
          </article>
          </div>
        );
      })}
    </div>
  );
}

export default PostsByCategory;
