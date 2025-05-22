import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Utensils, Salad, Apple, Clock, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

interface NutritionTip {
  id: string;
  title: string;
  description: string;
  category: string;
}

interface MealPlan {
  id: string;
  name: string;
  description: string;
  category: string;
  meals: {
    name: string;
    time: string;
    foods: string[];
    calories: number;
    image: string;
  }[];
}

const NutritionGuide = () => {
  const [activeTab, setActiveTab] = useState('conseils');
  const [expandedTipId, setExpandedTipId] = useState<string | null>(null);
  const [expandedMealPlanId, setExpandedMealPlanId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const toggleTip = (id: string) => {
    setExpandedTipId(expandedTipId === id ? null : id);
  };

  const toggleMealPlan = (id: string) => {
    setExpandedMealPlanId(expandedMealPlanId === id ? null : id);
  };

  const nutritionTips: NutritionTip[] = [
    {
      id: '1',
      title: 'Hydratation adéquate',
      description: 'Boire suffisamment d\'eau est essentiel pour maintenir les performances physiques et la santé globale. Visez 2 à 3 litres d\'eau par jour, et augmentez cette quantité lors de journées chaudes ou d\'entraînements intenses. L\'eau aide à réguler la température corporelle, lubrifier les articulations et transporter les nutriments dans tout l\'organisme.',
      category: 'général'
    },
    {
      id: '2',
      title: 'Protéines pour la récupération musculaire',
      description: 'Les protéines sont les éléments constitutifs de vos muscles. Consommez des protéines de qualité après l\'entraînement pour favoriser la récupération et la croissance musculaire. Les sources recommandées incluent les œufs, le poulet, le poisson, les légumineuses, le tofu et les produits laitiers. Visez 1,6 à 2,2g de protéines par kg de poids corporel pour un entraînement de force optimal.',
      category: 'protéines'
    },
    {
      id: '3',
      title: 'L\'importance des glucides complexes',
      description: 'Les glucides complexes fournissent une énergie durable pour vos séances d\'entraînement. Privilégiez les grains entiers, les patates douces, le riz brun et l\'avoine plutôt que les sucres raffinés. Ces aliments à index glycémique bas fournissent une énergie constante et évitent les pics d\'insuline qui peuvent causer une fatigue prématurée pendant l\'exercice.',
      category: 'glucides'
    },
    {
      id: '4',
      title: 'Graisses saines pour l\'énergie',
      description: 'Les graisses saines sont essentielles pour la production d\'hormones, l\'absorption des vitamines et fournissent de l\'énergie. Intégrez des sources comme l\'avocat, les noix, les graines, l\'huile d\'olive et les poissons gras dans votre alimentation. Les acides gras oméga-3 présents dans les poissons gras peuvent également aider à réduire l\'inflammation post-entraînement.',
      category: 'lipides'
    },
    {
      id: '5',
      title: 'Importance des micronutriments',
      description: 'Les vitamines et minéraux jouent un rôle crucial dans la récupération et les performances. Consommez une variété de fruits et légumes colorés pour obtenir un large spectre de micronutriments. Les aliments riches en antioxydants aident à combattre le stress oxydatif causé par l\'exercice intense, tandis que le magnésium et le potassium sont essentiels pour la fonction musculaire et nerveuse.',
      category: 'micronutriments'
    },
    {
      id: '6',
      title: 'Nutrition pré-entraînement',
      description: 'Mangez un repas équilibré contenant des protéines et des glucides complexes 2-3 heures avant l\'exercice. Si vous vous entraînez tôt le matin, optez pour une collation légère comme une banane ou un yaourt 30 minutes avant. Les glucides avant l\'entraînement aident à maintenir la glycémie et fournissent l\'énergie nécessaire pour performer.',
      category: 'timing'
    },
    {
      id: '7',
      title: 'Nutrition post-entraînement',
      description: 'Consommez une combinaison de protéines et de glucides dans les 45 minutes suivant votre séance. Cela aide à reconstituer le glycogène musculaire et favorise la synthèse protéique pour la réparation musculaire. Un rapport protéines/glucides d\'environ 1:3 est idéal pour la plupart des entraînements (ex: 20g de protéines et 60g de glucides).',
      category: 'timing'
    },
    {
      id: '8',
      title: 'Planification des repas',
      description: 'Préparer vos repas à l\'avance vous aide à maintenir une alimentation équilibrée même avec un emploi du temps chargé. Consacrez quelques heures chaque semaine à la préparation de repas nutritifs. Cela réduit également les risques de recourir à la malbouffe lorsque vous êtes pressé ou fatigué après un entraînement.',
      category: 'général'
    }
  ];

  const mealPlans: MealPlan[] = [
    {
      id: '1',
      name: 'Plan équilibré pour perte de poids',
      description: 'Ce plan vous aide à perdre du poids sainement tout en maintenant l\'énergie pour vos entraînements.',
      category: 'perte_de_poids',
      meals: [
        {
          name: 'Petit déjeuner',
          time: '7h00',
          foods: ['Omelette aux épinards et champignons (2 œufs)', 'Une tranche de pain complet', '1/2 avocat', 'Thé vert'],
          calories: 420,
          image: 'https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          name: 'Collation',
          time: '10h00',
          foods: ['Yaourt grec nature', 'Une poignée de baies', '5 amandes'],
          calories: 180,
          image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          name: 'Déjeuner',
          time: '13h00',
          foods: ['Salade de quinoa avec poulet grillé (120g)', 'Légumes variés', 'Vinaigrette à l\'huile d\'olive et citron'],
          calories: 450,
          image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          name: 'Collation',
          time: '16h00',
          foods: ['Une pomme', 'Une cuillère à soupe de beurre d\'amande'],
          calories: 200,
          image: 'https://images.pexels.com/photos/2487443/pexels-photo-2487443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          name: 'Dîner',
          time: '19h00',
          foods: ['Saumon grillé (140g)', 'Légumes vapeur', 'Patate douce rôtie (petit morceau)'],
          calories: 420,
          image: 'https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
      ]
    },
    {
      id: '2',
      name: 'Plan pour prise de masse musculaire',
      description: 'Ce plan est conçu pour favoriser la croissance musculaire avec un surplus calorique contrôlé.',
      category: 'prise_de_masse',
      meals: [
        {
          name: 'Petit déjeuner',
          time: '7h00',
          foods: ['Flocons d\'avoine (80g) avec lait', 'Une banane', '2 œufs entiers + 2 blancs d\'œufs', 'Beurre d\'amande (1 cuillère à soupe)'],
          calories: 650,
          image: 'https://images.pexels.com/photos/4079520/pexels-photo-4079520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          name: 'Collation',
          time: '10h00',
          foods: ['Smoothie protéiné (lait, banane, protéine en poudre, flocons d\'avoine)'],
          calories: 400,
          image: 'https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          name: 'Déjeuner',
          time: '13h00',
          foods: ['Riz brun (100g cuit)', 'Poulet grillé (180g)', 'Légumes sautés', 'Huile d\'olive (1 cuillère à soupe)'],
          calories: 650,
          image: 'https://images.pexels.com/photos/3296683/pexels-photo-3296683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          name: 'Collation',
          time: '16h00',
          foods: ['Yaourt grec', 'Granola (30g)', 'Miel (1 cuillère à café)', 'Une poignée de myrtilles'],
          calories: 350,
          image: 'https://images.pexels.com/photos/128865/pexels-photo-128865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          name: 'Dîner',
          time: '19h00',
          foods: ['Patates douces (150g)', 'Steak de bœuf maigre (180g)', 'Brocoli et carottes', 'Avocat (1/2)'],
          calories: 700,
          image: 'https://images.pexels.com/photos/10922608/pexels-photo-10922608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
      ]
    },
    {
      id: '3',
      name: 'Plan végétarien équilibré',
      description: 'Un plan alimentaire complet pour les végétariens qui souhaitent maintenir un régime équilibré tout en s\'entraînant.',
      category: 'végétarien',
      meals: [
        {
          name: 'Petit déjeuner',
          time: '7h00',
          foods: ['Bowl de chia (3 cuillères à soupe de graines + lait végétal)', 'Muesli sans sucre ajouté (30g)', 'Fruits frais'],
          calories: 450,
          image: 'https://images.pexels.com/photos/16145774/pexels-photo-16145774/free-photo-of-nourriture-petit-dejeuner-diner-repas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          name: 'Collation',
          time: '10h00',
          foods: ['Houmous (2 cuillères à soupe)', 'Bâtonnets de carottes et concombre', '10 amandes'],
          calories: 200,
          image: 'https://images.pexels.com/photos/1618955/pexels-photo-1618955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          name: 'Déjeuner',
          time: '13h00',
          foods: ['Salade de lentilles aux légumes rôtis', 'Tofu grillé (100g)', 'Vinaigrette à l\'huile d\'olive et citron'],
          calories: 500,
          image: 'https://images.pexels.com/photos/247685/pexels-photo-247685.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          name: 'Collation',
          time: '16h00',
          foods: ['Smoothie à la spiruline (banane, épinards, spiruline, lait d\'amande)'],
          calories: 250,
          image: 'https://images.pexels.com/photos/1332183/pexels-photo-1332183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          name: 'Dîner',
          time: '19h00',
          foods: ['Curry de pois chiches et légumes', 'Riz basmati complet (60g cuit)', 'Yaourt de coco'],
          calories: 550,
          image: 'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
      ]
    }
  ];

  const filteredTips = selectedCategory === 'all' 
    ? nutritionTips 
    : nutritionTips.filter(tip => tip.category === selectedCategory);

  const filteredMealPlans = selectedCategory === 'all'
    ? mealPlans
    : mealPlans.filter(plan => plan.category === selectedCategory);

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Guide Nutritionnel
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez des conseils nutritionnels adaptés à vos entraînements et des plans de repas équilibrés pour optimiser vos performances.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            onClick={() => setActiveTab('conseils')}
            className={`px-4 py-2 font-medium text-sm md:text-base border-b-2 transition-colors ${
              activeTab === 'conseils' 
                ? 'border-teal-500 text-teal-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Conseils Nutritionnels
          </button>
          <button
            onClick={() => setActiveTab('plans')}
            className={`px-4 py-2 font-medium text-sm md:text-base border-b-2 transition-colors ${
              activeTab === 'plans' 
                ? 'border-teal-500 text-teal-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Plans de Repas
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-medium text-gray-700 mr-2">Filtrer par:</span>
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-full text-sm ${
                selectedCategory === 'all'
                  ? 'bg-teal-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Tous
            </button>
            
            {activeTab === 'conseils' ? (
              <>
                <button
                  onClick={() => setSelectedCategory('général')}
                  className={`px-3 py-1.5 rounded-full text-sm ${
                    selectedCategory === 'général'
                      ? 'bg-teal-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Général
                </button>
                <button
                  onClick={() => setSelectedCategory('protéines')}
                  className={`px-3 py-1.5 rounded-full text-sm ${
                    selectedCategory === 'protéines'
                      ? 'bg-teal-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Protéines
                </button>
                <button
                  onClick={() => setSelectedCategory('glucides')}
                  className={`px-3 py-1.5 rounded-full text-sm ${
                    selectedCategory === 'glucides'
                      ? 'bg-teal-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Glucides
                </button>
                <button
                  onClick={() => setSelectedCategory('lipides')}
                  className={`px-3 py-1.5 rounded-full text-sm ${
                    selectedCategory === 'lipides'
                      ? 'bg-teal-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Lipides
                </button>
                <button
                  onClick={() => setSelectedCategory('micronutriments')}
                  className={`px-3 py-1.5 rounded-full text-sm ${
                    selectedCategory === 'micronutriments'
                      ? 'bg-teal-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Micronutriments
                </button>
                <button
                  onClick={() => setSelectedCategory('timing')}
                  className={`px-3 py-1.5 rounded-full text-sm ${
                    selectedCategory === 'timing'
                      ? 'bg-teal-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Timing
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setSelectedCategory('perte_de_poids')}
                  className={`px-3 py-1.5 rounded-full text-sm ${
                    selectedCategory === 'perte_de_poids'
                      ? 'bg-teal-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Perte de poids
                </button>
                <button
                  onClick={() => setSelectedCategory('prise_de_masse')}
                  className={`px-3 py-1.5 rounded-full text-sm ${
                    selectedCategory === 'prise_de_masse'
                      ? 'bg-teal-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Prise de masse
                </button>
                <button
                  onClick={() => setSelectedCategory('végétarien')}
                  className={`px-3 py-1.5 rounded-full text-sm ${
                    selectedCategory === 'végétarien'
                      ? 'bg-teal-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Végétarien
                </button>
              </>
            )}
          </div>
        </div>

        {/* Content */}
        {activeTab === 'conseils' ? (
          <div className="space-y-4">
            {filteredTips.map((tip, index) => (
              <motion.div
                key={tip.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div 
                  className="p-4 cursor-pointer"
                  onClick={() => toggleTip(tip.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex">
                      <div className="bg-teal-100 text-teal-600 p-2 rounded-full mr-3">
                        {tip.category === 'général' && <Utensils size={20} />}
                        {tip.category === 'protéines' && <Salad size={20} />}
                        {tip.category === 'glucides' && <Apple size={20} />}
                        {tip.category === 'lipides' && <Salad size={20} />}
                        {tip.category === 'micronutriments' && <Apple size={20} />}
                        {tip.category === 'timing' && <Clock size={20} />}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-800">{tip.title}</h3>
                        <span className="text-sm text-gray-500 capitalize">
                          {tip.category}
                        </span>
                      </div>
                    </div>
                    <button
                      className="text-gray-400 hover:text-teal-600 transition-colors"
                      aria-expanded={expandedTipId === tip.id}
                      aria-label={expandedTipId === tip.id ? "Réduire" : "Développer"}
                    >
                      {expandedTipId === tip.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                  </div>
                  
                  {expandedTipId === tip.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-gray-600 leading-relaxed"
                    >
                      <p>{tip.description}</p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {filteredMealPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div 
                  className="p-6 cursor-pointer border-b border-gray-100"
                  onClick={() => toggleMealPlan(plan.id)}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-xl text-gray-800">{plan.name}</h3>
                      <p className="text-gray-600 mt-1">{plan.description}</p>
                    </div>
                    <button
                      className="text-gray-400 hover:text-teal-600 transition-colors"
                      aria-expanded={expandedMealPlanId === plan.id}
                      aria-label={expandedMealPlanId === plan.id ? "Réduire" : "Développer"}
                    >
                      {expandedMealPlanId === plan.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </button>
                  </div>
                </div>
                
                {expandedMealPlanId === plan.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="p-6"
                  >
                    <div className="space-y-6">
                      {plan.meals.map((meal, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row gap-4">
                          <div className="md:w-1/3">
                            <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
                              <img 
                                src={meal.image} 
                                alt={meal.name} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div className="md:w-2/3">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="font-semibold text-lg text-gray-800">{meal.name}</h4>
                              <div className="flex items-center">
                                <Clock size={16} className="text-teal-500 mr-1" />
                                <span className="text-sm text-gray-600">{meal.time}</span>
                              </div>
                            </div>
                            <ul className="space-y-1 mb-3">
                              {meal.foods.map((food, foodIdx) => (
                                <li key={foodIdx} className="flex items-start text-gray-700">
                                  <ChevronRight size={16} className="text-teal-500 mr-1 mt-1 flex-shrink-0" />
                                  <span>{food}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="text-sm text-gray-500">
                              Environ {meal.calories} calories
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NutritionGuide;