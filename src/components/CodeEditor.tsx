import { useState } from 'react';

const codeExamples = [
  {
    id: 1,
    title: "Arbre Binaire - Fonctions de base",
    code: `#include <stdio.h>
#include <stdlib.h>

// Structure d'un nœud
typedef struct Node {
    int data;
    struct Node* left;
    struct Node* right;
} Node;

// Créer un nouveau nœud
Node* createNode(int data) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->data = data;
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}

// Afficher (parcours infixe)
void inorder(Node* root) {
    if (root != NULL) {
        inorder(root->left);
        printf("%d ", root->data);
        inorder(root->right);
    }
}

int main() {
    // Créer un arbre
    Node* root = createNode(15);
    root->left = createNode(7);
    root->right = createNode(20);
    root->left->left = createNode(6);
    root->left->right = createNode(9);
    root->right->right = createNode(25);
    
    printf("Parcours infixe: ");
    inorder(root);
    printf("\\n");
    
    return 0;
}`
  },
  {
    id: 2,
    title: "Parcours d'arbres",
    code: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node* left;
    struct Node* right;
} Node;

Node* createNode(int data) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->data = data;
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}

// Parcours préfixe (Racine-Gauche-Droit)
void preorder(Node* root) {
    if (root != NULL) {
        printf("%d ", root->data);
        preorder(root->left);
        preorder(root->right);
    }
}

// Parcours infixe (Gauche-Racine-Droit)
void inorder(Node* root) {
    if (root != NULL) {
        inorder(root->left);
        printf("%d ", root->data);
        inorder(root->right);
    }
}

// Parcours postfixe (Gauche-Droit-Racine)
void postorder(Node* root) {
    if (root != NULL) {
        postorder(root->left);
        postorder(root->right);
        printf("%d ", root->data);
    }
}

int main() {
    Node* root = createNode(12);
    root->left = createNode(1);
    root->right = createNode(7);
    root->left->left = createNode(91);
    root->left->right = createNode(67);
    root->right->right = createNode(82);
    
    printf("Préfixe:  ");
    preorder(root);
    printf("\\nInfixe:   ");
    inorder(root);
    printf("\\nPostfixe: ");
    postorder(root);
    printf("\\n");
    
    return 0;
}`
  },
  {
    id: 3,
    title: "Arbre Binaire de Recherche",
    code: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node* left;
    struct Node* right;
} Node;

Node* createNode(int data) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->data = data;
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}

// Insertion dans un ABR
Node* insert(Node* root, int data) {
    if (root == NULL) {
        return createNode(data);
    }
    
    if (data <= root->data) {
        root->left = insert(root->left, data);
    } else {
        root->right = insert(root->right, data);
    }
    
    return root;
}

// Recherche dans un ABR
int search(Node* root, int key) {
    if (root == NULL) {
        return 0;
    }
    
    if (key == root->data) {
        return 1;
    } else if (key < root->data) {
        return search(root->left, key);
    } else {
        return search(root->right, key);
    }
}

void inorder(Node* root) {
    if (root != NULL) {
        inorder(root->left);
        printf("%d ", root->data);
        inorder(root->right);
    }
}

int main() {
    Node* root = NULL;
    
    // Insérer des valeurs
    root = insert(root, 24);
    root = insert(root, 16);
    root = insert(root, 29);
    root = insert(root, 3);
    root = insert(root, 20);
    root = insert(root, 27);
    root = insert(root, 35);
    
    printf("Arbre (infixe): ");
    inorder(root);
    printf("\\n");
    
    // Rechercher
    int key = 20;
    if (search(root, key)) {
        printf("%d trouvé!\\n", key);
    } else {
        printf("%d non trouvé.\\n", key);
    }
    
    return 0;
}`
  },
  {
    id: 4,
    title: "Hauteur et nombre de nœuds",
    code: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node* left;
    struct Node* right;
} Node;

Node* createNode(int data) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->data = data;
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}

// Calculer la hauteur
int height(Node* root) {
    if (root == NULL) {
        return 0;
    }
    
    int leftHeight = height(root->left);
    int rightHeight = height(root->right);
    
    return 1 + (leftHeight > rightHeight ? leftHeight : rightHeight);
}

// Compter les nœuds
int countNodes(Node* root) {
    if (root == NULL) {
        return 0;
    }
    return 1 + countNodes(root->left) + countNodes(root->right);
}

int main() {
    Node* root = createNode(15);
    root->left = createNode(7);
    root->right = createNode(20);
    root->left->left = createNode(6);
    root->left->right = createNode(9);
    root->right->right = createNode(25);
    
    printf("Hauteur: %d\\n", height(root));
    printf("Nombre de nœuds: %d\\n", countNodes(root));
    
    return 0;
}`
  }
];

export function CodeEditor() {
  const [selectedExample, setSelectedExample] = useState(0);
  const [code, setCode] = useState(codeExamples[0].code);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const handleExampleChange = (index: number) => {
    setSelectedExample(index);
    setCode(codeExamples[index].code);
    setOutput('');
  };

  const runCode = () => {
    setIsRunning(true);
    setOutput('⏳ Compilation et exécution en cours...\n\n');
    
    // Simulation de l'exécution (dans un vrai environnement, vous utiliseriez une API backend)
    setTimeout(() => {
      let simulatedOutput = '';
      
      if (selectedExample === 0) {
        simulatedOutput = 'Compilation réussie!\n\nParcours infixe: 6 7 9 15 20 25';
      } else if (selectedExample === 1) {
        simulatedOutput = 'Compilation réussie!\n\nPréfixe:  12 1 91 67 7 82\nInfixe:   91 1 67 12 7 82\nPostfixe: 91 67 1 82 7 12';
      } else if (selectedExample === 2) {
        simulatedOutput = 'Compilation réussie!\n\nArbre (infixe): 3 16 20 24 27 29 35\n20 trouvé!';
      } else if (selectedExample === 3) {
        simulatedOutput = 'Compilation réussie!\n\nHauteur: 3\nNombre de nœuds: 6';
      }
      
      setOutput(simulatedOutput);
      setIsRunning(false);
    }, 1500);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Examples sidebar */}
      <div className="lg:col-span-1">
        <div className="bg-white rounded-lg shadow-md p-4 sticky top-24">
          <h2 className="text-lg font-bold text-gray-900 mb-4">📂 Exemples de code</h2>
          <div className="space-y-2">
            {codeExamples.map((example, index) => (
              <button
                key={example.id}
                onClick={() => handleExampleChange(index)}
                className={`w-full text-left px-3 py-3 rounded-lg transition-all duration-200 ${
                  selectedExample === index
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="text-sm font-semibold">{example.title}</div>
              </button>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-bold text-blue-900 mb-2 text-sm">ℹ️ Information</h3>
            <p className="text-xs text-blue-800">
              Cet éditeur simule l'exécution du code C. Dans un environnement réel, le code serait compilé avec GCC et exécuté sur un serveur.
            </p>
          </div>
        </div>
      </div>

      {/* Code editor */}
      <div className="lg:col-span-3 space-y-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gray-800 px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-gray-300 text-sm font-mono">main.c</span>
            </div>
            <button
              onClick={runCode}
              disabled={isRunning}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                isRunning
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700 shadow-md'
              } text-white`}
            >
              <span>{isRunning ? '⏳' : '▶️'}</span>
              {isRunning ? 'Exécution...' : 'Compiler et Exécuter'}
            </button>
          </div>
          
          <div className="p-0">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-96 p-6 font-mono text-sm bg-gray-900 text-gray-100 border-0 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              spellCheck={false}
              style={{ tabSize: 4 }}
            />
          </div>
        </div>

        {/* Output section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gray-800 px-6 py-3">
            <span className="text-gray-300 text-sm font-semibold">📤 Sortie du programme</span>
          </div>
          <div className="p-6">
            {output ? (
              <pre className="font-mono text-sm text-gray-800 whitespace-pre-wrap bg-gray-50 p-4 rounded-lg border border-gray-200">
                {output}
              </pre>
            ) : (
              <p className="text-gray-500 italic">La sortie s'affichera ici après l'exécution du code...</p>
            )}
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border border-indigo-200">
          <h3 className="font-bold text-indigo-900 mb-3 flex items-center gap-2">
            <span>💡</span>
            Comment utiliser l'éditeur
          </h3>
          <ul className="space-y-2 text-indigo-800 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">1.</span>
              <span>Sélectionnez un exemple de code dans la liste de gauche</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">2.</span>
              <span>Modifiez le code selon vos besoins</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">3.</span>
              <span>Cliquez sur "Compiler et Exécuter" pour voir le résultat</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">4.</span>
              <span>Expérimentez avec différentes valeurs et structures</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
