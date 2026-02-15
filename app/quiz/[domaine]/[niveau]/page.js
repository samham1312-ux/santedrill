import { notFound } from 'next/navigation'
import Link from 'next/link'
import { domains } from '@/lib/domains'
import { levels } from '@/lib/levels'
import { loadQuestions, getRandomQuestions } from '@/lib/questions'
import QuizClient from '@/components/QuizClient'

export default function QuizPage({ params }) {
  const { domaine, niveau } = params
  
  // Vérifier que le domaine existe
  const currentDomain = domains.find(d => d.id === domaine)
  if (!currentDomain) {
    notFound()
  }
  
  // Vérifier que le niveau existe
  const currentLevel = levels.find(l => l.id === niveau)
  if (!currentLevel) {
    notFound()
  }
  
  // Charger les questions depuis le JSON
  const allQuestions = loadQuestions(domaine)
  
  // Si pas de fichier JSON ou vide
  if (!allQuestions || allQuestions.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-20 text-center">
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-8">
          <div className="text-6xl mb-4">📚</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Contenu bientôt disponible
          </h2>
          <p className="text-gray-600 mb-6">
            Les questions pour <strong>{currentDomain.name}</strong> niveau <strong>{currentLevel.name}</strong> seront ajoutées prochainement.
          </p>
          <Link
            href={`/quiz/${domaine}`}
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Retour au choix du niveau
          </Link>
        </div>
      </div>
    )
  }
  
  // Filtrer et sélectionner 10 questions aléatoires
  const quizQuestions = getRandomQuestions(allQuestions, niveau)
  
  // Si aucune question pour ce niveau
  if (quizQuestions.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-20 text-center">
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-8">
          <div className="text-6xl mb-4">📚</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Aucune question disponible
          </h2>
          <p className="text-gray-600 mb-6">
            Aucune question de niveau <strong>{currentLevel.name}</strong> n'est disponible pour {currentDomain.name}.
          </p>
          <Link
            href={`/quiz/${domaine}`}
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Choisir un autre niveau
          </Link>
        </div>
      </div>
    )
  }
  
  // Ajouter le domaine dans chaque question pour le récapitulatif
  const questionsWithDomain = quizQuestions.map(q => ({ ...q, domaine }))
  
  return (
    <QuizClient 
      questions={questionsWithDomain} 
      domainName={currentDomain.name}
      niveau={niveau}
    />
  )
}
