import React from "react";
import { getEntryBySlug } from "@/app/lib/DataEntries";
import CardBiblioteca from "./CardBiblioteca";

const BIBLIOTECA_SLUG = "biblioteca-ambiental";

export default async function BannerBibliotecaList() {
  const biblioteca = await getEntryBySlug(BIBLIOTECA_SLUG);
  const entries = biblioteca?.related_entries || [];

  if (entries.length === 0) {
    return (
      <section className="biblioteca-list">
        <div className="container">
          <p className="text-muted">No hay entradas disponibles.</p>
        </div>
      </section>
    );
  }

  const sorted = [...entries].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  return (
    <section className="biblioteca-list" data-read>
      <div className="container">
        <div className="row g-4">
          {sorted.map((entry) => (
            <CardBiblioteca key={entry.id} item={entry} />
          ))}
        </div>
      </div>
    </section>
  );
}
