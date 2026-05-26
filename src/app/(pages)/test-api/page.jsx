"use client";

import { useEffect, useState } from "react";

export default function TestApiPage() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const testApi = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/test-search", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: "emos" }),
        });
        const data = await response.json();
        setResults(data);
      } catch (error) {
        setResults({ error: error.message });
      } finally {
        setLoading(false);
      }
    };

    testApi();
  }, []);

  return (
    <div className="container mt-5">
      <h1>Test API Debug</h1>
      {loading && <p>Cargando...</p>}
      {results && (
        <pre
          className="bg-light p-3 rounded"
          style={{ maxHeight: "600px", overflow: "auto" }}
        >
          {JSON.stringify(results, null, 2)}
        </pre>
      )}
    </div>
  );
}
