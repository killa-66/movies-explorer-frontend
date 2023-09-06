import React from 'react'
import './PortfolioItem.css'
import { Link } from 'react-router-dom'

export default function PortfolioItem({ text, gitLink }) {
  return (
    <li className='portfolio__list-item'>
      <Link
        to={gitLink}
        target='_blank'
        rel="noopener noreferrer"
        className='portfolio__link'
      >
        {text}
        <button type='button' className='portfolio__button'></button>
      </Link>

    </li>
  )
}
