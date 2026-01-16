import RelatedNews from "@/app/ui/news/RelatedNews";
import { createPageMetadata } from "@/app/lib/metadata";
import { getEntryBySlug } from "@/app/lib/DataEntries";
import DetailEntries from "@/app/ui/entries/DetailEntries";
import NotFound from "@/app/ui/commons/NotFound";

export async function generateMetadata({ params }) {
  const { slug } = params;

  const entry = await getEntryBySlug(slug);

  if (!entry) {
    return { title: "Entrada no encontrada" };
  }
  return createPageMetadata({
    title: entry.title,
    description: entry.excerpt,
    imageUrl: entry.image,
  });
}

export default async function SeccionDetail({ params }) {
  const { slug } = params;

  const detailEntry = await getEntryBySlug(slug);

  if (!detailEntry) {
    return <NotFound />;
  }

  //console.log(detailEntry);

  return (
    <main className="entries" data-read>
      <div className="container">
        <span className="sr-only">Detalle de la Noticia</span>
        <div className="row g-4">
          <div className="col-md-8">
            <DetailEntries detailEntry={detailEntry} />
          </div>
          <div className="col-md-4">
            <RelatedNews title="Noticias Relacionadas" />
          </div>
        </div>
      </div>
    </main>
  );
}
