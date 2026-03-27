import "./ShippingBanner.css";

export default function ShippingBanner() {
  return (
    <section className="shipping-banner" aria-label="Envíos">
      <div className="shipping-banner__inner">
        <span className="shipping-banner__bus" aria-hidden="true">
          🚌
        </span>

        <h2 className="shipping-banner__text">
          ¿Estás en el interior? Hacemos envíos a todo el país
        </h2>

        <a href="/contacto" className="shipping-banner__cta">
          Contactar ahora
        </a>
      </div>
    </section>
  );
}