export interface Exercise {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  difficulty: 'débutant' | 'intermédiaire' | 'avancé';
  equipment: string;
  targetMuscles: string[];
  sets: number;
  reps: number;
  restTime: number;
  instructions: string[];
  tips: string[];
  alternatives: {
    name: string;
    id: string;
  }[];
}