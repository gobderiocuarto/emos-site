import Link from "next/link";
import HeroAreas from "@/app/ui/areas/HeroAreas";
import { fetchAreaBySlug } from "@/app/lib/DataAreas";
import { createPageMetadata } from "@/app/lib/metadata";
import AreaDetail from "@/app/ui/formality/AreaDetail";
// import RelatedNews from "@/app/ui/news/RelatedNews";

export async function generateMetadata() {
  const area = await fetchAreaBySlug("ente-municipal-de-obras-sanitarias-emos");
  if (!area) return { title: "Área no encontrada" };
  return createPageMetadata({
    title: area.name,
    description: area.propouse,
  });
}

export default async function AreaDetailPage() {
  const area = await fetchAreaBySlug("ente-municipal-de-obras-sanitarias-emos");

  if (!area) {
    return (
      <div className="container mt-5">
        <h1>Área no encontrada</h1>
        <p>Lo sentimos, la página que buscas no existe.</p>
        <Link href="/" className="btn btn-primary mt-3">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <main className="area area-detail">
      <div className="container">
        <div className="row area-mobile-flex">
          <div className="col-lg-8 area-column-left">
            <div className="area-order-1">
              <HeroAreas area={area} />
            </div>
          </div>
          <div className="col-lg-4 area-column-right">
            <div className="col-md-12 mb-4 area-order-2">
              <AreaDetail area={area} />
            </div>
            {/* <div className="area-order-6">
              <RelatedNews
                area={area.id}
                limit={6}
                title="Noticias Relacionadas"
              />
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
}
