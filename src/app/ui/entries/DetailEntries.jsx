export default function DetailEntries({ detailEntry }) {
  if (!detailEntry) {
    return <div>No se pudo cargar la noticia.</div>;
  }

  const { title, thumbnail, summary, body, status, links } = detailEntry;

  if (status != 1) {
    return "Entrada no encontrada";
  }

  const hasThumbnail = thumbnail && thumbnail.length > 0;

  return (
    <article className="entries-detail">
      {hasThumbnail && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={thumbnail} alt="" className="entries-detail--image w-100" />
      )}

      <div className="entries-detail--content">
        <h1 className="entries-detail--title">{title}</h1>
        <p className="entries-detail--subtitle">{summary}</p>
        <div
          className="entries-detail--body"
          dangerouslySetInnerHTML={{ __html: body }}
        />
        {links && links.length > 0 && (
          <div className="row entries-detail--links">
            {links.map((link, index) => (
              <div key={index} className="col-md-6">
                <p>{link.title}</p>
                <a
                  href={link.link}
                  target={link.target}
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg text-white"
                >
                  <span dangerouslySetInnerHTML={{ __html: link.name }} />
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
