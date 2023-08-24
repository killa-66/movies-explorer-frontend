import React from 'react'
import './TechItem.css'

export default function TechItem({ text }) {
  return (
    <li className="techs__item"><span>{text}</span></li>
  )
}
