import Link from "next/link";

const servicesData = [
  {
    id: 1,
    icon: "fas fa-store",
    title: "GESTIÓN COMERCIAL",
    contact: "358 4111 627",
    type: "whatsapp"
  },
  {
    id: 2,
    icon: "fas fa-complaints",
    title: "RECLAMOS",
    contact: "358 4111 395",
    type: "whatsapp"
  },
  {
    id: 3,
    icon: "fas fa-building",
    title: "OFICINA ADMINISTRATIVA",
    contact: "358 4768 405",
    type: "phone"
  },
  {
    id: 4,
    icon: "fas fa-laptop",
    title: "PAGO ONLINE",
    subtitle: "OFICINA VIRTUAL",
    type: "link"
  },
  {
    id: 5,
    icon: "fas fa-file-contract",
    title: "CONSULTA",
    subtitle: "HABILITACIÓN DE OBRAS",
    type: "link"
  },
  {
    id: 6,
    icon: "fas fa-pencil-ruler",
    title: "ESTUDIOS Y PROYECTOS",
    type: "link"
  },
  {
    id: 7,
    icon: "fas fa-building",
    title: "GESTIÓN COMERCIAL",
    contact: "358 4035 476",
    type: "whatsapp"
  },
  {
    id: 8,
    icon: "fas fa-shield",
    title: "GUARDIA",
    contact: "358 4768 401",
    type: "phone"
  },
  {
    id: 9,
    icon: "fas fa-book",
    title: "CONSULTA",
    subtitle: "GUÍA DE TRÁMITES",
    type: "link"
  },
  {
    id: 10,
    icon: "fas fa-id-card",
    title: "CEDULÓN DIGITAL",
    subtitle: "SUSCRIPCIÓN",
    type: "link"
  },
  {
    id: 11,
    icon: "fas fa-download",
    title: "MATRICULADOS",
    subtitle: "DESCARGA DE FORMULARIOS",
    type: "link"
  }
];

export default function Design() {
  const contactsWithNumbers = servicesData.filter(service => service.contact);
  const specialServices = servicesData.filter(service => 
    service.id === 4 || service.id === 10 || service.id === 11
  );
  const otherLinks = servicesData.filter(service => 
    !service.contact && service.id !== 4 && service.id !== 10 && service.id !== 11
  );

  return (
    <main className="design design-page" data-read>
      <div className="row services-container">
          <div className="col-12">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h5 className="mb-0">Directorio Completo de Servicios</h5>
              </div>
              <div className="card-body p-0">
                {/* Agrupación en 3 columnas: Contactos (más ancho) | Servicios Online | Otros Servicios */}
                <div className="p-3">
                  <div className="row">
                   <div className="col-12 col-lg-5 pe-lg-4 border-lg-end">
                    {contactsWithNumbers.length > 0 && (
                      <>
                        <h6 className="text-primary fw-bold mb-3">
                          <i className="fas fa-phone-alt me-2"></i> Contactos Directos
                        </h6>

                        <div className="d-flex flex-column gap-2">
                          {contactsWithNumbers.map((service) => (
                            <div key={service.id} className="contact-card p-3 rounded d-flex align-items-center justify-content-between" >
                              
                              {/* IZQUIERDA: Estética de Servicios Online */}
                              <div className="d-flex align-items-center gap-3">
                                <div 
                                  className="d-flex align-items-center justify-content-center rounded" 
                                  style={{ width: '64px', height: '64px', backgroundColor: '#e3f2fd', minWidth: '64px' }}
                                >
                                  <i className={`${service.icon} fs-4 text-dark`}></i>
                                </div>

                                <div>
                                  <h6 className="mb-0 fw-bold text-dark text-uppercase" style={{ fontSize: '0.9rem', letterSpacing: '0.5px' }}>
                                    {service.title}
                                  </h6>
                                  <p className="mb-0 text-muted text-uppercase" style={{ fontSize: '0.75rem' }}>
                                    {service.contact}
                                  </p>
                                </div>
                              </div>

                              {/* DERECHA: Botones de Acción */}
                              <div className="ms-3">
                                {service.type === "whatsapp" && (
                                  <a
                                    href={`https://wa.me/54${service.contact.replace(/\s/g, "")}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-success btn-sm d-flex align-items-center gap-1 px-2 py-1 rounded-pill shadow-sm"
                                  >
                                    <i className="fab fa-whatsapp"></i> <span>Whatsapp</span>
                                  </a>
                                )}

                                {service.type === "phone" && (
                                  <a
                                    href={` tel:${service.contact.replace(/\s/g, "")}`}
                                    className="btn btn-primary btn-sm d-flex align-items-center gap-1 px-2 py-1 rounded-pill shadow-sm"
                                  >
                                    <i className="fas fa-phone-alt"></i> <span>Llamar</span>
                                  </a>
                                )}
                              </div>

                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                    <div className="col-12 col-md-6 col-lg-3 px-lg-3">
                      {specialServices.length > 0 && (
                        <>
                          <h6 className="text-primary fw-bold mb-3">
                            <i className="fas fa-laptop me-2"></i>Servicios Online
                          </h6>
                          <div className="row g-3">
                            {specialServices.map((service) => (
                              <div key={service.id} className="col-12">
                                <div className="d-flex align-items-start gap-3 p-2  rounded">
                                  <div className="card-icon">
                                    <i className={service.icon}></i>
                                  </div>
                                  <div className="flex-grow-1">
                                    <h6 className="card-title mb-1">{service.title}</h6>
                                    {service.subtitle && (
                                      <p className="card-subtitle text-muted mb-0">{service.subtitle}</p>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    <div className="col-12 col-md-6 col-lg-3 ps-lg-3">
                      {otherLinks.length > 0 && (
                        <>
                          <h6 className="text-primary fw-bold mb-3">
                            <i className="fas fa-briefcase me-2"></i>Otros Servicios
                          </h6>
                          <div className="row g-3">
                            {otherLinks.map((service) => (
                              <div key={service.id} className="col-12">
                                <div className="d-flex align-items-start gap-3 p-2  rounded">
                                  <div className="card-icon">
                                    <i className={service.icon}></i>
                                  </div>
                                  <div className="flex-grow-1">
                                    <h6 className="card-title mb-1">{service.title}</h6>
                                    {service.subtitle && (
                                      <p className="card-subtitle text-muted mb-0">{service.subtitle}</p>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </main>
  );
}
