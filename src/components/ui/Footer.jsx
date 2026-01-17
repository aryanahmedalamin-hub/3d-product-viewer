import React from 'react'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-6 tracking-tighter uppercase">Sumaiya's <span className="text-primary">Creations</span></h2>
            <p className="text-neutral-500 max-w-sm mb-6">
              Redefining luxury pastry in Bangladesh. Artisanal cakes for your most precious moments.
            </p>
            <div className="flex gap-4">
              <Instagram className="text-neutral-500 hover:text-primary cursor-pointer" />
              <Facebook className="text-neutral-500 hover:text-primary cursor-pointer" />
              <Twitter className="text-neutral-500 hover:text-primary cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Policies</h4>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li className="hover:text-white cursor-pointer transition-colors">Refund Policy</li>
              <li className="hover:text-white cursor-pointer transition-colors">Shipping Policy</li>
              <li className="hover:text-white cursor-pointer transition-colors">Terms of Service</li>
              <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Compliance</h4>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li>Trade License: 2024-XXXX</li>
              <li>E-TIN: XXXX-XXXX</li>
              <li>VAT Reg: XXXX-XXXX</li>
              <li>BFSA Cert: B-XXXX</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:row justify-between items-center gap-4 text-xs text-neutral-600 uppercase tracking-widest">
          <p>© 2024 Sumaiya's Creations. All rights reserved.</p>
          <div className="flex gap-8">
            <span>Bangladesh</span>
            <span>Handcrafted with Love</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
