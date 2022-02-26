import React, { Component } from 'react'
import Countdown from 'react-countdown';

import Frame1 from '../assets/images/frame-1.png'

export default class CountdownPage extends Component {
  
  render() {

    const Completionist = () => <span>You are good to go!</span>;

    // Renderer callback with condition
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
      if (completed) {
        // Render a completed state
        return <Completionist />;
      } else {
        // Render a countdown
        return <div className='row'>
            <div className='countdown mx-auto animate-box'><span className='m-auto'>{days} <br/> Hari</span></div>
            <div className='countdown mx-auto animate-box'><span className='m-auto'>{hours} <br/> Jam</span></div>
            <div className='countdown mx-auto animate-box'><span className='m-auto'>{minutes} <br/> Menit</span></div>
            <div className='countdown mx-auto animate-box'><span className='m-auto'>{seconds} <br/> Detik</span></div>
          </div>;
      }
    };

    return (
      <div className='countdown-banner' id='section-countdown'>
        <div className='container text-center'>
          <img className='frame mb-4' src={Frame1} alt="" />
          <h1 className='playball mb-5'>Countdown</h1>

          <div className='card-countdown'>
            <h3 className=''>Until 13 March 2022</h3>
            <Countdown date={new Date(2022,2,13)} renderer={renderer} />
          </div>
          <a target="_blank" rel="noreferrer" href="https://www.google.com/calendar/render?action=TEMPLATE&text=EvitaRahmanWedding&dates=20220313T080000/20220313T100000" className="btn btn-slide-pink btn-sm mt-5">Save The Date</a>
        </div>
      </div>
    )
  }
}
