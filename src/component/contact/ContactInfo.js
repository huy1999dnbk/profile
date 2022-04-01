import React from 'react'
import styled from 'styled-components'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Animated } from "react-animated-css";
const ContactInfo = (props) => {
    return (
        <Animated animationInDelay={props.startTime} animationIn="fadeInLeft" animationOut="fadeOutLeft" isVisible={true}>
            <div className='flex items-center mt-4 m-w-full'>
                <Line />
                {props.phone && <LocalPhoneIcon className='text-white ml-4 cursor-pointer' />}
                {props.email && <EmailIcon className='text-white ml-4 cursor-pointer' />}
                {props.github && <GitHubIcon className='text-white ml-4 cursor-pointer' />}
                <span className='ml-4 font-bold text-white cursor-pointer	'>{props.content}</span>
            </div>
        </Animated>
    )
}

const Line = styled.div`
    width:150px;
    height:2px;
    background-color:white;
    display:inline-block;
    @media only screen and (max-width: 499px) {
        width:70px;
    }
`

export default ContactInfo