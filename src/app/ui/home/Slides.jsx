"use client";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Link from "next/link";

export default function Slides({ posts = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!posts.length) {
    return <div className="hero-slide-placeholder" />;
  }

  return (
    <div className="hero-slides-wrapper">
      <Carousel
        activeIndex={activeIndex}
        onSelect={setActiveIndex}
        controls={false}
        fade
        indicators={false}
      >
        {posts.map((post) => (
          <Carousel.Item key={post.id}>
            <Link href={`/noticias/${post.slug}`} className="hero-slide-link">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.image || "/images/no-image.jpg"}
                alt={post.title}
                className="hero-slide-img"
              />
              <div className="hero-slide-overlay">
                <span className="hero-slide-tag">Noticias</span>
                <h2 className="hero-slide-title">{post.title}</h2>
              </div>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>

      {posts.length > 1 && (
        <div className="hero-indicators bg-primary">
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
    </div>
  );
}
