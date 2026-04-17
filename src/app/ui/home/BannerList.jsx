import Link from "next/link";
import BannerCard from "./BannerCard";
import React from "react";

const banners = [
  {
    title: "EMOS VA AL COLE",
    image: "/images/banners/EMOS VA AL COLE.png",
    url: "/seccion/la-emos-va-al-cole",
    external: false,
  },
  {
    title: "Pagos y Deudas",
    image: "/images/banners/PAGOS Y  DEUDAS.png",
    url: "https://emosvirtual.riocuarto.gov.ar:9090/emosweb/servlet/com.emosweb.login",
    external: true,
  },
  {
    title: "Biblioteca Ambiental",
    image: "/images/banners/BIBLIOTECA.png",
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
            )
          )}
        </div>
      </div>
    </section>
  );
}
