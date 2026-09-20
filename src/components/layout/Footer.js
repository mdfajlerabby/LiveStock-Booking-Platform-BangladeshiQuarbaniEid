import Logo from "../brand/Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p>দেশি খামারের পশু, ঘরে বসে সহজ বুকিং।</p>
        </div>
        <div>
          <h3>যোগাযোগ</h3>
          <p>ফোন: ০১৭০০-১২৩৪৫৬</p>
          <p>ইমেইল: hello@qurbanihat.bd</p>
        </div>
        <div>
          <h3>আমাদের লক্ষ্য</h3>
          <p>কৃষক ও ক্রেতার মাঝে বিশ্বস্ত সংযোগ তৈরি করা।</p>
        </div>
      </div>
    </footer>
  );
}
