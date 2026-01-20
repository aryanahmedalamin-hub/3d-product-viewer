import React from 'react'
import { Cake, ShoppingCart, User, Menu } from 'lucide-react'
import { useStore } from '../../store/useStore'

export default function Navbar() {
  const cart = useStore((state) => state.cart)
  const { language, setLanguage } = useStore()
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Cake className="text-primary w-8 h-8" />
            <span className="text-xl font-bold tracking-tighter uppercase">Sumaiya's <span className="text-primary">Creations</span></span>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest font-medium">
            <a href="#" className="hover:text-primary transition-colors">
              {language === 'EN' ? 'Home' : 'হোম'}
            </a>
            <a href="#configurator" className="hover:text-primary transition-colors">
              {language === 'EN' ? 'Design Your Cake' : 'আপনার কেক ডিজাইন করুন'}
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              {language === 'EN' ? 'Gallery' : 'গ্যালারি'}
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              {language === 'EN' ? 'Contact' : 'যোগাযোগ'}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === 'EN' ? 'BN' : 'EN')}
              className="text-xs font-bold border border-white/20 px-2 py-1 hover:bg-white/10"
            >
              {language === 'EN' ? 'BN' : 'EN'}
            </button>
            <button className="p-2 hover:text-primary transition-colors relative">
              <ShoppingCart size={20} />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-black text-xxs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
            <button className="p-2 hover:text-primary transition-colors"><User size={20} /></button>
            <button className="md:hidden p-2"><Menu size={20} /></button>
          </div>
        </div>
      </div>
    </nav>
  )
}
