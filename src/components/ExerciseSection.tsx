import { useState } from 'react';

const exercises = [
  {
    id: 1,
    title: "Implémentation d'un arbre",
    difficulty: "Facile",
    question: "Créez un arbre binaire à partir de cette structure : Racine = 4, Fils gauche = 10 (avec enfants 7 et 9), Fils droit = 7 (avec enfant gauche 5)",
    hint: "Utilisez la notation [valeur, fils_gauche, fils_droit]",
    solution: "A = [4, [10, [7, None, None], [9, None, None]], [7, [5, None, None], None]]",
    explanation: "L'arbre est représenté de manière récursive. Chaque nœud est une liste avec la valeur en position 0, le fils gauche en position 1, et le fils droit en position 2."
  },
  {
    id: 2,
    title: "Nombre de nœuds",
    difficulty: "Moyen",
    question: "Écrivez une fonction qui compte le nombre de nœuds dans un arbre binaire.",
    hint: "Utilisez la récursivité : 1 + nœuds à gauche + nœuds à droite",
    solution: `def nbre_noeud(arb):
    if arb == None:
        return 0
    return 1 + nbre_noeud(arb[1]) + nbre_noeud(arb[2])`,
    explanation: "Si l'arbre est vide, il y a 0 nœuds. Sinon, on compte 1 (le nœud actuel) plus le nombre de nœuds dans chaque sous-arbre."
  },
  {
    id: 3,
    title: "Hauteur d'un arbre",
    difficulty: "Moyen",
    question: "Écrivez une fonction qui calcule la hauteur d'un arbre binaire.",
    hint: "La hauteur = 1 + max(hauteur gauche, hauteur droite)",
    solution: `def hauteur(arb):
    if arb == None:
        return 0
    return 1 + max(hauteur(arb[1]), hauteur(arb[2]))`,
    explanation: "La hauteur d'un arbre vide est 0. Pour un arbre non vide, c'est 1 plus le maximum des hauteurs de ses deux sous-arbres."
  },
  {
    id: 4,
    title: "Vérifier si un arbre est un ABR",
    difficulty: "Difficile",
    question: "Écrivez une fonction qui vérifie si un arbre binaire est un arbre binaire de recherche.",
    hint: "Pour chaque nœud : max(gauche) ≤ racine < min(droit)",
    solution: `def est_abr(A):
    if A == None:
        return True
    return (A[1] == None or max_arb(A[1]) <= A[0]) and \\
           (A[2] == None or min_arb(A[2]) > A[0]) and \\
           est_abr(A[1]) and est_abr(A[2])`,
    explanation: "Un ABR doit vérifier : tous les éléments du sous-arbre gauche ≤ racine, tous les éléments du sous-arbre droit > racine, et chaque sous-arbre est aussi un ABR."
  },
  {
    id: 5,
    title: "Recherche dichotomique dans un ABR",
    difficulty: "Moyen",
    question: "Écrivez une fonction de recherche dichotomique dans un arbre binaire de recherche.",
    hint: "Comparez avec la racine et cherchez dans le bon sous-arbre",
    solution: `def rechDic(x, Abr):
    if Abr == None:
        return False
    if x == Abr[0]:
        return True
    if x < Abr[0]:
        return rechDic(x, Abr[1])
    else:
        return rechDic(x, Abr[2])`,
    explanation: "On compare l'élément cherché avec la racine. S'il est plus petit, on cherche à gauche, sinon à droite. C'est efficace car on élimine la moitié de l'arbre à chaque étape."
  },
  {
    id: 6,
    title: "Insertion dans un ABR",
    difficulty: "Difficile",
    question: "Écrivez une fonction pour insérer une valeur dans un arbre binaire de recherche.",
    hint: "Trouvez la bonne position en comparant avec les nœuds",
    solution: `def inserer(arb, v):
    if arb == None:
        return [v, None, None]
    if v <= arb[0]:
        arb[1] = inserer(arb[1], v)
    else:
        arb[2] = inserer(arb[2], v)
    return arb`,
    explanation: "Si l'arbre est vide, on crée un nouveau nœud. Sinon, on insère récursivement dans le sous-arbre gauche si la valeur est ≤ racine, sinon dans le sous-arbre droit."
  },
  {
    id: 7,
    title: "Parcours des arbres",
    difficulty: "Facile",
    question: "Donnez l'ordre de parcours préfixe, infixe et postfixe pour l'arbre : [12, [1, [91, None, None], [67, None, None]], [7, None, [82, [61, None, None], None]]]",
    hint: "Préfixe: Racine-Gauche-Droit | Infixe: Gauche-Racine-Droit | Postfixe: Gauche-Droit-Racine",
    solution: `Préfixe: 12, 1, 91, 67, 7, 82, 61
Infixe: 91, 1, 67, 12, 7, 61, 82
Postfixe: 91, 67, 1, 61, 82, 7, 12`,
    explanation: "Chaque type de parcours visite les nœuds dans un ordre différent selon quand on traite la racine par rapport à ses sous-arbres."
  },
  {
    id: 8,
    title: "Arbre parfait",
    difficulty: "Moyen",
    question: "Un arbre parfait est représenté par la liste L = [56, 25, 17, 21, 18, 12, 5]. Quel est le père de L[5] = 12 ?",
    hint: "Pour un nœud à l'indice i, son père est à l'indice (i-1)//2",
    solution: "Le père de L[5] est L[(5-1)//2] = L[2] = 17",
    explanation: "Dans un arbre parfait représenté par une liste, le père du nœud à l'indice i est toujours à l'indice (i-1)//2."
  }
];

export function ExerciseSection() {
  const [selectedExercise, setSelectedExercise] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  const exercise = exercises[selectedExercise];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Facile':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'Moyen':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'Difficile':
        return 'bg-red-100 text-red-800 border-red-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Exercise List */}
      <div className="lg:col-span-1">
        <div className="bg-white rounded-lg shadow-md p-4 sticky top-24">
          <h2 className="text-lg font-bold text-gray-900 mb-4">✍️ Liste des exercices</h2>
          <div className="space-y-2">
            {exercises.map((ex, index) => (
              <button
                key={ex.id}
                onClick={() => {
                  setSelectedExercise(index);
                  setShowHint(false);
                  setShowSolution(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 ${
                  selectedExercise === index
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="text-sm font-semibold">Exercice {ex.id}</div>
                <div className={`text-xs mt-1 ${
                  selectedExercise === index ? 'text-indigo-100' : 'text-gray-500'
                }`}>
                  {ex.difficulty}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Exercise Content */}
      <div className="lg:col-span-3">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Exercice {exercise.id} : {exercise.title}
              </h2>
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border ${getDifficultyColor(exercise.difficulty)}`}>
                {exercise.difficulty}
              </span>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6 rounded-r-lg">
            <h3 className="font-bold text-blue-900 mb-2">📝 Énoncé :</h3>
            <p className="text-blue-800">{exercise.question}</p>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => setShowHint(!showHint)}
              className="flex items-center gap-2 px-4 py-2 bg-yellow-100 hover:bg-yellow-200 text-yellow-800 rounded-lg transition-all duration-200 font-medium"
            >
              <span>💡</span>
              {showHint ? 'Masquer l\'indice' : 'Voir un indice'}
            </button>

            {showHint && (
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg animate-fadeIn">
                <h4 className="font-bold text-yellow-900 mb-2">💡 Indice :</h4>
                <p className="text-yellow-800">{exercise.hint}</p>
              </div>
            )}

            <button
              onClick={() => setShowSolution(!showSolution)}
              className="flex items-center gap-2 px-4 py-2 bg-green-100 hover:bg-green-200 text-green-800 rounded-lg transition-all duration-200 font-medium"
            >
              <span>✅</span>
              {showSolution ? 'Masquer la solution' : 'Voir la solution'}
            </button>

            {showSolution && (
              <div className="space-y-4 animate-fadeIn">
                <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
                  <h4 className="font-bold text-green-400 mb-3">✅ Solution :</h4>
                  <pre className="text-sm">
                    <code>{exercise.solution}</code>
                  </pre>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                  <h4 className="font-bold text-green-900 mb-2">📚 Explication :</h4>
                  <p className="text-green-800">{exercise.explanation}</p>
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={() => {
                setSelectedExercise(Math.max(0, selectedExercise - 1));
                setShowHint(false);
                setShowSolution(false);
              }}
              disabled={selectedExercise === 0}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                selectedExercise === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md'
              }`}
            >
              ← Exercice précédent
            </button>
            <button
              onClick={() => {
                setSelectedExercise(Math.min(exercises.length - 1, selectedExercise + 1));
                setShowHint(false);
                setShowSolution(false);
              }}
              disabled={selectedExercise === exercises.length - 1}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                selectedExercise === exercises.length - 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md'
              }`}
            >
              Exercice suivant →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
