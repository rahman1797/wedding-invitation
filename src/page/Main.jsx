import React, { Component } from 'react';
//Page
// import Navbar from './component/Navbar';
import Event from './Event';
import Gallery from './Gallery';
import Greeting from './Greeting';
import Header from './Header';
import Ourstory from './Ourstory';

import {Helmet} from "react-helmet";
import { useParams } from "react-router-dom";
import Bridesmaid from './Bridesmaid';
import Guestbook from './Guestbook';
import CountdownPage from './CountdownPage';

function Main() {
   const { name } = useParams();
    return (
        <>        
            <div id='page'>       
                {/* <Navbar /> */}
                <Header name={name} />
                <Bridesmaid />
                <Greeting name={name} />
                <Event />
                <Gallery />
                <Ourstory />
                <CountdownPage />
                <Guestbook />
            </div>
            <div className='fixed-bottom text-center mx-auto'>
                <button className='btn btn-default'><i className="fas fa-gift"></i> Kirim Hadiah</button>
            </div>
            <Helmet>      
                <script src="assets/js/main.js"></script>
            </Helmet>
        </>
    )    
}

export default Main;
