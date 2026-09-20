import Navbar from "../../components/layout/Navbar"; import AuthForm from "../../components/auth/AuthForm";
export default function LoginPage() { return <><Navbar /><main className="container"><section className="page-title center"><span className="eyebrow">স্বাগতম</span><h1>আপনার অ্যাকাউন্টে লগইন</h1></section><AuthForm mode="login" /></main></>; }
