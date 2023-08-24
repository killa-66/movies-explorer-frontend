import React from 'react'
import './MoviesCard.css'

export default function MoviesCard({ photo, title, duration, isOwned, element: Component }) {
  return (
    <li className="movies-card__item">
      <img src={photo} alt={title} className="movies-card__photo" />
      <div className="movies-card__main-wrapper">
        <div className="movies-card__headline-wrapper">
          <h2 className="movies-card__title">{title}</h2>
          {<Component owned={isOwned} />}
        </div>
        <p className="movies-card__duration">{duration}</p>
      </div>
    </li>
  )
}
