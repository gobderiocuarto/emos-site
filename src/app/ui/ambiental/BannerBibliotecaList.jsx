import React from "react";
import { fetchEntries } from "@/app/lib/DataEntries";
import CardBiblioteca from "./CardBiblioteca";

const ORDERED_IDS = [91, 241, 242, 243, 244, 245, 90, 101];

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

  const sorted = entries
    .filter((entry) => ORDERED_IDS.includes(entry.id))
    .sort((a, b) => ORDERED_IDS.indexOf(a.id) - ORDERED_IDS.indexOf(b.id));

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
