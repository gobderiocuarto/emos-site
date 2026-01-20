import Link from "next/link";

export default function CardOther({ item }) {
  const date = item.created_at || item.published_at || item.updated_at || null;
  const image = item.thumbnail || item.image || "/images/default-card.jpg";

  return (
    <div className="col-12 col-sm-6 col-lg-4 mb-4">
      <div className="card h-100">
        <div className="card-img-top">
          <Link href={`/biblioteca/${item.slug}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt={item.title}
              className="card-img-top"
              style={{ objectFit: "cover", height: 180, width: "100%" }}
            />
          </Link>
        </div>

        <div className="card-body">
          <Link href={`/biblioteca/${item.slug}`}>
            <h3 className="card-title text-primary">{item.title}</h3>
          </Link>
          {item.summary && <p className="card-text">{item.summary}</p>}
        </div>

        <div className="card-footer border-0 bg-white d-flex justify-content-between align-items-center">
          <small className="text-muted">
            {date
              ? new Date(date).toLocaleDateString("es-AR", {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                })
              : ""}
          </small>
          <Link href={`/biblioteca/${item.slug}`}>Ver más</Link>
        </div>
      </div>
    </div>
  );
}
