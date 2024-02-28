import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDatabase, ref, get, remove } from 'firebase/database';
import app from '../firebase';

function Dashboard() {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try {
            const db = getDatabase(app);
            const postsRef = ref(db, 'posts');
            const snapshot = await get(postsRef);
            if (snapshot.exists()) {
                const postsArray = Object.entries(snapshot.val()).map(([id, data]) => ({
                    id,
                    ...data,
                }));
                setPosts(postsArray);
            } else {
                console.log("No posts found");
            }
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const deletePost = async (id) => {
        try {
            const db = getDatabase(app);
            await remove(ref(db, `posts/${id}`));
            console.log("Post deleted successfully");
            // Optionally, refetch posts to update the UI
            fetchPosts();
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };

    return (
        <section className='dashboard'>
            {
                posts.length ? <div className='container dashboard_container'>
                    {
                        posts.map(post => {
                            return <article key={post.id} className='dashboard_post'>
                                <div className='dashboard_info'>
                                    <div className='dashboard_thumbnail'>
                                        <img src={post.thumbnailUrl} alt='post_thumbnail' />
                                    </div>
                                    <h5>{post.title}</h5>
                                </div>

                                <div className='dashboard_actions'>
                                    <Link to={`/posts/${post.id}`} className='btn sm primary'> View </Link>
                                    <Link to={`/posts/${post.id}/edit`} className='btn sm primary '> Edit</Link>
                                    <button onClick={() => deletePost(post.id)} className='btn sm danger'> Delete </button>
                                </div>
                            </article>
                        })
                    }
                </div> : <h2 className='center'> No Blogs Posted</h2>
            }
        </section>
    );
}

export default Dashboard;