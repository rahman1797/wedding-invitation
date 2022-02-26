import React from 'react';
import PakaiMasker from '../assets/images/covid/pakai-masker.png'
import SocialDistancing from '../assets/images/covid/social-distancing.png'
import WashingHand from '../assets/images/covid/washing-hand.png'
import Namaste from '../assets/images/covid/namaste.png'

function Covid() {
  return <div className='covid-banner'>
    <div className='container text-center my-auto'>
      <h3 className='playball h3-covid'>Protokol Covid-19</h3>
      <div className='row p-5'>
        <p className='covid-desc'>Dalam upaya mengurangi penyebaran Covid 19 pada masa pandemi, kami mengharapkan para tamu undangan tetap menjalankan protokol kesehatan yang berlaku.</p>
        <div className='col-md-3 col-6' data-aos='fade-up'>
          <img className='covid-img mb-2' src={PakaiMasker} />
          <p className='covid-desc'>Wajib Menggunakan Masker</p>
        </div>
        <div className='col-md-3 col-6' data-aos='fade-up'>
          <img className='covid-img mb-2' src={SocialDistancing} />
          <p className='covid-desc'>Social Distancing</p>
        </div>
        <div className='col-md-3 col-6' data-aos='fade-up'>
          <img className='covid-img mb-2' src={Namaste} />
          <p className='covid-desc'>Hindari Sentuhan, Gunakan Salam Namaste</p>
        </div>
        <div className='col-md-3 col-6' data-aos='fade-up'>
          <img className='covid-img mb-2' src={WashingHand} />
          <p className='covid-desc'>Cuci Tangan & Gunakan Hand Sanitizer</p>
        </div>
      </div>
    </div>
  </div>;
  
}

export default Covid;
