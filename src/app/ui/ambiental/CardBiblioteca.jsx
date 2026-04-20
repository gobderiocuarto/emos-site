import Link from "next/link";
import Icon from "@/app/ui/icons/Icon";

const ICON_NAMES = ["circles", "squares", "waves"];
const ICON_COLORS = ["green", "lightblue", "orange", "pink", "yellow"];

export default function CardBiblioteca({ item }) {
  const hasThumbnail = !!item?.thumbnail;
  const image = item.thumbnail || item.image || null;

  const idNum = item.id ? parseInt(item.id, 10) : 0;
  const iconName = ICON_NAMES[idNum % ICON_NAMES.length];
  const iconColor = ICON_COLORS[idNum % ICON_COLORS.length];

  const date = item.created_at || item.published_at || item.updated_at || null;
  const dateFormatted = date
    ? new Date(date).toLocaleDateString("es-AR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <div className="col-12 col-md-6 col-lg-4 d-flex">
      <Link href={`/seccion/${item.slug}`} className="card-biblioteca-link w-100">
        <article className="card-biblioteca h-100">

          <div className="card-biblioteca__media">
            {hasThumbnail ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={image}
                alt={item.title || "Imagen"}
                className="card-biblioteca__img"
              />
            ) : (
              <div className="card-biblioteca__icon-area">
                <Icon icon={{ name: iconName, color: iconColor, size: "64" }} />
              </div>
            )}
          </div>

          <div className="card-biblioteca__body">
            {item.pretitle && (
              <span className="card-biblioteca__pretitle">{item.pretitle}</span>
            )}
            <h5 className="card-biblioteca__title">{item.title}</h5>
            {item.summary && (
              <p className="card-biblioteca__summary">{item.summary}</p>
            )}
          </div>

          <div className="card-biblioteca__footer">
            {dateFormatted && (
              <span className="card-biblioteca__date">
                <i className="fas fa-calendar-alt me-1"></i>
                {dateFormatted}
              </span>
            )}
            <span className="card-biblioteca__cta">
              Ver más
              <svg
                className="card-biblioteca__arrow"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </span>
          </div>

        </article>
      </Link>
    </div>
  );
}
