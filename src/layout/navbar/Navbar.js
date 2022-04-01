import React, { useContext} from 'react'
import { Context } from '../../context/Context';
import { useNavigate, Link } from "react-router-dom";
import { Animated } from "react-animated-css";
const Navbar = ({handleScrollToSection}) => {
    // const navigate = useNavigate()
   
    const ctx = useContext(Context)
    const handleModal = () => {
        ctx.setIsOpenModal(!ctx.isOpenModal)
    }
   
    return (
        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
            <div className="min-w-full p-2 bg-white h-20 rounded-md	shadow-lg flex flex-row justify-between items-center">
                <div>
                    <button className='font-bold text-2xl text-blue-600 '>MY PROFILE</button>
                </div>
                <div>
                    <button className='text-blue-600 hidden md:inline-block mx-3 font-bold hover:bg-blue-600 hover:text-white p-2 shadow-lg shadow-black-500/20 rounded-md'  onClick={() => handleScrollToSection(1)}>About</button>
                    <button className='text-blue-600 hidden md:inline-block mx-3 font-bold hover:bg-blue-600 hover:text-white p-2 shadow-lg shadow-black-500/20 rounded-md'  onClick={() => handleScrollToSection(2)}>Experience</button>
                    <button className='text-blue-600 hidden md:inline-block mx-3 font-bold hover:bg-blue-600 hover:text-white p-2 shadow-lg shadow-black-500/20 rounded-md' onClick={() => handleScrollToSection(3)}>Work</button>
                    <button className='text-blue-600 hidden md:inline-block mx-3 font-bold hover:bg-blue-600 hover:text-white p-2 shadow-lg shadow-black-500/20 rounded-md'  onClick={() => handleScrollToSection(4)}>Contact</button>
                </div>
                <div className='inline-block md:hidden' onClick={handleModal}>
                    <i className="text-xl fa-solid fa-align-justify mr-3"></i>
                </div>
            </div>
        </Animated>

    )
}

export default Navbar