import React from 'react'
import Latest_Posts from '../Components/Latest_Posts'
import PostsItem from '../Components/PostsItem'

function Home() {
    return (
        <div>
            <section className='hero'>

                <div className='left-side-info'>
                    
                    <div className='container-home '>
                        <h1  className='hero_text hero__h1' > Welcome!</h1>
                        <h2 className='hero_text hero__h2'> This is my personal blog</h2>
                        <h3 className='hero_text hero__h3'> This is like a digital collection of all my inventions 
                            and acts like a catalogue of my projects. 
                            <br/>
                            This is a place where i store as well as share my Ideas,
                            Creations & Thoughts 
                        </h3>
                        <div className='link_home'>
                        <p className='hero_text hero__p'> Check out my Portifolio website here @ </p>
                        
                        <div className='buttons'>
                            <a href="https://haripreetham-portifolio.web.app/" target="_blank" rel="noopener noreferrer">
                                <button className='button_hero'>Portifolio<span style={{ fontSize: '18px' }}> ↗ </span></button>
                            </a>
                        </div>

                        </div>
                        


                    </div>

                </div>

                <div className='right-side-img'></div>
                
                



            </section>

            <PostsItem/>
            
        </div>
    )
}

export default Home