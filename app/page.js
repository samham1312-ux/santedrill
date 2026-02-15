import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 gradient-medical opacity-95"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 animate-fade-in">
          <div className="mb-8 inline-block animate-scale-in">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl mx-auto">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-white">
                <path d="M24 4L24 44M4 24L44 24" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight animate-slide-up">
            SanteDrill
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-medium animate-slide-up" style={{animationDelay: '0.1s'}}>
            Testez et renforcez vos connaissances médicales avec des quiz professionnels
          </p>
          
          <Link 
            href="/domaines"
            className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 animate-slide-up"
            style={{animationDelay: '0.2s'}}
          >
            Commencer maintenant
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230066CC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Pourquoi <span className="text-gradient">SanteDrill</span> ?
            </h2>
            <p className="text-gray-600 text-lg">Une plateforme pensée pour votre réussite</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2"/>
                    <path d="M11 16l4 4 6-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ),
                title: "Questions validées",
                desc: "Contenu vérifié par des professionnels de santé"
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect x="8" y="12" width="6" height="12" stroke="currentColor" strokeWidth="2"/>
                    <rect x="18" y="8" width="6" height="16" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                ),
                title: "3 niveaux",
                desc: "Du débutant à l'expert, progressez à votre rythme"
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect x="4" y="8" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M4 13h24" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                ),
                title: "Explications détaillées",
                desc: "Comprenez vos erreurs pour mieux apprendre"
              }
            ].map((feature, i) => (
              <div 
                key={i}
                className="card-hover bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-200 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-success relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à commencer ?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            9 domaines • + questions • 3 niveaux de difficulté
          </p>
          <Link 
            href="/domaines"
            className="inline-flex items-center gap-3 bg-white text-secondary px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
          >
            Voir les domaines
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
