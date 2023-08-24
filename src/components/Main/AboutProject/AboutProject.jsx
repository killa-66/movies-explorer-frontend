import React from 'react'
import '../../UI-kit/UI-styles/UI-section.css'
import Promo from '../Promo/Promo'

export default function AboutProject() {
  return (
    <section className='section' id='about-project'>
      <h2 className='section__title'>О проекте</h2>
      <div className='section__line'></div>
      <Promo />
    </section>
  )
}
