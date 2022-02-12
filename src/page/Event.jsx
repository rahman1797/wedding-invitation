import React from 'react';
import Background from '../assets/images/image1.jpg'
import Frame1 from '../assets/images/frame-1.png'

function Event() {
  return (
    <div id="fh5co-event" className="fh5co-bg" style={{backgroundImage: `url(${Background})`}}>
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                    <img className='frame mb-4 event' src={Frame1} alt="" />
                    <h2 className='playball heading-color-background'>Wedding Events</h2>
                </div>
            </div>
            <div className="row">
                <div className="display-t">
                    <div className="display-tc">
                        <div className="col-md-10 col-md-offset-1">
                            <div className="col-md-6 col-sm-6 text-center">
                                <div className="event-wrap animate-box">
                                    <h3>Main Ceremony <br />(<small className='text-light'>Akad Nikah</small>)</h3>
                                    <div className="event-col">
                                        <i className="icon-clock"></i>
                                        <span>7:30 - 9:00</span>
                                    </div>
                                    <div className="event-col">
                                        <i className="icon-calendar"></i>
                                        <span>13 Maret 2022</span>
                                    </div>
                                    <div className="event-col">
                                        <i className="icon-location2"></i>
                                        <span>Gedung Chandraca</span>
                                    </div>
                                    <p className='d-inline-block'>Jl R.A. Fadillah, Cijantung - Jakarta Timur <br />(depan SMPN 103)</p>
                                    <a href='https://goo.gl/maps/av2YCpw5b8Jn8iyB7' className='btn btn-default'> Open Google Maps </a>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 text-center">
                                <div className="event-wrap animate-box">
                                    <h3>Wedding Party<br />(<small className='text-light'>Resepsi</small>)</h3>
                                    <div className="event-col">
                                        <i className="icon-clock"></i>
                                        <span>10:30 - 12:00</span>
                                    </div>
                                    <div className="event-col">
                                        <i className="icon-calendar"></i>
                                        <span>13 Maret 2022</span>
                                    </div>
                                    <div className="event-col">
                                        <i className="icon-location2"></i>
                                        <span>Gedung Chandraca</span>
                                    </div>
                                    <p className='d-inline-block' >Jl R.A. Fadillah, Cijantung - Jakarta Timur <br />(depan SMPN 103)</p>
                                    <a href='https://goo.gl/maps/av2YCpw5b8Jn8iyB7' className='btn btn-default'> Open Google Maps </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Event;