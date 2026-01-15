import ListNews from "./ui/news/ListNews";

import Hero from "./ui/home/Hero";
import HeaderSection from "./ui/layout/HeaderSection";
import Link from "next/link";
import { fetchAreaBySlug } from "@/app/lib/DataAreas";
import AreaDetail from "./ui/formality/AreaDetail";
import ListFormalitiesBySlug from "./ui/formalities/ListFormalitiesBySlug";
import ContactsFormailite from "./ui/formalities/ContactsFormailite";
import BannerList from "./ui/home/BannerList";

export default async function Home() {
  const area = await fetchAreaBySlug("emos");

  return (
    <main>
      <Hero />
      <BannerList />
      <div className="container mb-4">
        <ContactsFormailite />
      </div>
      <ListFormalitiesBySlug area={area} />

      <div className="container mb-4">
        <HeaderSection title="Últimas Noticias" />
        <ListNews limit={""} area={"emos"} />

        <Link href="/noticias" className="btn btn-dark mt-3">
          Ver más noticias
        </Link>
      </div>
    </main>
  );
}
