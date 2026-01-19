import React from 'react'
import { motion } from 'framer-motion'

export default function Partners() {
  const partners = [
    "Dhaka Regency", "Pan Pacific Sonargaon", "InterContinental Dhaka", "Radisson Blu", "Lakeshore Hotel"
  ]

  return (
    <div className="py-12 bg-neutral-900 overflow-hidden border-y border-white/5">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 items-center px-10"
        >
          {partners.concat(partners).map((p, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <svg className="w-8 h-8 text-neutral-800 group-hover:text-primary transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                <path d="M2 17L12 22L22 17" />
                <path d="M2 12L12 17L22 12" />
              </svg>
              <span className="text-2xl font-black text-neutral-700 group-hover:text-neutral-500 transition-colors uppercase tracking-widest-plus">{p}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
