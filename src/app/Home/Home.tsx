import About from '@/components/About'
import Client from '@/components/Client'
import FollowUs from '@/components/FollowUs'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Portfolio from '@/components/Portfolio'
import React from 'react'

const Home = () => {
  return (
    <div className='relative'>
        <Navbar />
        <Hero />
        <About />
        <Portfolio />
        <Client />
        <FollowUs />
        <Footer />
    </div>
  )
}

export default Home