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
    id: 7,
    icon: "fas fa-store",
    title: "GESTIÓN COMERCIAL",
    contact: "358 4035 476",
    type: "whatsapp"
  },
  {
    id: 2,
    icon: "fas fa-exclamation-circle",
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
    <main className="design design-page">
    <div className="container ">
      <div className="col-12">
        <div className="mb-4">
          <div className="card border-2 ">
            {/* Encabezado azul principal */}
            <div className="card-header bg-primary text-white py-3">
              <h5 className="mb-0 fw-bold text-uppercase" style={{ fontSize: '1.1rem' }}>
                Contactos
              </h5>
            </div>

            <div className="card-body ">
              <div className="row g-4">

                {contactsWithNumbers.map((service) => (
                  <div key={service.id} className="col-12 col-md-6 col-lg-4">
                    {/* Contenedor principal con d-flex */}
                    <div className="d-flex align-items-center bg-light rounded p-3 border-start border-4 border-primary h-100 justify-content-between">
                      
                      {/* LADO IZQUIERDO: Icono y Texto */}
                      <div className="d-flex align-items-center">
                        {/* ICONO */}
                        <div className="flex-shrink-0 bg-white rounded p-2 me-3 text-muted shadow-sm">
                          <i className={`${service.icon} fs-5`}></i>
                        </div>

                        {/* TEXTO */}
                        <div>
                          <div className="fw-bold text-uppercase small text-dark">
                            {service.title}
                          </div>
                          <div className="text-black fw-bold small">
                            {service.contact}
                          </div>
                        </div>
                      </div>

                      {/* LADO DERECHO: BOTÓN */}
                      <div className="flex-shrink-0 ms-2">
                        {service.type === "whatsapp" ? (
                          <a
                            href={`https://wa.me/54${service.contact.replace(/\s/g, "")}`}
                            className="btn btn-sm btn-success text-white rounded-circle d-flex align-items-center justify-content-center"
                            style={{ width: '40px', height: '40px' }}
                            title="WhatsApp"
                          >
                            <i className="fab fa-whatsapp"></i>
                          </a>
                        ) : (
                          <a
                            href={`tel:${service.contact.replace(/\s/g, "")}`}
                            className="btn btn-sm btn-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                            style={{ width: '40px', height: '40px' }}
                            title="Llamar"
                          >
                            <i className="fas fa-phone"></i>
                          </a>
                        )}
                      </div>

                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
          </div>
      </div>
    </div>
</main>
  );
}
