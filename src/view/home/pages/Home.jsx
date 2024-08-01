import React from 'react'
import Carousel from '../components/Carousel';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Activity from '../components/Activity';
import Message from '../components/Message';

import image1 from '../../../assets/image1.jpeg'
import image2 from '../../../assets/image2.jpeg'

const Home = () => {
const images = [image1, image2]; // Add more images as needed
  return (
    <div>
        <Carousel images={images}/>
        <div className=''>
          <div className='sticky top-[6vh] bg-sky-700 text-white py-4 px-4'>Info Tab</div>
          <div className='md:pt-[80px] pt-[50px] md:pb-[100px] pb-[50px] md:pr-[100px] px-[50px]'>
              <About />
          </div>
          <Testimonials />
          <Activity />
          <Message />
        </div>
    </div>
  )
}

export default Home