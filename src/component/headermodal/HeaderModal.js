import React,{useContext} from 'react'
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import { Context } from '../../context/Context';
const HeaderModal = ({handleScrollResponsive}) => {
    const ctx = useContext(Context)
   
    return (
        <div className='w-full h-full'>
            <div className='h-12 relative'>
                <CloseTwoToneIcon onClick={() => ctx.setIsOpenModal(!ctx.isOpenModal)} className='absolute top-2.5 right-2.5 text-2xl cursor-pointer' fontSize='large' />
            </div>
            <div>
                <ul>
                    <li onClick={() => handleScrollResponsive(1200,1)} className='mt-8 text-2xl font-bold text-blue-600 hover:bg-blue-600 hover:text-white cursor-pointer p-4 rounded-md'>About</li>
                    <li onClick={() => handleScrollResponsive(2200,2)} className='mt-8 text-2xl font-bold text-blue-600 hover:bg-blue-600 hover:text-white cursor-pointer p-4 rounded-md'>Experience</li>
                    <li onClick={() => handleScrollResponsive(3000,3)} className='mt-8 text-2xl font-bold text-blue-600 hover:bg-blue-600 hover:text-white cursor-pointer p-4 rounded-md'>Work</li>
                    <li onClick={() => handleScrollResponsive(5000,4)} className='mt-8 text-2xl font-bold text-blue-600 hover:bg-blue-600 hover:text-white cursor-pointer p-4 rounded-md'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderModal