import SeachResultGroup from "./SeachResultGroup";
import MuniRedirectBanner from "@/app/ui/commons/MuniRedirectBanner";

export default async function SearchResults({ results, query }) {
  if (!results) {
    return (
      <div>
        <h1>Por favor, ingresa un término de búsqueda.</h1>
      </div>
    );
  }

  const {
    entries = { data: [] },
    procedures = { data: [] },
    posts = { data: [] },
  } = results;

  const proceduresResults = procedures?.data || [];
  const postsResults = posts?.data || [];
  const entriesResults = entries?.data || [];

  const totalResults =
    proceduresResults.length + postsResults.length + entriesResults.length;

  const hasResults = totalResults > 0;

  return (
    <div className="search-content">
      <div className="search-header">
        <p className="search-header-label">Resultados para</p>
        <div className="search-header-query">
          <i className="fa-solid fa-magnifying-glass search-header-icon"></i>
          <span className="search-header-term">{query}</span>
        </div>
        {hasResults && (
          <p className="search-header-count">
            {totalResults} resultado{totalResults !== 1 ? "s" : ""} encontrado
            {totalResults !== 1 ? "s" : ""}
          </p>
        )}
      </div>

      {!hasResults && (
        <div className="search-empty">
          <i className="fa-solid fa-circle-xmark search-empty-icon"></i>
          <h5>No se encontraron resultados para tu búsqueda.</h5>
          <p>Intenta con otros términos o revisá la ortografía.</p>
        </div>
      )}

      <div className="search-results">
        {proceduresResults.length > 0 && (
          <SeachResultGroup
            url="/tramites/"
            title="Trámites"
            results={proceduresResults}
          />
        )}

        {postsResults.length > 0 && (
          <SeachResultGroup
            url="/noticias/"
            title="Noticias"
            results={postsResults}
          />
        )}

        {entriesResults.length > 0 && (
          <SeachResultGroup
            url="/seccion/"
            title="Programas y Servicios"
            results={entriesResults}
          />
        )}
      </div>

      <MuniRedirectBanner
        href={`https://www.riocuarto.gob.ar/buscar?q=${encodeURIComponent(query)}`}
        label="Buscar en Gobierno"
        description="Si no encontraste lo que buscas, podés ampliar la búsqueda en el sitio web del Gobierno de Río Cuarto."
      />
    </div>
  );
}
