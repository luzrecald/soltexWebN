import { NavLink } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" aria-label="Presentación Soltex">
      <div className="hero-bg">
        <img
          src="/hero.png"
          alt="Textiles Soltex"
          className="hero-image"
          loading="eager"
          decoding="async"
        />
        <div className="hero-overlay" aria-hidden="true" />
      </div>

      <div className="hero-shell">
        <div className="hero-card">
          <h1 className="hero-title">Bienvenidos a Soltex</h1>

          <p className="hero-subtitle">
            Cuellos y pretinas tejidos a medida.
          </p>

          <NavLink to="/productos" className="hero-btn">
            Explora Ahora
          </NavLink>
        </div>
      </div>
    </section>
  );
}