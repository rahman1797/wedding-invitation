import React from 'react';

import FirstMeet from '../assets/images/ourstory/firstmeet.png'
import Relationship from '../assets/images/ourstory/relationship.png'

import Engagement from '../assets/images/ourstory/engagement.png'
import Married from '../assets/images/ourstory/married.png'

import Frame1 from '../assets/images/frame-1.png'

function Ourstory() {
  return (
      <>
      <div className="wave-group">
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
        </div>
        <div className='ourstory-banner'>
            <div id="couple-story">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center section-heading animate-box">
                        <img className='frame mb-4' src={Frame1} alt="" />
                        <h1 className='playball'>Our Love Story</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-md-offset-0">
                        <ul className="timeline animate-box">
                            <li className="animate-box">
                                <div className="timeline-badge" style={{backgroundImage: `url(${FirstMeet})`}}></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title font-weight-bolder">First We Meet</h3>
                                        <span className="date">2011 (Junior high School)</span>
                                    </div>
                                    <div className="timeline-body">
                                        <p className='story-desc'>Pertemuan kami bermula ketika Rahman menjadi murid baru di SMP N 24 Jakarta. Seiring berjalannya waktu, hubungan kami semakin erat hingga menjadi sepasang sahabat.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-inverted animate-box">
                                <div className="timeline-badge" style={{backgroundImage: `url(${Relationship})`}}></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title font-weight-bolder">Relationship</h3>
                                        <span className="date">2015</span>
                                    </div>
                                    <div className="timeline-body">
                                        <p className='story-desc'>Tepat tanggal 11 Januari 2015, Rahman menyatakan perasaannya kepada Evita dengan membawa seikat bunga mawar dan sebuah boneka</p>
                                    </div>
                                </div>
                            </li>
                            <li className="animate-box">
                                <div className="timeline-badge" style={{backgroundImage: `url(${Engagement})`}}></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title font-weight-bolder">Engagement</h3>
                                        <span className="date">2021</span>
                                    </div>
                                    <div className="timeline-body">
                                        <p className='story-desc'>5 Juni 2021, Rahman menyampaikan niat baik di hadapan keluarga besar kami. Dengan berbekal niat dan restu dari orangtua, Rahman meminta izin untuk menjadikan Evita sebagai pasangan hidupnya.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-inverted animate-box">
                                <div className="timeline-badge" style={{backgroundImage: `url(${Married})`}}></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title font-weight-bolder">Married</h3>
                                        <span className="date">2022</span>
                                    </div>
                                    <div className="timeline-body">
                                        <p className='story-desc'>Finally, kami dipersatukan dalam ikatan pernikahan. The best moment ever, and this is the time we were waiting!</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Ourstory;
