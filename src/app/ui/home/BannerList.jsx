import Link from "next/link";
import BannerCard from "./BannerCard";
import React from "react";

const banners = [
  {
    title: "EMOS VA AL COLE",
    subtitle: "Atención al vecino",
    icon: "fa-phone fa-2xl",
    color: "bg-primary text-white",
    url: "/seccion/la-emos-va-al-cole",
    target: "",
  },
  {
    title: "Pagos Online",
    subtitle: "Oficina Virtual",
    icon: "fa-dollar-sign fa-2xl",
    color: "bg-primary text-white",
    url: "https://emosvirtual.riocuarto.gov.ar:9090/emosweb/servlet/com.emosweb.login",
    target: "",
  },
  {
    title: "Biblioteca Ambiental",
    subtitle: "Informacion y Recursos",
    icon: "fa-book fa-2xl",
    color: "bg-primary text-white",
    url: "/biblioteca",
    target: "_blank",
  },
];

export default function BannerList() {
  return (
    <section className="banners" data-read>
      <div className="container">
        <div className="row">
          {banners.map((banner) => {
            const isExternal = /^https?:\/\//.test(banner.url);
            return (
              <div key={banner.title} className="col-md-4">
                {isExternal ? (
                  <a
                    href={banner.url}
                    target={banner.target || "_blank"}
                    rel="noopener noreferrer"
                  >
                    <BannerCard banner={banner} />
                  </a>
                ) : (
                  <Link href={banner.url}>
                    <BannerCard banner={banner} />
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
