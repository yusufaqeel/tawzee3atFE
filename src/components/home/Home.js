import React from 'react'
import Bgvideo from './bgvideo'
import HomeGallery from './Gallery'

export default function Home() {
  return (
    <div>
      <section className='showcase'>
        <div className='background-video'>
          <Bgvideo />
        </div>
        <div className='content'>
          <h1>Explore our shop</h1>
          <a href='' className='btn'>Take me there</a>
        </div>
      </section>
      <section id='about'>
        <h1>About</h1>
        <p></p>
      </section>
      <section className='gallery'>
        <div className='carousel-container'>
          <HomeGallery />
        </div>
      </section>
    </div>
    
  )
}

