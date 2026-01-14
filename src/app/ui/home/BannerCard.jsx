import Link from "next/link";
import React from "react";

export default function BannerCard({ banner }) {
  const { title, subtitle, image } = banner;
  return (
    <div className="card mb-3 banner-card">
      {/*eslint-disable-next-line @next/next/no-img-element*/}
      <img src={image} alt={title} className="img-fluid w-100" />
      {/* Si quieres mostrar título/ subtítulo sobre la imagen, descomenta y adapta */}
      {/* <div className="card-body">
        <h5 className="card-title text-white">{title}</h5>
        <p className="card-text text-white">{subtitle}</p>
      </div> */}
    </div>
  );
}
