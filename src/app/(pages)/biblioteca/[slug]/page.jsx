import React from "react";
import Link from "next/link";
import { getEntryBySlug } from "@/app/lib/DataEntries";

export async function generateMetadata({ params }) {
  const entry = await getEntryBySlug(params.slug);
  if (!entry) return { title: "Entrada no encontrada" };
  return {
    title: entry.title,
    description: entry.summary || entry.excerpt || "",
    openGraph: {
      images: entry.image ? [entry.image] : undefined,
    },
  };
}

export default async function Page({ params }) {
  const slug = params?.slug || "";
  const entry = await getEntryBySlug(slug);

  if (!entry) {
    return (
      <main className="container py-5">
        <h1>Contenido no encontrado</h1>
        <p>No se encontró contenido para “{decodeURIComponent(slug)}”.</p>
        <p className="mt-4">
          <Link href="/biblioteca">← Volver a Biblioteca</Link>
        </p>
      </main>
    );
  }

  const title = entry.title || decodeURIComponent(slug).replace(/-/g, " ");
  const html =
    entry.body ||
    entry.content ||
    entry.content_html ||
    entry.summary ||
    "<p>Sin contenido.</p>";

  return (
    <main className="container py-5">
      <header className="mb-4">
        {entry.pretitle && (
          <small className="text-muted d-block">{entry.pretitle}</small>
        )}
        <h1 className="mb-2">{title}</h1>
        {entry.area?.name && (
          <div className="mb-2">
            <strong>Área:</strong> {entry.area.name}
          </div>
        )}
        {entry.created_at && (
          <small className="text-muted d-block mb-2">
            {new Date(entry.created_at).toLocaleDateString("es-AR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </small>
        )}
        {entry.summary && <p className="lead">{entry.summary}</p>}
      </header>

      {entry.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={entry.image} alt={title} className="img-fluid mb-4" />
      )}

      <article dangerouslySetInnerHTML={{ __html: html }} />

      {/* Links asociados (si existen) */}
      {entry.links && entry.links.length > 0 && (
        <section className="mt-4">
          <h5>Enlaces</h5>
          <ul>
            {entry.links.map((l, idx) => (
              <li key={idx}>
                <a
                  href={l.url || l.value}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {l.title || l.label || l.url || l.value}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Contactos del área */}
      {entry.area?.contact && entry.area.contact.length > 0 && (
        <section className="mt-4">
          <h5>Contacto ({entry.area.name})</h5>
          <ul>
            {entry.area.contact.map((c, i) => (
              <li key={i}>
                {c.type ? <strong>{c.type}: </strong> : null}
                {c.value || c.info}
              </li>
            ))}
          </ul>
        </section>
      )}

      <p className="mt-4">
        <Link href="/biblioteca">← Volver a Biblioteca</Link>
      </p>
    </main>
  );
}
