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
            <div className='countdown mx-auto'><span className='m-auto'>{days} <br/> Hari</span></div>
            <div className='countdown mx-auto'><span className='m-auto'>{hours} <br/> Jam</span></div>
            <div className='countdown mx-auto'><span className='m-auto'>{minutes} <br/> Menit</span></div>
            <div className='countdown mx-auto'><span className='m-auto'>{seconds} <br/> Detik</span></div>
          </div>;
      }
    };

    return (
      <div className='countdown-banner'>
        <div className='container text-center'>
          <img className='frame mb-4' src={Frame1} alt="" />
          <h1 className='playball mb-5'>Countdown</h1>

          <div className='card-countdown'>
            <h3 className=''>Until 13 March 2022</h3>
            <Countdown date={new Date(2022,2,13)} renderer={renderer} />
          </div>

          <a target="_blank" rel="noreferrer" href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=MDE1ZXFubWkxM28zOGM5bm9raG00dWk5YW4gbWF1bGFuYXJhaG1hbm51cjY3QG0&amp;tmsrc=maulanarahmannur67%40gmail.com" className="btn btn-default btn-sm mt-5">Save The Date</a>
        </div>
      </div>
    )
  }
}
