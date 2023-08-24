import React from 'react'
import './NavBar.css'

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <a href="#about-project" className="navbar__link">
            О проекте
          </a>
        </li>
        <li className="navbar__item">
          <a href="#techs" className="navbar__link">
            Технологии
          </a>
        </li>
        <li className="navbar__item">
          <a href="#about-me" className="navbar__link">
            Студент
          </a>
        </li>
      </ul>
    </nav>
  )
}
