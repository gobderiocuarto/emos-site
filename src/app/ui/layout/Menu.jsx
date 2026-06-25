"use client";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import LogoMobile from "../../../../public/images/logos/EMOS_Logo_Horizontal_blanco.webp";
import LogoDesktop from "../../../../public/images/logos/EMOS_Logo_Horizontal_blanco.webp";
import SearchModal from "../commons/SearchModal";
import BackArrow from "./BackArrow";

export default function Menu() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);

  const handleLinkClick = () => {
    setExpanded(false);
  };

  const handleSearchModalShow = () => {
    setShowSearchModal(true);
    setExpanded(false);
  };
  const handleSearchModalClose = () => setShowSearchModal(false);

  useEffect(() => {
    const LG_BREAKPOINT = 992;
    const handleResize = () => {
      if (window.innerWidth >= LG_BREAKPOINT) {
        setExpanded(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        variant="dark"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
        data-read
      >
        <Container>
          <BackArrow />
          <Navbar.Brand as={Link} href="/" onClick={handleLinkClick}>
            <Image src={LogoMobile} className="mobile" alt="logo EMOS" />
            <Image src={LogoDesktop} className="desktop" alt="logo EMOS" />
            <span className="sr-only">EMOS Río Cuarto</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg">
            <i className="fas fa-bars"></i>
          </Navbar.Toggle>
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
            show={expanded}
            onHide={() => setExpanded(false)}
          >
            <Offcanvas.Header closeButton closeVariant="white">
              <div className="offcanvas-logo-container">
                <Image
                  src={LogoDesktop}
                  className="slogan-logo-nav"
                  alt="logo EMOS"
                />
              </div>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="ms-auto">
                <Link
                  href="/Institucional"
                  className={`nav-link ${pathname === "/Institucional" ? "active" : ""}`}
                  onClick={handleLinkClick}
                >
                  Institucional
                </Link>
                <Link
                  href="/tramites"
                  className={`nav-link ${pathname === "/tramites" ? "active" : ""}`}
                  onClick={handleLinkClick}
                >
                  Trámites
                </Link>
                <Link
                  href="/biblioteca"
                  className={`nav-link ${pathname === "/biblioteca" ? "active" : ""}`}
                  onClick={handleLinkClick}
                >
                  Biblioteca
                </Link>
                <Link
                  href="/noticias"
                  className={`nav-link ${pathname === "/noticias" ? "active" : ""}`}
                  onClick={handleLinkClick}
                >
                  Noticias
                </Link>
                <Nav.Link onClick={handleSearchModalShow}>
                  <i className="fa fa-fw fa-search"></i>{" "}
                  <span className="d-lg-none">Buscar</span>
                  <span className="sr-only">Buscar</span>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <SearchModal
        show={showSearchModal}
        handleClose={handleSearchModalClose}
      />
    </>
  );
}
