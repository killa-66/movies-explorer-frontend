import React, { useState } from 'react';
import useValidation from '../../hooks/useValidation';
import Navigation from '../Navigation/Navigation';
import './Profile.css';
import { Link } from 'react-router-dom';

export default function Profile() {
  const [isEditActive, setIsEditActive] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    setIsEditActive(false);
  };
  const { values, handleChange } = useValidation();
  const button = isEditActive ? (
    <button
      type="submit"
      className="profile__button profile__button_type_save"
      onClick={() => setIsEditActive(false)}
    >
      Сохранить
    </button>
  ) : (
    <button
      type="button"
      className="profile__button profile__button_type_edit"
      onClick={() => setIsEditActive(true)}
    >
      Редактировать
    </button>
  );

  return (
    <>
      <Navigation />
      <section className="profile">
        <form onSubmit={handleSubmit} className="profile__form">
          <h1 className="profile__title">Привет, Ярослав!</h1>
          <div className="profile__info-group">
            <div className="profile__field">
              <p className="profile__label">Имя</p>
              {isEditActive ? (
                <input
                  name="name"
                  onChange={handleChange}
                  className="profile__input"
                  value={values.name || "Ярослав"}
                />
              ) : (
                <p className="profile__value">Ярослав</p>
              )}
            </div>
            <div className="profile__field">
              <p className="profile__label">E-mail</p>
              {isEditActive ? (
                <input
                  name="email"
                  onChange={handleChange}
                  value={values.email || "pochta@yandex.ru"}
                  className="profile__input"
                />
              ) : (
                <p className="profile__value">pochta@yandex.ru</p>
              )}
            </div>
          </div>
          {button}
          <Link to={-1}>
            <button type='button' className="profile__button profile__button_type_exit">
              Выйти из аккаунта
            </button>
          </Link>
        </form>
      </section>
    </>
  );
}
