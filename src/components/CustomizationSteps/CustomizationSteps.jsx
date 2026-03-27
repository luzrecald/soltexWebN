import "./CustomizationSteps.css";

const STEPS = [
  {
    heading: "Envíanos tu diseño",
    desc: "Comparte tu diseño o una muestra física para comenzar a darle forma a tu proyecto.",
    image: "/step1.png",
  },
  {
    heading: "Definimos colores",
    desc: "Seleccionamos cuidadosamente los hilos para que encajen perfectamente con tu prenda.",
    image: "/step2.png",
  },
  {
    heading: "Medidas y material",
    desc: "Definimos los tamaños y el material del que va a ser fabricado tu pedido .",
    image: "/step3.png",
  },
  {
    heading: "Coordinamos entrega",
    desc: "Nos encargamos de la producción y la entrega de forma rápida y eficiente.",
    image: "/step4.png",
  },
];

export default function CustomizationSteps() {
  return (
    <section className="process-section" aria-labelledby="process-title">
      <div className="process-section__inner">
        <header className="process-section__header">
          <h2 id="process-title" className="process-section__title">
            Como personalizar tus productos con nosotros?
          </h2>
        </header>

        <div className="process-section__list" role="list">
          {STEPS.map((step, index) => (
            <article className="process-row" key={step.heading} role="listitem">
              <div className="process-row__number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="process-row__content">
                <h3 className="process-row__title">{step.heading}</h3>
                <p className="process-row__desc">{step.desc}</p>
              </div>

              <div className="process-row__media" aria-hidden="true">
                <img src={step.image} alt="" loading="lazy" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}