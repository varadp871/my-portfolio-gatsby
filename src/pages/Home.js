import React, { Component } from 'react'
import Navbar from './Navbar';
import social_friends from '../images/undraw_developer_activity_re_39tg.svg';
import '../styles/Hero.css'

function Home() {
return (
    <>
    <Navbar />
    <div className='hero_class'>
        <section className='hero_section'>
            <div>
            <p>Hello!</p>
            <p>I am Varad Panke. A DevOps Engineer by profession and a Web Developer by Passion</p>
            </div>
        </section>
        <img className="hero_img" src={social_friends} alt='social' />
    </div>
    
    </>);
}

export default Home;