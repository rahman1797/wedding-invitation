import React from 'react';
//Page
import Event from './Event';
import Gallery from './Gallery';
import Greeting from './Greeting';
import Header from './Header';
import Ourstory from './Ourstory';
import Bridesmaid from './Bridesmaid';
import CountdownPage from './CountdownPage';
import Guestbook from './Guestbook';
import Footer from './Footer';
import {Helmet} from "react-helmet";

function Main() {
   
    return (
        <>        
            <div id='page'>       
                {/* <Navbar /> */}
                <Header />
                <Greeting />
                <Event />
                <Gallery />
                <Ourstory />
                <Bridesmaid />
                <CountdownPage /> 
                <Guestbook />
                <Footer />
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
