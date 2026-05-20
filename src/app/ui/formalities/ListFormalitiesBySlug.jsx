import React from "react";
import { fetchFormalities } from "@/app/lib/DataFormalities";
import FormalitiesCard from "./CardFormality";
import Link from "next/link";

export default async function ListFormalitiesBySlug({ area }) {
  if (!area) return null;

  const params = `?area=${area.slug}`;
  const allFormalities = await fetchFormalities(params);
  const formalities = allFormalities.slice(0, 6);

  return (
    <section className="formalities formalities-categories" data-read>
      <div className="container">
        <div className="formalities-box">
          <h3 className="formalities-box__title">Trámites</h3>
          {formalities.length === 0 ? (
            <p className="text-white">No hay trámites para esta área.</p>
          ) : (
            <>
              <div className="row g-3 formalities-list">
                {formalities.map((formality) => (
                  <div className="col-12 col-md-4 d-flex" key={formality.id}>
                    <FormalitiesCard formality={formality} />
                  </div>
                ))}
              </div>
              {allFormalities.length > 6 && (
                <div className="text-center mt-4">
                  <Link
                    href={`/tramites?area=${area.slug}`}
                    className="btn btn-outline-light btn-rounded-custom px-5 py-2"
                  >
                    Ver todos los trámites →
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
