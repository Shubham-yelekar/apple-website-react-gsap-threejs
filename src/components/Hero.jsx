
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { useState , useEffect} from 'react';
import { heroVideo, smallHeroVideo } from '../utils';

const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(window.innerWidth<760?smallHeroVideo:heroVideo)
    
    const handleVideoSrdSet = () => {
      if(window.innerWidth < 760) {
        setVideoSrc(smallHeroVideo)
      } else {
        setVideoSrc(heroVideo)
      }
    }

    useEffect(()=>{
      window.addEventListener('resize', handleVideoSrdSet);

      return()=>{
        window.removeEventListener('resize', handleVideoSrdSet)
      }
    },[])

    useGSAP(()=>{
      gsap.to('#hero', {opacity: 1,delay:1.5,})
      gsap.to('#cta', { opacity: 1, y: -50, delay: 2})
      gsap.to('#cta-text', {opacity: 1, y: -5, delay: 2.3})
    },[])


  return (
    <section className='w-full nav-height bg-black'>
      <div className='h-5/6 w-full flex-center flex-col'>
        <p id="hero" className='hero-title'>iPhone 15 Pro</p>
        <div className='md:w-10/12 w-9/12'>
          <video className='pointer-events-none' autoPlay playsInline={true} muted key={videoSrc}>
            <source src={videoSrc} type='video/mp4' />
          </video>
        </div>
      </div>
      <div>
        <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20'>
          <a href="#highlights" className='btn'>Buy</a>
          <p id='cta-text' className='opacity-0 font-normal text-xl translate-y-30'>From ₹21483.00/mo.‡ or ₹134900.00*</p>
        </div>
      </div>
    </section>
  )
}

export default Hero