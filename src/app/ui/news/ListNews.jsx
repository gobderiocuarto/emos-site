import React, { Suspense } from "react";
import { fetchNews } from "@/app/lib/DataNews";
import CardNews from "./CardNews";
import HeaderSection from "../layout/HeaderSection";

export default async function ListNews({
  page,
  limit,
  area,
  showHeader = true,
}) {
  const posts = await fetchNews({ page, limit, area });

  return (
    <section data-read className="news-list">
      {showHeader && (
        <HeaderSection title="Novedades" subtitle="Noticias y anuncios" />
      )}
      <div className="row ">
        <Suspense fallback={<div>Cargando...</div>}>
          {posts.map((post) => (
            <CardNews key={post.id} post={post} />
          ))}
        </Suspense>
      </div>
    </section>
  );
}
