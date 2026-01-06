import ListNews from "./ui/news/ListNews";

import Hero from "./ui/home/Hero";
import HeaderSection from "./ui/layout/HeaderSection";
import ListFormalityCategories from "./ui/home/ListCategories";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero />
      <ListFormalityCategories />

      <div className="container mb-4">
        <HeaderSection title="Últimas Noticias" />
        <ListNews limit={6} />
        <Link href="/noticias" className="btn btn-dark mb-5">
          Ver más noticias
        </Link>
      </div>
    </main>
  );
}
