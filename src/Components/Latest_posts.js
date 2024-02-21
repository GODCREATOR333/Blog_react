// for home page render getting the latest posts 

import React, { useState } from 'react'
import { Post_data } from '../Post_data'
import PostsItem from './PostsItem'


function Latest_Posts() {
    const [post, setPost] = useState(Post_data)

    const sortedPosts = Post_data.sort((a, b) => b.id - a.id);

    // Select only the first 5 posts
    const latestPosts = sortedPosts.slice(0, 5);


    return (
        <section className='posts'>
            <div className='container post_container'>
                {
                    latestPosts.map(({ id, thumbnail, category, title, desc }) => <PostsItem key={id} postID={id}
                        thumbnail={thumbnail} category={category} title={title} description={desc} />)
                }
            </div>
        </section>
    )
}

export default Latest_Posts