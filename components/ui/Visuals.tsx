import { ArrowLeft, Heart } from "lucide-react"
import Image from "next/image"

export default function Visuals() {
  return (
    <div className="min-h-screen  text-white">
      {/* Header */}
      

      {/* Visuals Hero Section */}
      <div className="px-8 lg:px-16  py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl lg:text-7xl font-light mb-8">Visuals</h1>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="space-y-4 text-gray-300">
                <div className="flex gap-4">
                  <span className="text-white font-medium">Visuals</span>
                  <span>Brand Imagery</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-white font-medium">Applications</span>
                  <span>Product Mockups</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-white font-medium">Guidelines</span>
                  <span>Usage Examples</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-64 h-64 bg-white-900 rounded-lg flex items-center justify-center">
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro to Visuals */}
      <div className="bg-black px-8 lg:px-16 py-16 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          
        </div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white text-xl lg:text-2xl leading-relaxed max-w-3xl">
            The Cube visuals mirror our vision—minimal on the surface, but layered with meaning, precision, and
            possibility beneath.
          </p>
          <button className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition-colors">
            Download All Visuals
          </button>
        </div>
      </div>

      {/* Billboard Mockup */}
      <div className="bg-gray-100 text-black px-4 lg:px-16 py-32">
  <div className="max-w-12xl mx-auto">
    <div className="relative w-full h-[600px] lg:h-[800px] bg-gray-300 rounded-lg overflow-hidden">
      <Image
        src="/visiuals1.svg"
        alt="Subway Billboard"
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
        priority // Optional: improves loading for LCP
      />
    </div>
  </div>
</div>

      {/* Product Mockups (Cards) */}
      <div className="px-4 lg:px-32 py-32 bg-white">
  <div className="max-w-7xl mx-auto">
    

    <div className="flex justify-center">
      <img
        src="./visuals2.svg"
        alt="Product Application Visual"
        className="w-full max-w-6xl h-auto"
      />
    </div>
  </div>
</div>
      {/* Container Mockups */}
      <div className="px-8 lg:px-16 py-16 bg-white">
        <div className="max-w-12xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative w-full h-[500px]  flex items-center justify-center rounded-lg overflow-hidden">
              <Image
                src="/visuals3.svg"
                alt="Shipping Container 1"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative w-full h-[500px] bg-gray-700 flex items-center justify-center rounded-lg overflow-hidden">
              <Image
                src="/visuals4.svg"
                alt="Shipping Container 2"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Keycap Mockups */}
      

      {/* USB Drive Mockups */}
      <div className="px-8 lg:px-16 py-16 bg-white">
  <div className="max-w-7xl mx-auto">
    

    <div className="space-y-8">
      {/* Image 1 */}
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
        <Image
          src="/visuals5.svg"
          alt="USB Drives 1"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Image 2 */}
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
        <Image
          src="/visuals6.svg"
          alt="USB Drives 2"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Image 3 */}
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
        <Image
          src="/visuals7.svg"
          alt="USB Drives 3"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  </div>
</div>


      {/* Pen Mockups */}
     
    </div>
  )
}
