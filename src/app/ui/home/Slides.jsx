"use client";
import { useState } from "react";
import Link from "next/link";

export default function Slides({ posts = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!posts.length) {
    return <div className="hero-slide-placeholder" />;
  }

  const prev = () => setActiveIndex((i) => (i === 0 ? posts.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === posts.length - 1 ? 0 : i + 1));

  const post = posts[activeIndex];

  return (
    <div className="hero-slides-wrapper">
      {/* Imagen principal completa */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={post.image || "/images/no-image.jpg"}
        alt={post.title}
        className="hero-slide-img"
        key={post.id}
      />

      {/* Overlay degradado */}
      <div className="hero-slide-gradient" />

      {/* Controles laterales */}
      {posts.length > 1 && (
        <>
          <button className="hero-arrow hero-arrow--prev" onClick={prev} aria-label="Anterior">
            <i className="fas fa-chevron-left" />
          </button>
          <button className="hero-arrow hero-arrow--next" onClick={next} aria-label="Siguiente">
            <i className="fas fa-chevron-right" />
          </button>
        </>
      )}

      {/* Contenido inferior */}
      <div className="hero-slide-content">
        <div className="hero-slide-body">
          <span className="hero-slide-tag">Noticias</span>
          <h2 className="hero-slide-title">{post.title}</h2>
          {post.excerpt && (
            <p className="hero-slide-excerpt">{post.excerpt}</p>
          )}
        </div>

        <div className="hero-slide-footer">
          {/* Indicadores */}
          {posts.length > 1 && (
            <div className="hero-indicators">
              {posts.map((_, i) => (
                <button
                  key={i}
                  className={`hero-indicator${i === activeIndex ? " active" : ""}`}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Ir a noticia ${i + 1}`}
                />
              ))}
            </div>
          )}

          {/* Leer noticia */}
          <Link href={`/noticias/${post.slug}`} className="hero-slide-cta">
            Leer Noticia <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
