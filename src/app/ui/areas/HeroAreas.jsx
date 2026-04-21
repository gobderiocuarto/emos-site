import ContactItem from "../commons/ContactItem";

export default function HeroAreas({ area, propouseOverride }) {
  if (!area) {
    return "No hay área para mostrar.";
  }

  const contact = area.contact || [];

  return (
    <section className="area-hero">
      <h5 className="area-hero-prename mb-2">{area.pre_name}</h5>
      <div className="area-hero-separator"></div>
      <h1 className="mb-4">{area.name || "Área sin nombre"}</h1>

      <div className="area-hero-description">
        <p
          className="mb-4"
          dangerouslySetInnerHTML={{
            __html: propouseOverride || area.propouse || "",
          }}
        ></p>
      </div>

      {contact.length > 0 && (
        <div className="card">
          <div className="card-header">
            <h5 className="mb-0">Información de Contacto</h5>
          </div>
          <div className="card-body">
            <div className="row row-cols-1 row-cols-md-2 g-2 g-md-3">
              {contact.map((item, index) => (
                <div key={index} className="col">
                  <ContactItem
                    type={item.type}
                    value={item.value}
                    label={item.info}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
