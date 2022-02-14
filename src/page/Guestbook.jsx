import React from 'react';

export default function Guestbook() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <div className="input-group">
              <label className="control-label">Username</label>
              <input type="text" className="form-control form-borderless" placeholder="Username" />
              <span className='prefix-icon'>
                <i className="fa-solid fa-user"></i>
              </span>
          </div>
        </div>
        <div className='col-md-6'>
          <div id='guest-book'>

          </div>
        </div>
      </div>
    </div>
  );
}
