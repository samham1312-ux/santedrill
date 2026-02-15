import Link from 'next/link'
import { domains } from '@/lib/domains'
import { levels } from '@/lib/levels'
import { notFound } from 'next/navigation'

export default function NiveauPage({ params }) {
  const { domaine } = params
  
  // Vérifier que le domaine existe
  const currentDomain = domains.find(d => d.id === domaine)
  
  if (!currentDomain) {
    notFound()
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* Titre */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {currentDomain.name}
        </h1>
        <p className="text-gray-600">
          {currentDomain.description}
        </p>
      </div>

      {/* Sélection du niveau */}
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Choisissez votre niveau
      </h2>

      <div className="space-y-4">
        {levels.map((level) => (
          <Link
            key={level.id}
            href={`/quiz/${domaine}/${level.id}`}
            className="block p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {level.name}
            </h3>
            <p className="text-gray-600 text-sm">
              {level.description}
            </p>
          </Link>
        ))}
      </div>

      {/* Bouton retour */}
      <div className="mt-8">
        <Link 
          href="/domaines"
          className="text-primary hover:text-blue-700 font-medium"
        >
          ← Retour aux domaines
        </Link>
      </div>
    </div>
  )
}
