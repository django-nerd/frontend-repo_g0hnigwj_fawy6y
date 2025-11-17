import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Value from './components/Value'
import HowItWorks from './components/HowItWorks'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(800px_circle_at_10%_0%,rgba(59,130,246,0.08),transparent_40%),radial-gradient(800px_circle_at_90%_0%,rgba(99,102,241,0.08),transparent_40%)]">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Value />
        <HowItWorks />
        <CTA />
        <footer className="py-12 border-t border-gray-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} PlanExpress Pro – Ein STR8ER Produkt</p>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900">Datenschutz</a>
              <a href="#" className="hover:text-gray-900">Impressum</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
