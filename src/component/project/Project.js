import React from 'react'
import ProjectShow from './ProjectShow'
import { Animated } from "react-animated-css";
const Project = () => {
    return (
        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
            <div className='p-2 min-w-full bg-white rounded-md mt-48 shadow-lg'>
                <div className='min-w-full text-center py-12' >
                    <span className='font-bold text-2xl text-blue-600'>PROJECT</span>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <ProjectShow name='Sport Accessories E-commerce website' image='https://firebasestorage.googleapis.com/v0/b/sport-shop-3f0ff.appspot.com/o/sportshop.png?alt=media&token=f1330ef2-c8e5-4bde-917b-103cb7450752' data={['ReactJS', 'Firebase', 'ExpressJS', 'Stripe', 'MongoDB']} completed={100} />
                    <ProjectShow name='Chat App' image='https://firebasestorage.googleapis.com/v0/b/sport-shop-3f0ff.appspot.com/o/chatapp.png?alt=media&token=69688a3b-c50d-46ed-91f7-5e350965cdcb' data={['ReactJS', 'Firebase']} completed={50} />
                </div>
            </div>
        </Animated>
    )
}

export default Project