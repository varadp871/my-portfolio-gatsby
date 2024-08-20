import React, { Component } from 'react'
import Navbar from './Navbar';

function Home() {

    return (<>
    <div className="bg_color_light">
        <Navbar />
        <h1 className="text_color_light headingStyles">Welcome home!</h1>
        </div></>);
}

export default Home;