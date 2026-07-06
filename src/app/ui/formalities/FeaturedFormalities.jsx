import Link from "next/link";
import { fetchFormalitiesBySlug } from "@/app/lib/DataFormalities";
import HeaderSection from "@/app/ui/layout/HeaderSection";
import TramitesCarousel from "./TramitesCarousel";

const FEATURED_SLUGS = [
  "pedido-de-conexion-de-agua-y-cloacas-para-la-construccion",
  "certificado-final-de-obra-de-emos",
  "certificado-libre-de-deuda-emos",
  "solicitud-de-cambio-de-titularidad-emos",
  "solicitud-de-cambio-de-cliente-emos",
  "solicitud-de-beneficio-para-ex-combatientes-de-malvinas",
];

export default async function FeaturedFormalities() {
  const formalities = (
    await Promise.all(FEATURED_SLUGS.map((slug) => fetchFormalitiesBySlug(slug)))
  ).filter(Boolean);

  if (formalities.length === 0) return null;

  return (
    <section className="formalities featured-formalities" data-read>
      <div className="container">
        <HeaderSection title="Trámites" subtitle="Más consultados" />

        <TramitesCarousel formalities={formalities} />

        <div className="text-center mt-4">
          <Link
            href="/tramites"
            className="btn btn-outline-primary btn-rounded-custom px-5 py-2"
          >
            Ver más trámites →
          </Link>
        </div>
      </div>
    </section>
  );
}
