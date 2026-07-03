import Link from "next/link";

const items = [
  {
    title: "Biblioteca Ambiental",
    description:
      "Recursos y material educativo sobre el cuidado del agua y el ambiente.",
    icon: "fa-book-open",
    href: "/biblioteca",
    color: "green",
  },
  {
    title: "EMOS va al Cole",
    description:
      "Programa de educación ambiental para escuelas de Río Cuarto.",
    icon: "fa-school",
    href: "/seccion/emos-va-al-cole",
    color: "blue",
  },
];

export default function ProgramsBanner() {
  return (
    <section className="programs-section" data-read>
      <div className="container">
        <div className="programs-banner">
          <div className="programs-banner__overlay" />
          <div className="programs-banner__content">
            <div className="programs-banner__header">
              <span className="programs-banner__icon">
                <i className="fas fa-seedling" aria-hidden="true" />
              </span>
              <h2 className="programs-banner__title">Compromiso Ciudadano</h2>
            </div>

            <div className="row g-4 justify-content-center">
              {items.map((item) => (
                <div className="col-12 col-sm-8 col-md-5" key={item.href}>
                  <Link href={item.href} className="programs-card">
                    <span
                      className={`programs-card__icon programs-card__icon--${item.color}`}
                    >
                      <i className={`fas ${item.icon}`} aria-hidden="true" />
                    </span>
                    <span className="programs-card__body">
                      <span className="programs-card__title">
                        {item.title}
                      </span>
                      <span className="programs-card__desc">
                        {item.description}
                      </span>
                    </span>
                    <span className="programs-card__arrow">
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
