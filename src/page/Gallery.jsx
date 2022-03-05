import React from 'react';

//thumbnails
import ThumbJawa1 from '../assets/images/prewedding/thumb-jawa1.jpg'
import ThumbJawa2 from '../assets/images/prewedding/thumb-jawa2.jpg'
import ThumbKuning1 from '../assets/images/prewedding/kuning1.jpg'
import ThumbKuning2 from '../assets/images/prewedding/thumb-kuning2.jpg'
import ThumbPink1 from '../assets/images/prewedding/thumb-pink1.jpg'
import ThumbPink2 from '../assets/images/prewedding/thumb-pink2.jpg'

import Frame2 from '../assets/images/frame-2.png'

import { SRLWrapper } from "simple-react-lightbox";

function Gallery() {

    const options = {
        settings: {
          autoplaySpeed: 1500,
          transitionSpeed: 900,
          slideAnimationType: 'both',
        },
        buttons: {
            showDownloadButton: false
        },
        caption: {
          showCaption: false
        }
      };

  return (
        <>
        {/* <Lightbox />  */}
        
        <div id="section-gallery" className="">
            <div className="container mb-5">
                <div className="row">
                    <div className="col-md-12 text-center section-heading animate-box">
                        <img className='frame mb-2' src={Frame2} alt="" loading="lazy" />
                        <h1 className='playball heading-white-background'>Our Gallery</h1>
                    </div>
                </div>
                <div className="row row-bottom-padded-md">
                    <div className="col-md-12">
                        <ul id="section-gallery-list">
                            <SRLWrapper options={options}>  
                                <div className='row'>
                                <a href={ThumbJawa1} className="col-md-4 col-6">
                                    <img className="one-third w-100 animate-box" src={ThumbJawa1} alt="" loading="lazy"/>
                                </a>
                                <a href={ThumbJawa2} className="col-md-4 col-6">
                                    <img className="one-third w-100 animate-box" src={ThumbJawa2} alt="" loading="lazy"/>
                                </a>
                                <a href={ThumbPink1} className="col-md-4 col-6">
                                    <img className="one-third w-100 animate-box" src={ThumbPink1} alt="" loading="lazy"/>
                                </a>
                                <a href={ThumbPink2} className="col-md-4 col-6">
                                    <img className="one-third w-100 animate-box" src={ThumbPink2} alt="" loading="lazy"/>
                                </a>
                                <a href={ThumbKuning1} className="col-md-4 col-6">
                                    <img className="one-third w-100 animate-box" src={ThumbKuning1} alt="" loading="lazy"/>
                                </a>
                                <a href={ThumbKuning2} className="col-md-4 col-6">
                                    <img className="one-third w-100 animate-box" src={ThumbKuning2} alt="" loading="lazy"/>
                                </a>
                                </div>
                            </SRLWrapper>	
                        </ul>	               
                    </div>
                </div>
            </div>
        </div>
        </>
  );
}

export default Gallery;
