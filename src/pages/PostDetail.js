import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getDatabase, ref, get } from 'firebase/database';
import app from '../firebase';

function PostDetail() {
    const { id } = useParams(); // Get the post ID from the URL
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const db = getDatabase(app);
                const postRef = ref(db, `posts/${id}`);
                const snapshot = await get(postRef);
                if (snapshot.exists()) {
                    setPost(snapshot.val());
                } else {
                    console.log("No post found");
                }
            } catch (error) {
                console.error("Error fetching post:", error);
            }
        };

        fetchPost();
    }, [id]);

    if (!post) {
        return <div>Loading...</div>; // Or render a loading indicator
    }

    return (
        <section className='post_detail'>
            <div className='container post-detail_container'>
                
                <div className='post-detail_header'>
                    <h2>{post.timestamp} - By Hari Preetham</h2>
                    <p>{post.category}</p>
                </div>

                <h1 className='post-detail_title'>{post.title}</h1>

                <div className='post-detail_thumbnail'>
                    <img src={post.thumbnailUrl} alt={post.title} />
                </div>

                <p>{post.description}</p>

                {/* Render post content with HTML */}
                <div className='post-detail_content' dangerouslySetInnerHTML={{ __html: post.postcontent }} />
            </div>
        </section>
    );
}

export default PostDetail;