"use client";
import { useState, useRef } from "react";
import Link from "next/link";

const SWIPE_THRESHOLD = 50;

export default function Slides({ posts = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const dragStart = useRef(null);
  const isDragging = useRef(false);

  if (!posts.length) {
    return <div className="hero-slide-placeholder" />;
  }

  const prev = () => setActiveIndex((i) => (i === 0 ? posts.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === posts.length - 1 ? 0 : i + 1));

  const handleDragStart = (clientX) => {
    dragStart.current = clientX;
    isDragging.current = false;
  };

  const handleDragEnd = (clientX) => {
    if (dragStart.current === null) return;
    const diff = dragStart.current - clientX;
    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      isDragging.current = true;
      diff > 0 ? next() : prev();
    }
    dragStart.current = null;
  };

  // Touch
  const onTouchStart = (e) => handleDragStart(e.touches[0].clientX);
  const onTouchEnd   = (e) => handleDragEnd(e.changedTouches[0].clientX);

  // Mouse
  const onMouseDown = (e) => handleDragStart(e.clientX);
  const onMouseUp   = (e) => handleDragEnd(e.clientX);

  const post = posts[activeIndex];

  return (
    <div
      className="hero-slides-wrapper"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      style={{ cursor: "grab", userSelect: "none" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={post.image || "/images/no-image.jpg"}
        alt={post.title}
        className="hero-slide-img"
        key={post.id}
        draggable={false}
      />

      <div className="hero-slide-gradient" />

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

      <div className="hero-slide-content">
        <div className="hero-slide-body">
          <span className="hero-slide-tag">Noticias</span>
          <h2 className="hero-slide-title">{post.title}</h2>
          {post.excerpt && (
            <p className="hero-slide-excerpt">{post.excerpt}</p>
          )}
        </div>

        <div className="hero-slide-footer">
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
          <Link
            href={`/noticias/${post.slug}`}
            className="hero-slide-cta"
            onClick={(e) => isDragging.current && e.preventDefault()}
          >
            Leer Noticia <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
