import React, { useContext } from "react";
import "./Navigation.css";
import Logo from "../UI-kit/Logo";
import { Link, useLocation } from "react-router-dom";
import Account from "../UI-kit/Account";
import { PopupContext } from "../../context/PopupProvider";
import { LogInContext } from "../../context/LogInContext";
import BurgerMenu from "../UI-kit/BurgerMenu";

const Navigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isNavLinkActive = path => {
    return currentPath === path
      ? "nav-bar__link nav-bar__link_active"
      : "nav-bar__link";
  };

  const { openPopup } = useContext(PopupContext);
  const { isLoggedIn } = useContext(LogInContext);

  return (
    <header className="navigation">
      <div className="navigation__left">
        <Link to="/">
          <Logo classStyle="navigation__logo" />
        </Link>
        {!isLoggedIn && (
          <nav className="nav-bar">
            <ul className="nav-bar__list">
              <li className="nav-bar__item">
                <Link to="/movies" className={isNavLinkActive("/movies")}>
                  Фильмы
                </Link>
              </li>
              <li className="nav-bar__item">
                <Link to="/saved-movies" className={isNavLinkActive("/saved-movies")}>
                  Сохранённые фильмы
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
      <div className="navigation__right">
        {isLoggedIn ? (
          <nav className="navigation__menu">
            <button type='button' className="navigation__signup">
              <Link to="/signup" className="navigation__link navigation__link_signup">Регистрация</Link>
            </button>
            <button type='button' className="navigation__signin">
              <Link to="/signin" className="navigation__link navigation__link_signin">Войти</Link>
            </button>
          </nav>
        ) : (
          <>
            <Link to="/profile" className="account navigation__account-link">
              <Account />
              <p className="account__name">Аккаунт</p>
            </Link>
            <BurgerMenu onClick={openPopup} />
          </>
        )}
      </div>
    </header>
  );
};

export default Navigation;
