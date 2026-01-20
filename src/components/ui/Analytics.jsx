import React from 'react'
import { TrendingUp, DollarSign, Users, Activity, MessageSquare, Truck, BarChart3, Bell } from 'lucide-react'
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

        {/* Animated Integration Hub */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-xl font-bold uppercase tracking-widest mb-2">n8n Automation Hub</h3>
            <p className="text-neutral-500 text-sm">Real-time synchronized ecosystem for logistics, payments, and support.</p>
          </div>

          <div className="relative h-64 flex items-center justify-center">
            {/* Center Node */}
            <div className="z-10 bg-primary p-6 rounded-2xl shadow-[0_0_50px_rgba(212,175,55,0.3)]">
              <BarChart3 className="text-black w-8 h-8" />
            </div>

            {/* Orbiting Nodes */}
            {[
              { icon: <MessageSquare size={20} />, label: 'WhatsApp', delay: 0 },
              { icon: <Truck size={20} />, label: 'Logistics', delay: 1.5 },
              { icon: <Bell size={20} />, label: 'Alerts', delay: 3 },
              { icon: <DollarSign size={20} />, label: 'Finance', delay: 4.5 },
            ].map((node, i) => (
              <motion.div
                key={i}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                  delay: node.delay
                }}
                className="absolute w-48 h-48 pointer-events-none"
              >
                <div className="relative w-full h-full">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-neutral-800 border border-white/10 rounded-xl pointer-events-auto flex flex-col items-center gap-2">
                    <div className="text-primary">{node.icon}</div>
                    <span className="text-[10px] uppercase font-bold tracking-tighter">{node.label}</span>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Orbit Paths */}
            <div className="absolute w-48 h-48 border border-white/5 rounded-full" />
            <div className="absolute w-72 h-72 border border-white/5 rounded-full opacity-50" />
          </div>
        </div>
      </div>
    </section>
  )
}
