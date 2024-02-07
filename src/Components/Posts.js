import React, { useState } from 'react'
import thumbnail1 from "../assets/images/thumbnail1.jpg"
import PostsItem from './PostsItem'


const Dummy_Post = [
    {
        id: '1',
        thumbnail: thumbnail1,
        category: 'Maths',
        title: 'Some Stupid Title',
        desc: 'Whatever is iakkj ladkfn lan l nlandfl a lnanlk lnalkdn a nlkan lkdfn a '

    },
    {
        id: '2',
        thumbnail: thumbnail1,
        category: 'Maths',
        title: 'Some Stupid Title',
        desc: 'Whatever is iakkj ladkfn lan l nlandfl a lnanlk lnalkdn a nlkan lkdfn a '

    },
    {
        id: '3',
        thumbnail: thumbnail1,
        category: 'Maths',
        title: 'Some Stupid Title',
        desc: 'Whatever is iakkj ladkfn lan l nlandfl a lnanlk lnalkdn a nlkan lkdfn a '

    },
    {
        id: '4',
        thumbnail: thumbnail1,
        category: 'Maths',
        title: 'Some Stupid Title',
        desc: 'Whatever is iakkj ladkfn lan l nlandfl a lnanlk lnalkdn a nlkan lkdfn a '

    },
    {
        id: '5',
        thumbnail: thumbnail1,
        category: 'Maths',
        title: 'Some Stupid Title',
        desc: 'Whatever is iakkj ladkfn lan l nlandfl a lnanlk lnalkdn a nlkan lkdfn a '

    },
    {
        id: '6',
        thumbnail: thumbnail1,
        category: 'Maths',
        title: 'Some Stupid Title',
        desc: 'Whatever is iakkj ladkfn lan l nlandfl a lnanlk lnalkdn a nlkan lkdfn a '

    },
    {
        id: '7',
        thumbnail: thumbnail1,
        category: 'Maths',
        title: 'Some Stupid Title',
        desc: 'Whatever is iakkj ladkfn lan l nlandfl a lnanlk lnalkdn a nlkan lkdfn a '

    },
    {
        id: '8',
        thumbnail: thumbnail1,
        category: 'Maths',
        title: 'Some Stupid Title',
        desc: 'Whatever is iakkj ladkfn lan l nlandfl a lnanlk lnalkdn a nlkan lkdfn a '

    }

]



function Posts() {

    const [post, setPost] = useState(Dummy_Post)


    return (

        <section className='posts'>
            <div className='container post_container'>
            {
                post.map(({id,thumbnail,category,title,desc}) => <PostsItem  key={id} postID={id}
                 thumbnail={thumbnail} category={category} title={title} description={desc}/>)
            }
            </div>
        </section>
    )
}

export default Posts