import React from 'react'
import PortfolioItem from './PortfolioItem/PortfolioItem'
import './Portfolio.css'

export default function Portfolio() {
  return (
    <div className='portfolio'>
      <h4 className={"portfolio__title"}>Портфолио</h4>
      <ul className='portfolio__list'>
        <PortfolioItem text={'Статичный сайт'} />
        <PortfolioItem text={'Адаптивный сайт'} />
        <PortfolioItem text={'Одностроничное приложение'} />
      </ul>
    </div>

  )
}
