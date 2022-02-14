import React, { Component } from 'react'

import './style/Bridesmaid.css'
// import $ from 'jquery'
import jQuery from 'jquery'

import './style/Bridesmaid.js'

import test from '../assets/images/face-evita.jpg';

export default class Bridesmaid extends Component {

    // componentDidMount() {
    //     var silder = $(".owl-carousel");
    //     silder.owlCarousel({
    //         autoplay: true,
    //         autoplayTimeout: 3000,
    //         autoplayHoverPause: false,
    //         items: 1,
    //         stagePadding: 20,
    //         center: true,
    //         nav: false,
    //         margin: 30,
    //         dots: true,
    //         loop: true,
    //         responsive: {
    //             0: { items: 2 },
    //             480: { items: 2 },
    //             575: { items: 2 },
    //             768: { items: 2 },
    //             991: { items: 3 },
    //             1200: { items: 4 }
    //         }
    //     });
    // }

  render() {

    return (
        <div className="owl-carousel owl-theme mt-5">
            <div className="owl-item">
                <div className="card">
                    <div className="img-card"> <img src={test} alt="" /> </div>
                    <div className="testimonial mt-4 mb-2"> Lorem ipsum. </div>
                    <div className="name"> Bella </div>
                </div>
            </div>
            <div className="owl-item">
                <div className="card">
                    <div className="img-card"> <img src="https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" /> </div>
                    <div className="testimonial mt-4 mb-2"> Lorem ipsum. </div>
                    <div className="name"> Dins </div>
                </div>
            </div>
            <div className="owl-item">
                <div className="card">
                    <div className="img-card"> <img src="https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /> </div>
                    <div className="testimonial mt-4 mb-2"> Lorem ipsum. </div>
                    <div className="name"> Ferri </div>
                </div>
            </div>
            <div className="owl-item">
                <div className="card">
                    <div className="img-card"> <img src="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /> </div>
                    <div className="testimonial mt-4 mb-2"> Lorem ipsum. </div>
                    <div className="name"> Putri </div>
                </div>
            </div>
            <div className="owl-item">
                <div className="card">
                    <div className="img-card"> <img src="https://images.pexels.com/photos/1832959/pexels-photo-1832959.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /> </div>
                    <div className="testimonial mt-4 mb-2"> Lorem ipsum. </div>
                    <div className="name"> Tita </div>
                </div>
            </div>
            <div className="owl-item">
                <div className="card">
                    <div className="img-card"> <img src="https://images.pexels.com/photos/718261/pexels-photo-718261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" /> </div>
                    <div className="testimonial mt-4 mb-2"> Lorem ipsum. </div>
                    <div className="name"> Winda </div>
                </div>
            </div>
        </div>
    )
  }
}