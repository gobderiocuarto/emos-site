import Link from "next/link";
import HeroAreas from "@/app/ui/areas/HeroAreas";
import { fetchAreaBySlug } from "@/app/lib/DataAreas";
import { createPageMetadata } from "@/app/lib/metadata";
import AreaDetail from "@/app/ui/formality/AreaDetail";
import IntitutionalAreas from "@/app/ui/areas/IntitutionalAreas";
import MyImageGallery from "@/app/ui/commons/ImageGallery";
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
  const [area, emosArea] = await Promise.all([
    fetchAreaBySlug("ente-municipal-de-obras-sanitarias-emos"),
    fetchAreaBySlug("emos", { children: true }),
  ]);

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

  const emosFiles = emosArea?.files || [];

  // Armamos la lista de "dependencias": todo lo que tenga contact dentro del área EMOS.
  // Primero EMOS mismo (si tiene contactos), luego sus hijos.
  const dependencies = [
    ...(emosArea?.contact?.length > 0
      ? [{ id: emosArea.id, name: emosArea.name, contact: emosArea.contact }]
      : []),
    ...(emosArea?.children?.filter((c) => c.contact?.length > 0) || []),
  ];

  const emosWithDependencies = emosArea
    ? { ...emosArea, children: dependencies }
    : null;

  return (
    <main className="area area-detail">
      <div className="container">
        <div className="row area-mobile-flex">
          <div className="col-lg-8 area-column-left">
            <div className="area-order-1">
              <HeroAreas area={area} />
            </div>
            {emosFiles.length > 0 && (
              <div className="area-order-4 mt-5">
                <MyImageGallery photos={emosFiles} />
              </div>
            )}
          </div>
          <div className="col-lg-4 area-column-right">
            {emosArea && (
              <div className="col-md-12 mb-4">
                <IntitutionalAreas area={emosArea} />
              </div>
            )}
            {emosWithDependencies && dependencies.length > 0 && (
              <div className="col-md-12 mb-4 area-order-2">
                <AreaDetail area={emosWithDependencies} />
              </div>
            )}
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
