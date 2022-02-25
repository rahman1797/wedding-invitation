import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
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

import Backsound from '../assets/music/backsound-compressed.ogg'

function Main() {

    const [playMusic] = useState(new Audio(Backsound));
    const [isPlay, setIsPlay] = useState(false);

    let Opened = useSelector((state) => state.openedInvitation);
    let slug_url = useParams();
    let navigate = useNavigate();

    const playAndPause = () => {
        setIsPlay(!isPlay);
        
        if(isPlay){
            playMusic.play();
        }
        else {
            playMusic.pause();
        }
    }

    useEffect(() => {
        if(Opened !== true) {
            return navigate(`/${slug_url.name}`);
        }

        // onClick of first interaction on page before I need the sounds
        playMusic.play();

        // later on when you actually want to play a sound at any point without user interaction
        playMusic.src = Backsound;
        playMusic.play();
    }, [])

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
                <button className='btn btn-default' onClick={playAndPause}><i className={`fas ${isPlay ? 'fa-play' : 'fa-pause'}`}></i></button>
                <button className='btn btn-default'><i className="fas fa-gift"></i> Kirim Hadiah</button>
            </div>
            <Helmet>      
                <script src="assets/js/main.js"></script>
            </Helmet>
        </>
    )    
}

export default Main;
