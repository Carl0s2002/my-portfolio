"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Title */}
        <h1 className="text-xl font-bold">My Portfolio</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-300 transition">Home</Link>
          <Link href="/projects" className="hover:text-gray-300 transition">Projects</Link>
          <Link href="/experiences" className="hover:text-gray-300 transition">Experiences</Link>
          <Link href="/contact" className="hover:text-gray-300 transition">Contact</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link href="/" onClick={closeMenu} className="block hover:text-gray-300">Home</Link>
          <Link href="/projects" onClick={closeMenu} className="block hover:text-gray-300">Projects</Link>
          <Link href="/experiences" onClick={closeMenu} className="block hover:text-gray-300">Experiences</Link>
          <Link href="/contact" onClick={closeMenu} className="block hover:text-gray-300">Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
