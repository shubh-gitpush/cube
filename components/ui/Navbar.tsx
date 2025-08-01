type NavbarProps = {
    activeSection: string;
    setActiveSection: (section: string) => void;
  };
  
  const navItems = ["Intro", "Logo", "Typography", "Color", "Visuals"];
  
  export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
    return (
      
        <div className="flex justify-center items-center h-full">
          <div className="flex items-center space-x-4 border border-gray-500 bg-black/30 backdrop-blur-md mb-64 rounded-full px-4 py-2">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item)}
                className={`px-4 py-1 rounded-full text-sm transition-all ${
                  activeSection === item
                    ? "bg-white text-black font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      
    );
  }
  