import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Dumbbell, Zap, PlayCircle, Filter, X, CheckCircle2, RotateCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useWorkoutStore } from '../store/workoutStore';
import ExerciseCard from '../components/exercises/ExerciseCard';

const WorkoutGenerator = () => {
  const { generateWorkout, currentWorkout, isLoading, saveWorkout } = useWorkoutStore();
  const [filters, setFilters] = useState({
    level: 'beginner',
    duration: 20,
    equipment: 'none',
    focusArea: 'full_body',
    exerciseCount: 4
  });
  const [showFilters, setShowFilters] = useState(true);
  const [workoutName, setWorkoutName] = useState('');
  const [showSaveInput, setShowSaveInput] = useState(false);

  const handleFilterChange = (key: string, value: string | number) => {
    setFilters({ ...filters, [key]: value });
  };

  const handleGenerateWorkout = () => {
    generateWorkout(filters);
    setShowFilters(false);
  };

  const handleSaveWorkout = () => {
    if (showSaveInput) {
      if (workoutName.trim()) {
        saveWorkout(workoutName);
        setWorkoutName('');
        setShowSaveInput(false);
      }
    } else {
      setShowSaveInput(true);
    }
  };

  return (
    <div className="pt-20 pb-16 min-h-screen bg-gradient-to-br from-violet-50 via-pink-50 to-violet-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Votre Générateur d'Entraînement Personnalisé
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Créez une routine d'entraînement personnalisée en fonction de vos préférences, de votre niveau de fitness et de l'équipement disponible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`lg:col-span-1 bg-white rounded-xl shadow-sm p-6 ${
              !showFilters && 'lg:block hidden'
            }`}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Personnalisez Votre Entraînement</h2>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Niveau de Fitness
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { key: 'beginner', label: 'Débutant' },
                    { key: 'intermediate', label: 'Intermédiaire' },
                    { key: 'advanced', label: 'Avancé' }
                  ].map(({ key, label }) => (
                    <button
                      key={key}
                      className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                        filters.level === key
                          ? 'bg-violet-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => handleFilterChange('level', key)}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre d'exercices
                </label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={filters.exerciseCount}
                  onChange={(e) => handleFilterChange('exerciseCount', parseInt(e.target.value))}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-violet-500 focus:border-violet-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <div className="flex items-center justify-between">
                    <span>Durée de l'Entraînement</span>
                    <span className="text-violet-600 font-semibold">{filters.duration} minutes</span>
                  </div>
                </label>
                <input
                  type="range"
                  min="10"
                  max="60"
                  step="5"
                  value={filters.duration}
                  onChange={(e) => handleFilterChange('duration', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-violet-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>10 min</span>
                  <span>60 min</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Équipement Disponible
                </label>
                <select
                  value={filters.equipment}
                  onChange={(e) => handleFilterChange('equipment', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-violet-500 focus:border-violet-500"
                >
                  <option value="none">Aucun équipement</option>
                  <option value="minimal">Minimal (Bandes de résistance, Chaise)</option>
                  <option value="basic">Basique (Haltères, Tapis)</option>
                  <option value="full">Salle de sport à domicile</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Groupe Musculaire Ciblé
                </label>
                <select
                  value={filters.focusArea}
                  onChange={(e) => handleFilterChange('focusArea', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-violet-500 focus:border-violet-500"
                >
                  <option value="full_body">Corps Entier</option>
                  <option value="upper_body">Haut du Corps</option>
                  <option value="lower_body">Bas du Corps</option>
                  <option value="core">Abdominaux</option>
                  <option value="cardio">Cardio</option>
                </select>
              </div>

              <button
                onClick={handleGenerateWorkout}
                className="w-full bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <RotateCw size={20} className="mr-2 animate-spin" />
                    Génération en cours...
                  </>
                ) : (
                  <>
                    <Zap size={20} className="mr-2" />
                    Générer un Entraînement
                  </>
                )}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`lg:col-span-2 ${showFilters && currentWorkout.length > 0 ? 'lg:block hidden' : ''}`}
          >
            {!showFilters && currentWorkout.length === 0 && isLoading && (
              <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                <RotateCw size={40} className="mx-auto text-violet-500 animate-spin mb-4" />
                <h3 className="text-xl font-semibold mb-2">Génération de Votre Entraînement</h3>
                <p className="text-gray-600">
                  Nous créons un entraînement personnalisé juste pour vous. Cela ne prendra qu'un instant...
                </p>
              </div>
            )}

            {!showFilters && currentWorkout.length === 0 && !isLoading && (
              <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                <div className="mb-4 text-violet-500">
                  <Dumbbell size={64} className="mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Prêt à commencer ?</h3>
                <p className="text-gray-600 mb-6">
                  Utilisez les filtres pour créer votre plan d'entraînement personnalisé.
                </p>
                <button
                  onClick={() => setShowFilters(true)}
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-violet-600 hover:bg-violet-700"
                >
                  <Filter size={18} className="mr-2" />
                  Afficher les filtres
                </button>
              </div>
            )}

            {currentWorkout.length > 0 && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Votre Plan d'Entraînement</h2>
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden inline-flex items-center text-violet-600 hover:text-violet-700"
                  >
                    <Filter size={18} className="mr-1" />
                    <span>Filtres</span>
                  </button>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center">
                      <Clock size={20} className="text-violet-500 mr-2" />
                      <span>{filters.duration} minutes</span>
                    </div>
                    <div className="flex items-center">
                      <Dumbbell size={20} className="text-violet-500 mr-2" />
                      <span>
                        {filters.equipment === 'none' && "Aucun équipement"}
                        {filters.equipment === 'minimal' && "Équipement minimal"}
                        {filters.equipment === 'basic' && "Équipement basique"}
                        {filters.equipment === 'full' && "Équipement complet"}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Zap size={20} className="text-violet-500 mr-2" />
                      <span>
                        {filters.level === 'beginner' && "Niveau débutant"}
                        {filters.level === 'intermediate' && "Niveau intermédiaire"}
                        {filters.level === 'advanced' && "Niveau avancé"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {currentWorkout.map((exercise, index) => (
                    <ExerciseCard key={index} exercise={exercise} index={index} />
                  ))}
                </div>

                {showSaveInput ? (
                  <div className="mt-8 flex items-center gap-4">
                    <input
                      type="text"
                      value={workoutName}
                      onChange={(e) => setWorkoutName(e.target.value)}
                      placeholder="Nom de l'entraînement"
                      className="flex-grow p-2 border border-gray-300 rounded-lg focus:ring-violet-500 focus:border-violet-500"
                    />
                    <button
                      onClick={handleSaveWorkout}
                      className="bg-gray-700 hover:bg-gray-800 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center whitespace-nowrap"
                    >
                      <CheckCircle2 size={20} className="mr-2" />
                      Sauvegarder
                    </button>
                  </div>
                ) : (
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={handleGenerateWorkout}
                      className="bg-violet-600 hover:bg-violet-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
                    >
                      <RotateCw size={20} className="mr-2" />
                      Générer un Nouvel Entraînement
                    </button>
                    <button
                      onClick={handleSaveWorkout}
                      className="bg-gray-700 hover:bg-gray-800 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
                    >
                      <CheckCircle2 size={20} className="mr-2" />
                      Sauvegarder cet Entraînement
                    </button>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutGenerator;