import { create } from 'zustand';
import { Exercise } from '../types/exercise';

interface ExerciseFilters {
  equipment: string;
  muscleGroup: string;
  difficulty: string;
}

interface ExerciseState {
  exercises: Exercise[];
  isLoading: boolean;
  fetchExercises: () => Promise<void>;
  filterExercises: (searchTerm: string, filters: ExerciseFilters) => Exercise[];
}

export const useExerciseStore = create<ExerciseState>((set, get) => ({
  exercises: [
    {
      id: "squat-standard",
      name: "Squat Standard",
      description: "Le squat est l'un des exercices les plus complets pour travailler le bas du corps, ciblant principalement les quadriceps, les ischio-jambiers et les fessiers.",
      thumbnail: "https://images.pexels.com/photos/4803935/pexels-photo-4803935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      videoUrl: "https://www.youtube.com/watch?v=YaXPRqUwItQ",
      difficulty: "débutant",
      equipment: "Aucun",
      targetMuscles: ["Quadriceps", "Ischio-jambiers", "Fessiers", "Abdominaux"],
      sets: 3,
      reps: 12,
      restTime: 60,
      instructions: [
        "Tenez-vous debout, pieds écartés à la largeur des épaules ou légèrement plus large.",
        "Gardez le dos droit et la poitrine haute.",
        "Fléchissez les genoux et les hanches comme si vous alliez vous asseoir sur une chaise.",
        "Descendez jusqu'à ce que vos cuisses soient parallèles au sol, ou aussi bas que possible avec une bonne forme.",
        "Poussez à travers vos talons pour revenir à la position de départ."
      ],
      tips: [
        "Gardez vos genoux alignés avec vos orteils, sans qu'ils ne s'effondrent vers l'intérieur.",
        "Maintenez votre colonne vertébrale neutre - ne courbez pas le bas du dos.",
        "Engagez vos abdominaux tout au long du mouvement pour maintenir la stabilité."
      ],
      alternatives: [
        { name: "Squat Sumo", id: "squat-sumo" },
        { name: "Squat Bulgare", id: "bulgarian-split-squat" }
      ]
    },
    {
      id: "pompes-standard",
      name: "Pompes Standard",
      description: "Les pompes sont un exercice classique de musculation qui cible principalement les pectoraux, les triceps et les deltoïdes antérieurs.",
      thumbnail: "https://images.pexels.com/photos/4162487/pexels-photo-4162487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      videoUrl: "https://www.youtube.com/watch?v=IODxDxX7oi4",
      difficulty: "intermédiaire",
      equipment: "Aucun",
      targetMuscles: ["Pectoraux", "Triceps", "Épaules", "Core"],
      sets: 3,
      reps: 10,
      restTime: 60,
      instructions: [
        "Placez vos mains légèrement plus écartées que la largeur des épaules.",
        "Étendez vos jambes derrière vous, en vous appuyant sur les orteils.",
        "Votre corps doit former une ligne droite de la tête aux talons.",
        "Fléchissez les coudes pour abaisser votre corps vers le sol.",
        "Poussez avec vos bras pour revenir à la position de départ."
      ],
      tips: [
        "Gardez vos coudes à un angle de 45° par rapport à votre corps pendant la descente.",
        "Ne laissez pas vos hanches s'affaisser ou se lever - gardez votre corps en ligne droite.",
        "Respirez: inspirez en descendant, expirez en remontant."
      ],
      alternatives: [
        { name: "Pompes sur les genoux", id: "knee-pushups" },
        { name: "Pompes inclinées", id: "incline-pushups" }
      ]
    },
    {
      id: "planche",
      name: "Planche",
      description: "La planche est un exercice isométrique qui renforce l'ensemble des muscles du core, contribuant à la stabilité et à une meilleure posture.",
      thumbnail: "https://images.pexels.com/photos/6456300/pexels-photo-6456300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      videoUrl: "https://www.youtube.com/watch?v=ASdvN_XEl_c",
      difficulty: "débutant",
      equipment: "Aucun",
      targetMuscles: ["Abdominaux", "Obliques", "Lombaires", "Épaules"],
      sets: 3,
      reps: 1,
      restTime: 45,
      instructions: [
        "Placez vos avant-bras au sol, coudes sous les épaules.",
        "Étendez vos jambes derrière vous, en vous appuyant sur les orteils.",
        "Engagez vos abdominaux et vos fessiers pour maintenir votre corps en ligne droite.",
        "Regardez légèrement vers l'avant pour garder le cou dans une position neutre.",
        "Maintenez cette position pendant la durée recommandée."
      ],
      tips: [
        "Respirez normalement pendant l'exercice - ne retenez pas votre souffle.",
        "Ne laissez pas vos hanches s'affaisser ou se lever.",
        "Pour augmenter la difficulté, augmentez progressivement le temps de maintien."
      ],
      alternatives: [
        { name: "Planche latérale", id: "side-plank" },
        { name: "Planche avec toucher d'épaule", id: "plank-shoulder-tap" }
      ]
    },
    {
      id: "burpees",
      name: "Burpees",
      description: "Les burpees sont un exercice complet qui sollicite l'ensemble du corps et augmente rapidement la fréquence cardiaque, idéal pour brûler des calories.",
      thumbnail: "https://images.pexels.com/photos/6456301/pexels-photo-6456301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      difficulty: "avancé",
      equipment: "Aucun",
      targetMuscles: ["Quadriceps", "Pectoraux", "Épaules", "Core", "Système cardiovasculaire"],
      sets: 3,
      reps: 8,
      restTime: 90,
      instructions: [
        "Tenez-vous debout, pieds écartés à la largeur des épaules.",
        "Accroupissez-vous et placez vos mains au sol devant vous.",
        "Sautez avec vos pieds en arrière pour vous retrouver en position de planche.",
        "Effectuez une pompe (optionnel pour les débutants).",
        "Ramenez vos pieds près de vos mains d'un saut.",
        "Sautez vers le haut, bras tendus au-dessus de la tête.",
        "Atterrissez doucement et enchaînez avec la répétition suivante."
      ],
      tips: [
        "Adaptez l'exercice à votre niveau en supprimant la pompe si nécessaire.",
        "Maintenez un rythme régulier tout en gardant une bonne forme.",
        "Atterrissez doucement après chaque saut pour protéger vos articulations."
      ],
      alternatives: [
        { name: "Burpees demi", id: "half-burpees" },
        { name: "Mountain climbers", id: "mountain-climbers" }
      ]
    }
  ],
  isLoading: false,
  
  fetchExercises: async () => {
    set({ isLoading: true });
    // Simulation d'un appel API
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Dans une version réelle, on ferait un appel API ici
    set({ isLoading: false });
  },
  
  filterExercises: (searchTerm, filters) => {
    const { exercises } = get();
    return exercises.filter(exercise => {
      // Filtre par terme de recherche
      const matchesSearch = !searchTerm || 
        exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        exercise.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exercise.targetMuscles.some(muscle => muscle.toLowerCase().includes(searchTerm.toLowerCase()));
      
      // Filtre par équipement
      const matchesEquipment = filters.equipment === 'all' || 
        (filters.equipment === 'none' && exercise.equipment === 'Aucun') ||
        (filters.equipment === 'minimal' && (exercise.equipment === 'Bandes de résistance' || exercise.equipment === 'Chaise')) ||
        (filters.equipment === 'basic' && (exercise.equipment === 'Haltères' || exercise.equipment === 'Tapis')) ||
        (filters.equipment === 'full' && exercise.equipment !== 'Aucun');
      
      // Filtre par groupe musculaire
      const matchesMuscleGroup = filters.muscleGroup === 'all' ||
        exercise.targetMuscles.some(muscle => {
          if (filters.muscleGroup === 'upper_body') 
            return ['Pectoraux', 'Triceps', 'Biceps', 'Épaules', 'Dos'].includes(muscle);
          if (filters.muscleGroup === 'lower_body') 
            return ['Quadriceps', 'Ischio-jambiers', 'Fessiers', 'Mollets'].includes(muscle);
          if (filters.muscleGroup === 'core') 
            return ['Abdominaux', 'Obliques', 'Lombaires'].includes(muscle);
          if (filters.muscleGroup === 'cardio') 
            return muscle === 'Système cardiovasculaire';
          return filters.muscleGroup.toLowerCase() === muscle.toLowerCase();
        });
      
      // Filtre par difficulté
      const matchesDifficulty = filters.difficulty === 'all' || 
        exercise.difficulty === filters.difficulty;
      
      return matchesSearch && matchesEquipment && matchesMuscleGroup && matchesDifficulty;
    });
  }
}));