import { Link } from "react-router-dom";
import { PRODUCTS } from "../productsData";
import "./HomeProductsPreview.css";

export default function HomeProductsPreview() {
  return (
    <section
      className="products-preview"
      aria-labelledby="products-preview-title"
    >
      <div className="products-preview__inner">
        <header className="products-preview__header">
          <h2
            id="products-preview-title"
            className="products-preview__title-force"
          >
            Nuestros Productos
          </h2>
        </header>

        <div className="products-preview__grid">
          {PRODUCTS.map((product) => (
            <article key={product.id} className="products-preview__item">
              <Link
                to={`/productos/${product.id}`}
                className="products-preview__link"
              >
                <div className="products-preview__media">
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    style={{
                      "--pos": product.cardPosition || "center center",
                    }}
                  />
                </div>

                <div className="products-preview__content">
                  <span className="products-preview__eyebrow">Producto</span>

                  <h3 className="products-preview__name">
                    {product.title}
                  </h3>

                  <div className="products-preview__meta">
                    {product.materials?.length > 0 && (
                      <p>
                        <strong>Materiales:</strong> {product.materials.join(" · ")}
                      </p>
                    )}

                    {product.design?.length > 0 && (
                      <p>
                        <strong>Diseños:</strong> {product.design.join(" · ")}
                      </p>
                    )}

                    {product.applications?.length > 0 && (
                      <p>
                        <strong>Aplicaciones:</strong>{" "}
                        {product.applications.join(" · ")}
                      </p>
                    )}
                  </div>

                  <span className="products-preview__cta">
                    Ver especificación
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}