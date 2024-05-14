import { Navbar } from "@mwl/components/moleculs/Navs";
import { Hero } from "@mwl/components/organisms/Sections";

export default function Home() {
  return (
    <main className="bg-gray-900">
      <Navbar />
      <Hero />
    </main>
  );
}
