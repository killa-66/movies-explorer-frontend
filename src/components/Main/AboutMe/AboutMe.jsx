import React from 'react'
import '../../UI-kit/UI-styles/UI-section.css'
import './AboutMe.css'
import Portfolio from '../Portfolio/Portfolio'

export default function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студент</h2>
      <hr className="about-me__divider" />
      <div className="about-me__content">
        <img alt="Ярослав" className="about-me__photo" />
        <div className="about-me__description-wrapper">
          <h2 className="about-me__name">Ярослав</h2>
          <p className="about-me__profession">Фуллстэк-разработчик, 24 года</p>
          <p className="about-me__bio">
            Я родился и живу в Москве, закончил НИУ МЭИ, кафедру общей физики и термоядерного синтеза.
            Сейчас учусь в аспирантуре (менеджмент) и буду получать второе высшее по направлению "Прикладная информатика". На данный момент
            работаю фуллстэк-разработчиком в компании Signaltec.
          </p>
          <a href="https://github.com/killa-66"
            className="about-me__github-link"
            target='_blank' rel="noreferrer">
            Github
          </a>
        </div>
      </div>
      <Portfolio />
    </section>
  )
}
