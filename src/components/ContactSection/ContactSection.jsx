import { useMemo } from "react";
import { useForm, ValidationError } from "@formspree/react";
import FadeInSection from "../FadeInSection/FadeInSection";
import "./ContactSection.css";

export default function ContactSection() {
  const [state, handleSubmit] = useForm("TU_FORM_ID_AQUI");

  const contact = useMemo(
    () => ({
      location: "San Lorenzo, Paraguay",
      whatsappLabel: "+595 981 948 566",
      whatsappDigits: "595981948566",
      email: "soltexventas@gmail.com",
      mapImage: "/visitanos.png",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Soltex+Soluciones+Textiles+-+Sucursal+1,+General+Genes+entre+Julia+M.+Cueto+y+Mcal+Estigarribia,+San+Lorenzo,+Paraguay",
    }),
    []
  );

  return (
    <section className="contact-page" id="contacto" aria-labelledby="ct-title">
      <div className="contact-shell">
        <FadeInSection delay={0.1}>
          <header className="ct-header">
            <span className="ct-kicker">Contacto</span>
            <h1 className="ct-title" id="ct-title">
              Hablemos
            </h1>
            <p className="ct-lead">
              Escribinos y te respondemos lo antes posible. También podés
              contactarnos directo por WhatsApp o email.
            </p>
          </header>
        </FadeInSection>

        <FadeInSection delay={0.18}>
          <section className="ct-main">
            <aside className="ct-info" aria-label="Información de contacto">
              <div className="ct-infoBlock">
                <div className="ct-infoGroup">
                  <span className="ct-label">Ubicación</span>
                  <p>{contact.location}</p>
                </div>

                <div className="ct-infoGroup">
                  <span className="ct-label">WhatsApp</span>
                  <a
                    href={`https://wa.me/${contact.whatsappDigits}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {contact.whatsappLabel}
                  </a>
                </div>

                <div className="ct-infoGroup">
                  <span className="ct-label">Email</span>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </div>
              </div>
            </aside>

            <div className="ct-formCard">
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
                    rows={6}
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

                  {!state.succeeded &&
                    state.errors &&
                    state.errors.length > 0 && (
                      <p className="ct-status is-error" role="alert">
                        No pudimos enviar tu mensaje. Intentá nuevamente o escribinos
                        por WhatsApp o email.
                      </p>
                    )}
                </div>
              </form>
            </div>
          </section>
        </FadeInSection>
      </div>

      <FadeInSection delay={0.24}>
        <section className="ct-visit" aria-label="Ubicación visual">
          <img src={contact.mapImage} alt="Sucursal Soltex" className="ct-visitBg" />

          <div className="ct-visitCard">
            <span className="ct-label">Visítanos</span>
            <h3>Estamos en San Lorenzo</h3>
            <p>A pasos del centro, atendiendo pedidos de todo el país.</p>
            <a href={contact.mapsUrl} target="_blank" rel="noreferrer">
              Ver en Google Maps
            </a>
          </div>
        </section>
      </FadeInSection>
    </section>
  );
}