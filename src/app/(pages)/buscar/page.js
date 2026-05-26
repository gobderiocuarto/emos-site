import { Suspense } from "react";
import SearchResults from "@/app/ui/search/SearchResults";
import { fetchSearch } from "@/app/lib/DataSearch";
import SearchForm from "@/app/ui/commons/SearchForm";

export const metadata = {
  title: "Buscador",
  description: "Buscador de contenidos del Gobierno de Río Cuarto",
};

export default async function BuscarPage({ searchParams }) {
  const searchQuery = (await searchParams.q) || "";

  return (
    <main className="search search-page">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mb-4">
              <SearchForm />
            </div>
            <Suspense
              key={searchQuery}
              fallback={
                <div className="d-flex justify-content-center align-items-center mt-4">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Buscando...</span>
                  </div>
                  <span className="ms-2">Buscando resultados...</span>
                </div>
              }
            >
              <AsyncSearchResults query={searchQuery} />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}

async function AsyncSearchResults({ query }) {
  if (!query) return null;
  const results = await fetchSearch(query);
  return <SearchResults results={results} query={query} />;
}
