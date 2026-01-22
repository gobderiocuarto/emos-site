export default function CardContact({ service }) {
  const cleanNumber = service.contact.replace(/\s/g, "");
  const isWhatsapp = service.type === "whatsapp";

  const link = isWhatsapp
    ? `https://wa.me/54${cleanNumber}`
    : `tel:${cleanNumber}`;

  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <a
        href={link}
        target={isWhatsapp ? "_blank" : "_self"}
        rel="noreferrer"
        className="contact-card"
      >
        <div
          className="icon-block"
          style={{
            backgroundColor: isWhatsapp ? "#00C96B" : "#009de0",
            color: "#fff",
          }}
        >
          <i className={isWhatsapp ? "fab fa-whatsapp" : "fas fa-phone"} />
        </div>

        <div className="contact-info">
          <div className="contact-title">{service.title}</div>
          <div className="contact-number">{service.contact}</div>
        </div>
      </a>
    </div>
  );
}
