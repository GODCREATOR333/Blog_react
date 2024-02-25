import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDatabase, ref } from 'firebase/database';
import  app  from '../firebase';
import 'firebase/database';

function PostsItem({ postID }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      // Assuming you have initialized Firebase app elsewhere
      const db = getDatabase(app);
      const postRef = ref('posts').child(postID);

      // Fetch post data
      postRef.once('value', (snapshot) => {
        const postData = snapshot.val();
        setPost(postData);
      });
    };

    fetchPost();
  }, [postID]);

  if (!post) {
    return <div>Loading...</div>;
  }

  const { thumbnail, category, title, description, timestamp, author } = post;

  const shortDescription =
    description.length > 150 ? description.substring(0, 150) + '...' : description;
  const shortTitle = title.length > 30 ? title.substring(0, 30) + '...' : title;

  return (
    <div>
      <article className="post">
        <div className="post_thumbnail">
          <img src={thumbnail} alt={title} />
        </div>

        <div className="post_content">
          <Link to={`/posts/${postID}`}>
            <h3>{shortTitle}</h3>
          </Link>

          <p>{shortDescription}</p>

          <div className="time-stamp">
            <h5>{`${timestamp} - by ${author}`}</h5>
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
