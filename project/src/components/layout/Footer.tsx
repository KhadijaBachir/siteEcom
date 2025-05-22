import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Heart, Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-teal-800 text-teal-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Dumbbell size={28} />
              <span className="font-bold text-xl text-white">FitMaison</span>
            </Link>
            <p className="mb-4">
              Votre guide personnel pour rester en forme et en bonne santé depuis le confort de votre domicile.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-teal-200 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-teal-200 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-teal-200 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/generator" className="hover:text-white transition-colors">Générateur d'Entraînement</Link></li>
              <li><Link to="/exercises" className="hover:text-white transition-colors">Bibliothèque d'Exercices</Link></li>
              <li><Link to="/nutrition" className="hover:text-white transition-colors">Guide Nutritionnel</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-4">Ressources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Blog Fitness</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tutoriels d'Exercices</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Conseils Nutritionnels</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Planificateur de Repas</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-4">Contact</h3>
            <div className="flex items-center space-x-2 mb-2">
              <Mail size={16} />
              <span>contact@fitmaison.fr</span>
            </div>
            <div className="mt-4">
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Rejoignez notre newsletter" 
                  className="px-4 py-2 rounded-l-md focus:outline-none text-gray-800 w-full"
                />
                <button type="submit" className="bg-teal-600 hover:bg-teal-500 px-4 py-2 rounded-r-md transition-colors">
                  Rejoindre
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-teal-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} FitMaison. Tous droits réservés.</p>
          <p className="flex items-center mt-4 md:mt-0">
            Créé avec <Heart size={16} className="mx-1 text-red-400" /> pour un mode de vie plus sain
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;