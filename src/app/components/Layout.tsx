"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

type LayoutProps = {
    children: ReactNode
}

export default function Layout ({ children }:LayoutProps) {
  const pathname = usePathname();
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div  initial={{ opacity: 0, y: 20 }}
          key={pathname}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex-grow">
          {children}
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  );
};