export default function CardContact({ service }) {
  const cleanNumber = service.contact.replace(/\s/g, "");
  const isWhatsapp = service.type === "whatsapp";
  const link = isWhatsapp ? `https://wa.me/54${cleanNumber}` : `tel:${cleanNumber}`;
  const iconColor = isWhatsapp ? "#00C96B" : "#009de0";

  return (
    <a
      href={link}
      target={isWhatsapp ? "_blank" : "_self"}
      rel="noreferrer"
      className="contact-card-v2"
    >
      <div className="contact-card-v2__icon" style={{ color: iconColor }}>
        <i className={isWhatsapp ? "fab fa-whatsapp" : "fas fa-phone"} />
      </div>
      <div className="contact-card-v2__info">
        <span className="contact-card-v2__title">{service.title}</span>
        <span className="contact-card-v2__number">{service.contact}</span>
      </div>
    </a>
  );
}
