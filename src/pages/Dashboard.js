import React, { useState } from 'react'
import { Post_data } from '../Post_data'
import { Link } from 'react-router-dom'

function Dashboard() {

    const [posts, Setposts] = useState(Post_data)


    return (
        <section className='dashboard'>

            {
                posts.length ? <div className='container dashboard_container'>
                    {
                        posts.map(post => {
                            return <article key={post.id} className='dashboard_post'>
                                <div className='dashboard_info'>
                                    <div className='dashboard_thumbnail'>
                                        <img src={post.thumbnail} alt='post_thumbnail' />
                                    </div>
                                    <h5>{post.title}</h5>
                                </div>

                                <div className='dashboard_actions'>
                                    <Link to={`/posts/${post.id}`} className='btn sm primary'> View </Link>
                                    <Link to={`/posts/${post.id}/edit`} className='btn sm primary '> Edit</Link>
                                    <Link to={`/posts/${post.id}`} className='btn sm danger'> Delete </Link>
                                </div>

                            </article>
                        })
                    }
                </div> : <h2 className='center'> No Blogs Posted</h2>
            }

        </section>
    )
}

export default Dashboard