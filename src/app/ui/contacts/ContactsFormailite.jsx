import servicesData from "./ContactServiceData";

export default function ContactsFormalite() {
  return (
    <section className="contacts-strip" data-read>
      <div className="container">
        <div className="contacts-strip__inner">
          <p className="contacts-strip__label">Contactanos</p>
          <div className="contacts-strip__list">
            {servicesData.map((service) => {
              const cleanNumber = service.contact.replace(/\s/g, "");
              const isWhatsapp = service.type === "whatsapp";
              const link = isWhatsapp
                ? `https://wa.me/54${cleanNumber}`
                : `tel:${cleanNumber}`;

              return (
                <a
                  key={service.id}
                  href={link}
                  target={isWhatsapp ? "_blank" : "_self"}
                  rel="noreferrer"
                  className="contact-item"
                >
                  <div className={`contact-item__icon contact-item__icon--${service.type}`}>
                    <i className={isWhatsapp ? "fab fa-whatsapp" : "fas fa-phone"} />
                  </div>
                  <div className="contact-item__info">
                    <span className="contact-item__title">{service.title}</span>
                    <span className="contact-item__number">{service.contact}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
