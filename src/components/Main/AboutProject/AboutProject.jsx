import React from 'react'
import './AboutProject.css'
import Promo from '../Promo/Promo'

export default function AboutProject() {
  return (
    <section className='section__project' id='about-project'>
      <h2 className='section__project_title'>О проекте</h2>
      <div className='section__project_line'></div>
      <Promo />
    </section>
  )
}
