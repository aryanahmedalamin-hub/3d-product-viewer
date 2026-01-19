import React from 'react'
import { TrendingUp, DollarSign, Users, Activity } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Analytics() {
  const stats = [
    { label: 'Estimated ROI', value: '+32.4%', icon: <TrendingUp className="text-emerald-500" /> },
    { label: 'Projected Cashflow', value: '৳ 1.2M', icon: <DollarSign className="text-primary" /> },
    { label: 'User Engagement', value: '88%', icon: <Users className="text-blue-500" /> },
    { label: 'Conversion Rate', value: '4.2%', icon: <Activity className="text-purple-500" /> },
  ]

  return (
    <section className="py-24 bg-neutral-900 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold uppercase tracking-widest mb-4">Market Predictive Analytics</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            Real-time projections based on current engagement and market trends in the luxury artisanal sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 bg-black border border-white/10 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/5 rounded-xl">
                  {stat.icon}
                </div>
                <span className="text-xs font-mono text-neutral-600">PREDICTIVE</span>
              </div>
              <p className="text-neutral-500 text-sm uppercase tracking-wider mb-2">{stat.label}</p>
              <p className="text-3xl font-bold font-mono">{stat.value}</p>

              <div className="mt-6 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '70%' }}
                  className="h-full bg-primary/20"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
