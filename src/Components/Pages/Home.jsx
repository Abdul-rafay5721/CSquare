import React from 'react'
import Header from '../Main/Header/Header'
import Banner from '../Main/Banner/Banner'
import About from '../Main/About/About'
import PortfolioSection from '../Main/PortfolioSection/PortfolioSection'
import TestimonialSection from '../Main/TestimonialSection/TestimonialSection'
import IntroSection from '../Main/IntroSection/IntroSection'
import Footer from '../Main/Footer/Footer'
import BlogSection from '../Main/Blogs/BlogSection'
import ServiceCards from '../Main/Services/Services'

const blogData = [
  {
    title: 'Amplify your blockchain team',
    link: '/blog-single',
    image: 'https://preview.colorlib.com/theme/avo/images/image_1.jpg.webp',
    date: 'June 01, 2020',
    author: 'Admin',
    comments: 3,
    excerpt: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
  {
    title: 'Amplify your blockchain team',
    link: '/blog-single',
    image: 'https://preview.colorlib.com/theme/avo/images/image_2.jpg.webp',
    date: 'June 01, 2020',
    author: 'Admin',
    comments: 3,
    excerpt: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
  {
    title: 'Amplify your blockchain team',
    link: '/blog-single',
    image: 'https://preview.colorlib.com/theme/avo/images/image_3.jpg.webp',
    date: 'June 01, 2020',
    author: 'Admin',
    comments: 3,
    excerpt: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
  {
    title: 'Amplify your blockchain team',
    link: '/blog-single',
    image: 'https://preview.colorlib.com/theme/avo/images/image_4.jpg.webp',
    date: 'June 01, 2020',
    author: 'Admin',
    comments: 3,
    excerpt: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
];


function Home() {
  return (
    <>
      <Header/>
      <Banner/>
      <ServiceCards/>
      <About/>
      <TestimonialSection/>
      <IntroSection/>
      <BlogSection blogs={blogData} />
      <Footer/>
    </>
  )
}

export default Home