import React, { Suspense } from "react";
import { fetchEntries } from "@/app/lib/DataEntries";
import CardOther from "./CardOther";

export default async function BannerBibliotecaList() {
  // trae entries tipo "other" filtradas por area "emos"
  const entries = await fetchEntries("other", "emos"); // si fetchEntries devuelve { data: [...] } usa .data

  return (
    <section className="banners" data-read>
      <div className="container">
        <div className="row">
          <Suspense fallback={<div>Cargando...</div>}>
            {(entries || []).map((entry) => (
              <CardOther key={entry.id} item={entry} />
            ))}
          </Suspense>
        </div>
      </div>
    </section>
  );
}
