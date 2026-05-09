"use client";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, Shield, Coffee } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="flex-1 space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-dark leading-tight">
            Your Safe Space to <span className="text-primary">Talk and Heal</span>
          </h1>
          <p className="text-xl text-dark/70">Connect with professional therapists in Kenya from the comfort of your home or at our physical mall locations.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/book" className="bg-accent text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg">Get Started</Link>
            <Link href="/therapists" className="bg-white border-2 border-primary text-primary px-8 py-4 rounded-2xl font-bold text-lg">Meet Therapists</Link>
          </div>
        </motion.div>
        
        <div className="flex-1 relative">
          <div className="w-full aspect-square bg-primary/20 rounded-full flex items-center justify-center border-8 border-white shadow-2xl">
            <div className="text-center p-8">
              <Sparkles className="w-16 h-16 text-accent mx-auto mb-4" />
              <p className="font-medium text-dark/60">Premium Therapy Platform</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <Shield className="text-primary w-12 h-12" />
            <h3 className="text-2xl font-bold">Safe & Private</h3>
            <p className="text-dark/60">Your sessions are strictly confidential and encrypted.</p>
          </div>
          <div className="space-y-4">
            <Coffee className="text-primary w-12 h-12" />
            <h3 className="text-2xl font-bold">Physical Locations</h3>
            <p className="text-dark/60">Book sessions at TRM, Village Market, or Juja City Mall.</p>
          </div>
          <div className="space-y-4">
            <Sparkles className="text-primary w-12 h-12" />
            <h3 className="text-2xl font-bold">Expert Care</h3>
            <p className="text-dark/60">Work with licensed psychologists and counselors.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
