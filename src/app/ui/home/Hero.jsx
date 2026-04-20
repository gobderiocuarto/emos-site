import React, { Suspense } from "react";
import Link from "next/link";
import Slides from "./Slides";
import SearchForm from "../commons/SearchForm";
import { fetchNews } from "@/app/lib/DataNews";

const quickNumbers = [
  { label: "Reclamos", number: "358 4111 395", type: "whatsapp" },
  { label: "Guardia", number: "358 4768 401", type: "phone" },
];

const quickLinks = [
  { label: "Pagos y deudas", href: "https://emosvirtual.riocuarto.gov.ar:9090/emosweb/servlet/com.emosweb.login", external: true },
  { label: "Reclamos", href: "/seccion/la-emos-va-al-cole" },
  { label: "Biblioteca", href: "/biblioteca" },
];

export default async function Hero() {
  let posts = [];
  try {
    posts = await fetchNews({ limit: 5 });
  } catch {
    // silently fail — slides renders empty state
  }

  return (
    <section className="hero" data-read>
      <div className="hero-split-row">
        {/* Columna izquierda: slider de noticias */}
        <div className="hero-img-col">
          <Suspense fallback={<div className="hero-slide-placeholder" />}>
            <Slides posts={posts} />
          </Suspense>
        </div>

        {/* Columna derecha: panel EMOS */}
        <div className="hero-panel-col">
          {/* Logo */}
          <div className="hero-panel__logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logos/EMOS_Logo_Horizontal_blanco.webp"
              alt="EMOS"
              className="hero-panel__logo-img"
            />
            <p className="hero-panel__subtitle">
              Empresa Municipal de Obras y Servicios
              <br />
              <span>Río Cuarto · Córdoba</span>
            </p>
          </div>

          <hr className="hero-panel__divider" />

          {/* Buscador */}
          <div className="hero-panel__search">
            <Suspense>
              <SearchForm />
            </Suspense>
          </div>

          {/* Números rápidos */}
          <div className="hero-panel__numbers">
            {quickNumbers.map((n) => {
              const clean = n.number.replace(/\s/g, "");
              const href = n.type === "whatsapp"
                ? `https://wa.me/54${clean}`
                : `tel:${clean}`;
              const isWsp = n.type === "whatsapp";
              return (
                <a
                  key={n.label}
                  href={href}
                  target={isWsp ? "_blank" : "_self"}
                  rel="noreferrer"
                  className="hero-number-box"
                >
                  <i className={isWsp ? "fab fa-whatsapp hero-number-box__icon" : "fas fa-phone hero-number-box__icon"} />
                  <span className="hero-number-box__label">{n.label}</span>
                  <span className="hero-number-box__num">{n.number}</span>
                </a>
              );
            })}
          </div>

          {/* Accesos rápidos */}
          <div className="hero-panel__quicklinks">
            {quickLinks.map((l) =>
              l.external ? (
                <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="hero-quicklink">
                  {l.label}
                </a>
              ) : (
                <Link key={l.label} href={l.href} className="hero-quicklink">
                  {l.label}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
