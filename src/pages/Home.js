import React, { Component } from 'react'
import Navbar from './Navbar';
import social_friends from '../images/undraw_developer_activity_re_39tg.svg';

function Home() {
return (
    <>
    <Navbar />
    <div className='hero_class'>
        <h1>Welcome Home</h1>
        <img src={social_friends} alt='social' />
    </div>
    
    </>);
}

export default Home;