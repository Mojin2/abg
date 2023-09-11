"use client";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Charinfo from "./charinfo/page";
import Home from "./page";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/charinfo" element={<Charinfo />} />
      </Routes>
    </AnimatePresence>
  );
}
