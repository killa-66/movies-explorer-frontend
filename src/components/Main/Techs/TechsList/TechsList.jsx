import React from 'react'
import TechItem from '../TechItem/TechItem'
import './TechsList.css'

export default function TechsList() {
  return (
    <ul className='tech__list'>
      <TechItem text={'HTML'} />
      <TechItem text={'CSS'} />
      <TechItem text={'JS'} />
      <TechItem text={'React'} />
      <TechItem text={'Git'} />
      <TechItem text={'Express.js'} />
      <TechItem text={'mongoDB'} />
    </ul>
  )
}
