import React from 'react'

import notFound from '../assets/images/svg/not-found.svg'

export default function NotFound() {
  return (
    <div className='container not-found-banner text-center'>
        <div className='m-auto'>
            <img src={notFound} className='notfound-img' />
            URL not found, please contact Evita / Rahman / invitee to get valid URL
        </div>
    </div>
  )
}
