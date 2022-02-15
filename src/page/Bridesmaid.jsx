import React, { Component } from 'react'

import OwlCarousel from 'react-owl-carousel';
import './style/Bridesmaid.css'

import test from '../assets/images/face-evita.jpg';

import Instagram from '../assets/images/svg/instagram-black.webp'

import Frame1 from '../assets/images/frame-1.png'


export default class Bridesmaid extends Component {

  render() {

    const options = {
        margin: 10,
        // autoplay: true,
        // autoplayTimeout: 2300,
        items: 1,
        autoplayHoverPause: false,
        // stagePadding :20,
        center: true,
        nav: false,
        dots: true, 
        navText: ["Prev", "Next"],
        // smartSpeed: 1000,
        responsive: {
            0: {
                items: 2,
            },
            400: {
                items: 2,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 5,
    
            }
        },
    };

    return (
        <div className='row'>
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                <img className='frame mb-4' src={Frame1} alt="" />
                <h1 className='playball heading-white-background'>Our Bridesmaid</h1>
            </div>
            <OwlCarousel className='owl-theme' {...options} loop>
                <div className='row d-flex'>
                    <div className="mx-auto img-card"> 
                        <img src={test} alt="" /> 
                    </div>
                    <div className='col-12 madurai'>
                        <div className="name">Bella</div>
                    </div>
                </div>
                <div className='row d-flex'>
                    <div className="mx-auto img-card"> 
                        <img src={test} alt="" /> 
                    </div>
                    <div className='col-12'>
                        <div className="name">Dins</div>
                    </div>
                </div>
                <div className='row d-flex'>
                    <div className="mx-auto img-card"> 
                        <img src={test} alt="" /> 
                    </div>
                    <div className='col-12'>
                        <div className="name">Ferri</div>
                    </div>
                </div>
                <div className='row d-flex'>
                    <div className="mx-auto img-card"> 
                        <img src={test} alt="" /> 
                    </div>
                    <div className='col-12'>
                        <div className="name">Putri</div>
                    </div>
                </div>
                <div className='row d-flex'>
                    <div className="mx-auto img-card"> 
                        <img src={test} alt="" /> 
                    </div>
                    <div className='col-12'>
                        <div className="name">Tita</div>
                    </div>
                </div>
                <div className='row d-flex'>
                    <div className="mx-auto img-card"> 
                        <img src={test} alt="" /> 
                    </div>
                    <div className='col-12'>
                        <div className="name">Winda</div>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    )
  }
}