"use client";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Charinfo from "./charinfo/page";
import Info from "./info/page";
import Home from "./page";
import Setting from "./setting/page";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/charinfo" element={<Charinfo />} />
        <Route path="/info" element={<Info />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </AnimatePresence>
  );
}
