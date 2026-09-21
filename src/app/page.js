import Navbar from "../components/layout/Navbar";
import Link from "next/link";
import Footer from "../components/layout/Footer";
import AnimalCard from "../components/animals/AnimalCard";
import { animals } from "../data/animals";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <span className="eyebrow">বাংলাদেশের বিশ্বস্ত অনলাইন পশুর হাট</span>
        <h1>
          কোরবানির পশু
          <br />
          <em>নির্ভরতায় কিনুন</em>
        </h1>
        <p>
          দেশি গরু, শাহীওয়াল ও ব্ল্যাক বেঙ্গল ছাগল—পছন্দের পশু দেখুন, বুক করুন,
          কোরবানির আনন্দ ঘরে আনুন।
        </p>
        <Link className="btn btn-primary" href="/animals">
          পশু দেখুন →
        </Link>
      </div>
      <img className="hero-image" src={animals[1].image} alt="শাহীওয়াল গরু" />
    </section>
  );
}

function Tips() {
  const tips = [
    [
      "🌿",
      "স্বাস্থ্য দেখুন",
      "চোখ উজ্জ্বল, নাক পরিষ্কার এবং চলাফেরা স্বাভাবিক কি না দেখুন।",
    ],
    [
      "⚖️",
      "ওজন বুঝে কিনুন",
      "বাজেট অনুযায়ী ওজন ও বয়স মিলিয়ে সঠিক পশু বাছাই করুন।",
    ],
    [
      "🤝",
      "বিশ্বস্ততা আগে",
      "আমাদের প্রতিটি পশু স্থানীয় খামার থেকে যাচাই করে আনা হয়।",
    ],
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">সহজ গাইড</span>
            <h2>কোরবানির প্রস্তুতি</h2>
          </div>
        </div>
        <div className="tips">
          {tips.map(([icon, title, text]) => (
            <div className="tip" key={title}>
              <span className="tip-icon">{icon}</span>
              <h3>{title}</h3>
              <p className="muted">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TopBreeds() {
  const breeds = [
    ["শাহীওয়াল", "শান্ত স্বভাব ও ভালো মাংসের জন্য জনপ্রিয়"],
    ["দেশি গরু", "বাংলাদেশের আবহাওয়ায় সহজে মানিয়ে যায়"],
    ["ব্ল্যাক বেঙ্গল", "ছোট আকার ও উন্নত মাংসের জন্য পরিচিত"],
  ];
  return (
    <section className="section breeds-section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">জনপ্রিয় জাত</span>
            <h2>সেরা জাতগুলো</h2>
          </div>
        </div>
        <div className="breed-grid">
          {breeds.map(([name, description]) => (
            <div className="breed-card" key={name}>
              <span className="breed-number">
                ০{breeds.findIndex((breed) => breed[0] === name) + 1}
              </span>
              <div>
                <h3>{name}</h3>
                <p className="muted">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          <Hero />
        </div>
        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">আজকের বাছাই</span>
                <h2>জনপ্রিয় পশু</h2>
              </div>{" "}
              <Link href="/animals" className="btn btn-soft">
                সব দেখুন →
              </Link>
            </div>
            <div className="animal-grid">
              {animals.slice(0, 4).map((animal) => (
                <AnimalCard key={animal.id} animal={animal} />
              ))}
            </div>
          </div>
        </section>
        <Tips />
        <TopBreeds />
      </main>
      <Footer />
    </>
  );
}
