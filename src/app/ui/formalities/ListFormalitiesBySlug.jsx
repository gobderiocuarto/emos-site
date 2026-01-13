import React from "react";
import { fetchFormalities } from "@/app/lib/DataFormalities";
import FormalitiesCard from "./CardFormality";
import Link from "next/link";
import HeaderSection from "../layout/HeaderSection";


export default async function ListFormalitiesBySlug({ area }) {
  if (!area) return null;

  const params = `?area=${area.slug}`;
  const allFormalities = await fetchFormalities(params);
  const formalities = allFormalities.slice(0, 12);

  return (
    <section className="formalities formalities-categories" data-read>
      <div className="container">
        <HeaderSection title="Trámites" subtitle="Categorías principales" />
        <h3 className="text-dark">Trámites <small>({allFormalities.length})</small></h3>
        {formalities.length === 0 ? (
          <p>No hay trámites para esta área.</p>
        ):(
          <>
            <div className="row formalities-list">
              {formalities.map((formality) => (
                <div className="col-12 col-lg-6" key={formality.id}>
                  <FormalitiesCard formality={formality} />
                </div>
              ))}
            </div>
            {allFormalities.length > 3 && (
              <Link href={`/tramites?area=${area.slug}`} className="btn btn-dark text-white">Ver más trámites</Link>
            )}
          </>
        )}
      </div>
    </section>
  );
}