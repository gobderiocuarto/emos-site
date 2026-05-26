const API_BASE_URL = process.env.API_BASE_URL;
const API_VERSION = process.env.API_VERSION;
const API_TOKEN = process.env.API_TOKEN;

if (!API_BASE_URL || !API_TOKEN) {
  throw new Error("API_BASE_URL o API_TOKEN no están definidas en el entorno");
}

const API_URL = `${API_BASE_URL}/api${API_VERSION ? `/${API_VERSION}` : ""}`;

const API_OPTIONS = {
  headers: {
    Authorization: API_TOKEN,
  },
  next: {
    revalidate: 60,
  },
};

export async function fetchSearch(query = "") {
  try {
    const [postsRes, tramitesRes, entriesRes] = await Promise.all([
      fetch(
        `${API_URL}/posts?search=${query}&area=emos&per_page=50&status=published`,
        API_OPTIONS,
      ),
      fetch(
        `${API_URL}/tramites?search=${query}&area=emos&per_page=50`,
        API_OPTIONS,
      ),
      fetch(
        `${API_URL}/entries?search=${query}&area=emos&per_page=50`,
        API_OPTIONS,
      ),
    ]);

    const postsData = postsRes.ok ? await postsRes.json() : { data: [] };
    const tramitesData = tramitesRes.ok ? await tramitesRes.json() : [];
    const entriesData = entriesRes.ok ? await entriesRes.json() : { data: [] };

    // Tramites devuelve array directo, posts y entries devuelven {data: [...]}
    const posts = postsData.data ? { data: postsData.data } : { data: [] };
    const procedures = Array.isArray(tramitesData)
      ? { data: tramitesData }
      : { data: [] };
    const entries = entriesData.data
      ? { data: entriesData.data }
      : { data: [] };

    return {
      posts,
      procedures,
      entries,
    };
  } catch (error) {
    console.error("Error fetching search results:", error);
    return {
      posts: { data: [] },
      procedures: { data: [] },
      entries: { data: [] },
    };
  }
}
