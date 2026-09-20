import "./globals.css";
import "animate.css";
import { AuthProvider } from "../components/auth/AuthProvider";

export const metadata = {
  title: "কুরবানীহাট | বাংলাদেশের বিশ্বস্ত পশুর হাট",
  description: "দেশি খামারের গরু ও ছাগল বুকিংয়ের সহজ অনলাইন প্ল্যাটফর্ম",
};

export default function RootLayout({ children }) {
  return <html lang="bn"><body><AuthProvider>{children}</AuthProvider></body></html>;
}
