import Link from "next/link";

export default function FormalitiesCard({ formality }) {
  const isPagosYDeudas = formality.categories?.some(
    (cat) => cat.name === "Pagos y Deudas"
  );
  const hasExternalUrl = formality.online == 1 && formality.url;
  const directLink = isPagosYDeudas && hasExternalUrl;

  const cardContent = (
    <>
      <div className="service-card__icon">
        <i
          className={`fa-solid ${
            formality.categories?.[0]?.image || "fa-file-lines"
          }`}
        ></i>
      </div>
      <h4 className="service-card__title">{formality.title}</h4>
      {formality.summary && (
        <p className="service-card__desc">{formality.summary}</p>
      )}
      <span className="service-card__cta">
        Ver más <i className="fa-solid fa-arrow-right"></i>
      </span>
    </>
  );

  if (directLink) {
    return (
      <a
        href={formality.url}
        target="_blank"
        rel="noopener noreferrer"
        className="service-card service-card--primary w-100 h-100"
      >
        {cardContent}
      </a>
    );
  }

  return (
    <Link
      href={`/tramites/${formality.slug}`}
      className="service-card service-card--primary w-100 h-100"
    >
      {cardContent}
    </Link>
  );
}
