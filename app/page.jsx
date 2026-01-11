import { Header } from "../components/header.jsx";
import { Hero } from "../components/hero.jsx";
import { Services } from "../components/services.jsx";
import Gallery from "../components/gallery.jsx";
import { About } from "../components/about.jsx";
import { Contact } from "../components/contact.jsx";
import { Footer } from "../components/footer.jsx";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
