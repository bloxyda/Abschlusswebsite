import React from 'react'
import content from '../../content'

function CartComponent({cartItems, removeItem}) {


    return (
        <section className='flex justify-center my-10 flex-col items-center min-h-screen'>
            <h1 className='text-4xl font-semibold mb-10'>Cart</h1>
            <div className=' bg-gray-200 md:w-[90vw]'>
                <table className=' border-separate py-5'>
                    {
                        cartItems?.map(id => {
                            const item = content.games.find(item => item.id === id)
                            return (
                                <tr className='flex justify-around items-center w-[90vw]'>
                                    <td>
                                        <img src={item.imageUrl} alt={item.alt} className='max-h-[200px]' />
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        {item.price}
                                    </td>
                                    <td>
                                        <button onClick={() => {
                                            removeItem(id)
                                        }}>
                                            {content.cart.removeIcon}
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </section>
    )
}

export default CartComponent