import React from "react";
import "./Header.css";
import Navigation from "../../Navigation/Navigation";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <header className="header">
      <div className="header__hero">
        <Navigation />
        <div className="header__logo-wrapper">
          <h1 className="header__title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
        </div>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
