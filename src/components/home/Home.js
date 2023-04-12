import React from 'react'
import Bgvideo from './bgvideo'
import HomeGallery from './Gallery'

export default function Home() {
  return (
    <div>
      <div className='bgvideo'>
        <Bgvideo />
      </div>
      <div className='gallery'>
        <HomeGallery />
      </div>
    </div>
    
  )
}

