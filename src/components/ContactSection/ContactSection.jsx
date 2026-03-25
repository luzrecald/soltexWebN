import { useMemo } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./ContactSection.css";

export default function ContactSection() {
  const [state, handleSubmit] = useForm("TU_FORM_ID_AQUI");

  const contact = useMemo(
    () => ({
      location: "San Lorenzo, Paraguay",
      whatsappLabel: "+595 981 948 566",
      whatsappDigits: "595981948566",
      email: "soltexventas@gmail.com",
      heroImage: "/Contacto.png",
      mapImage: "/visitanos.png",
      mapsUrl: "https://maps.google.com/?q=San+Lorenzo+Paraguay",
    }),
    []
  );

  return (
    <section className="contact-page" id="contacto" aria-labelledby="ct-title">
      <div className="contact-shell">
        {/* HERO */}
        <header className="ct-hero">
          <div className="ct-heroCopy">
            <h1 className="ct-title" id="ct-title">
              Contacto
            </h1>

            <p className="ct-lead">
              Escribinos y respondemos lo antes posible. También podés
              contactarnos directo por WhatsApp o email.
            </p>
          </div>

          <div className="ct-heroMedia">
            <img src={contact.heroImage} alt="Contacto Soltex" />
          </div>
        </header>

        {/* INFO + FORM */}
        <section className="ct-main">
          <aside className="ct-info" aria-label="Información de contacto">
            <div className="ct-infoGroup">
              <span className="ct-kicker">Ubicación</span>
              <p>{contact.location}</p>
            </div>

            <div className="ct-infoGroup">
              <span className="ct-kicker">WhatsApp</span>
              <a
                href={`https://wa.me/${contact.whatsappDigits}`}
                target="_blank"
                rel="noreferrer"
              >
                {contact.whatsappLabel}
              </a>
            </div>

            <div className="ct-infoGroup">
              <span className="ct-kicker">Email General</span>
              <a href={`mailto:${contact.email}`} className="is-underlined">
                {contact.email}
              </a>
            </div>

            <div className="ct-quote">
              <p>
                “La excelencia en textiles comienza con una conversación honesta.”
              </p>
            </div>
          </aside>

          <div className="ct-formWrap">
            <form className="ct-form" onSubmit={handleSubmit}>
              <div className="ct-grid">
                <div className="ct-field">
                  <label htmlFor="ct-name">Nombre completo</label>
                  <input
                    id="ct-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="ct-field">
                  <label htmlFor="ct-email">Email</label>
                  <input
                    id="ct-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="ct-status is-error"
                  />
                </div>

                <div className="ct-field">
                  <label htmlFor="ct-phone">Teléfono</label>
                  <input
                    id="ct-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                  />
                </div>

                <div className="ct-field">
                  <label htmlFor="ct-subject">Asunto</label>
                  <input
                    id="ct-subject"
                    name="subject"
                    type="text"
                    required
                  />
                </div>
              </div>

              <div className="ct-field ct-field--message">
                <label htmlFor="ct-message">Mensaje</label>
                <textarea
                  id="ct-message"
                  name="message"
                  rows={5}
                  required
                />
                <ValidationError
                  prefix="Mensaje"
                  field="message"
                  errors={state.errors}
                  className="ct-status is-error"
                />
              </div>

              <div className="ct-actions">
                <button
                  className="ct-btn"
                  type="submit"
                  disabled={state.submitting}
                >
                  {state.submitting ? "Enviando..." : "Enviar mensaje"}
                </button>

                {state.succeeded && (
                  <p className="ct-status is-ok" role="status">
                    Mensaje enviado correctamente. Te responderemos lo antes posible.
                  </p>
                )}

                {!state.succeeded && state.errors && state.errors.length > 0 && (
                  <p className="ct-status is-error" role="alert">
                    No pudimos enviar tu mensaje. Intenta nuevamente o contáctanos por WhatsApp o email.
                  </p>
                )}
              </div>
            </form>
          </div>
        </section>
      </div>

      {/* MAP / VISUAL */}
      <section className="ct-mapSection" aria-label="Ubicación visual">
        <img src={contact.mapImage} alt="Visítanos" className="ct-mapBg" />
<div className="ct-mapCard">
  <div className="ct-mapIcon">⌖</div>
  <h3>Visítanos</h3>
  <p>
    Estamos a pasos del centro de San Lorenzo, atendiendo pedidos de
    todo el país.
  </p>
  <a
    href="https://www.google.com/maps/search/?api=1&query=Soltex+Soluciones+Textiles+-+Sucursal+1,+General+Genes+entre+Julia+M.+Cueto+y+Mcal+Estigarribia,+San+Lorenzo,+Paraguay"
    target="_blank"
    rel="noreferrer"
  >
    Ver en Google Maps
  </a>
</div>
      </section>
    </section>
  );
}