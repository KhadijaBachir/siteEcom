import { create } from 'zustand';
import { Exercise } from '../types/exercise';
import { useExerciseStore } from './exerciseStore';

interface WorkoutFilters {
  level: string;
  duration: number;
  equipment: string;
  focusArea: string;
  exerciseCount?: number;
}

interface WorkoutState {
  currentWorkout: Exercise[];
  savedWorkouts: {
    id: string;
    name: string;
    date: string;
    exercises: Exercise[];
  }[];
  isLoading: boolean;
  generateWorkout: (filters: WorkoutFilters) => void;
  saveWorkout: (name: string) => void;
}

export const useWorkoutStore = create<WorkoutState>((set) => ({
  currentWorkout: [],
  savedWorkouts: [],
  isLoading: false,
  
  generateWorkout: (filters: WorkoutFilters) => {
    set({ isLoading: true });
    
    setTimeout(() => {
      const allExercises = useExerciseStore.getState().exercises;
      
      let filteredExercises = allExercises.filter(exercise => {
        if (filters.level === 'beginner' && exercise.difficulty === 'débutant') return true;
        if (filters.level === 'intermediate' && (exercise.difficulty === 'débutant' || exercise.difficulty === 'intermédiaire')) return true;
        if (filters.level === 'advanced') return true;
        return false;
      });
      
      filteredExercises = filteredExercises.filter(exercise => {
        if (filters.equipment === 'none' && exercise.equipment === 'Aucun') return true;
        if (filters.equipment === 'minimal' && (exercise.equipment === 'Aucun' || exercise.equipment === 'Bandes de résistance' || exercise.equipment === 'Chaise')) return true;
        if (filters.equipment === 'basic' && (exercise.equipment === 'Aucun' || exercise.equipment === 'Bandes de résistance' || exercise.equipment === 'Chaise' || exercise.equipment === 'Haltères' || exercise.equipment === 'Tapis')) return true;
        if (filters.equipment === 'full') return true;
        return false;
      });
      
      if (filters.focusArea !== 'full_body') {
        filteredExercises = filteredExercises.filter(exercise => {
          if (filters.focusArea === 'upper_body') 
            return exercise.targetMuscles.some(muscle => ['Pectoraux', 'Triceps', 'Biceps', 'Épaules', 'Dos'].includes(muscle));
          if (filters.focusArea === 'lower_body') 
            return exercise.targetMuscles.some(muscle => ['Quadriceps', 'Ischio-jambiers', 'Fessiers', 'Mollets'].includes(muscle));
          if (filters.focusArea === 'core') 
            return exercise.targetMuscles.some(muscle => ['Abdominaux', 'Obliques', 'Lombaires'].includes(muscle));
          if (filters.focusArea === 'cardio') 
            return exercise.targetMuscles.includes('Système cardiovasculaire');
          return false;
        });
      }
      
      const shuffled = [...filteredExercises].sort(() => 0.5 - Math.random());
      
      const numExercises = filters.exerciseCount || Math.floor(filters.duration / 5);
      
      const selectedExercises = shuffled.slice(0, Math.min(numExercises, shuffled.length));
      
      const workoutExercises = selectedExercises.map(exercise => {
        let adjustedExercise = { ...exercise };
        
        if (filters.level === 'beginner') {
          adjustedExercise.sets = Math.max(2, exercise.sets - 1);
          adjustedExercise.reps = Math.max(8, exercise.reps - 2);
        } else if (filters.level === 'advanced') {
          adjustedExercise.sets = exercise.sets + 1;
          adjustedExercise.reps = exercise.reps + 2;
        }
        
        return adjustedExercise;
      });
      
      set({ currentWorkout: workoutExercises, isLoading: false });
    }, 1500);
  },
  
  saveWorkout: (name) => {
    set(state => ({
      savedWorkouts: [
        ...state.savedWorkouts,
        {
          id: Date.now().toString(),
          name,
          date: new Date().toISOString(),
          exercises: state.currentWorkout
        }
      ]
    }));
  }
}));