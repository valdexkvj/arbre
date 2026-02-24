export function TreeVisualization() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-8 my-6">
      <h3 className="text-center font-bold text-gray-700 mb-6">Exemple d'Arbre Binaire</h3>
      <div className="flex justify-center">
        <svg width="400" height="300" viewBox="0 0 400 300">
          {/* Edges */}
          <line x1="200" y1="40" x2="120" y2="100" stroke="#6366f1" strokeWidth="2" />
          <line x1="200" y1="40" x2="280" y2="100" stroke="#6366f1" strokeWidth="2" />
          <line x1="120" y1="100" x2="80" y2="160" stroke="#6366f1" strokeWidth="2" />
          <line x1="120" y1="100" x2="160" y2="160" stroke="#6366f1" strokeWidth="2" />
          <line x1="280" y1="100" x2="320" y2="160" stroke="#6366f1" strokeWidth="2" />
          
          {/* Nodes */}
          <g>
            <circle cx="200" cy="40" r="25" fill="#4f46e5" stroke="#312e81" strokeWidth="2" />
            <text x="200" y="48" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">15</text>
            <text x="200" y="15" textAnchor="middle" fill="#4f46e5" fontSize="12" fontWeight="bold">Racine</text>
          </g>
          
          <g>
            <circle cx="120" cy="100" r="25" fill="#6366f1" stroke="#312e81" strokeWidth="2" />
            <text x="120" y="108" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">7</text>
          </g>
          
          <g>
            <circle cx="280" cy="100" r="25" fill="#6366f1" stroke="#312e81" strokeWidth="2" />
            <text x="280" y="108" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">20</text>
          </g>
          
          <g>
            <circle cx="80" cy="160" r="25" fill="#818cf8" stroke="#312e81" strokeWidth="2" />
            <text x="80" y="168" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">6</text>
            <text x="80" y="195" textAnchor="middle" fill="#10b981" fontSize="12" fontWeight="bold">Feuille</text>
          </g>
          
          <g>
            <circle cx="160" cy="160" r="25" fill="#818cf8" stroke="#312e81" strokeWidth="2" />
            <text x="160" y="168" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">9</text>
            <text x="160" y="195" textAnchor="middle" fill="#10b981" fontSize="12" fontWeight="bold">Feuille</text>
          </g>
          
          <g>
            <circle cx="320" cy="160" r="25" fill="#818cf8" stroke="#312e81" strokeWidth="2" />
            <text x="320" y="168" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">25</text>
            <text x="320" y="195" textAnchor="middle" fill="#10b981" fontSize="12" fontWeight="bold">Feuille</text>
          </g>
        </svg>
      </div>
      <div className="mt-6 text-center">
        <div className="inline-block bg-white rounded-lg px-6 py-3 shadow-sm">
          <code className="text-sm text-gray-700">
            arbre = [15, [7, [6, None, None], [9, None, None]], [20, None, [25, None, None]]]
          </code>
        </div>
      </div>
    </div>
  );
}
