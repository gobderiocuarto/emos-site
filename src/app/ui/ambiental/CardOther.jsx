import Link from "next/link";
import Icon from "@/app/ui/icons/Icon"; // ajusta la ruta si tu Icon está en otra carpeta

const ICON_NAMES = ["circles", "squares", "waves"];
const ICON_COLORS = ["green", "lightblue", "orange", "pink", "yellow"];

export default function CardOther({ item }) {
  const hasThumbnail = !!item?.thumbnail;
  const image = item.thumbnail || item.image || null;

  const idNum = item.id ? parseInt(item.id, 10) : 0;
  const iconName = ICON_NAMES[idNum % ICON_NAMES.length];
  const iconColor = ICON_COLORS[idNum % ICON_COLORS.length];
  const iconSize = "60";

  const date = item.created_at || item.published_at || item.updated_at || null;

  return (
    <div className="col-12 col-sm-6 col-lg-4 mb-4">
      <div className="card h-100">
        {hasThumbnail ? (
          <Link href={`/seccion/${item.slug}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt={item.title || "Imagen"}
              className="card-img-top"
              style={{ objectFit: "cover", height: 180, width: "100%" }}
            />
          </Link>
        ) : (
          <Link href={`/seccion/${item.slug}`}>
            <div
              className="d-flex justify-content-center align-items-center bg-light"
              style={{ height: 180, width: "100%" }}
            >
              <Icon
                icon={{ name: iconName, color: iconColor, size: iconSize }}
              />
            </div>
          </Link>
        )}

        <div className="card-body">
          {item.type === "other" && item.pretitle ? (
            <h6 className="card-pretitle text-muted mb-1">{item.pretitle}</h6>
          ) : null}

          <Link href={`/seccion/${item.slug}`}>
            <h5 className="card-title mb-2">{item.title}</h5>
          </Link>

          {item.summary ? <p className="card-text">{item.summary}</p> : null}
        </div>

        <div className="card-footer border-0 bg-white d-flex justify-content-between align-items-center">
          <small className="text-muted">
            {date
              ? new Date(date).toLocaleDateString("es-AR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : ""}
          </small>
          <Link href={`/seccion/${item.slug}`}>Ver más</Link>
        </div>
      </div>
    </div>
  );
}
