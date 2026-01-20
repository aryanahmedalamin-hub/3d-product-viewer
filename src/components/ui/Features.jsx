import React from 'react'
import { ShieldCheck, Truck, Zap, Heart } from 'lucide-react'
import { useStore } from '../../store/useStore'

export default function Features() {
  const { language } = useStore()
  const features = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-primary" />,
      title: language === 'EN' ? "BFSA Certified" : "বিএফএসএ সার্টিফাইড",
      desc: language === 'EN' ? "100% compliant with Bangladesh Food Safety Authority standards." : "বাংলাদেশ নিরাপদ খাদ্য কর্তৃপক্ষ (BFSA) মানদণ্ডের সাথে ১০০% সঙ্গতিপূর্ণ।"
    },
    {
      icon: <Truck className="w-10 h-10 text-primary" />,
      title: language === 'EN' ? "Nationwide Delivery" : "দেশব্যাপী ডেলিভারি",
      desc: language === 'EN' ? "Specialized cold-chain logistics for inter-city shipping." : "আন্তঃ-শহর শিপিংয়ের জন্য বিশেষ কোল্ড-চেইন লজিস্টিক।"
    },
    {
      icon: <Zap className="w-10 h-10 text-primary" />,
      title: language === 'EN' ? "Live Tracking" : "লাইভ ট্র্যাকিং",
      desc: language === 'EN' ? "Real-time updates via WhatsApp and SMS for every order." : "প্রতিটি অর্ডারের জন্য হোয়াটসঅ্যাপ এবং এসএমএস-এর মাধ্যমে রিয়েল-টাইম আপডেট।"
    },
    {
      icon: <Heart className="w-10 h-10 text-primary" />,
      title: language === 'EN' ? "Artisanal Quality" : "কারুকার্যময় গুণমান",
      desc: language === 'EN' ? "Hand-crafted by master pastry chefs with premium ingredients." : "প্রিমিয়াম উপকরণ দিয়ে মাস্টার পেস্ট্রি শেফদের হাতে তৈরি।"
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
