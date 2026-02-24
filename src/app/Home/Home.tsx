import About from '@/components/About'
import Approach from '@/components/Approach'
import Client from '@/components/Client'
import FollowUs from '@/components/FollowUs'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import Testimonials1 from '@/components/Testimonials1'
import Testimonials2 from '@/components/Testimonials2'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'

const Home = () => {
  return (
    <div className='relative'>
        <Hero />
        <About />
        <Portfolio />
        {/* <Client /> */}
        <WhyChooseUs />
        <Approach />
        <FollowUs />
        <Testimonials1 />
        <Testimonials2 />
    </div>
  )
}

export default Home