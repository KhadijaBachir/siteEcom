import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, X, ChevronDown } from 'lucide-react';
import { useExerciseStore } from '../store/exerciseStore';
import ExerciseCard from '../components/exercises/ExerciseCard';

const ExerciseLibrary = () => {
  const { exercises, filterExercises, fetchExercises, isLoading } = useExerciseStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    equipment: 'all',
    muscleGroup: 'all',
    difficulty: 'all',
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    fetchExercises();
  }, [fetchExercises]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilters({ ...filters, [key]: value });
  };

  const filteredExercises = filterExercises(searchTerm, filters);

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Bibliothèque d'Exercices
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Parcourez notre collection complète d'exercices avec des démonstrations vidéo pour perfectionner votre forme.
          </p>
        </div>

        {/* Search and Filters Bar */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={20} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Rechercher des exercices..."
                value={searchTerm}
                onChange={handleSearch}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition-colors md:w-auto"
            >
              <Filter size={18} className="mr-2" />
              Filtres
              <ChevronDown size={18} className={`ml-2 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-200"
            >
              {/* Niveau de difficulté */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Niveau de Difficulté
                </label>
                <select
                  value={filters.difficulty}
                  onChange={(e) => handleFilterChange('difficulty', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                >
                  <option value="all">Tous les niveaux</option>
                  <option value="débutant">Débutant</option>
                  <option value="intermédiaire">Intermédiaire</option>
                  <option value="avancé">Avancé</option>
                </select>
              </div>

              {/* Équipement */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Équipement
                </label>
                <select
                  value={filters.equipment}
                  onChange={(e) => handleFilterChange('equipment', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                >
                  <option value="all">Tout équipement</option>
                  <option value="none">Aucun équipement</option>
                  <option value="minimal">Minimal</option>
                  <option value="basic">Basique</option>
                  <option value="full">Complet</option>
                </select>
              </div>

              {/* Groupe Musculaire */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Groupe Musculaire
                </label>
                <select
                  value={filters.muscleGroup}
                  onChange={(e) => handleFilterChange('muscleGroup', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                >
                  <option value="all">Tous les groupes</option>
                  <option value="upper_body">Haut du corps</option>
                  <option value="lower_body">Bas du corps</option>
                  <option value="core">Abdominaux</option>
                  <option value="cardio">Cardio</option>
                </select>
              </div>
            </motion.div>
          )}
        </div>

        {/* Exercise Results */}
        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Chargement des exercices...</p>
          </div>
        ) : filteredExercises.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredExercises.map((exercise, index) => (
              <ExerciseCard key={exercise.id} exercise={exercise} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl shadow-sm">
            <div className="text-gray-400 mb-4">
              <Search size={64} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Aucun exercice trouvé</h3>
            <p className="text-gray-600">
              Essayez d'ajuster vos filtres ou votre terme de recherche.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExerciseLibrary;