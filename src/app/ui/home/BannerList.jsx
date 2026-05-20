import Link from "next/link";
import BannerCard from "./BannerCard";
import React from "react";

const banners = [
  {
    title: "EMOS Va al Cole",
    subtitle: "Educación ambiental",
    icon: "fa-school",
    color: "banner-card--cole",
    url: "/seccion/emos-va-al-cole",
    external: false,
  },
  {
    title: "Pagos y Deudas",
    subtitle: "Pagá online",
    icon: "fa-credit-card",
    color: "banner-card--pagos",
    url: "https://emosvirtual.riocuarto.gov.ar:9090/emosweb/servlet/com.emosweb.login",
    external: true,
  },
  {
    title: "Biblioteca Ambiental",
    subtitle: "Recursos educativos",
    icon: "fa-book-open",
    color: "banner-card--biblioteca",
    url: "/biblioteca",
    external: false,
  },
];

export default function BannerList() {
  return (
    <section className="banners" data-read>
      <div className="container">
        <div className="row">
          {banners.map((banner) =>
            banner.external ? (
              <div key={banner.title} className="col-md-4">
                <a href={banner.url} target="_blank" rel="noopener noreferrer">
                  <BannerCard banner={banner} />
                </a>
              </div>
            ) : (
              <div key={banner.title} className="col-md-4">
                <Link href={banner.url}>
                  <BannerCard banner={banner} />
                </Link>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
