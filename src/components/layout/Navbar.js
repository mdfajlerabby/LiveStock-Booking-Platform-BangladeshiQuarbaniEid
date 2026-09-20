import Logo from "../brand/Logo";

const links = [
  { href: "/", label: "হোম" },
  { href: "/animals", label: "সব পশু" },
  { href: "/about", label: "আমাদের সম্পর্কে" },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav">
        <Logo />
        <nav className="navlinks" aria-label="প্রধান মেনু">
          {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
        <div className="nav-actions">
          <a className="btn btn-soft" href="/login">লগইন</a>
          <a className="btn btn-primary" href="/register">রেজিস্টার</a>
        </div>
      </div>
    </header>
  );
}
