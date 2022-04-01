import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styled from 'styled-components'
import { Animated } from "react-animated-css";
import DoubleArrowSharpIcon from '@mui/icons-material/DoubleArrowSharp';
const Experience = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Animated animationIn="fadeInDown" animationOut="fadeOutDown" isVisible={true}>
            <div className='m-w-full mt-44 rounded-md shadow-lg bg-white p-5'>
                <div className='mb-12 min-w-full'>
                    <TitleAbout className='text-xl sm:text-2xl text-blue-500 font-bold'>Where I've Worked</TitleAbout>
                </div>
                <Box
                    style={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', minHeight:224}}
                >
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: 'divider' }}
                    >
                        <Tab style={{ fontWeight: 'bold' }} label="SapotaCorp" {...a11yProps(0)} />
                        <Tab style={{ fontWeight: 'bold' }} label="RikkeiSoft" {...a11yProps(1)} />

                    </Tabs>
                    <TabPanel value={value} index={0}>
                        <span className='font-bold text-md'>Fresher Developer </span>
                        <span className='text-xl text-blue-500 hover:text-blue-700 hover:font-bold cursor-pointer'> # SAPOTACORP</span>
                        <span className='block my-4 font-medium'>September 2021 - November 2021</span>
                        <span className='block flex sm:items-center'>
                            <DoubleArrowSharpIcon />
                            <span className='ml-2'>Learn and work with Javascript, React. Write modern, maintainable code for customers</span>
                        </span>
                        <span className='block flex sm:items-center'>
                            <DoubleArrowSharpIcon />
                            <span className='ml-2'>Learn how to work with a team, learn and work with Javascript, React, </span>
                        </span>
                        <span className='block flex sm:items-center'>
                            <DoubleArrowSharpIcon />
                            <span className='ml-2'>Training English skills</span>
                        </span>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <span className='font-bold text-md'>Fresher Developer </span>
                        <span className='text-xl text-blue-500 hover:text-blue-700 hover:font-bold cursor-pointer'> # RIKKEISOFT</span>
                        <span className='block my-4 font-medium'>March 2022 - Present</span>
                        <span className='block flex sm:items-center'>
                            <DoubleArrowSharpIcon />
                            <span className='ml-2'>Developed and maintained code for client website using NextJS and PHP</span>
                        </span>
                        <span className='block flex sm:items-center'>
                            <DoubleArrowSharpIcon />
                            <span className='ml-2'>Work with a team of 4 members to build gallery website, an ambitious project from asia</span>
                        </span>
                        <span className='block flex sm:items-center'>
                            <DoubleArrowSharpIcon />
                            <span className='ml-2'>Continue Training English Skills</span>
                        </span>
                    </TabPanel>
                </Box>
            </div>
        </Animated>
    )
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

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


export default Experience