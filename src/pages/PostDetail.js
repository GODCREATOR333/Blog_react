import React from 'react'
import { Link } from 'react-router-dom'
import thumbnail from "../assets/images/thumbnail1.jpg"

function PostDetail() {
    return (
        <section className='post_detail'>
            <div className='container post-detail_container'>
                <div className='post-detail_header' >
                    <div className='post-details_buttons '>
                        <Link to={`/posts/werwer/edit`} className='btn sm primary'> Edit </Link>
                        <Link to={`/posts/id/delete`} className='btn sm danger'> Delete </Link>

                    </div>
                </div>

                <h1 className='post-detail_title'>This is the post title</h1>

                <div className='post-detail_thumbnail'>
                    <img src={thumbnail} alt={'img'} />
                </div>

                <p>
                "But I must explain to you how all this mistaken idea 
                of denouncing pleasure and praising pain was born and I
                will give you a complete account of the system, and expound
                 the actual teachings of the great explorer of the truth,
                  the master-builder of human happiness. No one rejects, 
                  dislikes, or avoids pleasure itself, because it is
                   pleasure, but because those who do not know how to 
                   pursue pleasure rationally encounter consequences 
                   that are extremely painful. Nor again is there anyone
                    who loves or pursues or desires to obtain pain of
                     itself, because it is pain, but because occasionally
                      circumstances occur in which toil and pain can 
                      procure him some great pleasure. To take a trivial 
                      example, which of us ever undertakes laborious 
                      physical exercise, except to obtain some advantage 
                      from it? But who has any right to find fault with 
                      a man who chooses to enjoy a pleasure that has no
                       annoying consequences, or one who avoids a pain
                        that produces no resultant pleasure?"
                    
                </p>

                <p>
                "But I must explain to you how all this mistaken idea 
                of denouncing pleasure and praising pain was born and I
                will give you a complete account of the system, and expound
                 the actual teachings of the great explorer of the truth,
                  the master-builder of human happiness. No one rejects, 
                  dislikes, or avoids pleasure itself, because it is
                   pleasure, but because those who do not know how to 
                   pursue pleasure rationally encounter consequences 
                   that are extremely painful. Nor again is there anyone
                    who loves or pursues or desires to obtain pain of
                     itself, because it is pain, but because occasionally
                      circumstances occur in which toil and pain can 
                      procure him some great pleasure. To take a trivial 
                      example, which of us ever undertakes laborious 
                      physical exercise, except to obtain some advantage 
                      from it? But who has any right to find fault with 
                      a man who chooses to enjoy a pleasure that has no
                       annoying consequences, or one who avoids a pain
                        that produces no resultant pleasure?"
                    
                </p>

                <p>
                "But I must explain to you how all this mistaken idea 
                of denouncing pleasure and praising pain was born and I
                will give you a complete account of the system, and expound
                 the actual teachings of the great explorer of the truth,
                  the master-builder of human happiness. No one rejects, 
                  dislikes, or avoids pleasure itself, because it is
                   pleasure, but because those who do not know how to 
                   pursue pleasure rationally encounter consequences 
                   that are extremely painful. Nor again is there anyone
                    who loves or pursues or desires to obtain pain of
                     itself, because it is pain, but because occasionally
                      circumstances occur in which toil and pain can 
                      procure him some great pleasure. To take a trivial 
                      example, which of us ever undertakes laborious 
                      physical exercise, except to obtain some advantage 
                      from it? But who has any right to find fault with 
                      a man who chooses to enjoy a pleasure that has no
                       annoying consequences, or one who avoids a pain
                        that produces no resultant pleasure?"
                    
                </p>


                <p>
                "But I must explain to you how all this mistaken idea 
                of denouncing pleasure and praising pain was born and I
                will give you a complete account of the system, and expound
                 the actual teachings of the great explorer of the truth,
                  the master-builder of human happiness. No one rejects, 
                  dislikes, or avoids pleasure itself, because it is
                   pleasure, but because those who do not know how to 
                   pursue pleasure rationally encounter consequences 
                   that are extremely painful. Nor again is there anyone
                    who loves or pursues or desires to obtain pain of
                     itself, because it is pain, but because occasionally
                      circumstances occur in which toil and pain can 
                      procure him some great pleasure. To take a trivial 
                      example, which of us ever undertakes laborious 
                      physical exercise, except to obtain some advantage 
                      from it? But who has any right to find fault with 
                      a man who chooses to enjoy a pleasure that has no
                       annoying consequences, or one who avoids a pain
                        that produces no resultant pleasure?"
                    
                </p>

                <p>
                "But I must explain to you how all this mistaken idea 
                of denouncing pleasure and praising pain was born and I
                will give you a complete account of the system, and expound
                 the actual teachings of the great explorer of the truth,
                  the master-builder of human happiness. No one rejects, 
                  dislikes, or avoids pleasure itself, because it is
                   pleasure, but because those who do not know how to 
                   pursue pleasure rationally encounter consequences 
                   that are extremely painful. Nor again is there anyone
                    who loves or pursues or desires to obtain pain of
                     itself, because it is pain, but because occasionally
                      circumstances occur in which toil and pain can 
                      procure him some great pleasure. To take a trivial 
                      example, which of us ever undertakes laborious 
                      physical exercise, except to obtain some advantage 
                      from it? But who has any right to find fault with 
                      a man who chooses to enjoy a pleasure that has no
                       annoying consequences, or one who avoids a pain
                        that produces no resultant pleasure?"
                    
                </p>
            </div>

        </section>
    )
}

export default PostDetail