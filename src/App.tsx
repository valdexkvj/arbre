import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { LessonSection } from './components/LessonSection';
import { ExerciseSection } from './components/ExerciseSection';
import { CodeEditor } from './components/CodeEditor';

export function App() {
  const [activeTab, setActiveTab] = useState<'lessons' | 'exercises' | 'code'>('lessons');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <header className="bg-white shadow-md border-b-2 border-indigo-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Structures de Données</h1>
              <p className="text-sm text-gray-600">Les Arbres Binaires - Guide Complet</p>
            </div>
          </div>
        </div>
      </header>

      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'lessons' && <LessonSection />}
        {activeTab === 'exercises' && <ExerciseSection />}
        {activeTab === 'code' && <CodeEditor />}
      </main>

      <footer className="bg-white mt-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-600 text-sm">
            © 2024 Structures de Données - Plateforme d'apprentissage interactive
          </p>
        </div>
      </footer>
    </div>
  );
}
