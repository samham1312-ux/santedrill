import Link from 'next/link'
import { domains } from '@/lib/domains'

const domainIcons = {
  'hygiene-infectiologie': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M20 12v16M12 20h16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  'bio-fondamentale': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M20 8v24M8 20h24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="2.5"/>
    </svg>
  ),
  'physiologie': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M8 20h6l4-8 4 16 4-8h6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'pharmacologie': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="10" y="10" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M20 16v8M16 20h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  'psychologie': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="15" r="6" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M10 32c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  'droit-ethique': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="8" y="10" width="24" height="20" rx="2" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M8 18h24M16 10v20" stroke="currentColor" strokeWidth="2.5"/>
    </svg>
  ),
  'soins-surveillance': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M20 14v6l4 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  'anatomie': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="12" r="4" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M20 16v8M14 20l6 4 6-4M14 28h12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
}

const colors = [
  'from-blue-500 to-blue-600',
  'from-purple-500 to-purple-600',
  'from-green-500 to-green-600',
  'from-orange-500 to-orange-600',
  'from-pink-500 to-pink-600',
  'from-indigo-500 to-indigo-600',
  'from-teal-500 to-teal-600',
  'from-red-500 to-red-600',
]

export default function DomainesPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choisissez votre <span className="text-gradient">domaine</span>
          </h1>
          <p className="text-xl text-gray-600">
            8 domaines transversaux • 3 niveaux de difficulté
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 animate-slide-up">
          {domains.map((domain, index) => (
            <Link 
              key={domain.id}
              href={`/quiz/${domain.id}`}
              className="group block"
            >
              <div className="relative h-full bg-white rounded-2xl border-2 border-gray-200 p-8 card-hover overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <div className={`w-full h-full bg-gradient-to-br ${colors[index]} rounded-full filter blur-2xl transform translate-x-8 -translate-y-8`}></div>
                </div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${colors[index]} rounded-xl mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {domainIcons[domain.id]}
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {domain.name}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {domain.description}
                  </p>
                  
                  <div className="flex items-center text-primary font-semibold group-hover:gap-3 gap-2 transition-all">
                    <span>Commencer</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform">
                      <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
