import React from "react";

export default function BannerCard({ banner }) {
  const { title, subtitle, icon, color } = banner;

  return (
    <div className={`banner-card ${color || ""}`}>
      <div className="banner-card__icon">
        <i className={`fas ${icon}`} aria-hidden="true"></i>
      </div>
      <div className="banner-card__content">
        <span className="banner-card__title">{title}</span>
        {subtitle && <span className="banner-card__subtitle">{subtitle}</span>}
      </div>
      <div className="banner-card__arrow">
        <i className="fas fa-chevron-right"></i>
      </div>
    </div>
  );
}
