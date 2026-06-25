import React, { Suspense } from "react";
import Slides from "./Slides";
import { fetchBanners } from "@/app/lib/DataBanners";

export default async function Hero() {
  let banners = [];
  try {
    const all = await fetchBanners();
    banners = all.filter((b) => b.status === 1);
  } catch {
    // silently fail — slides renders empty state
  }

  return (
    <section className="hero" data-read>
      <Suspense fallback={<div className="hero-slide-placeholder" />}>
        <Slides banners={banners} />
      </Suspense>
    </section>
  );
}
