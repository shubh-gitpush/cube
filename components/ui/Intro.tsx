const Intro = () => {
    return (
      <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 py-16 space-y-20">
        {/* Brand Guidelines Header */}
        <div className="space-y-6 pt-20">
          <h1 className="text-5xl lg:text-7xl xl:text-8xl font-light text-white leading-tight tracking-tight">
            Brand
          </h1>
          <h1 className="text-5xl lg:text-7xl xl:text-8xl font-light text-white leading-tight tracking-tight">
            Guidelines
          </h1>
          <p className="text-white text-lg font-medium mt-8">
            CUBE - Centre for Universal Business & Entrepreneurship
          </p>
        </div>
  
        {/* A Space Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 relative">
  {/* Left Column */}
  <div className="space-y-12 pr-[40px] relative">
    {/* Vertical Line - shifted to the left */}
    <div className="absolute right-[-400px] top-0 bottom-0 w-px bg-white/30" />
    
    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-white leading-tight">A Space</h2>
    <p className="text-white text-lg leading-relaxed">
      Limitless potential — a place where ideas take flight, innovation orbits daily, and future leaders
      prepare for liftoff.
    </p>
  </div>

  {/* Right Column */}
  <div className="flex mr-[300px] flex-col justify-left lg:pl-8">
    <div className="text-right space-y-2">
      <p className="text-3xl lg:text-4xl xl:text-5xl font-light text-white leading-tight">Innovate</p>
      <p className="text-3xl lg:text-4xl xl:text-5xl font-light text-white leading-tight">Create</p>
      <p className="text-3xl lg:text-4xl xl:text-5xl font-light text-white leading-tight">Launch.</p>
    </div>
  </div>
</div>

  
        {/* Mission Statement */}
        <div className="flex justify-start">
          <div className="border border-white/30 p-8 lg:p-12 max-w-2xl">
            <p className="text-white text-xl lg:text-2xl leading-relaxed">
              We created CUBE as a space where ideas ignite,{" "}
              <span className="text-gray-400">founders connect, & the future of entrepreneurship begins.</span>
            </p>
          </div>
        </div>
  
        {/* Audacity Section */}
        <div className="text-right mr-[200px] space-y-8">
  <div className="space-y-12">
    <h1 className="text-6xl lg:text-8xl xl:text-9xl font-light text-white leading-tight tracking-tight">
      Audacity
    </h1>
    <span className="text-3xl lg:text-4xl text-white">to</span>
    <h1 className="text-6xl lg:text-8xl xl:text-9xl font-light text-white leading-tight tracking-tight">
      Change
    </h1>
    <span className="text-3xl lg:text-4xl text-white">the</span>
    <h1 className="text-6xl lg:text-8xl xl:text-9xl font-light text-white leading-tight tracking-tight">
      World
    </h1>
  </div>
</div>
  
        {/* CUBE Variants Scroller */}
        <div className="overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-slide px-8">
            <div className="flex gap-12 text-white text-4xl lg:text-4xl">
              <span><strong>CUBE</strong> Founders Space</span>
              <span><strong>CUBE</strong> Scale</span>
              <span><strong>CUBE</strong> Global</span>
              <span><strong>CUBE</strong> 4 Industries</span>
              <span><strong>CUBE</strong> Founders Space</span>
              <span><strong>CUBE</strong> Scale</span>
              <span><strong>CUBE</strong> Global</span>
              <span><strong>CUBE</strong> 4 Industries</span>
            </div>
          </div>
        </div>
  
        {/* Download Button */}
        <div className="text-center">
          <button className="bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-900 transition-colors">
            Download Cube Assets
          </button>
        </div>
      </div>
    )
  }
  
  export default Intro
  