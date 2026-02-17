import About from '@/components/About'
import Client from '@/components/Client'
import FollowUs from '@/components/FollowUs'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import React from 'react'

const Home = () => {
  return (
    <div className='relative'>
        <Hero />
        <About />
        <Portfolio />
        <Client />
        <FollowUs />
    </div>
  )
}

export default Home