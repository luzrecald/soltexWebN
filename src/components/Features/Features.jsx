import "./Features.css";

const ITEMS = [
  {
    icon: "palette",
    title: "Armonía / Contraste de color",
    text: "Antes de la producción del pedido, definimos con el cliente los colores a utilizar en la fabricación de los cuellos y pretinas, logrando coincidencias exactas o contrastes según el resultado deseado.",
  },
  {
    icon: "straighten",
    title: "Medidas ajustadas",
    text: "Trabajamos con medidas estándares y personalizadas, adaptándonos a distintos tamaños y requerimientos, incluyendo talles especiales como minis o XXXL.",
  },
  {
    icon: "brush",
    title: "Diseños únicos",
    text: "Fabricamos productos con diseños personalizados, utilizando rayas, patrones y textos para crear cuellos y pretinas únicos.",
  },
];

export default function Features() {
  return (
    <section className="fh-features" aria-labelledby="features-title">
      <div className="fh-featuresInner">

        {/* HEADER */}
        <header className="fh-featuresHeader">
          <h2 id="features-title" className="fh-featuresTitle">
            Desarrollo textil a medida
          </h2>
        </header>

        {/* LISTA */}
        <div className="fh-featuresList" role="list">
          {ITEMS.map((item, index) => (
            <article
              key={item.title}
              className={`fh-featureCard ${
                index < ITEMS.length - 1 ? "fh-featureCard--border" : ""
              }`}
              role="listitem"
            >
              {/* ICONO */}
              <div className="fh-featureIconWrap" aria-hidden="true">
                <span className="material-symbols-outlined fh-featureIcon">
                  {item.icon}
                </span>
              </div>

              {/* CONTENIDO */}
              <div className="fh-featureContent">
                <h3 className="fh-featureHeading">
                  {item.title}
                </h3>

                <p className="fh-featureText">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}