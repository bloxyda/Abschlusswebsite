import React, { useState } from 'react'
import content from '../../content'
import { nanoid } from 'nanoid'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import Hamburger from 'hamburger-react' 

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
        <header>
            <nav className='bg-primary text-white py-3 px-5 md:hidden'>
                <Hamburger toggled={isOpen} toggle={setIsOpen}/>
                {
                    isOpen && (
                        <ul className='absolute z-50 right-0 top-0 bg-primary p-10 flex flex-col gap-3 text-xl slide-in'>
                            <li>
                                <Link to={"/"}>
                                    Home
                                </Link>
                            </li>
                            {
                                content.nav.navLinks.map(navLink => {
                                    return <li key={nanoid()}><HashLink to={`/${navLink.to}`}>{navLink.name}</HashLink></li>
                                })
                            }
                            <li>
                                <Link to={"/cart"}>
                                    {
                                        content.nav.shoppingCart.svg
                                    }
                                </Link>
                            </li>
                        </ul>
                    )
                }
            </nav>

            <nav className=' justify-between items-center p-10 pt-5 pb-5 bg-primary text-white hidden md:flex'>
                    <Link to={"/"}>
                        <img src={content.nav.navImg.url} alt={content.nav.navImg.alt} className='h-14' />
                    </Link>
                    <ul className='flex gap-10 items-center font-semibold'>
                        <li>
                            <Link to={"/"}>
                                Home
                            </Link>
                        </li>
                        {
                            content.nav.navLinks.map(navLink => {
                                return <li key={nanoid()}><HashLink to={`/${navLink.to}`}>{navLink.name}</HashLink></li>
                            })
                        }
                        <li>
                            <Link to={"/cart"}>
                                {
                                    content.nav.shoppingCart.svg
                                }
                            </Link>
                        </li>
                    </ul>
                </nav>
        </header>
        </>
    )
}

export default Navbar