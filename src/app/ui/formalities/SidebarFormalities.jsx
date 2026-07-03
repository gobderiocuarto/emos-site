import Link from "next/link";
import { fetchFormalities } from "@/app/lib/DataFormalities";

export default async function SidebarFormalities({ area }) {
  if (!area?.slug) return null;

  const allFormalities = await fetchFormalities(`?area=${area.slug}`);
  const formalities = allFormalities.slice(0, 6);

  if (formalities.length === 0) return null;

  return (
    <div className="sidebar-formalities">
      <h4 className="sidebar-formalities__title">Trámites</h4>
      <ul className="sidebar-formalities__list">
        {formalities.map((formality) => (
          <li key={formality.id}>
            <Link
              href={`/tramites/${formality.slug}`}
              className="sidebar-formalities__item"
            >
              <span className="sidebar-formalities__icon">
                <i
                  className={`fas fa-fw ${
                    formality.categories?.[0]?.image || "fa-file-lines"
                  }`}
                />
              </span>
              <span className="sidebar-formalities__text">
                {formality.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href={`/tramites?area=${area.slug}`}
        className="btn btn-outline-primary btn-rounded-custom w-100"
      >
        Ver más trámites →
      </Link>
    </div>
  );
}
