import "./Gallery.css";

const HIGHLIGHTS = [
  "Vos los imaginas, Soltex los fabrica",
  "Tejidos de primera calidad",
  "Acabado fino",
];

const Gallery = () => {
  return (
    <section className="gallery" id="galeria">
      <div className="gallery-inner">
        <div className="gallery-layout">
          <div className="gallery-copy">
            <h2 className="gallery-title">Excelencia en cada puntada</h2>

            <p className="gallery-lead">
              Nos especializamos en crear cuellos y pretinas a medida, cuidando cada
              n detalle para lograr piezas duraderas y con el acabado que tu prenda merece.
            </p>

            <div className="gallery-points">
              {HIGHLIGHTS.map((item) => (
                <div className="gallery-point" key={item}>
                  <span className="gallery-point__dot" aria-hidden="true" />
                  <span className="gallery-point__text">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="gallery-visuals">
            <div className="gallery-visual gallery-visual--left">
              <img
                src="/img1.jpg"
                alt="Detalle textil de alta calidad"
                loading="lazy"
              />
            </div>

            <div className="gallery-visual gallery-visual--right">
              <img
                src="/img3.jpg"
                alt="Prenda terminada con acabado premium"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;