"use client";

import { useRef } from "react";
import Link from "next/link";

export default function TramitesCarousel({ formalities }) {
  const trackRef = useRef(null);

  const scroll = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(".tramites-carousel__item");
    const cardWidth = card ? card.offsetWidth + 24 : 300;
    track.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  return (
    <div className="tramites-carousel">
      <button
        type="button"
        className="tramites-carousel__arrow tramites-carousel__arrow--prev"
        onClick={() => scroll(-1)}
        aria-label="Trámites anteriores"
      >
        <i className="fas fa-chevron-left" aria-hidden="true" />
      </button>

      <div className="tramites-carousel__track" ref={trackRef}>
        {formalities.map((formality) => (
          <div className="tramites-carousel__item" key={formality.id}>
            <Link
              href={`/tramites/${formality.slug}`}
              className="service-card service-card--primary"
            >
              <div className="service-card__icon">
                <i
                  className={`fa-solid ${
                    formality.categories?.[0]?.image || "fa-file-lines"
                  }`}
                />
              </div>
              <h4 className="service-card__title">{formality.title}</h4>
              <p className="service-card__desc">{formality.summary}</p>
              <span className="service-card__cta">
                Ver más <i className="fa-solid fa-arrow-right"></i>
              </span>
            </Link>
          </div>
        ))}

        <div className="tramites-carousel__item">
          <Link href="/tramites" className="service-card service-card--outline">
            <div className="service-card__icon">
              <i className="fa-solid fa-layer-group" aria-hidden="true" />
            </div>
            <h4 className="service-card__title">Ver más trámites</h4>
            <p className="service-card__desc">
              Conocé todos los trámites y servicios disponibles.
            </p>
            <span className="service-card__cta">
              Ver todos <i className="fa-solid fa-arrow-right"></i>
            </span>
          </Link>
        </div>
      </div>

      <button
        type="button"
        className="tramites-carousel__arrow tramites-carousel__arrow--next"
        onClick={() => scroll(1)}
        aria-label="Siguientes trámites"
      >
        <i className="fas fa-chevron-right" aria-hidden="true" />
      </button>
    </div>
  );
}
