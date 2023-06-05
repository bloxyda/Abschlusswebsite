import React from 'react'
import Flickity from 'react-flickity-component'
import content from '../../content'

function Slideshow() {
    const flickityOptions = {
        pageDots: false
    }

    return (
        <>
        <Flickity
            options={flickityOptions}
        >
            {
                content.slideshow.map(item => {
                    if (item.video) {
                        return (
                            <div className='slideshow-item'>
                                <video loop width={window.innerWidth} controls height={window.innerHeight}>
                                    <source src={item.url} type='video/mp4'/>
                                    {item.alt}
                                </video>
                            </div>
                        )
                    } else {
                        return (
                            <div className="slideshow-item">
                                <img src={item.url} alt={item.alt} />
                            </div>
                        )
                    }
                })
            }
        </Flickity>
        </>
  )
}

export default Slideshow