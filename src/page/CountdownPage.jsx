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
            <div className='countdown m-auto'><span className='m-auto'>{days} <br/> Hari</span></div>
            <div className='countdown m-auto'><span className='m-auto'>{hours} <br/> Jam</span></div>
            <div className='countdown m-auto'><span className='m-auto'>{minutes} <br/> Menit</span></div>
            <div className='countdown m-auto'><span className='m-auto'>{seconds} <br/> Detik</span></div>
          </div>;
      }
    };

    return (
      <div className='countdown-banner'>
        <div className='container text-center'>
          <img className='frame mb-4' src={Frame1} alt="" />
          <h1 className='playball'>Countdown</h1>
          <Countdown date={new Date(2022,2,13)} renderer={renderer} />
        </div>
      </div>
    )
  }
}
