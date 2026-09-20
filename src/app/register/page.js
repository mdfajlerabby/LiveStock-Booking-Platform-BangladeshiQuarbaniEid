import Navbar from "../../components/layout/Navbar"; import AuthForm from "../../components/auth/AuthForm";
export default function RegisterPage() { return <><Navbar /><main className="container"><section className="page-title center"><span className="eyebrow">নতুন সদস্য</span><h1>কুরবানীহাটে যোগ দিন</h1></section><AuthForm mode="register" /></main></>; }
