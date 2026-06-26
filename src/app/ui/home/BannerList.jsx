import React from "react";

const banners = [
  {
    title: "Pagá tu factura",
    description:
      "Accedé a tu resumen de cuenta, factura mensual y planes de pago.",
    icon: "fa-file-invoice-dollar",
    url: "https://emosvirtual.riocuarto.gov.ar:9090/emosweb/servlet/com.emosweb.login",
    external: true,
  },
  {
    title: "Gestión de Clientes",
    description:
      "Accedé a la gestión de servicios en tu hogar (trámites de habilitaciones, certificados y pedidos).",
    icon: "fa-house-user",
    url: "/tramites",
    external: false,
  },
  {
    title: "Gestión de Profesionales y Privados",
    description:
      "Accedé a Formularios y Documentación para Matriculados, Estudios y Proyectos.",
    icon: "fa-briefcase",
    url: "/tramites",
    external: false,
  },
];

export default function BannerList() {
  return (
    <section className="banners" data-read>
      <div className="container">
        <div className="row g-4">
          {banners.map((banner) => (
            <div key={banner.title} className="col-12 col-md-4">
              <a
                href={banner.url}
                target={banner.external ? "_blank" : "_self"}
                rel={banner.external ? "noopener noreferrer" : undefined}
                className="service-card"
              >
                <div className="service-card__icon">
                  <i className={`fa-solid ${banner.icon}`}></i>
                </div>
                <h4 className="service-card__title">{banner.title}</h4>
                <p className="service-card__desc">{banner.description}</p>
                <span className="service-card__cta">
                  Ver más <i className="fa-solid fa-arrow-right"></i>
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
