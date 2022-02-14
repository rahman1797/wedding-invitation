import React, { Component } from 'react'

import OwlCarousel from 'react-owl-carousel';
import './style/Bridesmaid.css'

import test from '../assets/images/face-evita.jpg';

export default class Bridesmaid extends Component {

  render() {

    const options = {
        margin: 30,
        autoplay: true,
        autoplayTimeout: 1500,
        items: 1,
        autoplayHoverPause: false,
        stagePadding :20,
        center: true,
        nav: false,
        margin: 30,
        dots: true, 
        navText: ["Prev", "Next"],
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
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
        <OwlCarousel className='owl-theme' {...options} loop>
            <div class='item'>
                <div className="card">
                    <div className="img-card"> 
                        <img src={test} alt="" /> 
                    </div>
                    <div className="testimonial mt-4 mb-2">Lorem ipsum.</div>
                    <div className="name">Bella</div>
                </div>
            </div>
            <div class='item'>
                <div className="card">
                    <div className="img-card"> 
                        <img src={test} alt="" /> 
                    </div>
                    <div className="testimonial mt-4 mb-2">Lorem ipsum.</div>
                    <div className="name">Dins</div>
                </div>
            </div>
            <div class='item'>
                <div className="card">
                    <div className="img-card"> 
                        <img src={test} alt="" /> 
                    </div>
                    <div className="testimonial mt-4 mb-2">Lorem ipsum.</div>
                    <div className="name">Ferri</div>
                </div>
            </div>
            <div class='item'>
                <div className="card">
                    <div className="img-card"> 
                        <img src={test} alt="" /> 
                    </div>
                    <div className="testimonial mt-4 mb-2">Lorem ipsum.</div>
                    <div className="name">Putri</div>
                </div>
            </div>
            <div class='item'>
                <div className="card">
                    <div className="img-card"> 
                        <img src={test} alt="" /> 
                    </div>
                    <div className="testimonial mt-4 mb-2">Lorem ipsum.</div>
                    <div className="name">Tita</div>
                </div>
            </div>
            <div class='item'>
                <div className="card">
                    <div className="img-card"> 
                        <img src={test} alt="" /> 
                    </div>
                    <div className="mt-4 mb-2">Lorem ipsum.</div>
                    <div className="name">Winda</div>
                </div>
            </div>
        </OwlCarousel>
        // <div className="owl-carousel owl-theme mt-5">
        //     <div className="owl-item">
        //         <div className="card">
        //             <div className="img-card"> <img src={test} alt="" /> </div>
        //             <div className="testimonial mt-4 mb-2"> Lorem ipsum. </div>
        //             <div className="name"> Bella </div>
        //         </div>
        //     </div>
        //     <div className="owl-item">
        //         <div className="card">
        //             <div className="img-card"> <img src={test} alt="" /> </div>
        //             <div className="testimonial mt-4 mb-2"> Lorem ipsum. </div>
        //             <div className="name"> Dins </div>
        //         </div>
        //     </div>
        //     <div className="owl-item">
        //         <div className="card">
        //             <div className="img-card"> <img src={test} alt="" /> </div>
        //             <div className="testimonial mt-4 mb-2"> Lorem ipsum. </div>
        //             <div className="name"> Ferri </div>
        //         </div>
        //     </div>
        //     <div className="owl-item">
        //         <div className="card">
        //             <div className="img-card"> <img src={test} alt="" /> </div>
        //             <div className="testimonial mt-4 mb-2"> Lorem ipsum. </div>
        //             <div className="name"> Putri </div>
        //         </div>
        //     </div>
        //     <div className="owl-item">
        //         <div className="card">
        //             <div className="img-card"> <img src={test} alt="" /> </div>
        //             <div className="testimonial mt-4 mb-2"> Lorem ipsum. </div>
        //             <div className="name"> Tita </div>
        //         </div>
        //     </div>
        //     <div className="owl-item">
        //         <div className="card">
        //             <div className="img-card"> <img src={test} alt="" /> </div>
        //             <div className="testimonial mt-4 mb-2"> Lorem ipsum. </div>
        //             <div className="name"> Winda </div>
        //         </div>
        //     </div>
        // </div>
    )
  }
}