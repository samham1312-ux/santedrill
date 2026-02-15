'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="glass-effect border-b border-gray-200/50 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 gradient-medical rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M12 2L12 22M2 12L22 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gradient">SanteDrill</h1>
              <p className="text-xs text-gray-500 font-medium">Quiz Médicaux</p>
            </div>
          </Link>
          
          <nav className="flex gap-1">
            <Link 
              href="/" 
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                pathname === '/' 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Accueil
            </Link>
            <Link 
              href="/domaines" 
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                pathname === '/domaines' 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Domaines
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
