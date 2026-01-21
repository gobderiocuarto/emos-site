import BannerBibliotecaList from "@/app/ui/ambiental/BannerBibliotecaList";
import HeaderSection from "@/app/ui/layout/HeaderSection";
import React from "react";

export default function page() {
  return (
    <main className="formalities formalities-page" data-read>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <HeaderSection title="Biblioteca Ambiental" />
          </div>
        </div>
      </div>
      <BannerBibliotecaList />
    </main>
  );
}
