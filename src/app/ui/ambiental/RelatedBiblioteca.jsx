import { fetchEntries } from "@/app/lib/DataEntries";
import CardBiblioteca from "./CardBiblioteca";

export default async function RelatedBiblioteca({ currentSlug }) {
  const entries = await fetchEntries("other", "emos");

  if (!entries || entries.length === 0) return null;

  const related = entries.filter((e) => e.slug !== currentSlug);

  if (related.length === 0) return null;

  return (
    <div className="related-biblioteca">
      <h5 className="related-biblioteca__title">Biblioteca Ambiental</h5>
      <div className="row g-3">
        {related.map((entry) => (
          <CardBiblioteca
            key={entry.id}
            item={entry}
            colClass="col-12"
            compact
          />
        ))}
      </div>
    </div>
  );
}
