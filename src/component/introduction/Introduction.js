import React, { useState } from 'react'
import styles from './introduction.module.css'
import { Animated } from "react-animated-css";


const Introduction = () => { 
  
    return (
        <Animated animationIn="zoomIn" animationOut="zoomOut" isVisible={true}>
            <div className='p-2 min-w-full bg-white rounded-md mt-36 shadow-lg grid grid-cols-1	md:grid-cols-2	'>
                <div className='min-w-full md:w-3/5 p-5'>
                    <span className='text-center sm:text-left text-2xl text-blue-600 block'>Hello guys</span>
                    <span className='text-center sm:text-left text-3xl text-blue-600 block my-5'>My name is Pham Minh Huy</span>
                    <span className='text-center sm:text-left text-blue-600 block text-6xl font-bold'>Welcome to my Profile</span>
                    <span className='text-center sm:text-left text-blue-600 block text-4xl font-semibold mt-5'>I am a Web developer</span>
                </div>
                <div className={`${styles.imageInfo} min-w-full md:w-2/5`}>
                <img style={{ minHeight: '500px' }} src='image/bg-info.jpg' />
                

                </div>
            </div>
        </Animated>

    )
}

export default Introduction