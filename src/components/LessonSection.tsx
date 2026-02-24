import { useState } from 'react';
import { TreeVisualization } from './TreeVisualization';

const lessons = [
  {
    id: 1,
    title: "Introduction aux Arbres Binaires",
    description: "Qu'est-ce qu'un arbre binaire ?",
    content: (
      <>
        <p className="mb-4">
          Un <strong>arbre binaire</strong> est une structure de données hiérarchique composée de nœuds. 
          Chaque nœud possède au maximum deux enfants : un <strong>fils gauche</strong> et un <strong>fils droit</strong>.
        </p>
        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-4">
          <p className="font-semibold text-indigo-900 mb-2">Définition récursive :</p>
          <ul className="list-disc list-inside space-y-1 text-indigo-800">
            <li>Soit l'arbre est vide</li>
            <li>Soit il est composé d'une racine et de deux sous-arbres (gauche et droit)</li>
          </ul>
        </div>
        <TreeVisualization />
      </>
    ),
  },
  {
    id: 2,
    title: "Terminologie des Arbres",
    description: "Concepts clés : racine, feuille, hauteur, profondeur",
    content: (
      <>
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <h4 className="font-bold text-indigo-700 mb-2">🌳 Racine</h4>
            <p className="text-gray-700">Le seul nœud sans parent, point de départ de l'arbre.</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <h4 className="font-bold text-green-700 mb-2">🍃 Feuille</h4>
            <p className="text-gray-700">Un nœud sans enfants (ni fils gauche, ni fils droit).</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <h4 className="font-bold text-blue-700 mb-2">📏 Profondeur</h4>
            <p className="text-gray-700">Distance entre la racine et un nœud donné.</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <h4 className="font-bold text-purple-700 mb-2">📐 Hauteur</h4>
            <p className="text-gray-700">Distance maximale entre un nœud et ses feuilles. La hauteur de l'arbre est la hauteur de sa racine.</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <h4 className="font-bold text-orange-700 mb-2">🔢 Degré</h4>
            <p className="text-gray-700">Nombre d'enfants d'un nœud (0, 1, ou 2 pour un arbre binaire).</p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 3,
    title: "Implémentation en Python",
    description: "Représentation par listes",
    content: (
      <>
        <p className="mb-4">
          En Python, on peut représenter un arbre binaire avec des listes :
        </p>
        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
          <pre className="text-sm">
            <code>{`# Structure : [valeur, fils_gauche, fils_droit]
# Arbre vide : None

# Exemple :
arbre = [15, 
    [7, [6, None, None], [9, None, None]], 
    [20, None, [25, None, None]]
]

# Fonctions de base :
def est_vide(arbre):
    return arbre == None

def valeur(arbre):
    return arbre[0]

def fils_gauche(arbre):
    return arbre[1]

def fils_droit(arbre):
    return arbre[2]

def est_feuille(arbre):
    return arbre[1] == None and arbre[2] == None`}</code>
          </pre>
        </div>
      </>
    ),
  },
  {
    id: 4,
    title: "Parcours en Profondeur",
    description: "Préfixe, Infixe, Postfixe",
    content: (
      <>
        <p className="mb-4">
          Le <strong>parcours en profondeur</strong> explore l'arbre en allant jusqu'au bout d'une branche avant de passer à la suivante.
        </p>
        <div className="space-y-4">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <h4 className="font-bold text-blue-900 mb-2">1. Parcours Préfixe (Racine - Gauche - Droit)</h4>
            <p className="text-blue-800 mb-2">On traite le nœud avant ses enfants.</p>
            <code className="bg-blue-100 px-2 py-1 rounded text-sm">Racine → Gauche → Droit</code>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <h4 className="font-bold text-green-900 mb-2">2. Parcours Infixe (Gauche - Racine - Droit)</h4>
            <p className="text-green-800 mb-2">On traite le nœud entre ses enfants.</p>
            <code className="bg-green-100 px-2 py-1 rounded text-sm">Gauche → Racine → Droit</code>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <h4 className="font-bold text-purple-900 mb-2">3. Parcours Postfixe (Gauche - Droit - Racine)</h4>
            <p className="text-purple-800 mb-2">On traite le nœud après ses enfants.</p>
            <code className="bg-purple-100 px-2 py-1 rounded text-sm">Gauche → Droit → Racine</code>
          </div>
        </div>
        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-4 overflow-x-auto">
          <pre className="text-sm">
            <code>{`def parcours_prefixe(arbre):
    if arbre != None:
        print(arbre[0])
        parcours_prefixe(arbre[1])
        parcours_prefixe(arbre[2])

def parcours_infixe(arbre):
    if arbre != None:
        parcours_infixe(arbre[1])
        print(arbre[0])
        parcours_infixe(arbre[2])

def parcours_postfixe(arbre):
    if arbre != None:
        parcours_postfixe(arbre[1])
        parcours_postfixe(arbre[2])
        print(arbre[0])`}</code>
          </pre>
        </div>
      </>
    ),
  },
  {
    id: 5,
    title: "Parcours en Largeur",
    description: "Explorer niveau par niveau",
    content: (
      <>
        <p className="mb-4">
          Le <strong>parcours en largeur</strong> explore l'arbre niveau par niveau, de gauche à droite.
        </p>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
          <p className="font-semibold text-yellow-900 mb-2">Principe :</p>
          <ol className="list-decimal list-inside space-y-1 text-yellow-800">
            <li>Utiliser une file (FIFO)</li>
            <li>Commencer par la racine</li>
            <li>Traiter le nœud et ajouter ses enfants à la file</li>
            <li>Répéter jusqu'à ce que la file soit vide</li>
          </ol>
        </div>
        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm">
            <code>{`def parcours_largeur(arbre):
    if arbre == None:
        return
    
    file = [arbre]
    while len(file) > 0:
        noeud = file.pop(0)  # Retirer le premier
        print(noeud[0])
        
        if noeud[1] != None:
            file.append(noeud[1])
        if noeud[2] != None:
            file.append(noeud[2])`}</code>
          </pre>
        </div>
      </>
    ),
  },
  {
    id: 6,
    title: "Arbre Binaire de Recherche (ABR)",
    description: "Structure optimisée pour la recherche",
    content: (
      <>
        <p className="mb-4">
          Un <strong>Arbre Binaire de Recherche (ABR)</strong> est un arbre binaire où :
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
          <ul className="list-disc list-inside space-y-2 text-green-800">
            <li><strong>Propriété principale :</strong> Pour tout nœud X :
              <ul className="list-circle list-inside ml-6 mt-1">
                <li>Les valeurs du sous-arbre gauche sont ≤ X</li>
                <li>Les valeurs du sous-arbre droit sont &gt; X</li>
              </ul>
            </li>
            <li>Tout sous-arbre est également un ABR</li>
          </ul>
        </div>
        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm">
            <code>{`def recherche_dichotomique(x, abr):
    if abr == None:
        return False
    if x == abr[0]:
        return True
    if x < abr[0]:
        return recherche_dichotomique(x, abr[1])
    else:
        return recherche_dichotomique(x, abr[2])

def inserer(abr, v):
    if abr == None:
        return [v, None, None]
    if v <= abr[0]:
        abr[1] = inserer(abr[1], v)
    else:
        abr[2] = inserer(abr[2], v)
    return abr`}</code>
          </pre>
        </div>
      </>
    ),
  },
];

export function LessonSection() {
  const [activeLesson, setActiveLesson] = useState(0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Sidebar */}
      <div className="lg:col-span-1">
        <div className="bg-white rounded-lg shadow-md p-4 sticky top-24">
          <h2 className="text-lg font-bold text-gray-900 mb-4">📑 Table des matières</h2>
          <nav className="space-y-2">
            {lessons.map((lesson, index) => (
              <button
                key={lesson.id}
                onClick={() => setActiveLesson(index)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeLesson === index
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="text-sm font-semibold">{lesson.title}</div>
                <div className={`text-xs mt-1 ${activeLesson === index ? 'text-indigo-100' : 'text-gray-500'}`}>
                  {lesson.description}
                </div>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="lg:col-span-3">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {lessons[activeLesson].title}
            </h2>
            <p className="text-gray-600">{lessons[activeLesson].description}</p>
          </div>
          <div className="prose max-w-none">
            {lessons[activeLesson].content}
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={() => setActiveLesson(Math.max(0, activeLesson - 1))}
              disabled={activeLesson === 0}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                activeLesson === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md'
              }`}
            >
              ← Précédent
            </button>
            <button
              onClick={() => setActiveLesson(Math.min(lessons.length - 1, activeLesson + 1))}
              disabled={activeLesson === lessons.length - 1}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                activeLesson === lessons.length - 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md'
              }`}
            >
              Suivant →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
