import React from 'react';

import Frame1 from '../assets/images/frame-1.png'

export default function Guestbook() {

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-8 col-md-offset-2 text-center animate-box">
          <img className='frame mb-4' src={Frame1} alt="" />
          <h1 className='playball heading-white-background'>Guest Book</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6 mb-5'>
          <div className='card p-5' id='form-book'>
            <form id='for'>
              <div className="form-group">
                <span className='prefix-icon'>
                  <i className="fa-solid fa-user"></i>
                </span>
                <input type="text" className="form-control form-borderless" placeholder="Nama . . ." />  
              </div>
              <div className="form-group">
                <span className='prefix-icon'>
                  <i class="fa-solid fa-check"></i>
                </span>
                <select className='form-control form-borderless' required>
                  <option value={''} disabled selected hidden>Kehadiran</option>
                  <option value={'Hadir'}>Hadir</option>
                  <option value={'Tidak Hadir'}>Tidak Hadir</option>
                  <option value={'Masih Ragu'}>Masih Ragu</option>
                </select>
              </div>
              <div className="form-group">
                <span className='prefix-icon'>
                  <i class="fa-solid fa-comment-dots"></i>
                </span>
                <textarea className="form-control form-borderless" rows={5} placeholder="Pesan......" ></textarea>
              </div>
            </form>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='card' id='guest-book'>
            <div className='p-3'>
            

              <strong>Evita dan partner</strong>
              <br />
              <small>16 Feb 2022</small>
              <p>Selamat yaaaaaaaa</p>
              <hr />

              <strong>Evita dan partner</strong>
              <br />
              <small>16 Feb 2022</small>
              <p>Selamat yaaaaaaaa</p>
              <hr />

              <strong>Evita dan partner</strong>
              <br />
              <small>16 Feb 2022</small>
              <p>Selamat yaaaaaaaa</p>
              <hr />

              <strong>Evita dan partner</strong>
              <br />
              <small>16 Feb 2022</small>
              <p>Selamat yaaaaaaaa</p>
              <hr />

              <strong>Evita dan partner</strong>
              <br />
              <small>16 Feb 2022</small>
              <p>Selamat yaaaaaaaa</p>
              <hr />

              <strong>Evita dan partner</strong>
              <br />
              <small>16 Feb 2022</small>
              <p>Selamat yaaaaaaaa</p>
              <hr />

              <strong>Evita dan partner</strong>
              <br />
              <small>16 Feb 2022</small>
              <p>Selamat yaaaaaaaa</p>
              <hr />

              <strong>Evita dan partner</strong>
              <br />
              <small>16 Feb 2022</small>
              <p>Selamat yaaaaaaaa</p>
              <hr />

              <strong>Evita dan partner</strong>
              <br />
              <small>16 Feb 2022</small>
              <p>Selamat yaaaaaaaa</p>
              <hr />

              <strong>Evita dan partner</strong>
              <br />
              <small>16 Feb 2022</small>
              <p>Selamat yaaaaaaaa</p>
              <hr />

              <strong>Evita dan partner</strong>
              <br />
              <small>16 Feb 2022</small>
              <p>Selamat yaaaaaaaa</p>
              <hr />

              <strong>Evita dan partner</strong>
              <br />
              <small>16 Feb 2022</small>
              <p>Selamat yaaaaaaaa</p>
              <hr />

              <strong>Evita dan partner</strong>
              <br />
              <small>16 Feb 2022</small>
              <p>Selamat yaaaaaaaa</p>
              <hr />

              <strong>Evita dan partner</strong>
              <br />
              <small>16 Feb 2022</small>
              <p>Selamat yaaaaaaaa</p>
              <hr />


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
