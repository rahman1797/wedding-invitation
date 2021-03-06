import React, { Component } from 'react';
import Covid from './Covid';
//photos
import Evita from '../assets/images/face_evita_framing.png'
import Rahman from '../assets/images/face_rahman_framing.png'
import Instagram from '../assets/images/svg/instagram.svg'
import Frame1 from '../assets/images/frame-1.png'

export default class Greeting extends Component {
    
    render() {
        return (
            <>
            <div className="wave-group">
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
            </div>
            <Covid />
            <div id="greeting">
                <div className="container mt-5" id='section-greeting'>
                    <div className="row">
                        <div className="col-md-12 text-center animate-box">
                            <img className='frame mb-4' src={Frame1} alt="" />
                            <h1 className='playball heading-white-background'>Bride & Groom</h1>
                            <div className='text-center'>
                                <p style={{ fontSize: '16px' }}><i>Assalamu’alaikum Warahmatullahi Wabarakatuh</i></p>
                                <p className='mt-4 p-5' style={{ fontSize: '16px' }}>Maha suci Allah SWT yang telah menciptakan makhluk-Nya berpasang-pasangan.
                                Ya Allah, perkenankanlah kami merangkai kasih sayang yang Kau ciptakan di antara putra-putri kami:</p>
                            </div>
                        </div>
                    </div>

                    <div className="couple-wrap animate-box">
                        <div className="couple-half my-4">
                            <div className="groom">
                                <img src={Evita} alt="bride" className="img-responsive" />
                            </div>
                            <div className="desc-groom">
                                <h3 className='playball bried-groom'>Evita Dwi Oktaviani, S.Pd.</h3>
                                <p className="desc mr-4">Putri dari pasangan Bpk. Khasanudin & Ibu Meti</p>
                                <a href='https://www.instagram.com/evita.do/'><img className='ig-icon' src={Instagram} alt='' /></a>
                            </div>
                        </div>
                        <p className="heart text-center my-4"><i className="icon-heart2"></i></p>
                        <div className="couple-half my-4">
                            <div className="bride">
                                <img src={Rahman} alt="groom" className="img-responsive" />
                            </div>
                            <div className="desc-bride">
                                <h3 className='playball bried-groom'>Maulana Rahman Nur, S.Kom.</h3>
                                <p className="desc ml-4">Putra dari pasangan Bpk. Usep Muhamad Sigih & Ibu Yuni Puspitorini</p>
                                <a href='https://www.instagram.com/mrahman.n/'><img className='ig-icon' src={Instagram} alt='' /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}
