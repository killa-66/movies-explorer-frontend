import React, { useEffect } from 'react'
import useValidation from '../../hooks/useValidation';
import Logo from '../UI-kit/Logo';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

export default function Register() {
  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm
  } = useValidation();

  useEffect(() => {
    resetForm();
  }, [resetForm]);
  const submitHandler = e => {
    e.preventDefault();
  };

  return (
    <main>
      <section className="login">
        <div className="login__wrapper">
          <Logo />
          <h1 className="login__title">Добро пожаловать!</h1>
          <form
            className="login__form"
            onSubmit={e => {
              submitHandler(e);
            }}
            id="register"
          >
            <label className="login__label">
              <p className="login__text">Имя</p>
              <input
                onChange={e => {
                  handleChange(e);
                }}
                value={values.name || ""}
                className="login__input"
                type="text"
                name="name"
                minLength={4}
                maxLength={30}
                placeholder='Введите логин'
                required={true}
              />
              <span className="login__error">{errors.name}</span>
            </label>

            <label className="login__label">
              <p className="login__text">E-mail</p>
              <input
                onChange={e => {
                  handleChange(e);
                }}
                value={values.email || ""}
                className="login__input"
                type="email"
                name="email"
                minLength={4}
                maxLength={30}
                placeholder='Введите email'
                required={true}
              />
              <span className="login__error">{errors.email}</span>
            </label>
            <label className="login__label">
              <p className="login__text">Пароль</p>
              <input
                onChange={e => {
                  handleChange(e);
                }}
                value={values.password || ""}
                className={
                  errors.password
                    ? "login__input login__input_error"
                    : "login__input"
                }
                type="password"
                name="password"
                minLength={8}
                maxLength={30}
                required={true}
              />
              <span className="login__error">{errors.password}</span>
            </label>
            <button
              type="submit"
              className="login__button"
              disabled={!isValid}
            >
              Зарегистрироваться
            </button>
          </form>
          <div className="login__notation">
            <p className="login__notation-text">Уже зарегистрированы?</p>
            <Link to="/signin" className="login__link">
              Войти
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
