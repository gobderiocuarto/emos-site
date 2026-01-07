import ListNews from "./ui/news/ListNews";

import Hero from "./ui/home/Hero";
import HeaderSection from "./ui/layout/HeaderSection";
import Link from "next/link";
import { fetchAreaBySlug } from "@/app/lib/DataAreas";
import AreaDetail from "./ui/formality/AreaDetail";
import ListFormalitiesBySlug from "./ui/formalities/ListFormalitiesBySlug";

export default async function Home() {
  const area = await fetchAreaBySlug("emos");

  return (
    <main>
      <Hero />

      <section className="container mb-5">
        <HeaderSection title={area ? area.name : "Emos"}  />
        <div className="row">
          <div className="col-lg-8">
            <ListFormalitiesBySlug area={area} />
          </div>
        </div>
      </section>

      <div className="container mb-4">
        <HeaderSection title="Últimas Noticias" />
        <ListNews limit={3} />
        <Link href="/noticias" className="btn btn-dark mb-5">
          Ver más noticias
        </Link>
      </div>
    </main>
  );
}
