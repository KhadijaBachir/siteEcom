import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Utensils, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-600 via-teal-500 to-teal-400 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Votre Générateur d'Entraînement Personnel
            </h1>
            <p className="text-xl mb-8">
              Restez en forme avec des entraînements personnalisés et des conseils nutritionnels, tout depuis le confort de votre domicile.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/generator"
                className="bg-white text-teal-600 hover:bg-gray-100 transition-colors px-8 py-3 rounded-lg font-semibold text-center flex items-center justify-center"
              >
                Créer un Entraînement <Dumbbell className="ml-2" size={20} />
              </Link>
              <Link
                to="/nutrition"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-teal-600 transition-colors px-8 py-3 rounded-lg font-semibold text-center flex items-center justify-center"
              >
                Guide Nutritionnel <Utensils className="ml-2" size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Pourquoi Choisir FitMaison ?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Notre plateforme offre tout ce dont vous avez besoin pour maintenir un mode de vie sain sans quitter votre domicile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Dumbbell size={40} className="text-teal-500" />,
                title: "Entraînements Personnalisés",
                description:
                  "Générez des entraînements basés sur votre niveau de fitness, l'équipement disponible et vos objectifs.",
              },
              {
                icon: <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                  <Clock size={40} className="text-teal-500" />
                </motion.div>,
                title: "Rapide & Efficace",
                description:
                  "Obtenez des routines d'entraînement efficaces qui s'adaptent à votre emploi du temps chargé.",
              },
              {
                icon: <Utensils size={40} className="text-teal-500" />,
                title: "Conseils Nutritionnels",
                description:
                  "Accédez à des plans de repas équilibrés et des conseils nutritionnels pour compléter votre parcours fitness.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Comment Ça Fonctionne</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Commencez votre parcours fitness en seulement trois étapes simples
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Sélectionnez Vos Préférences",
                description:
                  "Choisissez votre niveau de fitness, l'équipement disponible, les groupes musculaires ciblés et la durée de l'entraînement.",
              },
              {
                step: "02",
                title: "Générez Votre Entraînement",
                description:
                  "Notre système crée une routine d'entraînement personnalisée adaptée à vos besoins et objectifs spécifiques.",
              },
              {
                step: "03",
                title: "Commencez à Vous Entraîner",
                description:
                  "Suivez les démonstrations vidéo et suivez votre progression au fur et à mesure que vous complétez chaque entraînement.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white p-8 rounded-xl shadow-sm relative z-10">
                  <div className="text-4xl font-bold text-teal-100 absolute -top-6 -left-3 z-0">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 relative z-10">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-20">
                    <ArrowRight size={24} className="text-teal-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à Commencer Votre Parcours Fitness ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Rejoignez des milliers d'utilisateurs qui ont transformé leur routine fitness à domicile.
          </p>
          <Link
            to="/generator"
            className="inline-flex items-center bg-white text-teal-600 hover:bg-gray-100 transition-colors px-8 py-3 rounded-lg font-semibold"
          >
            Créez Votre Premier Entraînement <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;