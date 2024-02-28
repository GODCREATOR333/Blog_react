import React, { useState } from 'react'
import PostsItem from './PostsItem'
import { Post_data } from '../Post_data'


function Posts(Post_data) {
    const [post, setPost] = useState(Post_data)
    return (
        <section className='posts'>
            <div className='container post_container'>
                {
                    post.map(({ id, thumbnail, category, title, desc }) => <PostsItem key={id} postID={id}
                        thumbnail={thumbnail} category={category} title={title} description={desc} />)
                }
            </div>
        </section>
    )
}

export default Posts