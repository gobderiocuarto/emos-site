import SeachResultGroup from "./SeachResultGroup";

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

  const hasResults =
    proceduresResults.length > 0 ||
    postsResults.length > 0 ||
    entriesResults.length > 0;

  return (
    <div className="search-content">
      <div className="search-header">
        <h4>
          Término de búsqueda: <span>{`"${query}"`}</span>
        </h4>
      </div>
      <div className="search-results">
        {!hasResults && (
          <div className="alert alert-info">
            No se encontraron resultados para "{query}"
          </div>
        )}

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
    </div>
  );
}
