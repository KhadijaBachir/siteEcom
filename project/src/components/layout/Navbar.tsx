import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dumbbell, Utensils, Home, Menu, X, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/', icon: <Home size={20} /> },
    { name: 'Générateur', path: '/generator', icon: <Dumbbell size={20} /> },
    { name: 'Exercices', path: '/exercises', icon: <BookOpen size={20} /> },
    { name: 'Nutrition', path: '/nutrition', icon: <Utensils size={20} /> },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled ? 'bg-violet-600/95 shadow-lg py-2' : 'bg-violet-600/80 py-4'
      }`}
    >
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <motion.div 
            initial={{ rotate: 0 }}
            animate={{ rotate: isScrolled ? 360 : 0 }}
            transition={{ duration: 0.5 }}
            className="text-white"
          >
            <Dumbbell size={28} />
          </motion.div>
          <span className="text-white font-bold text-xl">FitMaison</span>
        </Link>

        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center space-x-1 text-white hover:text-pink-200 transition-colors ${
                location.pathname === link.path ? 'font-semibold border-b-2 border-pink-400 pb-1' : ''
              }`}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-violet-700 text-white w-full"
        >
          <div className="container mx-auto px-4 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-3 py-3 px-4 ${
                  location.pathname === link.path
                    ? 'bg-violet-800 font-semibold rounded-lg'
                    : ''
                }`}
                onClick={closeMenu}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;