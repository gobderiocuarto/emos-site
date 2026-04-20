import React from "react";
import { fetchFormalities } from "@/app/lib/DataFormalities";
import FormalitiesCard from "./CardFormality";
import Link from "next/link";
import HeaderSection from "../layout/HeaderSection";

export default async function ListFormalitiesBySlug({ area }) {
  if (!area) return null;

  const params = `?area=${area.slug}`;
  const allFormalities = await fetchFormalities(params);
  const formalities = allFormalities.slice(0, 6);

  return (
    <section className="formalities formalities-categories" data-read>
      <div className="container">
        <HeaderSection
          title="¿Que necesitás hacer?"
          subtitle="Tramites y Servicios"
          bgImage="/images/calidad_del_agua_potable_analisis_de_agua.webp"
          bgPosition="center 45%"
        />{" "}
        <h3 className="text-dark">
          Trámites <small>({allFormalities.length})</small>
        </h3>
        {formalities.length === 0 ? (
          <p>No hay trámites para esta área.</p>
        ) : (
          <>
            <div className="row g-3 formalities-list mt-2">
              {formalities.map((formality) => (
                <div
                  className="col-12 col-md-6 col-lg-4 d-flex"
                  key={formality.id}
                >
                  <FormalitiesCard formality={formality} />
                </div>
              ))}
            </div>
            {allFormalities.length > 6 && (
              <div className="text-center mt-4 mb-4">
                <Link
                  href={`/tramites?area=${area.slug}`}
                  className="btn btn-outline-primary btn-rounded-custom px-5 py-2"
                >
                  Ver todos los Trámites
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
