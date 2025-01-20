import React from 'react'
import Header from '../Main/Header/Header'
import Banner2 from '../Main/Banner2/Banner2'
import BlogSingle from '../Main/BlogSingle/BlogSingle'
import Footer from '../Main/Footer/Footer'

function BlogSinglePage() {
    return (
        <>
            <Header />
            <Banner2 pageName="Blog-Single" />
            <BlogSingle />
            <Footer/>
        </>
    )
}

export default BlogSinglePage