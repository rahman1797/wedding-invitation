import React, { Component } from 'react'

import OwlCarousel from 'react-owl-carousel';
import './style/Bridesmaid.css'

import test from '../assets/images/face-evita.jpg';
import bella from '../assets/images/bridesmaid/bella.jpg'
import ferri from '../assets/images/bridesmaid/ferri.jpg'
import tita from '../assets/images/bridesmaid/tita.jpg'
import putri from '../assets/images/bridesmaid/putri.jpg'

import Frame1 from '../assets/images/frame-1.png'


export default class Bridesmaid extends Component {

  render() {

    const options = {
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2800,
        items: 1,
        autoplayHoverPause: false,
        // stagePadding :20,
        center: true,
        nav: false,
        dots: true, 
        navText: ["Prev", "Next"],
        smartSpeed: 1000,
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
            <div className="col-md-12 text-center section-heading animate-box">
                <img className='frame mb-4' src={Frame1} alt="" />
                <h1 className='playball heading-white-background'>Our Bridesmaid</h1>
                Click to launch to their instagram
            </div>
            <OwlCarousel className='owl-theme' {...options} loop>
                <a target='_blank' rel="noreferrer" href='https://instagram.com/bellaydt?utm_medium=copy_link' className='row d-flex'>
                    <div className="mx-auto img-card"> 
                        <img src={bella} alt="" loading="lazy"/> 
                    </div>
                    <div className='col-12 madurai'>
                        <div className="name">Bella</div>
                    </div>
                </a>
                <a target='_blank' rel="noreferrer" href='https://instagram.com/dinssetya?utm_medium=copy_link' className='row d-flex'>
                    <div className="mx-auto img-card"> 
                        <img src={test} alt="" loading="lazy"/> 
                    </div>
                    <div className='col-12'>
                        <div className="name madurai">Dins</div>
                    </div>
                </a>
                <a target='_blank' rel="noreferrer" href='https://instagram.com/ferrinandaa?utm_medium=copy_link' className='row d-flex'>
                    <div className="mx-auto img-card"> 
                        <img src={ferri} alt="" loading="lazy"/> 
                    </div>
                    <div className='col-12'>
                        <div className="name madurai">Ferri</div>
                    </div>
                </a>
                <a target='_blank' rel="noreferrer" href='https://instagram.com/putridnrahma?utm_medium=copy_link' className='row d-flex'>
                    <div className="mx-auto img-card"> 
                        <img src={putri} alt="" loading="lazy"/> 
                    </div>
                    <div className='col-12'>
                        <div className="name madurai">Putri</div>
                    </div>
                </a>
                <a target='_blank' rel="noreferrer" href='https://instagram.com/titarsita?utm_medium=copy_link' className='row d-flex'>
                    <div className="mx-auto img-card"> 
                        <img src={tita} alt="" loading="lazy"/> 
                    </div>
                    <div className='col-12'>
                        <div className="name madurai">Tita</div>
                    </div>
                </a>
                <a target='_blank' rel="noreferrer" href='https://instagram.com/windazu?utm_medium=copy_link' className='row d-flex'>
                    <div className="mx-auto img-card"> 
                        <img src={test} alt="" loading="lazy"/> 
                    </div>
                    <div className='col-12'>
                        <div className="name madurai">Winda</div>
                    </div>
                </a>
            </OwlCarousel>
        </div>
    )
  }
}