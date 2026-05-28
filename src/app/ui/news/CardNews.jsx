import Link from "next/link";

export default function CardNews({ post }) {
  const dateFormatted = post.published_at
    ? new Date(post.published_at).toLocaleDateString("es-AR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <div className="col-md-6 col-lg-4 d-flex mb-4">
      <Link href={`/noticias/${post.slug}`} className="card-biblioteca-link w-100">
        <article className="card-biblioteca card-biblioteca--news h-100">

          <div className="card-biblioteca__media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.image}
              alt={post.title}
              className="card-biblioteca__img"
            />
          </div>

          <div className="card-biblioteca__body">
            <h5 className="card-biblioteca__title">{post.title}</h5>
            {post.excerpt && (
              <p className="card-biblioteca__summary">{post.excerpt}</p>
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
