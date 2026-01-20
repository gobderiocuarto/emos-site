// app/Institucional/page.js
import { fetchAreaBySlug } from "@/app/lib/DataAreas";
import RelatedNews from "@/app/ui/news/RelatedNews";
import HeroAreas from "@/app/ui/areas/HeroAreas";
import EntriesAreas from "@/app/ui/areas/EntriesAreas";
import FormalitiesAreas from "@/app/ui/areas/FormalitiesAreas";
import IntitutionalAreas from "@/app/ui/areas/IntitutionalAreas";

export default async function InstitucionalPage() {
  // Forzamos la búsqueda de "emos" directamente
  const area = await fetchAreaBySlug("emos");

  if (!area) return <div>Cargando información de EMOS...</div>;

  return (
    <div className="area area-detail">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <HeroAreas area={area} />
            
            <EntriesAreas type="program" area={area} title="Programas y Servicios" />
            <EntriesAreas type="other" area={area} title="Otros Servicios" />
            <FormalitiesAreas area={area} />
          </div>
          <div className="col-md-4">
            <IntitutionalAreas area={area} />
            <RelatedNews area={area.id} limit={6} title="Noticias Relacionadas" />
          </div>
        </div>
      </div>
    </div>
  );
}