import React, { Suspense, lazy } from 'react'
const Scene = lazy(() => import('./components/3d/Scene'))
import Navbar from './components/ui/Navbar'
import Hero from './components/ui/Hero'
import Configurator from './components/ui/Configurator'
import Features from './components/ui/Features'
import Analytics from './components/ui/Analytics'
import Partners from './components/ui/Partners'
import Footer from './components/ui/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      <Navbar />

      <main>
        <Hero />

        <section id="configurator" className="h-screen w-full relative bg-neutral-900">
          <div className="absolute inset-0">
            <Suspense fallback={<div className="flex items-center justify-center h-full">Loading 3D Experience...</div>}>
              <Scene />
            </Suspense>
          </div>
          <Configurator />
        </section>

        <Features />
        <Analytics />
        <Partners />
      </main>

      <Footer />
    </div>
  )
}

export default App
