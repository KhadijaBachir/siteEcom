import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Exercise } from '../../types/exercise';

interface ExerciseCardProps {
  exercise: Exercise;
  index: number;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-sm overflow-hidden"
    >
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center">
            <div className="bg-teal-100 text-teal-600 font-semibold rounded-full w-8 h-8 flex items-center justify-center mr-3">
              {index + 1}
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800">{exercise.name}</h3>
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-3">{exercise.sets} séries × {exercise.reps} répétitions</span>
                <span>{exercise.restTime}s repos</span>
              </div>
            </div>
          </div>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-400 hover:text-teal-600 transition-colors"
            aria-expanded={isExpanded}
            aria-label={isExpanded ? "Réduire les détails" : "Voir les détails"}
          >
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
        
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4">
              <img 
                src={exercise.thumbnail} 
                alt={exercise.name} 
                className="w-full h-full object-cover"
              />
              <Link 
                to={`/exercises/${exercise.id}`} 
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition-all"
              >
                <PlayCircle size={48} className="text-white" />
              </Link>
            </div>
            
            <p className="text-gray-600 mb-4">{exercise.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {exercise.targetMuscles.map((muscle, i) => (
                <span 
                  key={i}
                  className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-sm"
                >
                  {muscle}
                </span>
              ))}
            </div>
            
            <div className="flex justify-between">
              <div className="text-sm text-gray-500">
                <span className="font-medium">Équipement: </span>
                {exercise.equipment}
              </div>
              <Link 
                to={`/exercises/${exercise.id}`}
                className="flex items-center text-teal-600 hover:text-teal-700 font-medium"
              >
                <Info size={16} className="mr-1" />
                Détails complets
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ExerciseCard;