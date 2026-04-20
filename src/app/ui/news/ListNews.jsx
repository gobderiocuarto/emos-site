import React, { Suspense } from "react";
import { fetchNews } from "@/app/lib/DataNews";
import CardNews from "./CardNews";
import HeaderSection from "../layout/HeaderSection";

export default async function ListNews({ page, limit, area }) {
  const posts = await fetchNews({ page, limit, area });

  //console.log(posts);

  return (
    <section data-read className="news-list">
      <div className="row ">
        <HeaderSection
          title="Últimas Noticias"
          subtitle="Mantenete informado sobre la Emos"
          bgImage="/images/parquesarmiento.webp"
          bgPosition="center 65%"
        />
        <Suspense fallback={<div>Cargando...</div>}>
          {posts.map((post) => (
            <CardNews key={post.id} post={post} />
          ))}
        </Suspense>
      </div>
    </section>
  );
}
