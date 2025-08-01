import { ArrowLeft } from "lucide-react"

export default function Colors() {
  return (
    <div className="min-h-screen  text-white">
      {/* Header */}
   

      {/* Color Hero Section */}
      <div className="px-8 lg:px-16 py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl lg:text-7xl font-light mb-8">Color</h1>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="space-y-4 text-gray-300">
                <div className="flex gap-4">
                  <span className="text-white font-medium">Colors we use</span>
                  <span>Core Brand Colors</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-white font-medium">Product Colors</span>
                  <span>Sub-brand/Product Colors</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-white font-medium">Combinations</span>
                  <span>Color Combinations</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Intro to Colors */}
      <div className=" px-8 lg:px-16 py-16 relative overflow-hidden">
       
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white text-xl lg:text-2xl leading-relaxed max-w-3xl">
            The Cube color palette mirrors our vision—minimal on the surface, but layered with meaning, precision, and
            possibility beneath.
          </p>
          <button className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition-colors">
            Download All Colors
          </button>
        </div>
      </div>

      {/* Core Brand Colors */}
      <div className="bg-gray-100 text-black px-8 lg:px-16 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-4">Core Brand Colors</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-12 max-w-3xl">
            Our core brand colors are the foundation of our visual identity, used across all primary brand touchpoints.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Off Black */}
            <div className="bg-[#091717] rounded-xl p-8 text-white flex flex-col justify-end h-[400px]">
              <p className="text-lg font-medium">Name: off Black</p>
              <p className="text-sm">CMYK: 99/0/32/60</p>
              <p className="text-sm">RGB: 9/23/23</p>
              <p className="text-sm">HEX: #091717</p>
            </div>

            {/* Off White */}
            <div className="bg-[#f8f8f8] rounded-xl p-8 text-black border border-gray-300 flex flex-col justify-end h-[400px]">
              <p className="text-lg font-medium">Name: off White</p>
              <p className="text-sm">CMYK: 0/0/0/3</p>
              <p className="text-sm">RGB: 248/248/248</p>
              <p className="text-sm">HEX: #f8f8f8</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sub brand/Product Colors */}
      <div className="bg-white text-black px-8 lg:px-16 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl  mb-4">Sub brand/Product Colors</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-3xl">
            When applying our brand to product design, we expand our core color palette even further to include a wider
            range of blacks, teal, and whites.
          </p>

          <h3 className="text-3xl font-light mb-8">Accent Colors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Accent Black */}
            <div className="bg-black rounded-xl p-8 text-white flex flex-col justify-end h-[400px]">
              <p className="text-lg font-medium">Name: off Black</p>
              <p className="text-sm">CMYK: 99/0/32/60</p>
              <p className="text-sm">RGB: 9/23/23</p>
              <p className="text-sm">HEX: #091717</p>
            </div>

            {/* Accent Light Gray */}
            <div className="bg-[#fbfbfb] rounded-xl p-8 text-black border border-gray-300 flex flex-col justify-end h-[400px]">
              <p className="text-lg font-medium">Name: Very light gray</p>
              <p className="text-sm">CMYK: 0/0/0/2</p>
              <p className="text-sm">RGB: 98.4, 98.4, 98.4</p>
              <p className="text-sm">HEX: #fbfbfb</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
