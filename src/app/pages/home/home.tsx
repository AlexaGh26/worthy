import React from "react";

const HomeComponent = () => {
  return (
    <section className="container">
      <header className="container__header">
        <img
          className="container__header--logo"
          src="/assets/images/logo1-removebg-preview.png"
          alt="logo"
        ></img>
        <nav id="menu">
          <ul>
            <li>
              <a href="#">Colecciones</a>
            </li>
            <li>
              <a href="#">Mujer</a>
              <ul>
                <li>
                  <a href="#">Jeans</a>
                </li>
                <li>
                  <a href="#">Pantalones</a>
                </li>
                <li>
                  <a href="#">Blusas</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Hombres</a>
            </li>
            <li>
              <a href="#">Novedades</a>
            </li>
            <li>
              <a href="#">Sale</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container__main"></main>
      <footer className="footer"></footer>
    </section>
  );
};

export default HomeComponent;
