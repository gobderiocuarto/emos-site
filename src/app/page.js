export const revalidate = 0;

import ListNews from "./ui/news/ListNews";

import Hero from "./ui/home/Hero";
import HeaderSection from "./ui/layout/HeaderSection";
import Link from "next/link";
import AreaDetail from "./ui/formality/AreaDetail";
import FeaturedFormalities from "./ui/formalities/FeaturedFormalities";
import ContactsFormailite from "./ui/contacts/ContactsFormailite";
import BannerList from "./ui/home/BannerList";
import ProgramsBanner from "./ui/ambiental/ProgramsBanner";

export default async function Home() {
  return (
    <main>
      <Hero />
      <BannerList />

      <ContactsFormailite />
      <FeaturedFormalities />
      <ProgramsBanner />
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
