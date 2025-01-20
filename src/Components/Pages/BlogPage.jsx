import React from 'react'
import Header from '../Main/Header/Header'
import Banner2 from '../Main/Banner2/Banner2'
import BlogSection from '../Main/Blogs/BlogSection'
import Pagination from '../Main/Pagination/Pagination'
import Footer from '../Main/Footer/Footer'

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
    {
      title: 'Amplify your blockchain team',
      link: '/blog-single',
      image: 'https://preview.colorlib.com/theme/avo/images/image_5.jpg.webp',
      date: 'June 01, 2020',
      author: 'Admin',
      comments: 3,
      excerpt: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    },
    {
      title: 'Amplify your blockchain team',
      link: '/blog-single',
      image: 'https://preview.colorlib.com/theme/avo/images/image_6.jpg.webp',
      date: 'June 01, 2020',
      author: 'Admin',
      comments: 3,
      excerpt: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    },
    {
      title: 'Amplify your blockchain team',
      link: '/blog-single',
      image: 'https://preview.colorlib.com/theme/avo/images/image_7.jpg.webp',
      date: 'June 01, 2020',
      author: 'Admin',
      comments: 3,
      excerpt: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    },
    {
      title: 'Amplify your blockchain team',
      link: '/blog-single',
      image: 'https://preview.colorlib.com/theme/avo/images/image_8.jpg.webp',
      date: 'June 01, 2020',
      author: 'Admin',
      comments: 3,
      excerpt: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    },
  ];
  

function BlogPage() {
  return (
    <>
        <Header/>
        <Banner2 pageName="Blog" />
        <BlogSection blogs={blogData}/>
        <Pagination/>
        <Footer/>
    </>
  )
}

export default BlogPage