import React from 'react'
import './SearchInput.css'
import Checkbox from '../UI-kit/CheckBox/Checkbox'


export default function SearchInput() {
  return (
    <section className='search-section'>
      <form className='search-section__form'>
        <div className='search-section__wrapper'>
          <div className='search-section__find-icon'></div>
          <input required={true}
            className='search-section__input'
            placeholder='Фильм' />
          <button type='button' className='search-section__button' />
        </div>
        <div className='search-section__checkbox-wrapper'>
          <Checkbox />
        </div>
      </form>
      <hr className='search-section__hr'></hr>
    </section>
  )
}
