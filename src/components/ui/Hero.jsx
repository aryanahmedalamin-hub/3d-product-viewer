import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useStore } from '../../store/useStore'
import { ShieldCheck, Truck } from 'lucide-react'

export default function Hero() {
  const { language } = useStore()
  const videoRef = useRef(null)
  const hlsSource = 'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8' // Placeholder HLS source

  useEffect(() => {
    if (videoRef.current) {
      const loadVideo = async () => {
        if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
          videoRef.current.src = hlsSource
        } else {
          const { default: Hls } = await import('hls.js')
          if (Hls.isSupported()) {
            const hls = new Hls()
            hls.loadSource(hlsSource)
            hls.attachMedia(videoRef.current)
          }
        }
      }
      loadVideo()
    }
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>

      {/* Compliance & Trust Badges */}
      <div className="absolute top-24 left-8 z-20 hidden md:flex flex-col gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full"
        >
          <ShieldCheck className="text-primary w-5 h-5" />
          <span className="text-xxs uppercase tracking-widest font-bold">BFSA Certified / বিএফএসএ অনুমোদিত</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full"
        >
          <Truck className="text-primary w-5 h-5" />
          <div className="flex flex-col">
            <span className="text-micro uppercase tracking-tighter text-neutral-400">Delivery Timeline</span>
            <span className="text-tiny font-bold uppercase tracking-widest">5D Local / 10D Inter-city</span>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 tracking-tighter"
        >
          {language === 'EN' ? (
            <>ART YOU CAN <span className="text-primary italic">TASTE</span></>
          ) : (
            <>শিল্প যা আপনি <span className="text-primary italic">আস্বাদন</span> করতে পারেন</>
          )}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto mb-10 font-light"
        >
          {language === 'EN'
            ? "Luxury artisanal cakes handcrafted in Bangladesh. Where every layer tells a story of elegance and flavor."
            : "বাংলাদেশে হাতে তৈরি বিলাসবহুল কারুকার্যময় কেক। যেখানে প্রতিটি স্তর কমনীয়তা এবং স্বাদের গল্প বলে।"}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#configurator"
            className="px-8 py-4 bg-primary text-black font-bold rounded-none hover:bg-white transition-colors duration-300 uppercase tracking-widest"
          >
            {language === 'EN' ? 'Start Creating' : 'তৈরি করা শুরু করুন'}
          </a>
          <button
            className="px-8 py-4 border border-white/20 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 uppercase tracking-widest"
          >
            {language === 'EN' ? 'View Collection' : 'কালেকশন দেখুন'}
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  )
}
