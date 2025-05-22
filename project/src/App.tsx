import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import WorkoutGenerator from './pages/WorkoutGenerator';
import ExerciseLibrary from './pages/ExerciseLibrary';
import NutritionGuide from './pages/NutritionGuide';
import ExerciseDetails from './pages/ExerciseDetails';
import NotFound from './pages/NotFound';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/generator" element={<WorkoutGenerator />} />
            <Route path="/exercises" element={<ExerciseLibrary />} />
            <Route path="/exercises/:id" element={<ExerciseDetails />} />
            <Route path="/nutrition" element={<NutritionGuide />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;