import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Install lucide-react or use icons of your choice

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b bg-black/50">
      <div className="container mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="devzennn.png" alt="DevZen" className="h-14 w-auto object-contain" />
        </Link>

        {/* Desktop Links - Hidden on Mobile */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm text-white hover:text-blue-500">Home</Link>
          <Link to="/about" className="text-sm text-white hover:text-blue-500">About Us</Link>
          <Link to="/services" className="text-sm text-white hover:text-blue-500">Services</Link>
          <Link to="/careers" className="text-sm text-white hover:text-blue-500">Careers</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/contact" className="hidden sm:block px-4 py-2 rounded-lg text-sm font-medium text-white bg-primary">
            Contact
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/90 border-b flex flex-col p-4 space-y-4">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-white">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-white">About Us</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="text-white">Services</Link>
          <Link to="/careers" onClick={() => setIsOpen(false)} className="text-white">Careers</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="text-blue-400">Contact</Link>
        </div>
      )}
    </nav>
  );
};