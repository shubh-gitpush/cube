"use client"

import { useState } from "react"
import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react"
import Footer from "@/components/ui/Footer"
import Navbar from "@/components/ui/Navbar"
import Intro from "@/components/ui/Intro"
import Logo from "@/components/ui/Logo"
// import Typography from "@/components/ui/Typography"
// import Color from "@/components/ui/Color"
// import Visuals from "@/components/ui/Visuals"

type NavSection = "Intro" | "Logo" | "Typography" | "Color" | "Visuals"

const componentsMap: Record<NavSection, React.FC> = {
  Intro,
  Logo,
  // Typography,
  // Color,
  // Visuals,
}

export default function CubeBrandGuidelines() {
  const [activeSection, setActiveSection] = useState<NavSection>("Logo")
  const ActiveComponent = componentsMap[activeSection] ?? Intro

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Stars */}
      <div className="absolute inset-0 z-0">
        {/* Optional: replace with StarsBackground component */}
        <div className="absolute inset-0 opacity-60">
          {Array.from({ length: 200 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.8 + 0.2,
              }}
            />
          ))}
        </div>

        {/* Grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-0" />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        <ActiveComponent />
        <Footer />
      </div>
    </div>
  )
}
