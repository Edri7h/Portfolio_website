import { useState } from 'react';
import { Menu, X, Home, FolderKanban, Cpu, Phone } from 'lucide-react';

const sections = [
  { id: 'home', label: 'Home', icon: <Home size={18} className="mr-2" /> },
  { id: 'projects', label: 'Projects', icon: <FolderKanban size={18} className="mr-2" /> },
  { id: 'tech', label: 'Tech', icon: <Cpu size={18} className="mr-2" /> },
  { id: 'contact', label: 'Contact', icon: <Phone size={18} className="mr-2" /> },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-gray-800 z-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <span className="text-xl font-semibold">Ehtesham.dev</span>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          {sections.map(({ id, label, icon }) => (
            <a
              key={id}
              href={`#${id}`}
              className="relative flex items-center text-gray-700 hover:text-black transition"
            >
              {icon}
              {label}
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gray-800 scale-x-0 hover:scale-x-100 transition-transform origin-left duration-300" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-4 py-6 px-4 bg-white border-t border-gray-100">
          {sections.map(({ id, label, icon }) => (
            <a
              key={id}
              href={`#${id}`}
              className="flex items-center text-gray-700 hover:text-black text-base font-medium transition"
              onClick={() => setIsOpen(false)}
            >
              {icon}
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
