import React, { useState, useEffect } from 'react';

import Frame1 from '../assets/images/frame-1.png'

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Swal from "sweetalert2"
import { v4 as uuidv4 } from 'uuid';
import Moment from 'react-moment';
import { getDatabase, ref, onValue} from "firebase/database";

import Service from '../services/Service';

export default function Guestbook() {

  // const messagesEndRef = useRef(null);

  //Ambil data dari parameter name di url dan mengambil data dari state redux + memfilter berdasarkan slug URL
  let slug_url = useParams();
	const data = useSelector((state) => state.data.find(obj => (slug_url.name) ? obj.slug_url === slug_url.name : null));

  //State untuk menyimpan text dari form
  const [nama, setNama] = useState(data.nama);
  const [kehadiran, setKehadiran] = useState('');
  const [pesan, setPesan] = useState('');

  //State untuk menyimpan list pesan yang dibuat dalam bentuk array
  const [message, setMessage] = useState([]);

  //Mendapatkan data dari firebase
  const getData = () => {
    const db = getDatabase();
    const docRef = ref(db, '/messages');
    
    onValue(docRef, (snapshot) => {
      const data = snapshot.val();
      if(data !== null){
        const value = Object.values(data);
        setMessage(...message, value.reverse());
      }
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!nama || nama === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Fill in your name first!'
      })
    }
    else if(!kehadiran || kehadiran === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Fill in your attendance first!'
      })
    }
    else if(!pesan || pesan === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Fill in your message first!'
      })
    }
    else {
      handleSave({nama, kehadiran, pesan});
    }
  
    //Reset inputan form
    setKehadiran('');
    setPesan('');

    return false;
  }
  
  const handleSave = (value) => {
    const id = uuidv4();
    const date = new Date();

    let data = {
      id: id,
      tanggal: date.toISOString(),
      nama: value.nama,
      kehadiran: value.kehadiran,
      pesan: value.pesan
    };

    Service.create(data)
      .then(() => {
        const newMessage = {id, date, ...value};

        setMessage([...message, newMessage.reverse()]);
        Swal.fire({
          icon: 'success',
          title: 'Yay...',
          text: 'Thank you!'
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='container' id='section-guestbook'>
      <div className="row">
        <div className="col-md-12 text-center animate-box">
          <img className='frame mb-4' src={Frame1} alt="frame" />
          <h1 className='playball heading-white-background'>Guest Book</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6 mb-5'>
          <div className='card p-5' id='form-book'>
            
            <form id='form-input' onSubmit={handleSubmit}>
            
              <div className="form-group">
                <span className='prefix-icon'>
                  <i className="fa-solid fa-user"></i>
                </span>
                <input type="text" className="form-control form-borderless" placeholder="Nama . . ." value={nama} onChange={ e => setNama(e.target.value) } required />  
              </div>
              <div className="form-group">
                <span className='prefix-icon'>
                  <i className="fa-solid fa-check"></i>
                </span>
                <select className='form-control form-borderless' value={kehadiran} onChange={ e => setKehadiran(e.target.value) } required>
                  <option value={''} disabled hidden>Konfirmasi kehadiran.....</option>
                  <option value={'Hadir'}>Hadir</option>
                  <option value={'Tidak Hadir'}>Tidak Hadir</option>
                  <option value={'Masih Ragu'}>Masih Ragu</option>
                </select>
              </div>
              <div className="form-group">
                <span className='prefix-icon'>
                  <i className="fa-solid fa-comment-dots"></i>
                </span>
                <textarea className="form-control form-borderless" rows={5} placeholder="Pesan......" required value={ pesan } onChange={ e => setPesan(e.target.value) } />
              </div>
              <button className='btn btn-default float-right' type='submit'><i className="fa-solid fa-paper-plane"></i> Send</button>
            </form>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='card' id='guest-book'>
            <div className='p-3'>
            
              { message.length === 0 ? 

                'No message found' : 
                message.map(obj => 
                  <>
                    <strong key={obj.id}>{ obj.nama }</strong>
                    <br />
                    <small><Moment format='DD MMM YYYY HH:mm'>{ obj.tanggal }</Moment></small>
                    <p>{ obj.pesan }</p>
                  </>
                )
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
