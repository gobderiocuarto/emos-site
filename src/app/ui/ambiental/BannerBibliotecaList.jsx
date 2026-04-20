import React from "react";
import { fetchEntries } from "@/app/lib/DataEntries";
import CardBiblioteca from "./CardBiblioteca";

export default async function BannerBibliotecaList() {
  const entries = await fetchEntries("other", "emos");

  if (!entries || entries.length === 0) {
    return (
      <section className="biblioteca-list">
        <div className="container">
          <p className="text-muted">No hay entradas disponibles.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="biblioteca-list" data-read>
      <div className="container">
        <div className="row g-4">
          {entries.map((entry) => (
            <CardBiblioteca key={entry.id} item={entry} />
          ))}
        </div>
      </div>
    </section>
  );
}
