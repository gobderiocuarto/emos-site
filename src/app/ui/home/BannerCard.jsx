import Link from "next/link";
import React from "react";

export default function BannerCard({ banner }) {
  const { title, subtitle, image, icon, color } = banner;

  // Si hay imagen, mostrarla (ruta desde /public)
  if (image) {
    return (
      <div className="card mb-3 banner-card">
        {/*eslint-disable-next-line @next/next/no-img-element*/}
        <img src={image} alt={title} className="img-fluid w-100" />
      </div>
    );
  }

  // Si no hay imagen, mostrar icono + texto (usa icon y color del objeto banner)
  return (
    <div className={`card mb-3 banner-card ${color || ""}`}>
      <div
        className="card-body d-flex flex-column justify-content-center align-items-center text-center"
        style={{ minHeight: 160 }}
      >
        {icon && <i className={`fas ${icon} mb-2`} aria-hidden="true"></i>}
        {title && <h5 className="card-title mb-1">{title}</h5>}
        {subtitle && <p className="card-text small mb-0">{subtitle}</p>}
      </div>
    </div>
  );
}
