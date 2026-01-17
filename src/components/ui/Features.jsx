import React from 'react'
import { ShieldCheck, Truck, Zap, Heart } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-primary" />,
      title: "BFSA Certified",
      desc: "100% compliant with Bangladesh Food Safety Authority standards."
    },
    {
      icon: <Truck className="w-10 h-10 text-primary" />,
      title: "Nationwide Delivery",
      desc: "Specialized cold-chain logistics for inter-city shipping."
    },
    {
      icon: <Zap className="w-10 h-10 text-primary" />,
      title: "Live Tracking",
      desc: "Real-time updates via WhatsApp and SMS for every order."
    },
    {
      icon: <Heart className="w-10 h-10 text-primary" />,
      title: "Artisanal Quality",
      desc: "Hand-crafted by master pastry chefs with premium ingredients."
    }
  ]

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-widest">{f.title}</h3>
              <p className="text-neutral-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
