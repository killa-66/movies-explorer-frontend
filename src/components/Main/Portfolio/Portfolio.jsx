import React from 'react'
import PortfolioItem from './PortfolioItem/PortfolioItem'
import './Portfolio.css'

export default function Portfolio() {
  return (
    <div className='portfolio'>
      <h2 className={"portfolio__title"}>Портфолио</h2>
      <ul className='portfolio__list'>
        <PortfolioItem text={'Статичный сайт'} gitLink={'https://github.com/killa-66/how-to-learn'} />
        <PortfolioItem text={'Адаптивный сайт'} gitLink={'https://github.com/killa-66/russian-travel'} />
        <PortfolioItem text={'Одностроничное приложение'} gitLink={'https://github.com/killa-66/react-mesto-api-full-gha'} />
      </ul>
    </div>
  )
}
