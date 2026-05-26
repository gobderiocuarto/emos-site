import Link from "next/link";

export default function EmosBanners() {
  const items = [
    {
      title: "EMOS | Matriculados",
      slug: "emos-matriculados",
      icon: "fa-file-contract",
    },
    {
      title: "EMOS | Estudios y Proyectos",
      slug: "emos-estudios-y-proyectos",
      icon: "fa-pencil-ruler",
    },
  ];

  return (
    <section className="emos-banners py-5" data-read>
      <div className="container">
        <div className="banners-inner">
          <div className="text-center mb-3"></div>
          <div className="row g-3">
            {items.map((item) => (
              <div key={item.slug} className="col-12 col-md-6">
                <Link
                  href={`/tramites/${item.slug}`}
                  className="banner-emos-link"
                >
                  <div className="banner-emos banner-emos--formalities">
                    <div className="banner-emos__icon">
                      <i className={`fa-solid ${item.icon}`}></i>
                    </div>
                    <div className="banner-emos__content">
                      <h4 className="banner-emos__title">{item.title}</h4>
                    </div>
                    <div className="banner-emos__arrow">
                      <i className="fa-solid fa-chevron-right"></i>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
