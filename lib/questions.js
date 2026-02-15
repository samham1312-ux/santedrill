import fs from 'fs'
import path from 'path'

/**
 * Charge les questions d'un domaine depuis le fichier JSON
 * @param {string} domaine - ID du domaine
 * @returns {Array|null} - Questions ou null si fichier inexistant
 */
export function loadQuestions(domaine) {
  try {
    const filePath = path.join(process.cwd(), 'content', `${domaine}.json`)
    
    if (!fs.existsSync(filePath)) {
      return null
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const data = JSON.parse(fileContent)
    
    return data.questions || []
  } catch (error) {
    console.error(`Erreur chargement questions pour ${domaine}:`, error)
    return null
  }
}

/**
 * Filtre les questions par niveau et en sélectionne 10 aléatoirement
 * @param {Array} questions - Toutes les questions du domaine
 * @param {string} niveau - Niveau souhaité (facile, intermediaire, expert)
 * @returns {Array} - 10 questions aléatoires du niveau
 */
export function getRandomQuestions(questions, niveau) {
  // Filtrer par niveau
  const filtered = questions.filter(q => q.niveau === niveau)
  
  if (filtered.length === 0) {
    return []
  }
  
  // Mélanger et prendre 10 questions
  const shuffled = [...filtered].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(10, shuffled.length))
}
