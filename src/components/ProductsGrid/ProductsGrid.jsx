import { Link } from "react-router-dom";
import { useState } from "react";
import { PRODUCTS } from "../productsData";
import "./ProductsGrid.css";

export default function ProductsGrid() {
  const heroImage = "/heroproducts.png";

  const cottonImage = "/hiloAlgodon.jpg";
  const polyesterImage = "/hiloPoliester.jpg";
  const stripesImage = "/tejido1.png";

  const customSlides = [
    {
      image: "/personalizar1.png",
      title: "Rayas",
      meta: "Color combinations",
      text: "Alternancia rítmica de tonalidades y grosores que definen una identidad visual clásica y sofisticada.",
    },
    {
      image: "/personalizar2.png",
      title: "Letras",
      meta: "Woven lettering",
      text: "Incorporación de nombres, iniciales o mensajes dentro del tejido para crear una identidad única y reconocible.",
    },
    {
      image: "/personalizar3.png",
      title: "Patrones",
      meta: "Integrated patterns",
      text: "Patrones complejos integrados directamente en la estructura del tejido para un acabado visual distintivo y artesanal.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % customSlides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? customSlides.length - 1 : prev - 1
    );
  };

  return (
    <section id="productos" className="pg-page">
      <div className="pg-shell">
        <header className="pg-hero">
          <div className="pg-hero__copy">
            <span className="pg-hero__eyebrow">Colección 2024</span>
            <h1 className="pg-hero__title">Texturas, Diseño y Estilo</h1>
          </div>

          <div className="pg-hero__visual" aria-hidden="true">
            <div className="pg-hero__visualOverlay" />
            <div className="pg-hero__visualGlow" />
            <img
              src={heroImage}
              alt="Textura textil"
              loading="eager"
              className="pg-hero__image"
            />
          </div>
        </header>

        <section className="pg-materials">
          <div className="pg-materials__intro">
            <h2 className="pg-sectionTitle">Materia prima de alta calidad</h2>
            <p className="pg-sectionLead">
              Seleccionamos cuidadosamente cada fibra para garantizar un tacto
              superior y una durabilidad excepcional en cada pieza que producimos.
            </p>
          </div>

          <div className="pg-materials__cards">
            <article className="pg-materialCard">
              <div className="pg-materialCard__media">
                <img
                  src={cottonImage}
                  alt="Hilo de algodón"
                  loading="lazy"
                  style={{ objectPosition: "center center" }}
                />
              </div>

              <div className="pg-materialCard__body">
                <h3 className="pg-materialCard__title">Algodón</h3>
                <p className="pg-materialCard__meta">Soft &amp; Resistant</p>
                <p className="pg-materialCard__text">
                  Nuestras fibras de algodón ofrecen una suavidad incomparable y
                  una transpirabilidad natural, ideal para el contacto diario con
                  la piel.
                </p>
              </div>
            </article>

            <article className="pg-materialCard">
              <div className="pg-materialCard__media">
                <img
                  src={polyesterImage}
                  alt="Hilo de poliéster"
                  loading="lazy"
                  style={{ objectPosition: "center center" }}
                />
              </div>

              <div className="pg-materialCard__body">
                <h3 className="pg-materialCard__title">Poliéster</h3>
                <p className="pg-materialCard__meta">Durable Colors</p>
                <p className="pg-materialCard__text">
                  Fibras de ingeniería diseñadas para mantener la intensidad del
                  color y resistir el desgaste del tiempo, asegurando longevidad.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="pg-custom">
          <div className="pg-custom__visuals">
            <div className="pg-custom__visual pg-custom__visual--offset">
              <img
                src={stripesImage}
                alt="Tejido personalizado"
                loading="lazy"
                style={{ objectPosition: "center center" }}
              />
            </div>

            <div className="pg-custom__visual pg-custom__carousel">
              <img
                src={customSlides[current].image}
                alt={customSlides[current].title}
                loading="lazy"
                className="pg-custom__carouselImage"
                style={{ objectPosition: "center center" }}
              />

              <div className="pg-custom__carouselNav">
                <button
                  type="button"
                  className="pg-custom__carouselControl"
                  onClick={prevSlide}
                  aria-label="Imagen anterior"
                >
                  Anterior
                </button>

                <div className="pg-custom__carouselDots">
                  {customSlides.map((slide, index) => (
                    <button
                      key={slide.title}
                      type="button"
                      className={`pg-custom__carouselDot ${
                        current === index ? "is-active" : ""
                      }`}
                      onClick={() => setCurrent(index)}
                      aria-label={`Ver ${slide.title}`}
                    >
                      <span className="pg-custom__carouselDotLine" />
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  className="pg-custom__carouselControl"
                  onClick={nextSlide}
                  aria-label="Imagen siguiente"
                >
                  Siguiente
                </button>
              </div>
            </div>
          </div>

          <div className="pg-custom__copy">
            <h2 className="pg-sectionTitle">Opciones de personalización</h2>
            <p className="pg-sectionLead pg-sectionLead--custom">
              Cada proyecto es único. Ofrecemos técnicas de tejido avanzadas para
              materializar su visión creativa con precisión milimétrica.
            </p>

            <article className="pg-customItem">
              <h3 className="pg-customItem__title">
                {customSlides[current].title}
              </h3>
              <p className="pg-customItem__meta">
                {customSlides[current].meta}
              </p>
              <p className="pg-customItem__text">
                {customSlides[current].text}
              </p>
            </article>
          </div>
        </section>

        <section className="pg-products" aria-labelledby="pg-products-title">
          <div className="pg-products__intro">
            <span className="pg-kicker">Catálogo</span>
            <h2 id="pg-products-title" className="pg-sectionTitle">
              Productos
            </h2>
          </div>

          <div className="pg-products__list">
            {PRODUCTS.map((product) => (
              <Link
                key={product.id}
                to={`/productos/${product.id}`}
                className="pg-productRow"
              >
                <span className="pg-productRow__name">{product.title}</span>

                <span className="pg-productRow__meta">
                  {product.materials?.join(" · ")}
                </span>

                <span className="pg-productRow__cta">Ver →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="pg-cta">
          <div className="pg-cta__overlay" />
          <div className="pg-cta__content">
            <h2 className="pg-cta__title">
              ¿Buscas darle un toque unico a tus prendas?
            </h2>

            <Link to="/contacto" className="pg-cta__button">
              Escribinos
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}