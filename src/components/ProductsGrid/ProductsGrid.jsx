import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { PRODUCTS } from "../productsData";
import FadeInSection from "../FadeInSection/FadeInSection";
import "./ProductsGrid.css";

export default function ProductsGrid() {
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
    setCurrent((prev) => (prev === 0 ? customSlides.length - 1 : prev - 1));
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

    if (distance > minSwipeDistance) nextSlide();
    if (distance < -minSwipeDistance) prevSlide();
  };

  const productCards = useMemo(() => {
    return PRODUCTS.map((product, index) => ({
      ...product,
      image:
        product.image ||
        product.img ||
        product.thumbnail ||
        product.photo ||
        [
          "/producto1.png",
          "/producto2.png",
          "/producto3.png",
          "/producto4.png",
        ][index % 4],
    }));
  }, []);

  return (
    <section id="productos" className="pg-page">
      <div className="pg-shell">

        
        <FadeInSection delay={0.2}>
          <section
            className="pg-products"
            id="productos-lista"
            aria-labelledby="pg-products-title"
          >
            <div className="pg-container">
              <div className="pg-products__top pg-products__top--simple">
                <div>
                  <span className="pg-kicker">Catálogo</span>
                  <h2 id="pg-products-title" className="pg-sectionTitle">
                    Productos
                  </h2>
                </div>
              </div>

              <div className="pg-products__grid">
                {productCards.map((product) => (
                  <Link
                    key={product.id}
                    to={`/productos/${product.id}`}
                    className="pg-productCard"
                  >
                    <div className="pg-productCard__media">
                      <img
                        src={product.image}
                        alt={product.title}
                        loading="lazy"
                      />
                    </div>

                    <div className="pg-productCard__body">
                      <h3 className="pg-productCard__title">{product.title}</h3>

                      <p className="pg-productCard__meta">
                        {product.materials?.join(" · ") || "Terminación textil"}
                      </p>

                      <span className="pg-productCard__cta">Ver producto</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </FadeInSection>
      

        <FadeInSection delay={0.15}>
          <section className="pg-materials">
            <div className="pg-container">
              <div className="pg-sectionHead">
                <div className="pg-sectionHead__copy">
                  <span className="pg-kicker">Materiales</span>
                  <h2 className="pg-sectionTitle">Materia prima de alta calidad</h2>
                  <p className="pg-sectionLead">
                    Trabajamos con buenas fibras para lograr piezas cómodas y
                    duraderas.
                  </p>
                </div>
              </div>

              <div className="pg-materials__grid">
                <article className="pg-materialCard pg-materialCard--simple">
                  <div className="pg-materialCard__body pg-materialCard__body--full">
                    <h3 className="pg-materialCard__title">Algodón</h3>
                    <p className="pg-materialCard__text">
                      Suave al tacto y cómodo para el día a día. Permite que la piel
                      respire y se siente bien desde el primer uso.
                    </p>

                    <ul className="pg-materialCard__list">
                      <li>Suavidad superior</li>
                      <li>Comodidad diaria</li>
                    </ul>
                  </div>
                </article>

                <article className="pg-materialCard pg-materialCard--simple">
                  <div className="pg-materialCard__body pg-materialCard__body--full">
                    <h3 className="pg-materialCard__title">Poliéster</h3>
                    <p className="pg-materialCard__text">
                      Resistente y duradero. Mantiene bien el color y soporta el uso
                      sin perder su forma.
                    </p>

                    <ul className="pg-materialCard__list">
                      <li>Colores duraderos</li>
                      <li>Elasticidad equilibrada</li>
                    </ul>
                  </div>
                </article>
              </div>
            </div>
          </section>
        </FadeInSection>


        <FadeInSection delay={0.25}>
          <section className="pg-custom">
            <div className="pg-container pg-custom__grid">
              <div className="pg-custom__copy">
                <span className="pg-kicker">Personalización</span>
                <h2 className="pg-sectionTitle">Opciones de personalización</h2>
                <p className="pg-sectionLead pg-sectionLead--custom">
                  Deslizá para ver las distintas opciones de personalización.
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

                  <p className="pg-customItem__text">{customSlides[current].text}</p>
                </article>

                <div className="pg-custom__controls">
                  <button
                    type="button"
                    className="pg-custom__navButton"
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
                    className="pg-custom__navButton"
                    onClick={nextSlide}
                    aria-label="Ver opción siguiente"
                  >
                    Siguiente
                  </button>
                </div>
              </div>

              <div
                className="pg-custom__visuals"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div className="pg-custom__mainImage">
                  <img
                    src={customSlides[current].image}
                    alt={customSlides[current].title}
                    loading="lazy"
                    className="pg-custom__sliderImage"
                  />
                </div>

                <div className="pg-custom__sideImages">
                  {customSlides.map((slide, index) => (
                    <button
                      key={slide.title}
                      type="button"
                      className={`pg-custom__thumb ${
                        current === index ? "is-active" : ""
                      }`}
                      onClick={() => setCurrent(index)}
                      aria-label={`Seleccionar ${slide.title}`}
                    >
                      <img src={slide.image} alt={slide.title} loading="lazy" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection delay={0.3}>
          <section className="pg-cta">
            <div className="pg-container">
              <div className="pg-cta__content">
                <span className="pg-cta__kicker">Contacto</span>
                <h2 className="pg-cta__title">
                  ¿Buscás darle un toque único a tus prendas?
                </h2>

                <Link to="/contacto" className="pg-cta__button">
                  Escribinos
                </Link>
              </div>
            </div>
          </section>
        </FadeInSection>
      </div>
    </section>
  );
}