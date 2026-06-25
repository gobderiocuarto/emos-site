const API_BASE_URL = process.env.API_BASE_URL;
const API_VERSION = process.env.API_VERSION;
const API_TOKEN = process.env.API_TOKEN;

const API_URL = `${API_BASE_URL}/api${API_VERSION ? `/${API_VERSION}` : ""}`;
const API_OPTIONS = {
  headers: {
    Authorization: API_TOKEN,
  },
  next: {
    revalidate: 60,
  },
};

export async function fetchBanners({ area = "emos" } = {}) {
  const res = await fetch(
    `${API_URL}/banners?area=${area}`,
    { ...API_OPTIONS, next: { revalidate: 0 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch banners");
  }
  const data = await res.json();
  return data.data ?? [];
}
