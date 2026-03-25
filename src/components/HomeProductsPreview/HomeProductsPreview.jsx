import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PRODUCTS } from "../productsData";
import "./HomeProductsPreview.css";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function HomeProductsPreview() {
  return (
    <section
      className="products-preview"
      aria-labelledby="products-preview-title"
    >
      <div className="products-preview__inner">
        <header className="products-preview__header">
          <span className="products-preview__kicker">Catálogo</span>
          <h2
            id="products-preview-title"
            className="products-preview__title-force"
          >
            Productos
          </h2>
        </header>

        <motion.div
          className="products-preview__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {PRODUCTS.map((product) => (
            <motion.article
              key={product.id}
              className="products-preview__item"
              variants={cardVariants}
            >
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
                  <h3 className="products-preview__name">{product.title}</h3>

                  {product.materials?.length > 0 && (
                    <p className="products-preview__meta">
                      {product.materials.join(" · ")}
                    </p>
                  )}

                  <span className="products-preview__cta">Ver producto</span>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}