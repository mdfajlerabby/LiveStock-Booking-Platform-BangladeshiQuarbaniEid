"use client";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isHydrated, setIsHydrated] = useState(false);
  useEffect(() => {
    const hydrationTimer = window.setTimeout(() => {
      const saved = localStorage.getItem("qurbanihat-user");
      if (saved) setUser(JSON.parse(saved));
      setIsHydrated(true);
    }, 0);
    return () => window.clearTimeout(hydrationTimer);
  }, []);
  const login = (email, password) => {
    if (!email || password.length < 6) throw new Error("সঠিক ইমেইল ও কমপক্ষে ৬ অক্ষরের পাসওয়ার্ড দিন।");
    const next = JSON.parse(localStorage.getItem("qurbanihat-user") || "null") || { name: "কুরবানীহাট ব্যবহারকারী", email, photo: "" };
    next.email = email; setUser(next); localStorage.setItem("qurbanihat-user", JSON.stringify(next));
  };
  const register = (data) => { if (data.password.length < 6) throw new Error("পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।"); setUser(data); localStorage.setItem("qurbanihat-user", JSON.stringify(data)); };
  const logout = () => { setUser(null); localStorage.removeItem("qurbanihat-user"); };
  const updateUser = (data) => { const next = { ...user, ...data }; setUser(next); localStorage.setItem("qurbanihat-user", JSON.stringify(next)); };
  return <AuthContext.Provider value={{ user: isHydrated ? user : null, login, register, logout, updateUser }}>{children}</AuthContext.Provider>;
}
export const useAuth = () => useContext(AuthContext);
