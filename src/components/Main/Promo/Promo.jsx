import React from 'react'
import './Promo.css'

export default function Promo() {
  return (
    <div className='promo__main'>
      <div className='promo__wrapper'>

        <div className='promo__text-block'>
          <h2 className='promo__subtitle'>
            Дипломный проект включал 5 этапов
          </h2>

          <p className='promo__description'>
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </div>

        <div className='promo__text-block'>
          <h2 className={'promo__subtitle'}>
            На выполнение диплома ушло 5 недель
          </h2>

          <p className={'promo__description'}>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>

      <div className='progressBar'>
        <div className='progressBar__back progressBar__part_short'>
          <p className='progressBar__text progressBar__text_colorized'>1 неделя</p>
        </div>
        <div className='progressBar__front progressBar__part_long'>
          <p className='progressBar__text'>4 недели</p>
        </div>
      </div>

      <div className='progressBar__description'>
        <p className='progressBar__text progressBar__description_text progressBar__part_short'>Back-end</p>
        <p className='progressBar__text progressBar__description_text progressBar__part_long'>Front-end</p>
      </div>
    </div>
  )
}
