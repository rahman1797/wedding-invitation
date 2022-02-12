import React from 'react';

export default function Guestbook() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <div class="input-group">
              <label class="control-label">Username</label>
              <input type="text" class="form-control form-borderless" placeholder="Username" />
              <span className='prefix-icon'>
                <i class="fa-solid fa-user"></i>
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
