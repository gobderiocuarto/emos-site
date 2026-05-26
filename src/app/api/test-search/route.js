const API_BASE_URL = process.env.API_BASE_URL;
const API_VERSION = process.env.API_VERSION;
const API_TOKEN = process.env.API_TOKEN;

const API_URL = `${API_BASE_URL}/api${API_VERSION ? `/${API_VERSION}` : ""}`;

const API_OPTIONS = {
  headers: {
    Authorization: API_TOKEN,
  },
};

export async function POST(request) {
  try {
    const { query } = await request.json();

    if (!query) {
      return Response.json({ error: "Query requerido" }, { status: 400 });
    }

    console.log(`[DEBUG] Buscando: "${query}"`);
    console.log(`[DEBUG] API_URL: ${API_URL}`);
    console.log(`[DEBUG] API_TOKEN: ${API_TOKEN ? "Set" : "NOT SET"}`);

    // Test cada endpoint
    const endpoints = [
      {
        name: "posts (sin filtro)",
        url: `${API_URL}/posts?search=${query}&per_page=5`,
      },
      {
        name: "posts (con area=emos)",
        url: `${API_URL}/posts?search=${query}&area=emos&per_page=5`,
      },
      {
        name: "tramites (sin filtro)",
        url: `${API_URL}/tramites?search=${query}&per_page=5`,
      },
      {
        name: "tramites (con area=emos)",
        url: `${API_URL}/tramites?search=${query}&area=emos&per_page=5`,
      },
      {
        name: "entries (sin filtro)",
        url: `${API_URL}/entries?search=${query}&per_page=5`,
      },
      {
        name: "tramites (GET sin search)",
        url: `${API_URL}/tramites?area=emos&per_page=5`,
      },
    ];

    const results = {};

    for (const endpoint of endpoints) {
      try {
        console.log(`[DEBUG] Fetching: ${endpoint.url}`);
        const res = await fetch(endpoint.url, API_OPTIONS);
        const status = res.status;
        const data = await res.json();

        results[endpoint.name] = {
          status,
          dataLength: data?.data?.length || 0,
          totalCount: data?.total || 0,
          firstItem: data?.data?.[0],
          fullResponse: data,
        };
      } catch (error) {
        results[endpoint.name] = {
          error: error.message,
        };
      }
    }

    return Response.json(results);
  } catch (error) {
    console.error("API Error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
