import React from 'react'
import Latest_Posts from '../Components/Latest_posts'
import coding_gif from '../assets/gifs/coding.gif'

function Home() {
    return (
        <div>
            <section className='hero'>

                <div className='left-side-info'>
                    
                    <img className='gifs coding_gif' 
                            src={coding_gif}
                            alt='coding_gif'/>
                
                    <img className='gifs coding_gif' 
                            src={coding_gif}
                            alt='coding_gif'/>

                    <img className='gifs coding_gif' 
                            src={coding_gif}
                            alt='coding_gif'/>

                    <img className='gifs coding_gif' 
                            src={coding_gif}
                            alt='coding_gif'/>

                    <div className='hero_text'>
                        <h1>Welcome!</h1>
                        <h2>This is my personal blog</h2>
                        <h3>This is like a digital collection of all my inventions 
                            and acts like a catalogue of my projects. 
                            <br/>
                            This is a place where i store as well as share my Ideas,
                            Creations & Thoughts 
                        </h3>
                    </div>

                </div>

                <div className='right-side-img'></div>
                




            </section>




            <Latest_Posts />
        </div>
    )
}

export default Home