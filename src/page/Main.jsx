import React, { useState, useEffect, useLayoutEffect } from 'react';
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
import AOS from 'aos';
import copy from 'copy-to-clipboard';

import Backsound from '../assets/music/audio.mp3'
import mandiri from '../assets/images/svg/mandiri.svg'
import cimb from '../assets/images/svg/cimb.svg'
import gift from '../assets/images/svg/gift.svg'
import home from '../assets/images/svg/home.svg'
// import Navbar from './component/Navbar';

function Main() {
    AOS.init();

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

    useLayoutEffect(() => {
        if(Opened !== true) {
            return navigate(`/${slug_url.name}`);
        }
        playMusic.play();
    }, [playMusic]);

    useEffect(() => {
        if(Opened !== true) {
            return navigate(`/${slug_url.name}`);
        }
        playMusic.play();
    }, [playMusic]);

    const copyclipboard = (value) => {
        copy(value, {
            debug: true,
            message: 'Press #{key} to copy',
          });

        alert('Successfully copied the text');
    }

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
                {/* <Navbar /> */}
            </div>
            <div className='fixed-bottom text-center mx-auto'>
                <button className='btn btn-slide-pink' onClick={playAndPause}><i className={`fas ${isPlay ? 'fa-play' : 'fa-pause'}`}></i></button>
                <button className='btn btn-slide-pink' data-toggle="modal" data-target="#kirimHadiah"><i className="fas fa-gift"></i> Kirim Hadiah</button>
            </div>
            <Helmet>      
                <script src="assets/js/main.js"></script>
            </Helmet>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="kirimHadiah" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body d-flex madurai">
                        <div className='row'>
                            <img src={gift} className="mx-auto gift-logo" />
                            
                            <div className='d-flex p-3'>
                                <div className='col-md-3 col-4 my-auto'>
                                    <img src={mandiri} className='rekening-logo' />
                                </div>
                                <div className='col-9'>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <small>(Bank Mandiri)</small>
                                        </div>
                                        <div className='col-12'>
                                            a/n Evita Dwi Oktaviani
                                        </div>
                                        <div className='col-12'>
                                            <span className='select' onClick={() => copyclipboard(1570006837208)}><strong>1570006837208</strong> <i className="fa-solid fa-clone"></i></span> 
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='d-flex p-3'>
                                <div className='col-md-3 col-4 my-auto'>
                                    <img src={cimb} className='rekening-logo' />
                                </div>
                                <div className='col-9'>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <small>(Bank CIMB Niaga)</small>
                                        </div>
                                        <div className='col-12'>
                                            a/n Maulana Rahman Nur
                                        </div>
                                        <div className='col-12'>
                                            <span className='select' onClick={ () => copyclipboard(706525194600) } ><strong>706525194600</strong> <i className="fa-solid fa-clone"></i></span> 
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='d-flex p-3'>
                                <div className='col-md-3 col-4 my-auto'>
                                    <img src={home} className='rekening-logo' />
                                </div>
                                <div className='col-9'>
                                    <span className='select' onClick={ () => copyclipboard("Jl Man 6, RT.04/07, No.51E, Kel.Dukuh, Kec.Kramatjati, Jakarta Timur, 13550") } >Jl Man 6, RT.04/07, No.51E, Kel.Dukuh, Kec.Kramatjati, Jakarta Timur, 13550 <i className="fa-solid fa-clone"></i></span> 
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )    
}

export default Main;
