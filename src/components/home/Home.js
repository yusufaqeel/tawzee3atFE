import React from 'react'
import Bgvideo from './bgvideo'
import HomeGallery from './Gallery'

export default function Home() {
  return (
    <div className="container">
      <div className='bgvideo'>
        <Bgvideo />
      </div>
      <section className='gallery'>
        <div className='carousel-container'>
          <HomeGallery />
        </div>
      </section>
    </div>
    
    
  )
}

