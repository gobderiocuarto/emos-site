import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-app" data-read>
      <div className="container">
        <div className="row gy-4">
          {/* 1. Logo */}
          <div className="col-lg-3 col-md-12 text-center text-lg-start">
            <div className="mb-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logos/EMOS_Logo_Horizontal_blanco.webp"
                alt="EMOS Río Cuarto"
                className="logo-footer"
              />
            </div>
            <p className="copyright-text mb-0">
              Ente Municipal de Obras Sanitarias.
              <br />
              Río Cuarto · Córdoba.
            </p>
          </div>

          {/* 2. Contacto */}
          <div className="col-lg-3 col-md-6 text-center text-lg-start">
            <h6 className="text-white mb-3">Contacto Rápido</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <i className="fa fa-phone fa-fw me-2"></i>
                <a href="tel:08004445454" className="footer-link">
                  0800-444-5454
                </a>
              </li>
              <li className="mb-2">
                <i className="fab fa-whatsapp fa-fw me-2"></i>
                <a
                  href="https://wa.me/543584111395"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  358 411 1395 (Reclamos)
                </a>
              </li>
              <li className="mb-2">
                <i className="fa fa-map-marker-alt fa-fw me-2"></i>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.google.com/maps/place/EMOS.+Oficina+Administrativa/@-33.1217949,-64.3490933,17z"
                  className="footer-link"
                >
                  Baigorria 26, Río Cuarto
                </a>
              </li>
              <li className="mb-2 d-flex align-items-center justify-content-center justify-content-lg-start">
                <i className="fa fa-clock fa-fw me-2"></i>
                <span className="footer-link">
                  Lun a Vie de 7:00 a 13:00 hs.
                </span>
              </li>
            </ul>
          </div>

          {/* 3. Enlaces */}
          <div className="col-lg-3 col-md-6 text-center text-lg-start">
            <h6 className="text-white mb-3">Enlaces Útiles</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <a
                  href="https://docs.google.com/document/d/1dZtkilozoQ3T_eSL7cXokFaFnmpKVl_ZxyUVKIoZC9s/edit?tab=t.0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Habilitación de Obras
                </a>
              </li>

              <li className="mb-2">
                <Link href="/biblioteca" className="footer-link">
                  Biblioteca Ambiental
                </Link>
              </li>
              <li className="mb-2">
                <a
                  href="https://emosvirtual.riocuarto.gov.ar:9090/emosweb/servlet/com.emosweb.login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Oficina Virtual
                </a>
              </li>
            </ul>
          </div>

          {/* 4. Redes */}
          <div className="col-lg-3 col-md-12 text-center text-lg-start">
            <h6 className="text-white mb-3">Seguinos</h6>
            <p className="small-text mb-3">
              Enterate de todas las novedades en nuestras redes.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start social-icons">
              <a
                href="https://www.facebook.com/people/EMOS-R%C3%ADo-Cuarto/100068874804082/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/emos_riocuarto/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              {/* <a
                href="https://www.youtube.com/@emosriocuarto1164"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-youtube"></i>
              </a> */}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-4 pt-3 footer-copyright-row">
          <div className="col text-center text-md-start">
            <p className="copyright-text mb-0">
              &copy; {currentYear} EMOS · Ente Municipal de Obras Sanitarias.
              Desarrollado por la Subsecretaría de Hacienda y Gestión
              Tecnológica.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
