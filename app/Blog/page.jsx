"use client";
import {motion} from "framer-motion"

import BlogPage from "@/components/Blog/BlogPage"
import Email from "@/components/Blog/email"
import Hero from "@/components/Blog/hero"
import Address from "@/components/Home/address"
import Footer from "@/components/Home/Footer"
import Navbar from "@/components/Home/Navbar"



export default function blogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50/30">
      <motion.div><Navbar /></motion.div>
      <motion.div><Hero /></motion.div>
      <motion.div><BlogPage /></motion.div>
      <motion.div><Email /></motion.div>
      <motion.div><Address /></motion.div>
      <motion.div><Footer /></motion.div>
    </div>
  );
}

