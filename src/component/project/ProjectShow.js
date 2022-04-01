import React from 'react'
import styled from 'styled-components'
import Chip from '@mui/material/Chip';
import ProgressBar from '@ramonak/react-progress-bar';
const ProjectShow = (props) => {
    return (
        <Container className='p-6 shadow-lg shadow-black-500/50 overflow-hidden mb-4'>
            <span className='font-bold text-xl'>{props.name}</span>
            <ImageProject src={props.image} />
            <hr className='mt-12' />
            <div className='m-w-full mt-12 flex flex-wrap justify-start sm:justify-end '>
                {props.data.map((item, index) => (
                    <Chip style={{ marginLeft: '8px',marginBottom:'8px' }} key={index} label={item} color="info" />
                ))}
            </div>
            {props.completed === 100 ? (
                <ProgressBar
                    completed={100}
                    bgColor="#0762d7"
                    height="25px"
                    labelColor="#eeeee6"
                    customLabel="Completed"
                    className='mt-8'
                    animateOnRender={true}
                     transitionDuration='2.5s'
                />
            ) : (
                <>
                    <ProgressBar
                        completed={props.completed}
                        bgColor="#0762d7"
                        height="25px"
                        labelColor="#eeeee6"
                        customLabel={`${props.completed}%`}
                        className='mt-8'
                        animateOnRender={true}
                         transitionDuration='2.5s'
                    /></>
            )}

        </Container>
    )
}
const Container = styled.div`
    transition: 0.4s all;
    cursor:pointer;
    &:hover{
        transform: translateY(-16px)
    }
`


const ImageProject = styled.img`
    display:block;
    width:100%;
    min-height: 250px;
    margin-top:20px
`



export default ProjectShow