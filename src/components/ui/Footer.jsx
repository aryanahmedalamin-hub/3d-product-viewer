import React from 'react'
import { Instagram, Facebook, Twitter } from 'lucide-react'
import { useStore } from '../../store/useStore'

export default function Footer() {
  const { language } = useStore()
  return (
    <footer className="bg-neutral-950 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-6 tracking-tighter uppercase">Sumaiya's <span className="text-primary">Creations</span></h2>
            <p className="text-neutral-500 max-w-sm mb-6">
              {language === 'EN'
                ? "Redefining luxury pastry in Bangladesh. Artisanal cakes for your most precious moments."
                : "বাংলাদেশে বিলাসবহুল পেস্ট্রির নতুন সংজ্ঞা। আপনার সবচেয়ে মূল্যবান মুহূর্তগুলোর জন্য কারুকার্যময় কেক।"}
            </p>
            <div className="flex gap-4">
              <Instagram className="text-neutral-500 hover:text-primary cursor-pointer" />
              <Facebook className="text-neutral-500 hover:text-primary cursor-pointer" />
              <Twitter className="text-neutral-500 hover:text-primary cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">
              {language === 'EN' ? 'Policies' : 'পলিসি'}
            </h4>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li className="hover:text-white cursor-pointer transition-colors">{language === 'EN' ? 'Refund Policy' : 'ফেরত পলিসি'}</li>
              <li className="hover:text-white cursor-pointer transition-colors">{language === 'EN' ? 'Shipping Policy' : 'শিপিং পলিসি'}</li>
              <li className="hover:text-white cursor-pointer transition-colors">{language === 'EN' ? 'Terms of Service' : 'সেবার শর্তাবলী'}</li>
              <li className="hover:text-white cursor-pointer transition-colors">{language === 'EN' ? 'Privacy Policy' : 'গোপনীয়তা পলিসি'}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">
              {language === 'EN' ? 'Compliance' : 'কমপ্লায়েন্স'}
            </h4>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li className="flex flex-col">
                <span className="text-[10px] text-neutral-600">Trade License</span>
                <span>2024-SC-10293</span>
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] text-neutral-600">E-TIN / UBIN</span>
                <span>4582-9012-3345 / 00234</span>
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] text-neutral-600">VAT Registration</span>
                <span>000239485-0203</span>
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] text-neutral-600">BFSA Certification</span>
                <span>BFSA-DHK-2024-88</span>
              </li>
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
