import React from 'react'
import Card from './Card'
import content from '../../content'

function Cards({contentSection, id, addToCart}) {
    return (
        <section className='mt-5' id={id}>
            <h2 className=' text-4xl font-semibold mb-5 ml-[13vw]'>{contentSection.title}</h2>
            <div className='flex gap-10 justify-center flex-wrap'>
                {
                    content.games.map(card => {
                        return contentSection.title.toLowerCase() === card.type && (
                            <Card 
                                name={card.name}
                                imageUrl={card.imageUrl}
                                alt={card.alt}
                                url={card.url}
                                id={card.id}
                                addToCart={addToCart}
                            /> 
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Cards