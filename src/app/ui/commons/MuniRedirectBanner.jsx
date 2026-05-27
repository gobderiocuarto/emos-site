export default function MuniRedirectBanner({ href, label, description }) {
  return (
    <div className="alert alert-light border mt-5 p-4">
      <div className="row align-items-center">
        <div className="col-md-8">
          <h5 className="mb-1">¿No encontraste lo que buscabas?</h5>
          <p className="mb-0 text-muted">
            {description ||
              "Podés encontrar más información en el sitio de la Municipalidad de Río Cuarto."}
          </p>
        </div>
        <div className="col-md-4 text-md-end mt-3 mt-md-0">
          <a
            href={href}
            className="btn btn-outline-primary shadow-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            {label}
          </a>
        </div>
      </div>
    </div>
  );
}
