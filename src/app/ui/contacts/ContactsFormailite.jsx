import servicesData from "./ContactServiceData";

const FEATURED_TITLES = ["RECLAMOS", "GUARDIA"];

function groupByTitle(list) {
  const groups = [];
  const index = new Map();

  list.forEach((service) => {
    if (!index.has(service.title)) {
      index.set(service.title, groups.length);
      groups.push({ title: service.title, items: [] });
    }
    groups[index.get(service.title)].items.push(service);
  });

  return groups;
}

function ContactGroup({ group, icon, hrefFor, target }) {
  const featured = FEATURED_TITLES.includes(group.title);

  return (
    <div
      className={`contacts-group ${featured ? "contacts-group--featured" : ""}`}
    >
      {featured && <p className="contacts-group__title">{group.title}</p>}
      <div className="contacts-group__numbers">
        {group.items.map((service) => {
          const cleanNumber = service.contact.replace(/\s/g, "");
          return (
            <a
              key={service.id}
              href={hrefFor(cleanNumber)}
              target={target}
              rel={target ? "noreferrer" : undefined}
              className="contacts-group__number"
            >
              <i className={icon} aria-hidden="true" />
              {service.contact}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default function ContactsFormalite() {
  const whatsappGroups = groupByTitle(
    servicesData.filter((service) => service.type === "whatsapp")
  );
  const phoneGroups = groupByTitle(
    servicesData.filter((service) => service.type === "phone")
  );

  return (
    <section className="contacts-section" data-read>
      <div className="container">
        <div className="contacts-banner">
          <div className="contacts-banner__overlay" />
          <div className="contacts-banner__content">
            <div className="row g-3">
              <div className="col-md-4 d-none d-md-block" aria-hidden="true" />

              <div className="col-12 col-md-8">
                <div className="contacts-banner__header">
                  <span className="contacts-banner__icon">
                    <i className="fas fa-headset" aria-hidden="true" />
                  </span>
                  <h2 className="contacts-banner__title">Teléfonos Útiles</h2>
                </div>

                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <div className="contacts-column contacts-column--whatsapp">
                      <div className="contacts-column__header">
                        <span className="contacts-column__icon">
                          <i className="fab fa-whatsapp" aria-hidden="true" />
                        </span>
                        <h3 className="contacts-column__title">
                          Gestión Comercial
                        </h3>
                      </div>
                      {whatsappGroups.map((group) => (
                        <ContactGroup
                          key={group.title}
                          group={group}
                          icon="fab fa-whatsapp"
                          hrefFor={(number) => `https://wa.me/54${number}`}
                          target="_blank"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="contacts-column contacts-column--phone">
                      <div className="contacts-column__header">
                        <span className="contacts-column__icon">
                          <i className="fas fa-phone-volume" aria-hidden="true" />
                        </span>
                        <h3 className="contacts-column__title">
                          Oficina Administrativa
                        </h3>
                      </div>
                      {phoneGroups.map((group) => (
                        <ContactGroup
                          key={group.title}
                          group={group}
                          icon="fas fa-phone"
                          hrefFor={(number) => `tel:${number}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
