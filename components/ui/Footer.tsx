import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react"
import PageIndicator from "./PageIndicator"

export default function Footer() {
  return (
    <footer className="bg-gray-100 relative py-48 px-16 lg:px-16">
      {/* Large CUBE Background Text */}
      <div className="absolute inset-0 flex items-center justify-center mt-60 sm:mt-[400px] lg:mt-[400px] overflow-visible">
  <span className="absolute text-[5rem] sm:text-[25rem] md:text-[25rem] lg:text-[20rem] xl:text-[25rem] font-light text-gray-900 select-none pointer-events-none leading-none z-0 opacity-20">
    CUBE
  </span>
</div>

      {/* Content */}
      <div className="relative z-10 max-w-8xl mx-auto">
        {/* Download Button */}
        <div className="text-center mb-20">
          <button className="bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-900 transition-colors rounded-md">
            Download Cube Assets
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          

          {/* Programs */}
          

          {/* Resources */}
          

          {/* Contact */}
          
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-start w-full">
  {/* Social Icons */}
  <div className="flex gap-6">
    <Instagram className="w-6 h-6 text-black hover:text-gray-600 cursor-pointer transition-colors" />
    <Facebook className="w-6 h-6 text-black hover:text-gray-600 cursor-pointer transition-colors" />
    <div className="w-6 h-6 text-black hover:text-gray-600 cursor-pointer flex items-center justify-center transition-colors">
      <span className="text-lg font-bold leading-none">𝕏</span>
    </div>
    <Youtube className="w-6 h-6 text-black hover:text-gray-600 cursor-pointer transition-colors" />
    <Linkedin className="w-6 h-6 text-black hover:text-gray-600 cursor-pointer transition-colors" />
  </div>

  {/* Logo Link */}
  <div className="text-black hover:text-gray-600 cursor-pointer transition-colors">
    <span className="text-xl font-medium"> <PageIndicator /></span>
  </div>
</div>
      </div>
    </footer>
  )
}
