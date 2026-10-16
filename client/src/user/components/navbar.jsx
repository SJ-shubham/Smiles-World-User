import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
// ChevronDown is no longer needed
import { Home, Info, Palette, Heart, Mail, Menu, X, Users, BookOpen, Plane } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/logo.ico";

// --- NAVIGATION ARRAY UPDATED ---
const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Customize", href: "/customize", icon: Palette },
  // "Tours" dropdown replaced with two shorter, separate links
  { name: "Domestic", href: "/domestic-tours", icon: Plane },
  { name: "International", href: "/international-tours", icon: Plane },
  { name: "Women Travel", href: "/women", icon: Heart },
  // "Group Departure" has been removed from this list
  { name: "Blog", href: "/blog", icon: BookOpen },
  { name: "Contact", href: "/contact", icon: Mail },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-[100] bg-blue-900/30 backdrop-blur-md border-b border-blue-800/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
              <img src={logo} alt="Smiles World Logo" className="w-8 h-8" />
              <span className="text-2xl font-bold text-white">Smiles World</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => {
                // The complex dropdown logic has been removed
                const Icon = item.icon;
                const isActive = location.pathname === item.href || (item.href !== "/" && location.pathname.startsWith(item.href));

                // Special handling for About page is no longer needed, assuming standard Link behavior
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-white/20 text-black shadow-md"
                        : "text-white/90 hover:bg-white/15 hover:text-white"
                    }`}
                  >
                    <Icon size={16} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-white hover:bg-white/10"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="md:hidden pb-4 pt-2">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => {
              // The complex dropdown logic has been removed for mobile as well
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-full text-base font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "text-white/90 hover:bg-white/15 hover:text-white"
                  }`}
                >
                  <item.icon size={18} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </nav>
  );
}