import React from 'react'
import Header from '../Main/Header/Header'
import Banner2 from '../Main/Banner2/Banner2'
import PortfolioSection from '../Main/PortfolioSection/PortfolioSection'
import Footer from '../Main/Footer/Footer'
import Pagination from '../Main/Pagination/Pagination'


function WorkPage() {
  return (
    <>
      <Header />
      <Banner2 pageName="Work" />
      <PortfolioSection/>
      <Pagination/>

      <Footer />

    </>
  )
}

export default WorkPage