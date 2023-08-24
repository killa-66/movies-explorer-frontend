import React from 'react'
import './PortfolioItem.css'

export default function PortfolioItem({ text, gitLink }) {
  return (
    <li className='portfolio__item'>
      <p className='portfolio__description'>{text}</p>
      <button className='portfolio__button'></button>

    </li>
  )
}
