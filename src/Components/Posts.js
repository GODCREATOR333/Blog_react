import React, { useState } from 'react'
import thumbnail1 from "../assets/images/thumbnail1.jpg"


const Dummy_Post = [
    {
        id: '1',
        thumbmail: thumbnail1,
        category: 'Maths',
        title: 'Some Stupid Title',
        desc: 'Whatever is iakkj ladkfn lan l nlandfl a lnanlk lnalkdn a nlkan lkdfn a '

    },
    {
        id: '2',
        thumbmail: thumbnail1,
        category: 'Maths',
        title: 'Some Stupid Title',
        desc: 'Whatever is iakkj ladkfn lan l nlandfl a lnanlk lnalkdn a nlkan lkdfn a '

    },
    {
        id: '3',
        thumbmail: thumbnail1,
        category: 'Maths',
        title: 'Some Stupid Title',
        desc: 'Whatever is iakkj ladkfn lan l nlandfl a lnanlk lnalkdn a nlkan lkdfn a '

    },
    {
        id: '4',
        thumbmail: thumbnail1,
        category: 'Maths',
        title: 'Some Stupid Title',
        desc: 'Whatever is iakkj ladkfn lan l nlandfl a lnanlk lnalkdn a nlkan lkdfn a '

    }

]



function Posts() {

    const [post, setPost] = useState(Dummy_Post)


    return (
        <section className='posts'>

            {
                Posts.map(() => <PostsItem />)
            }
        </section>
    )
}

export default Posts