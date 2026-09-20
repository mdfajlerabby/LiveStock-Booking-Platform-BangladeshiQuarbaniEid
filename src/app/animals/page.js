import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import AnimalCatalog from "../../components/animals/AnimalCatalog";
import { animals } from "../../data/animals";

export default function AnimalsPage() {
  return (
    <>
      <Navbar />
      <main className="container">
        <section className="page-title">
          <span className="eyebrow">আমাদের সংগ্রহ</span>
          <h1>পছন্দের পশু বেছে নিন</h1>
          <p className="muted">বগুড়া, রাজশাহী, ময়মনসিংহ ও কুষ্টিয়ার খামার থেকে যাচাই করা পশু।</p>
        </section>
        <AnimalCatalog animals={animals} />
      </main>
      <Footer />
    </>
  );
}
