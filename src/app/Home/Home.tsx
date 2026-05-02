"use client";

import About from '@/components/About'
import Approach from '@/components/Approach'
import Client from '@/components/Client'
import CTA from '@/components/CTA';
import FollowUs from '@/components/FollowUs'
import Hero from '@/components/Hero'
import Hero2 from '@/components/Hero2'
import Hero3 from '@/components/Hero3'
import InvestorApproach from '@/components/InvestorApproach';
import Logos from '@/components/Logos';
import Portfolio from '@/components/Portfolio'
import Service from '@/components/Service'
import SixPIcs from '@/components/SixPIcs';
import Testimonials1 from '@/components/Testimonials1'
import Testimonials2 from '@/components/Testimonials2'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'

const Home = () => {
  return (
    <div className='relative'>
        <Hero2 />
        <About />
        <Portfolio />
        <SixPIcs />
        {/* <Client /> */}
        <WhyChooseUs />
        <Approach />
        <Service />
        <InvestorApproach />
        <CTA />
        <FollowUs />
        {/* <Testimonials1 /> */}
        <Testimonials2 />
        <Logos />
    </div>
  )
}

export default Home
