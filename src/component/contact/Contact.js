import React from 'react'
import ContactInfo from './ContactInfo'
import { Animated } from "react-animated-css";
const Contact = () => {
    return (
        <div className='p-2 min-w-full mt-36 grid grid-cols-1'>
            <ContactInfo startTime={200} phone content='0931858287' />
            <ContactInfo startTime={400} email content='huy1999dnbk@gmail.com' />
            <a target='_blank' href='https://github.com/huy1999dnbk'>
                <ContactInfo startTime={600} github content='Github' />
            </a>

        </div>
    )
}

export default Contact