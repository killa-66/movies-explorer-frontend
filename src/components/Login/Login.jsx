import React, { useEffect } from 'react';
import useValidation from '../../hooks/useValidation';
import { Link } from 'react-router-dom';
import Logo from '../UI-kit/Logo';
import './Login.css';

export default function Login() {
  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm
  } = useValidation();

  const { email, password } = values;

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  const handleFormSubmit = e => {
    e.preventDefault();
  };

  const handleInputChange = e => {
    handleChange(e);
  };

  return (
    <main>
      <section className="login">
        <div className="login__wrapper">
          <Link to={'/'}>
            <Logo classStyle="login__logo" />
          </Link>
          <h1 className="login__title">Рады видеть!</h1>
          <form
            className="login__form"
            onSubmit={handleFormSubmit}
            id="login"
          >
            <label className="login__label">
              <p className="login__text">E-mail</p>
              <input
                onChange={handleInputChange}
                value={email || ""}
                className="login__input"
                type="email"
                name="email"
                minLength={4}
                maxLength={30}
                placeholder='example@mail.com'
                required
              />
              <span className="login__error">{errors.email}</span>
            </label>
            <label className="login__label">
              <p className="login__text">Пароль</p>
              <input
                onChange={handleInputChange}
                value={password || ""}
                className="login__input"
                type="password"
                name="password"
                minLength={8}
                maxLength={30}
                required
              />
              <span className="login__error">{errors.password}</span>
            </label>
            <button
              type="submit"
              className="login__button login__button_margin"
              disabled={!isValid}
            >
              Войти
            </button>
          </form>
          <div className="login__notation">
            <p className="login__notation-text">Ещё не зарегистрированы?</p>
            <Link to="/signup" className="login__link">Регистрация</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
