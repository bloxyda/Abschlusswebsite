import React from 'react'
import content from '../../content'

function Gallery() {
    return (
        <section className=' mt-20'>
            <div className='flex justify-center items-center gap-10 flex-wrap flex-col md:flex-row'>
                {
                    content.gallery.images.map(image => {
                        return (
                            <picture className='max-w-[80vw] md:max-w-[40vw] xl:max-w-[20vw]'>
                                <source media='(min-width:600px)' srcSet={image.url}/>
                                <img src={image.smallUrl} alt={image.alt} />
                            </picture>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Gallery