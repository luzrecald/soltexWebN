import { useEffect, useRef } from "react";
import "./FamilyStory.css";

export default function FamilyStory() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("visible");
          observer.unobserve(element);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="empresa"
      className="story scroll-reveal"
      aria-labelledby="story-title"
    >
      <div className="story-inner">
        <div className="story-grid">
          <div className="story-content">
            <p className="story-kicker">EMPRESA FAMILIAR</p>

            <h2 className="story-title" id="story-title">
              Una trayectoria construida con consistencia
            </h2>

            <div className="story-prose">
              <p>
                Soltex nació en 2011 como un emprendimiento familiar,
                impulsado por la necesidad de fabricar cuellos y pretinas
                tejidos en un contexto donde la oferta local era limitada.
              </p>

              <p>
                Desde sus inicios, la empresa ha construido un camino de
                crecimiento sostenido, basado en la experiencia, el trabajo
                constante y la visión de desarrollar componentes tejidos de
                alta calidad.
              </p>

              <p>
                Hoy colaboramos con marcas y fábricas que buscan precisión,
                identidad y excelencia en cada prenda.
              </p>
            </div>
          </div>

          <div className="story-media">
            <div className="story-video-wrap">
              <video
                className="story-video"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source src="/maquina.FamilyStory.webm" type="video/webm" />
                Tu navegador no soporta el video.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}