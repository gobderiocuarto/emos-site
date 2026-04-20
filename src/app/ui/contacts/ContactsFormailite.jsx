import CardContact from "./CardContact";
import servicesData from "./ContactServiceData";

export default function ContactsFormalite() {
  return (
    <section className="contacts-strip bg-gray" data-read>
      <div className="container">
        <p className="contacts-strip__label">Contactanos</p>
        <div className="contacts-strip__list">
          {servicesData.map((service) => (
            <CardContact key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
