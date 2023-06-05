import React from 'react'

function Card({name, imageUrl, alt, id, addToCart}) {
    return (
        <div className='flex flex-col justify-center items-center gap-4 p-4 bg-blue-300 rounded-lg min-w-[250px] max-w-[300px]'>
            <h3 className=' text-2xl font-semibold text-white'>{name}</h3>
            <img src={imageUrl} alt={alt} className='rounded'/>
            <button className='bg-primary w-40 text-center py-5 text-white rounded-md hover:bg-blue-600 transition-all active:bg-blue-950' onClick={() => {addToCart(id)}}>Zum Warenkorb</button>
        </div>
    )
}

export default Card