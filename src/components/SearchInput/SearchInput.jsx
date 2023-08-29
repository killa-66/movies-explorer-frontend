import React from 'react'
import './SearchInput.css'
import Checkbox from '../UI-kit/CheckBox/Checkbox'


export default function SearchInput() {
  return (
    <section className='search__section'>
      <form className='search__form'>
        <div className='search__wrapper'>
          <div className='search__find-icon'></div>
          <input required={true}
            className='search__input'
            placeholder='Фильм' />
          <button type='button' className='search__button' />
        </div>
        <div className={"search__checkbox-wrapper"}>
          <Checkbox />
        </div>
      </form>
      <hr className={"search__hr"}></hr>
    </section>
  )
}
