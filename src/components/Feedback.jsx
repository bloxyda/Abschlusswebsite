import React, { useState } from 'react'
import content from '../../content'

function Feedback() {
    const [formData, setFormData] = useState({
        emailTitle: "",
        emailContent: ""
    })
    
    function handleChange(event) {
        console.log(event)
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    return (
        <>
        <section className='flex justify-center my-5'>
            <form action={`mailto:${content.mailAdress}?subject=${formData.emailTitle}&body=${formData.emailContent}`} className='flex flex-col gap-3 justify-center items-center w-[80vw] md:w-[40vw]'>
                <input 
                    type="text" 
                    name="emailTitle"
                    className='border-solid border-primary border-2 rounded-xl pl-3 w-[100%] h-10'
                    placeholder={content.form.subjectPlaceholder}
                    onChange={handleChange}
                    value={formData.emailTitle}
                />
                <textarea 
                    name="emailContent" 
                    cols="30" 
                    rows="10"
                    className='border-solid border-primary border-2 rounded-xl pl-3 w-[100%] resize-none pt-2'
                    placeholder={content.form.contentPlaceholder}
                    onChange={handleChange}
                    value={formData.emailContent}
                ></textarea>
                <button 
                    type="submit"
                    className='w-[40%] bg-primary text-white py-2 rounded-md'
                >Send Email</button>
            </form>
        </section>
        </>
    )
}

export default Feedback