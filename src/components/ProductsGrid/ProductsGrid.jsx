import { Link } from "react-router-dom";
import { useState } from "react";
import { PRODUCTS } from "../productsData";
import "./ProductsGrid.css";

export default function ProductsGrid() {
  const heroImage = "/heroproducts.png";

  const cottonImage = "/hiloAlgodon.jpg";
  const polyesterImage = "/hiloPoliester.jpg";

  const customSlides = [
    {
      image: "/personalizar1.png",
      title: "Rayas",
      text: "Combinamos colores, cantidades y grosores de rayas para lograr un diseño clásico que siempre funciona.",
    },
    {
      image: "/personalizar3.png",
      title: "Letras",
      text: "Podemos incluir nombres de instituciones, empresas, iniciales o lo que quieras directamente en el tejido.",
    },
    {
      image: "/personalizar2.png",
      title: "Patrones",
      text: "Creamos diseños dentro del tejido que le dan un acabado especial y diferente.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % customSlides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? customSlides.length - 1 : prev - 1
    );
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(null);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;

    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
  };

  return (
    <section id="productos" className="pg-page">
      <div className="pg-shell">
    <header className="pg-hero">
  <div className="pg-hero__copy">
    <span className="pg-hero__eyebrow">Colección 2024</span>
    <h1 className="pg-hero__title">Texturas, Diseño y Estilo</h1>
  </div>

  
</header>

        <section className="pg-materials">
          <div className="pg-materials__intro">
            <h2 className="pg-sectionTitle">Materia prima de alta calidad</h2>
            <p className="pg-sectionLead">
              Trabajamos con buenas fibras para lograr piezas cómodas y duraderas.
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
                <p className="pg-materialCard__text">
                  Suave al tacto y cómodo para el día a día.
                  Permite que la piel respire y se siente bien desde el primer uso.
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
                <p className="pg-materialCard__text">
                  Resistente y duradero. Mantiene bien el color y soporta el uso sin perder su forma.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="pg-custom">
          <div className="pg-custom__visuals">
            <div
              className="pg-custom__carousel"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="pg-custom__sliderMedia">
                <img
                  src={customSlides[current].image}
                  alt={customSlides[current].title}
                  loading="lazy"
                  className="pg-custom__sliderImage"
                />
              </div>

              <div className="pg-custom__carouselNav">
                <button
                  type="button"
                  className="pg-custom__navButton pg-custom__navButton--text"
                  onClick={prevSlide}
                  aria-label="Ver opción anterior"
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
                    />
                  ))}
                </div>

                <button
                  type="button"
                  className="pg-custom__navButton pg-custom__navButton--text"
                  onClick={nextSlide}
                  aria-label="Ver opción siguiente"
                >
                  Siguiente
                </button>
              </div>
            </div>
          </div>

          <div className="pg-custom__copy">
            <span className="pg-kicker">Personalización</span>
            <h2 className="pg-sectionTitle">Opciones de personalización</h2>
            <p className="pg-sectionLead pg-sectionLead--custom">
              Deslizá para ver las distintas opciones de personalizacion
            </p>

            <article className="pg-customItem">
              <div className="pg-customItem__top">
                <h3 className="pg-customItem__title">
                  {customSlides[current].title}
                </h3>
                <span className="pg-customItem__counter">
                  {current + 1}/{customSlides.length}
                </span>
              </div>

              <p className="pg-customItem__text">
                {customSlides[current].text}
              </p>
            </article>
          </div>
        </section>

       <section
  id="productos-lista"
  className="pg-products"
  aria-labelledby="pg-products-title"
>
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
              ¿Buscás darle un toque único a tus prendas?
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