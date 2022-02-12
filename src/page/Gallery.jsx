import React from 'react';

//Photo
import Jawa1 from '../assets/images/prewedding/jawa1.jpg'
import Jawa2 from '../assets/images/prewedding/jawa2.jpg'
import Kuning1 from '../assets/images/prewedding/kuning1.jpg'
import Kuning2 from '../assets/images/prewedding/kuning2.jpg'
import Pink1 from '../assets/images/prewedding/pink1.jpg'
import Pink2 from '../assets/images/prewedding/pink2.jpg'

import Frame2 from '../assets/images/frame-2.png'

function Gallery() {
  return (
        <>
        <div id="fh5co-gallery" className="fh5co-section-gray">
            <div className="container mb-5">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                        <img className='frame mb-2' src={Frame2} alt="" />
                        <h1 className='playball heading-white-background'>Our Gallery</h1>
                    </div>
                </div>
                <div className="row row-bottom-padded-md">
                    <div className="col-md-12">
                        <ul id="fh5co-gallery-list">
                            <li className="one-third animate-box" data-animate-effect="fadeIn" style={{backgroundImage: `url(${Jawa1})`}}> 
                                <a href={Jawa1}></a>
                            </li>
                            <li className="one-third animate-box" data-animate-effect="fadeIn" style={{backgroundImage: `url(${Jawa2})`}}>
                                <a href={Jawa2} className="color-2"></a>
                            </li>
                            <li className="one-third animate-box" data-animate-effect="fadeIn" style={{backgroundImage: `url(${Pink1})`}}>
                                <a href={Pink1} className="color-3"></a>
                            </li>
                            <li className="one-third animate-box" data-animate-effect="fadeIn" style={{backgroundImage: `url(${Pink2})`}}>
                                <a href={Pink2} className="color-4"></a>
                            </li>
                            <li className="one-third animate-box" data-animate-effect="fadeIn" style={{backgroundImage: `url(${Kuning1})`}}>
                                <a href={Kuning1} className="color-3"></a>
                            </li>
                            <li className="one-third animate-box" data-animate-effect="fadeIn" style={{backgroundImage: `url(${Kuning2})`}}>
                                <a href={Kuning2} className="color-4"></a>
                            </li>
                        </ul>		
                    </div>
                </div>
            </div>
            
        </div>
        </>
  );
}

export default Gallery;
