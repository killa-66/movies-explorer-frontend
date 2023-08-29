import React from 'react';
import './Promo.css';

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
          <h2 className='promo__subtitle'>
            На выполнение диплома ушло 5 недель
          </h2>

          <p className='promo__description'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>

      <div className='promo__progressBar'>
        <div className='promo__progressBar-back promo__progressBar-part_short'>
          <p className='promo__progressBar-text promo__progressBar-text_colorized'>1 неделя</p>
        </div>
        <div className='promo__progressBar-front promo__progressBar-part_long'>
          <p className='promo__progressBar-text'>4 недели</p>
        </div>
      </div>

      <div className='promo__progressBar-description'>
        <p className='promo__progressBar-text promo__progressBar-description-text promo__progressBar-part_short'>Back-end</p>
        <p className='promo__progressBar-text promo__progressBar-description-text promo__progressBar-part_long'>Front-end</p>
      </div>
    </div>
  );
}
