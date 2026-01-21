import React, { Suspense, lazy } from 'react'
const Scene = lazy(() => import('./components/3d/Scene'))
const Features = lazy(() => import('./components/ui/Features'))
const Analytics = lazy(() => import('./components/ui/Analytics'))
const Partners = lazy(() => import('./components/ui/Partners'))
const Footer = lazy(() => import('./components/ui/Footer'))

import Navbar from './components/ui/Navbar'
import Hero from './components/ui/Hero'
import Configurator from './components/ui/Configurator'

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

        <Suspense fallback={<div className="h-20" />}>
          <Features />
          <Analytics />
          <Partners />
        </Suspense>
      </main>

      <Suspense fallback={<div className="h-20" />}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
