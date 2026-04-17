export default function CardContact({ service }) {
  const cleanNumber = service.contact.replace(/\s/g, "");
  const isWhatsapp = service.type === "whatsapp";

  const link = isWhatsapp
    ? `https://wa.me/54${cleanNumber}`
    : `tel:${cleanNumber}`;

  return (
    <a
      href={link}
      target={isWhatsapp ? "_blank" : "_self"}
      rel="noreferrer"
      className="contact-chip"
      style={{ backgroundColor: isWhatsapp ? "#00C96B" : "#009de0" }}
    >
      <i className={isWhatsapp ? "fab fa-whatsapp" : "fas fa-phone"} />
      <span>{service.title}</span>
    </a>
  );
}
