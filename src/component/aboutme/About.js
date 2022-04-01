import React from 'react'
import styled from 'styled-components'
import { Animated } from "react-animated-css";
import ProgressBar from "@ramonak/react-progress-bar";

const dataSkills = [
    {
        'skill': 'HTML',
        'completed': 70,
        'color': '#000080'
    },
    {
        'skill': 'CSS',
        'completed': 75,
        'color': '#5bc11c'
    },
    {
        'skill': 'Javascript',
        'completed': 75,
        'color': '#945c4e'
    },
    {
        'skill': 'React',
        'completed': 65,
        'color': '#4c533b'
    },
]
const About = () => {
    return (
        <Animated animationIn="fadeInLeft" animationOut="fadeOutLeft" isVisible={true}>
            <div className='p-5 min-w-full bg-white rounded-md mt-48 shadow-lg'>
                <div className='min-w-full mb-10'>
                    <TitleAbout className=' text-2xl text-blue-500 font-bold'>About me</TitleAbout>
                </div>
                <div className='m-w-full grid grid grid-cols-1 sm:grid-cols-2'>
                    <div className='min-w-full sm:w-2/4'>
                        <span className='text-lg italic'>I am a Front-end developer located in Da Nang, Vietnam. I have a special passion for programming. I started my web development journey in 2021. So far I am constantly learning and improving my programming skills with the hope of becoming a full-stack web developer in the future. </span>
                    </div>
                    <div className='min-w-full sm:w-2/4 flex justify-center items-center'>
                        <img className='w-52 h-52 rounded-full border-4 border-solid border-blue-600' src='/image/HuyPm.jpg' />

                    </div>
                </div>
                <hr className='my-12' />
                <div className='mt-16'>
                    <TitleAbout className='text-2xl text-blue-500 font-bold mb-8'>My skills</TitleAbout>
                </div>
                <div className='w-4/6'>
                    {dataSkills.map((item, index) => (
                        <ProgressBar key={index} completed={item.completed} bgColor={item.color} customLabel={item.skill} animateOnRender={true} transitionDuration='2.5s' className='my-4'  />
                    ))}
                </div>
                
            </div>
        </Animated>
    )
}

export default About

const TitleAbout = styled.span`
    position: relative;
    cursor:pointer;
    &::before {
        content: "";
        position: absolute;
        width: 0;
        height: 5px;
        bottom: -8px;
        left: 0px;
        background-color: rgb(37,99,235);
        transition: all .2s 0s;
        visibility: hidden;
    };
    &:hover::before{
        width: 120%;
        visibility: visible;
      
    };
`