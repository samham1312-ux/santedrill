'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function QuizClient({ questions, domainName, niveau }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])
  const [isFinished, setIsFinished] = useState(false)

  const currentQuestion = questions[currentIndex]

  const handleSelectAnswer = (answer) => {
    if (isAnswered) return
    
    setSelectedAnswer(answer)
    setIsAnswered(true)
    
    const isCorrect = answer === currentQuestion.reponse
    if (isCorrect) {
      setScore(score + 1)
    }
    
    setUserAnswers([
      ...userAnswers,
      {
        question: currentQuestion.question,
        userAnswer: answer,
        correctAnswer: currentQuestion.reponse,
        isCorrect,
        explication: currentQuestion.explication,
        type: currentQuestion.type,
        choix: currentQuestion.choix
      }
    ])
  }

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setSelectedAnswer(null)
      setIsAnswered(false)
    } else {
      setIsFinished(true)
    }
  }

  // Écran de fin
  if (isFinished) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Quiz terminé !
          </h2>
          <div className="text-5xl font-bold text-primary mb-6">
            {score} / {questions.length}
          </div>
          <p className="text-gray-600 text-lg">
            {score === questions.length && "Parfait ! 🎉"}
            {score >= questions.length * 0.7 && score < questions.length && "Très bien ! 👏"}
            {score >= questions.length * 0.5 && score < questions.length * 0.7 && "Bien joué ! 👍"}
            {score < questions.length * 0.5 && "Continuez à vous entraîner ! 💪"}
          </p>
        </div>

        {/* Récapitulatif */}
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Récapitulatif</h3>
        <div className="space-y-4">
          {userAnswers.map((item, idx) => (
            <div 
              key={idx}
              className={`p-6 rounded-lg border-2 ${
                item.isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'
              }`}
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl">
                  {item.isCorrect ? '✅' : '❌'}
                </span>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 mb-2">
                    Question {idx + 1} : {item.question}
                  </p>
                  
                  {item.type === 'vf' ? (
                    <>
                      <p className="text-sm text-gray-700">
                        Votre réponse : <span className={item.isCorrect ? 'text-green-700 font-semibold' : 'text-red-700 font-semibold'}>
                          {item.userAnswer ? 'Vrai' : 'Faux'}
                        </span>
                      </p>
                      {!item.isCorrect && (
                        <p className="text-sm text-gray-700">
                          Bonne réponse : <span className="text-green-700 font-semibold">
                            {item.correctAnswer ? 'Vrai' : 'Faux'}
                          </span>
                        </p>
                      )}
                    </>
                  ) : (
                    <>
                      <p className="text-sm text-gray-700">
                        Votre réponse : <span className={item.isCorrect ? 'text-green-700 font-semibold' : 'text-red-700 font-semibold'}>
                          {item.choix[item.userAnswer]}
                        </span>
                      </p>
                      {!item.isCorrect && (
                        <p className="text-sm text-gray-700">
                          Bonne réponse : <span className="text-green-700 font-semibold">
                            {item.choix[item.correctAnswer]}
                          </span>
                        </p>
                      )}
                    </>
                  )}
                  
                  <p className="text-sm text-gray-600 mt-3 italic">
                    💡 {item.explication}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex gap-4">
          <Link
            href={`/quiz/${questions[0].domaine}`}
            className="px-6 py-3 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition"
          >
            Changer de niveau
          </Link>
          <Link
            href="/domaines"
            className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Retour aux domaines
          </Link>
        </div>
      </div>
    )
  }

  // Écran de question
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* En-tête */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-900">
            {domainName} - {niveau.charAt(0).toUpperCase() + niveau.slice(1)}
          </h1>
          <span className="text-gray-600 font-medium">
            Question {currentIndex + 1} / {questions.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-6">
        <p className="text-xl font-semibold text-gray-900 mb-6">
          {currentQuestion.question}
        </p>

        {/* Réponses QCM */}
        {currentQuestion.type === 'qcm' && (
          <div className="space-y-3">
            {currentQuestion.choix.map((choix, idx) => {
              const isSelected = selectedAnswer === idx
              const isCorrect = idx === currentQuestion.reponse
              
              let className = "w-full p-4 text-left border-2 rounded-lg transition "
              
              if (!isAnswered) {
                className += "border-gray-200 hover:border-primary hover:bg-blue-50"
              } else if (isCorrect) {
                className += "border-green-500 bg-green-50"
              } else if (isSelected && !isCorrect) {
                className += "border-red-500 bg-red-50"
              } else {
                className += "border-gray-200 bg-gray-50"
              }
              
              return (
                <button
                  key={idx}
                  onClick={() => handleSelectAnswer(idx)}
                  disabled={isAnswered}
                  className={className}
                >
                  <span className="font-medium">{choix}</span>
                  {isAnswered && isCorrect && <span className="ml-2">✅</span>}
                  {isAnswered && isSelected && !isCorrect && <span className="ml-2">❌</span>}
                </button>
              )
            })}
          </div>
        )}

        {/* Réponses Vrai/Faux */}
        {currentQuestion.type === 'vf' && (
          <div className="flex gap-4">
            {[true, false].map((value) => {
              const isSelected = selectedAnswer === value
              const isCorrect = value === currentQuestion.reponse
              
              let className = "flex-1 p-6 border-2 rounded-lg font-semibold text-lg transition "
              
              if (!isAnswered) {
                className += "border-gray-200 hover:border-primary hover:bg-blue-50"
              } else if (isCorrect) {
                className += "border-green-500 bg-green-50"
              } else if (isSelected && !isCorrect) {
                className += "border-red-500 bg-red-50"
              } else {
                className += "border-gray-200 bg-gray-50"
              }
              
              return (
                <button
                  key={value.toString()}
                  onClick={() => handleSelectAnswer(value)}
                  disabled={isAnswered}
                  className={className}
                >
                  {value ? 'Vrai' : 'Faux'}
                  {isAnswered && isCorrect && <span className="ml-2">✅</span>}
                  {isAnswered && isSelected && !isCorrect && <span className="ml-2">❌</span>}
                </button>
              )
            })}
          </div>
        )}

        {/* Explication après réponse */}
        {isAnswered && (
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm font-semibold text-blue-900 mb-2">💡 Explication</p>
            <p className="text-sm text-blue-800">{currentQuestion.explication}</p>
          </div>
        )}
      </div>

      {/* Bouton Suivant */}
      {isAnswered && (
        <button
          onClick={handleNext}
          className="w-full py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition shadow-md"
        >
          {currentIndex < questions.length - 1 ? 'Question suivante' : 'Voir les résultats'}
        </button>
      )}
    </div>
  )
}
