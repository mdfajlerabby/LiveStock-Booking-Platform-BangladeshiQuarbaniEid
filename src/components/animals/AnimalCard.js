import { formatTaka } from "../../data/animals";

export default function AnimalCard({ animal }) {
  return (
    <article className="animal-card">
      <img src={animal.image} alt={animal.name} className="animal-image" />
      <div className="animal-body">
        <span className="tag">{animal.breed}</span>
        <h3>{animal.name}</h3>
        <p className="muted">{animal.location} · {animal.weight} কেজি</p>
        <p className="health-status">✓ {animal.health}</p>
        <div className="animal-card-footer">
          <strong className="price">{formatTaka(animal.price)}</strong>
          <a className="btn btn-light" href={`/animals/${animal.id}`}>বিস্তারিত</a>
        </div>
      </div>
    </article>
  );
}
