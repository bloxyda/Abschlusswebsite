import React from 'react'
import content from '../../content'

function Footer() {
    return (
        <footer className=' bg-black text-white py-10 text-center'>
            {content.footer.footerText}
        </footer>
    )
}   

export default Footer