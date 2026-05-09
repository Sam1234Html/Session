"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Heart } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-dark">
          <Heart className="text-primary fill-primary" /> Jibonge
        </Link>
        
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link href="/therapists" className="hover:text-primary transition">Therapists</Link>
          <Link href="/pricing" className="hover:text-primary transition">Pricing</Link>
          <Link href="/book" className="bg-primary text-white px-6 py-2 rounded-full shadow-md">Book Now</Link>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b p-6 flex flex-col gap-4 animate-in slide-in-from-top">
          <Link href="/therapists" onClick={() => setIsOpen(false)}>Therapists</Link>
          <Link href="/pricing" onClick={() => setIsOpen(false)}>Pricing</Link>
          <Link href="/book" className="text-primary font-bold">Book Now</Link>
        </div>
      )}
    </nav>
  );
}
