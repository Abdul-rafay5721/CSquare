import React from 'react'
import Header from '../Main/Header/Header'
import Banner2 from '../Main/Banner2/Banner2'
import About from '../Main/About/About'
import IntroSection from '../Main/IntroSection/IntroSection'
import TestimonialSection from '../Main/TestimonialSection/TestimonialSection'
import Footer from '../Main/Footer/Footer'
import ExpertTeam from '../Main/ExpertTeam/ExpertTeam'

function AboutPage() {
  return (
    <>
        <Header/>
        <Banner2 pageName = "ABOUT US"/>
        <About/>
        <IntroSection/>
        <ExpertTeam/>
        <TestimonialSection/>
        <Footer/>
    </>
  )
}

export default AboutPage