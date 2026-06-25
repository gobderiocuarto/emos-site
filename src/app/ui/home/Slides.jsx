"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

const SWIPE_THRESHOLD = 50;
const AUTO_PLAY_INTERVAL = 6000;
const SLIDE_DURATION = 500;

function resolveBannerUrl(url) {
  if (!url || Array.isArray(url)) return null;
  const { type, value } = url;
  if (!type || !value) return null;

  switch (type) {
    case "external":  return { href: value, external: true };
    case "procedure": return { href: `/tramites/${value}`, external: false };
    case "post":      return { href: `/noticias/${value}`, external: false };
    case "entry":     return { href: `/seccion/${value}`, external: false };
    default:          return { href: value, external: true };
  }
}

export default function Slides({ banners = [] }) {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [direction, setDirection] = useState(null);
  const dragStart = useRef(null);
  const isDragging = useRef(false);
  const timerRef = useRef(null);
  const slidingRef = useRef(false);

  const goTo = useCallback((getNext, dir) => {
    if (slidingRef.current) return;
    slidingRef.current = true;

    setActiveIndex((curr) => {
      const nextIdx = typeof getNext === "function" ? getNext(curr) : getNext;
      if (nextIdx === curr) { slidingRef.current = false; return curr; }
      setPrevIndex(curr);
      setDirection(dir);
      setTimeout(() => {
        setPrevIndex(null);
        setDirection(null);
        slidingRef.current = false;
      }, SLIDE_DURATION);
      return nextIdx;
    });
  }, []);

  const next = useCallback(
    () => goTo((i) => (i === banners.length - 1 ? 0 : i + 1), "next"),
    [banners.length, goTo]
  );

  const prev = useCallback(
    () => goTo((i) => (i === 0 ? banners.length - 1 : i - 1), "prev"),
    [banners.length, goTo]
  );

  useEffect(() => {
    if (banners.length <= 1) return;
    timerRef.current = setInterval(next, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [banners.length, next, activeIndex]);

  if (!banners.length) {
    return <div className="hero-slide-placeholder" />;
  }

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

  const onTouchStart = (e) => handleDragStart(e.touches[0].clientX);
  const onTouchEnd = (e) => handleDragEnd(e.changedTouches[0].clientX);
  const onMouseDown = (e) => handleDragStart(e.clientX);
  const onMouseUp = (e) => handleDragEnd(e.clientX);

  const isSliding = prevIndex !== null && direction !== null;

  const renderBanner = (banner, className) => {
    const resolved = resolveBannerUrl(banner.url);

    const handleClick = (e) => {
      if (isDragging.current || !resolved) return;
      if (e.target.closest(".hero-arrow, .hero-indicator")) return;
      if (resolved.external) {
        window.open(resolved.href, "_blank", "noreferrer");
      } else {
        router.push(resolved.href);
      }
    };

    return (
      <div
        className={`hero-slide ${className} ${resolved ? "hero-slide--clickable" : ""}`}
        onClick={handleClick}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={banner.background_image || "/images/no-image.jpg"}
          alt={banner.title}
          className="hero-slide-img"
          draggable={false}
        />
        <div className="hero-slide-gradient" />
        <div className="hero-slide-content">
          <div className="hero-slide-body">
            <h2 className="hero-slide-title">{banner.title}</h2>
            {banner.excerpt && (
              <p className="hero-slide-excerpt">{banner.excerpt}</p>
            )}
            {banner.button_title && (
              <span className="hero-slide-cta">
                {banner.button_title}
              </span>
            )}
          </div>
        </div>
      </div>
    );
  };

  const enterClass = isSliding
    ? direction === "next" ? "hero-slide--enter-right" : "hero-slide--enter-left"
    : "";

  const exitClass = isSliding
    ? direction === "next" ? "hero-slide--exit-left" : "hero-slide--exit-right"
    : "";

  return (
    <div
      className="hero-slides-wrapper"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      style={{ cursor: "grab", userSelect: "none" }}
    >
      {isSliding && renderBanner(banners[prevIndex], exitClass)}
      {renderBanner(banners[activeIndex], enterClass)}

      {banners.length > 1 && (
        <>
          <button className="hero-arrow hero-arrow--prev" onClick={prev} aria-label="Anterior">
            <i className="fas fa-chevron-left" />
          </button>
          <button className="hero-arrow hero-arrow--next" onClick={next} aria-label="Siguiente">
            <i className="fas fa-chevron-right" />
          </button>
          <div className="hero-indicators">
            {banners.map((_, i) => (
              <button
                key={i}
                className={`hero-indicator${i === activeIndex ? " active" : ""}`}
                onClick={() => {
                  if (i === activeIndex) return;
                  goTo(i, i > activeIndex ? "next" : "prev");
                }}
                aria-label={`Ir a banner ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
