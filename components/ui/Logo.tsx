import { ArrowLeft } from "lucide-react"

export default function LogoGuidelines() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      

      {/* Our Logo Section */}
      <div className="px-8 lg:px-16 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-6xl lg:text-7xl font-light mb-8">Our Logo</h1>
              <div className="space-y-4 text-gray-300">
                <div className="flex gap-4">
                  <span className="text-white font-medium">Logo</span>
                  <span>More than just a shape</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-white font-medium">Brand Mark</span>
                  <span>The CUBE symbol</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-white font-medium">Typography</span>
                  <span>Clean and modern</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-white font-medium">Usage</span>
                  <span>Flexible applications</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gray-900 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white mx-auto mb-4 grid grid-cols-2 gap-1 p-2">
                    <div className="bg-black"></div>
                    <div className="bg-black"></div>
                    <div className="bg-black"></div>
                    <div className="bg-black"></div>
                  </div>
                  <div className="text-white text-xl font-medium">CUBE</div>
                  <div className="text-gray-400 text-sm">Founders Space</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* More than just a shape */}
      <div className="px-8 lg:px-16 py-16 bg-black-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-8">More than just a shape</h2>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                The CUBE logo is more than geometry—it's a symbol. A cube represents stability, foundation, and
                structure. But when opened, it reveals infinite possibilities. Our logo embodies the transformation from
                idea to reality.
              </p>
              <button className="bg-white text-black px-6 ml-[1130px] py-4 px-8 rounded hover:bg-gray-200 transition-colors">
                Download Assets
              </button>
            </div>
           
          </div>
        </div>
      </div>

      {/* Looking Deeper */}
      <div className="px-8 lg:px-16 py-16 bg-gray-100 text-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">Looking Deeper</h2>
            <p className="text-2xl text-gray-600 italic">at Anatomy</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6">The Concept</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our logo represents the fundamental building blocks of entrepreneurship. Each square within the cube
                symbolizes a core element: Innovation, Execution, Community, and Growth.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li>
                  • <strong>Innovation:</strong> The spark of new ideas
                </li>
                <li>
                  • <strong>Execution:</strong> Turning ideas into reality
                </li>
                <li>
                  • <strong>Community:</strong> Building connections
                </li>
                <li>
                  • <strong>Growth:</strong> Scaling and expanding
                </li>
              </ul>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Space for</h4>
                <p className="text-gray-600 italic">Better Tomorrow</p>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="relative">
                <div className="w-256 h-256 border border-gray-300 rounded-lg flex items-center justify-center">
                  
                  <img src="/concept.svg" alt="Concept" className="max-w-full max-h-full" />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Variations */}
      <div className="px-8 lg:px-16 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-12 text-center">CUBE</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Variation 1 */}
            
              <img src="/founders.svg" alt="concept" className="max-w-full max-h-full"/>
            

            {/* Variation 2 */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="w-16 h-16 mx-auto grid grid-cols-2 gap-1">
                <div className="bg-gray-600"></div>
                <div className="bg-white"></div>
                <div className="bg-white"></div>
                <div className="bg-gray-600"></div>
              </div>
            </div>

            {/* Variation 3 */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="w-16 h-16 mx-auto grid grid-cols-2 gap-1">
                <div className="bg-white"></div>
                <div className="bg-white"></div>
                <div className="bg-gray-600"></div>
                <div className="bg-gray-600"></div>
              </div>
            </div>

            {/* Variation 4 */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <div className="w-16 h-16 mx-auto grid grid-cols-2 gap-1">
                <div className="bg-gray-600"></div>
                <div className="bg-gray-600"></div>
                <div className="bg-white"></div>
                <div className="bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Logo Lockup */}
      <div className="px-8 lg:px-16 py-16 bg-black-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-4">Primary Logo Lockup</h2>
          <p className="text-gray-400 mb-12">
            This logo lockup is the primary version and should be used whenever possible. It includes the CUBE symbol
            with the full wordmark.
          </p>

          <div className="bg-white p-16 rounded-lg">
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-4">
                
                <div>
                <img src="/cubelogo.svg" alt="Concept" className="max-w-full max-h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Color Version */}
      <div className="px-8 lg:px-16 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-12">Full Color Version</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Dark Version */}
            <div>
              <h3 className="text-xl mb-4">On Dark Backgrounds</h3>
              <div className="bg-black p-16 rounded-lg">
                <div className="flex items-center justify-center">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white grid grid-cols-2 gap-1 p-1">
                      <div className="bg-black"></div>
                      <div className="bg-black"></div>
                      <div className="bg-black"></div>
                      <div className="bg-black"></div>
                    </div>
                    <div>
                      <div className="text-white text-2xl font-bold">Cube</div>
                      <div className="text-gray-400 text-sm">Founders Space</div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="mt-4 bg-gray-800 text-white px-4 py-2 rounded text-sm hover:bg-gray-700">
                Download PNG
              </button>
            </div>

            {/* Light Version */}
            <div>
              <h3 className="text-xl mb-4">On Light Backgrounds</h3>
              <div className="bg-white border p-16 rounded-lg">
                <div className="flex items-center justify-center">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-black grid grid-cols-2 gap-1 p-1">
                      <div className="bg-white"></div>
                      <div className="bg-white"></div>
                      <div className="bg-white"></div>
                      <div className="bg-white"></div>
                    </div>
                    <div>
                      <div className="text-black text-2xl font-bold">Cube</div>
                      <div className="text-gray-600 text-sm">Founders Space</div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="mt-4 bg-gray-800 text-white px-4 py-2 rounded text-sm hover:bg-gray-700">
                Download PNG
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Symbol */}
      <div className="px-8 lg:px-16 py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-4">Symbol</h2>
          <p className="text-gray-400 mb-12">
            The CUBE symbol can be used independently when space is limited or when the brand is well established in
            context.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-12 rounded-lg">
              <div className="w-16 h-16 mx-auto bg-black grid grid-cols-2 gap-1 p-1">
                <div className="bg-white"></div>
                <div className="bg-white"></div>
                <div className="bg-white"></div>
                <div className="bg-white"></div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-400 to-orange-400 p-12 rounded-lg">
              <div className="w-16 h-16 mx-auto bg-white grid grid-cols-2 gap-1 p-1">
                <div className="bg-black"></div>
                <div className="bg-black"></div>
                <div className="bg-black"></div>
                <div className="bg-black"></div>
              </div>
            </div>

            <div className="bg-black p-12 rounded-lg">
              <div className="w-16 h-16 mx-auto bg-white grid grid-cols-2 gap-1 p-1">
                <div className="bg-black"></div>
                <div className="bg-black"></div>
                <div className="bg-black"></div>
                <div className="bg-black"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What Not To Do */}
      <div className="px-8 lg:px-16 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-12">What Not To Do</h2>
          <p className="text-gray-400 mb-12">
            To maintain brand consistency and ensure optimal logo reproduction, please avoid these common mistakes.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Don't stretch */}
            <div className="relative">
              <div className="bg-white border p-8 rounded-lg">
                <div className="flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-12 bg-black grid grid-cols-2 gap-1 p-1">
                      <div className="bg-white"></div>
                      <div className="bg-white"></div>
                      <div className="bg-white"></div>
                      <div className="bg-white"></div>
                    </div>
                    <div className="text-black text-lg font-bold">Cube</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xl">
                ×
              </div>
              <p className="text-sm text-gray-400 mt-2">Don't stretch the logo</p>
            </div>

            {/* Don't change colors */}
            <div className="relative">
              <div className="bg-white border p-8 rounded-lg">
                <div className="flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-red-500 grid grid-cols-2 gap-1 p-1">
                      <div className="bg-white"></div>
                      <div className="bg-white"></div>
                      <div className="bg-white"></div>
                      <div className="bg-white"></div>
                    </div>
                    <div className="text-red-500 text-xl font-bold">Cube</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xl">
                ×
              </div>
              <p className="text-sm text-gray-400 mt-2">Don't change brand colors</p>
            </div>

            {/* Don't add effects */}
            <div className="relative">
              <div className="bg-black p-8 rounded-lg">
                <div className="flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-white grid grid-cols-2 gap-1 p-1 shadow-lg shadow-white/50">
                      <div className="bg-black"></div>
                      <div className="bg-black"></div>
                      <div className="bg-black"></div>
                      <div className="bg-black"></div>
                    </div>
                    <div className="text-white text-xl font-bold">Cube</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xl">
                ×
              </div>
              <p className="text-sm text-gray-400 mt-2">Don't add drop shadows</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
