import { ArrowLeft } from "lucide-react"

export default function Typography() {
  return (
    <div className="min-h-screen text-white">
      {/* Header */}
      

      {/* Typography Hero Section */}
      <div className="px-8 lg:px-16 py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl lg:text-7xl font-light mb-8">Typography</h1>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="space-y-4 text-gray-300">
                <div className="flex gap-4">
                  <span className="text-white font-medium">Typography</span>
                  <span>Primary Brand Typeface</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-white font-medium">Secondary</span>
                  <span>Secondary Brand Typeface</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-white font-medium">Alternate</span>
                  <span>Alternate Typefaces</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-white font-medium">Usage</span>
                  <span>Using Our Typefaces</span>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>

      {/* Intro to Typography */}
      <div className="bg-[#1a2a2a] px-8 lg:px-16 h-[500px] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <span className="text-[20rem] ml-[1200px] lg:text-[25rem] xl:text-[30rem] font-light text-white select-none pointer-events-none leading-none">
            Aa
          </span>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-white text-xl lg:text-2xl mt-[200px] leading-relaxed max-w-3xl">
            Our typography balances clarity with character, featuring a grotesque font family rooted in history and
            refined through thoughtful design.
          </p>
        </div>
      </div>

      {/* Main Typography Section */}
      <div className="bg-gray-100 text-black px-8 lg:px-16 py-16 relative">
        <img src="./typography.svg" className="w-full h-full"></img>
        {/* Faded CUBE background */}
        
        <div className="max-w-7xl mx-auto relative z-10">
          

          

          {/* Primary Brand Typeface */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-4">Primary Brand Typeface</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="text-8xl font-bold mb-4">Aa</div>
                <h4 className="text-4xl font-semibold mb-2">Helvetica Neue</h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  Used for body text and general communication. Clean, neutral, and highly readable. Conveys
                  professionalism and clarity.
                </p>
                <div className="font-sans text-lg space-y-2">
                  <p>abcdefghijklmnopqrstuvwxyz</p>
                  <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                  <p>0123456789</p>
                  <p>!@#$%&amp;*()+?&lt;&gt;=</p>
                </div>
              </div>
              
            </div>
          </div>

          {/* Secondary Typeface */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-4">Secondary Typeface</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="text-8xl font-bold mb-4">Aa</div>
                <h4 className="text-4xl font-semibold mb-2">Fontspring Rotunda</h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  Soft yet structured, Rotunda brings a friendly, modern touch to our visual language. Its rounded forms
                  add warmth and accessibility—complementing the precision of Helvetica Neue.
                </p>
                <div className="font-sans text-lg space-y-2">
                  <p>abcdefghijklmnopqrstuvwxyz</p>
                  <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                  <p>0123456789</p>
                  <p>DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO DEMO</p>
                </div>
              </div>
              
            </div>
          </div>

          {/* CUBE Logo with Text Examples */}
          <div className="mt-20">
            <h3 className="text-3xl font-semibold mb-8">CUBE Logo with Text</h3>
            
              {/* Light Background Examples */}
              <img src="./typography2.svg" className="w-full h-full"></img>
              {/* Dark Background Examples */}
              
            
          </div>
        </div>
      </div>
    </div>
  )
}
