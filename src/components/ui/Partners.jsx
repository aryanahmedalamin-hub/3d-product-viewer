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
            <span key={i} className="text-2xl font-black text-neutral-700 uppercase tracking-[0.2em]">{p}</span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
