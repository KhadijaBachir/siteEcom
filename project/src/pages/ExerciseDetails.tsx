import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play, ChevronRight, Info, Dumbbell, Clock, BarChart } from 'lucide-react';
import ReactPlayer from 'react-player/youtube';
import { motion } from 'framer-motion';
import { useExerciseStore } from '../store/exerciseStore';
import { Exercise } from '../types/exercise';

const ExerciseDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { exercises } = useExerciseStore();
  const [exercise, setExercise] = useState<Exercise | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    if (id) {
      const foundExercise = exercises.find(ex => ex.id === id);
      if (foundExercise) {
        setExercise(foundExercise);
      }
    }
  }, [id, exercises]);

  if (!exercise) {
    return (
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Chargement de l'exercice...</p>
          </div>
        </div>
      </div>
    );
  }

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Link to="/exercises" className="inline-flex items-center text-teal-600 hover:text-teal-700 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Retour à la bibliothèque
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-teal-600 to-teal-500 p-6 text-white">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{exercise.name}</h1>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                <BarChart size={16} className="mr-1" />
                {exercise.difficulty.charAt(0).toUpperCase() + exercise.difficulty.slice(1)}
              </span>
              <span className="inline-flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                <Dumbbell size={16} className="mr-1" />
                {exercise.equipment}
              </span>
              <span className="inline-flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                <Clock size={16} className="mr-1" />
                {exercise.sets} séries × {exercise.reps} répétitions
              </span>
            </div>
          </div>

          {/* Video Section */}
          <div className="relative aspect-video">
            {!isVideoPlaying ? (
              <div className="relative w-full h-full">
                <img 
                  src={exercise.thumbnail} 
                  alt={exercise.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <button
                    onClick={handleVideoPlay}
                    className="bg-teal-600 hover:bg-teal-700 text-white p-4 rounded-full transition-colors"
                    aria-label="Lancer la vidéo"
                  >
                    <Play size={28} />
                  </button>
                </div>
              </div>
            ) : (
              <ReactPlayer 
                url={exercise.videoUrl} 
                width="100%" 
                height="100%" 
                controls
                playing 
              />
            )}
          </div>

          {/* Exercise Information */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <Info size={20} className="mr-2 text-teal-500" />
                    Description
                  </h2>
                  <p className="text-gray-700 leading-relaxed">{exercise.description}</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <ChevronRight size={20} className="mr-2 text-teal-500" />
                    Instructions
                  </h2>
                  <div className="space-y-3">
                    {exercise.instructions.map((instruction, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex"
                      >
                        <div className="bg-teal-100 text-teal-600 font-semibold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <p className="text-gray-700">{instruction}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <ChevronRight size={20} className="mr-2 text-teal-500" />
                    Conseils
                  </h2>
                  <ul className="space-y-2">
                    {exercise.tips.map((tip, index) => (
                      <li key={index} className="text-gray-700 flex items-start">
                        <span className="text-teal-500 mr-2">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h2 className="text-xl font-semibold mb-4">Muscles ciblés</h2>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {exercise.targetMuscles.map((muscle, i) => (
                      <span 
                        key={i}
                        className="bg-teal-100 text-teal-700 px-3 py-1 rounded-md text-sm"
                      >
                        {muscle}
                      </span>
                    ))}
                  </div>

                  {exercise.alternatives.length > 0 && (
                    <>
                      <h2 className="text-xl font-semibold mb-4">Exercices alternatifs</h2>
                      <div className="space-y-2">
                        {exercise.alternatives.map((alt, i) => (
                          <Link 
                            key={i}
                            to={`/exercises/${alt.id}`}
                            className="flex items-center bg-white p-3 rounded-lg hover:shadow-md transition-shadow"
                          >
                            <div className="bg-teal-100 text-teal-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                              <ChevronRight size={16} />
                            </div>
                            <span>{alt.name}</span>
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetails;