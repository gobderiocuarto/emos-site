import ListNews from "./ui/news/ListNews";

import Hero from "./ui/home/Hero";
import HeaderSection from "./ui/layout/HeaderSection";
import Link from "next/link";
import { fetchAreaBySlug } from "@/app/lib/DataAreas";
import AreaDetail from "./ui/formality/AreaDetail";
import ListFormalitiesBySlug from "./ui/formalities/ListFormalitiesBySlug";
import ContactsFormailite from "./ui/contacts/ContactsFormailite";
import BannerList from "./ui/home/BannerList";
import EmosBanners from "./ui/home/EmosBanners";

export default async function Home() {
  const area = await fetchAreaBySlug("emos");

  return (
    <main>
      <Hero />
      <BannerList />

      <ContactsFormailite />
      <ListFormalitiesBySlug area={area} />
      <EmosBanners />

      <div className="container mb-4">
        <ListNews limit={6} area={"emos"} />

        <div className="d-flex justify-content-center mt-4">
          <Link
            href="/noticias"
            className="btn btn-outline-success btn-rounded-custom px-5 py-2 mb-5"
          >
            Ver más noticias
          </Link>
        </div>
      </div>
    </main>
  );
}
