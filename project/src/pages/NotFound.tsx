import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Dumbbell, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="pt-20 pb-16 min-h-screen flex items-center">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-teal-600 mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            Page non trouvée
          </h2>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <Home size={20} className="mr-2" />
              Retourner à l'accueil
            </Link>
            <Link
              to="/generator"
              className="inline-flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <Dumbbell size={20} className="mr-2" />
              Créer un entraînement
            </Link>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16"
        >
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center text-teal-600 hover:text-teal-700"
          >
            <ArrowLeft size={16} className="mr-1" />
            Retourner à la page précédente
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;