import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="container about-page">
        <section className="page-title">
          <span className="eyebrow">আমাদের সম্পর্কে</span>
          <h1>কৃষক ও ক্রেতার মাঝে বিশ্বস্ত সংযোগ</h1>
          <p className="muted">কুরবানীহাট বাংলাদেশের স্থানীয় খামারিদের পশু শহরের ক্রেতাদের কাছে সহজে পৌঁছে দিতে তৈরি করা হয়েছে।</p>
        </section>
        <section className="about-grid">
          <div className="tip"><h2>যেভাবে কাজ করি</h2><p className="muted">প্রতিটি পশুর জাত, বয়স, ওজন, জেলা ও স্বাস্থ্য সম্পর্কিত তথ্য সহজ ভাষায় দেখানো হয়। আপনি পছন্দের পশু দেখে লগইন করে বুকিং অনুরোধ পাঠাতে পারেন।</p></div>
          <div className="tip"><h2>আমাদের অঙ্গীকার</h2><p className="muted">দেশি খামার, স্বচ্ছ তথ্য এবং বাংলাদেশের ক্রেতাদের জন্য নিরাপদ কোরবানির প্রস্তুতি—এই তিনটি বিষয় আমাদের প্রধান লক্ষ্য।</p></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
