import React from 'react'
import AboutProject from './AboutProject/AboutProject'
import Techs from './Techs/Techs'
import AboutMe from './AboutMe/AboutMe'
import Footer from '../Footer/Footer'
import Header from './Header/Header'


export default function Main() {
  return (
    <>
      <Header />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Footer />
    </>
  )
}
