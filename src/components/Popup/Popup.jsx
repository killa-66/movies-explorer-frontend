import React, { useContext } from "react";
import "./Popup.css";

import { Link, useLocation } from "react-router-dom";
import CloseButton from "../UI-kit/CloseButton";
import Account from "../UI-kit/Account";
import { useClosePopup } from "../../hooks/useClosePopup";
import { PopupContext } from "../../context/PopupProvider";


const Popup = () => {
  const { isPopupOpen, closePopup } = useContext(PopupContext);
  useClosePopup(isPopupOpen, closePopup);

  const popupClass = isPopupOpen ? "popup popup_opened" : "popup";
  const location = useLocation();
  const currentPath = location.pathname;

  const isNavLinkActive = path => {
    return currentPath === path
      ? "modal-menu__link modal-menu__link_active"
      : "modal-menu__link";
  };

  return (
    <div className={popupClass}>
      <CloseButton classStyle='popup__close-button' onClick={closePopup} />
      <div className='modal-menu'>
        <nav className='modal-nav-bar'>
          <ul className='modal-nav-bar__list'>
            <li className='modal-menu__item'>
              <Link to={"/"} className={isNavLinkActive("/")}>
                Главная
              </Link>
            </li>
            <li className='modal-menu__item'>
              <Link to={"/movies"} className={isNavLinkActive("/movies")}>
                Фильмы
              </Link>
            </li>
            <li className='modal-menu__item'>
              <a
                href={"/saved-movies"}
                className={isNavLinkActive("/saved-movies")}
              >
                Сохранённые фильмы
              </a>
            </li>
          </ul>
        </nav>
        <div className='account-menu'>
          <Account />
          <Link to={"/profile"} className={"account-menu__name"}>
            Аккаунт
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Popup;
