import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'SanteDrill - Quiz Médicaux',
  description: 'Testez vos connaissances médicales',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta
          name="google-site-verification"
          content="_b3fm2AxOVPiw8XLLv0vbOUbycCHoUjiDyaXpBfLSIU"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

