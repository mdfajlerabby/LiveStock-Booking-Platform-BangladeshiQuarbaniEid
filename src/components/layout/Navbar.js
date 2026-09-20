"use client";
import Logo from "../brand/Logo";
import { useAuth } from "../auth/AuthProvider";

const links = [
  { href: "/", label: "হোম" },
  { href: "/animals", label: "সব পশু" },
  { href: "/about", label: "আমাদের সম্পর্কে" },
];

export default function Navbar() {
  const { user, logout } = useAuth();
  return (
    <header className="site-header">
      <div className="container nav">
        <Logo />
        <nav className="navlinks" aria-label="প্রধান মেনু">
          {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
        <div className="nav-actions">
          {user ? <><a className="profile-link" href="/my-profile">{user.name}</a><button className="btn btn-soft" onClick={logout}>লগআউট</button></> : <><a className="btn btn-soft" href="/login">লগইন</a><a className="btn btn-primary" href="/register">রেজিস্টার</a></>}
        </div>
      </div>
    </header>
  );
}
