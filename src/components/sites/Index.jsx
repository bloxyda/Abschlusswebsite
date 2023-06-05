import React from 'react'
import content from '../../../content'
import Navbar from '../navbar'
import Slideshow from '../Slideshow'
import Cards from '../Cards'
import Gallery from '../Gallery'
import Feedback from '../Feedback'
import Imprint from '../Imprint'
import Footer from '../Footer'

function Index({addToCart}) {
    return (
        <>
        <Navbar />
        <Slideshow />
        <Cards contentSection={content.bestseller} id={"bestsellers"} addToCart={addToCart}/>
        <Cards contentSection={content.new} id={"new-games"} addToCart={addToCart}/>
        <Gallery />
        <Feedback />
        <Imprint />
        <Footer />
        </>
    )
}

export default Index