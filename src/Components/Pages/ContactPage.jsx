import React from 'react'
import Header from '../Main/Header/Header'
import Banner2 from '../Main/Banner2/Banner2'
import Contact from '../Main/Contact/Contact'
import Footer from '../Main/Footer/Footer'

function ContactPage() {
  return (
    <>
        <Header/>
        <Banner2 pageName="Contact"/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default ContactPage