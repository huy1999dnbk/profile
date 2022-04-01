import React, { useState, useEffect, useRef } from 'react'
import './App.css';
import { Context } from './context/Context'
import Navbar from './layout/navbar/Navbar'
import ReactModal from 'react-modal';
import Introduction from './component/introduction/Introduction';
import About from './component/aboutme/About';
import Experience from './component/experience/Experience';
import { useInView } from 'react-intersection-observer';
import Project from './component/project/Project';
import Contact from './component/contact/Contact';
import useWindowDimensions from './hook/WindowDimension';
import HeaderModal from './component/headermodal/HeaderModal';

function App() {
  const { width } = useWindowDimensions()
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isShowAbout, setIsShowAbout] = useState(false)
  const [isShowExperience, setIsShowExperience] = useState(false)
  const [isShowProject, setIsShowProject] = useState(false)
  const [isShowContact, setIsShowContact] = useState(false)

  const [refAbout, inViewAbout] = useInView()
  const [refExp, inViewExp] = useInView()
  const [refProject, inViewProject] = useInView()
  const [refContact, inViewContact] = useInView()

  const handleScrollToSection = (id) => {
    if (id === 1) {
      window.scrollBy({
        top: 800,
        behavior: 'smooth',
      })
    }
    if (id === 2) {
      window.scrollBy({
        top: 1500,
        behavior: 'smooth',
      })
    }
    if (id === 3) {
      window.scrollBy({
        top: 2300,
        behavior: 'smooth',
      })
    }
    if (id === 4) {
      window.scrollBy({
        top: 2800,
        behavior: 'smooth',
      })
    }
  }

  

  const handleScrollResponsive = (top, id) => {
    setIsOpenModal(false)
    if (id === 1) {
      window.scrollBy({
        top,
        behavior: 'smooth'
      })
    }
    if (id === 2) {
      setIsShowAbout(true)
      window.scrollBy({
        top,
        behavior: 'smooth'
      })
    }
    if (id === 3) {
      setIsShowAbout(true)
      setIsShowExperience(true)
      window.scrollBy({
        top,
        behavior: 'smooth'
      })
    }
    if (id === 4) {
      setIsShowAbout(true)
      setIsShowExperience(true)
      setIsShowProject(true)
      setIsShowContact(true)
      setTimeout(() => {
        window.scrollBy({
          top,
          behavior: 'smooth'
        })
      },500)
     
    }

   
  }

  // khi reload trang thi scroll ve dau trang
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    window.scrollTo(0, 0);
  }, [])

  //su dung 2 div nam tren 2 component, dung thu vien de check xem 2 div nay da nam trong observer man hinh chua, neu nam trong thi setState de hien thi 2 component len man hinh
  useEffect(() => {
    if (inViewAbout) {
      setIsShowAbout(true)
    }
    if (inViewExp) {
      setIsShowExperience(true)
    }
    if (inViewProject) {
      setIsShowProject(true)
    }
    if (inViewContact) {
      setIsShowContact(true)
    }
  }, [inViewExp, inViewAbout, inViewProject, inViewContact])

  useEffect(() => {
    if (width > 767) {
      setIsOpenModal(false)
    }
  }, [width])

  return (
    <Context.Provider value={{
      isOpenModal,
      setIsOpenModal
    }}>
      <>
        <ReactModal isOpen={isOpenModal} closeTimeoutMS={500} ariaHideApp={false} onRequestClose={() => setIsOpenModal(false)} >
          <HeaderModal handleScrollResponsive={handleScrollResponsive} />
        </ReactModal>
        <div style={{ minHeight: '3600px' }} className="min-w-full bg-gradient-to-r from-cyan-500 to-blue-500 py-8 px-4 ">

          <div className='sm:container sm:mx-auto'>

            <Navbar handleScrollToSection={handleScrollToSection} />
            <Introduction />
            <div id='about' ref={refAbout} style={{ height: '1px', position: 'absolute', top: '1200px', zIndex: '1000' }}></div>
            {isShowAbout && <About />}
            <div id='exp' ref={refExp} style={{ height: '1px', position: 'absolute', top: '2100px', zIndex: '1000' }}></div>
            {isShowExperience && <Experience />}
            <div id='project' ref={refProject} style={{ height: '1px', position: 'absolute', top: '2400px', zIndex: '1000' }}></div>
            {isShowProject && <Project />}
            <div id='contact' ref={refContact} style={{ height: '1px', position: 'absolute', top: '3300px', zIndex: '1000' }}></div>
            {isShowContact && <Contact />}
          </div>
        </div>
      </>
    </Context.Provider >
  );
}
export default App;
