import About from '@/components/About'
import Client from '@/components/Client'
import FollowUs from '@/components/FollowUs'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import Testimonials1 from '@/components/Testimonials1'
import Testimonials2 from '@/components/Testimonials2'
import React from 'react'

const Home = () => {
  return (
    <div className='relative'>
        <Hero />
        <About />
        <Portfolio />
        <Client />
        <FollowUs />
        <Testimonials1 />
        <Testimonials2 />
    </div>
  )
}

export default Home