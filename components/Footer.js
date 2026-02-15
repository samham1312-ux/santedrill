export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-12 mt-auto relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full filter blur-3xl"></div>
      </div>
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="mb-4">
          <span className="text-2xl font-bold text-gradient">SanteDrill</span>
        </div>
        <p className="text-sm opacity-75">
          Plateforme de quiz sur la santé - &copy; 2026
        </p>
        <p className="text-xs mt-2 opacity-50">
          Questions de santé de qualité
        </p>
      </div>
    </footer>
  )
}
