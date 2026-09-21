import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import BookingForm from "../../../components/animals/BookingForm";
import { animals, formatTaka } from "../../../data/animals";
import { notFound } from "next/navigation";
export function generateStaticParams() {
  return animals.map((a) => ({ id: String(a.id) }));
}
export default async function DetailsPage({ params }) {
  const { id } = await params;
  const animal = animals.find((a) => a.id === Number(id));
  if (!animal) notFound();
  return (
    <>
      <Navbar />
      <main className="container detail">
        <img className="detail-img" src={animal.image} alt={animal.name} />
        <div>
          <span className="tag">{animal.breed}</span>
          <h1>{animal.name}</h1>
          <p className="muted">{animal.description}</p>
          <div className="stats">
            <div className="stat">
              <strong>{animal.weight}</strong>কেজি
            </div>
            <div className="stat">
              <strong>{animal.age}</strong>বয়স
            </div>
            <div className="stat">
              <strong>{animal.location}</strong>জেলা
            </div>
          </div>
          <p className="price">{formatTaka(animal.price)}</p>
          <BookingForm animal={animal} />
        </div>
      </main>
      <Footer />
    </>
  );
}
