import React from 'react'
import '../../UI-kit/UI-styles/UI-section.css'
import './Techs.css'
import TechsList from './TechsList/TechsList'


export default function Techs() {
  return (
    <section className='section__techs techs__background' id='techs'>
      <h2 className='section__techs_title'>Технологии</h2>
      <div className='section__line'></div>
      <div className='techs__description'>
        <h3 className='techs__title'>7 технологий</h3>
        <p className='techs__subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.</p>
      </div>
      <TechsList />
    </section>
  )
}
