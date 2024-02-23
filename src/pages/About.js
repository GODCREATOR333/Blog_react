import React from 'react'
import html_logo from '../assets/logos/html.svg'
import css_logo from '../assets/logos/css.svg';
import javascript_logo from '../assets/logos/javascript.svg';
import react_logo from '../assets/logos/react.svg';
import nodejs_logo from '../assets/logos/nodejs.svg';
import figma_logo from '../assets/logos/figma.svg';
import mongo_logo from '../assets/logos/mongo.svg';
import firebase_logo from '../assets/logos/firebase.svg';
import git_logo from '../assets/logos/git.svg';
import python_logo from '../assets/logos/python.svg';
import tensorflow_logo from '../assets/logos/tensorflow.svg';
import opencv_logo from '../assets/logos/opencv.svg';
import linux_logo from '../assets/logos/linux.svg';
import autodesk_logo from '../assets/logos/autodesk.svg';
import ansys_logo from '../assets/logos/ansys.png';
import adobe_logo from '../assets/logos/adobe.svg';
import solidworks_logo from '../assets/logos/solidworks.svg';
import unreal_logo from '../assets/logos/unreal.svg'
import nvidia_logo from '../assets/logos/nvidia.svg'
import arduino_logo from '../assets/logos/arduino.svg'


function About() {
    return (
        <section>


            <div id='about' className=' container about'>

                <h1>About Me</h1>
    
                <p>Hey there 👋! I'm Hari Preetham, a BTech student at Jawaharlal Nehru Technological University, Hyderabad.
                I'm an enthusiastic engineering student passionate about creating innovative solutions. With a love for mathematics, physics, coding, and design, I aim to craft remarkable technologies.
                Beyond academics, you'll find me indulging in bike rides, football matches, and gym sessions. I possess a proficiency in skills essential to both the scientific community and the tech industry.
                My ultimate drive is my profound passion for engineering and the boundless possibilities it offers. Let's build a fantastic future together! </p>
            
                <div className='logos'>
                    <img src={html_logo} alt='html_img' />
                    <img src={css_logo} alt='css_img' />
                    <img src={javascript_logo} alt='js_img' />
                    <img src={react_logo} alt='react_img' />
                    <img src={nodejs_logo} alt='nodejs_img' />
                    <img src={figma_logo} alt='figma_img' />
                    <img src={mongo_logo} alt='mongo_img' />
                    <img src={firebase_logo} alt='firebase_img' />
                    <img src={git_logo} alt='git_img' />
                    <img src={python_logo} alt='python_img' />
                    <img src={tensorflow_logo} alt='tensorflow_img' />
                    <img src={opencv_logo} alt='opencv_img' />
                    <img src={linux_logo} alt='linux_img' />
                    <img src={autodesk_logo} alt='autodesk_img' />
                    <img src={adobe_logo} alt='adobe_img' />
                    <img src={solidworks_logo} alt='solidworks_img' />
                    <img src={unreal_logo} alt='unreal_img' />
                    <img src={nvidia_logo} alt='nvidia_img' />
                    <img src={arduino_logo} alt='arduino_img' />
                    <img src={ansys_logo} alt='ansys_img' />
                </div>


        </div>
        </section>
    )
}

export default About