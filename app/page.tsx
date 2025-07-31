"use client"

import { useState, useEffect } from "react"
import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react"
import Footer from "@/components/ui/Footer"
import Navbar from "@/components/ui/Navbar"
import Intro from "@/components/ui/Intro"
import Logo from "@/components/ui/Logo"
import Typography from "@/components/ui/Typography"
// import Color from "@/components/ui/Color"
import Visuals from "@/components/ui/Visuals"

type NavSection = "Intro" | "Logo" | "Typography" | "Color" | "Visuals"

const componentsMap: Record<NavSection, React.FC> = {
  Intro,
  Logo,
  Typography,
  // Color,
  Visuals,
}

type Star = {
  left: number
  top: number
  opacity: number
}

export default function CubeBrandGuidelines() {
  const [activeSection, setActiveSection] = useState<NavSection>("Logo")
  const ActiveComponent = componentsMap[activeSection] ?? Intro

  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const newStars = Array.from({ length: 300 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      opacity: Math.random() * 0.8 + 0.2,
    }))
    setStars(newStars)
  }, [])

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background stars and grid */}
      <div className="absolute inset-0 -z-20">
        {/* Twinkling Stars */}
        <div className="absolute inset-0 opacity-60">
          {stars.map((star, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${star.left}%`,
                top: `${star.top}%`,
                opacity: star.opacity,
              }}
            />
          ))}
        </div>

        {/* Grid lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Static stars background image */}
        <div
          className="absolute inset-0 bg-cover bg-center h-[100px]"
          style={{ backgroundImage: "url('./stars.svg')", }}
        />
      </div>

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/20 -z-10" />

      {/* Foreground content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        <ActiveComponent />
        <Footer />
      </div>
    </div>
  )
}
