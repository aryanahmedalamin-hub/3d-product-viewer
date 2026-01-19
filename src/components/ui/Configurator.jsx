import React from 'react'
import { useStore } from '../../store/useStore'
import { motion } from 'framer-motion'
import { Plus, Minus, Check, CreditCard } from 'lucide-react'
import { automation, sslCommerz } from '../../lib/services'

export default function Configurator() {
  const { cakeConfig, setLayers, setBaseColor, setFrosting, setFillColor, setTopper, addToCart } = useStore()

  const baseColors = [
    { name: 'Vanilla', hex: '#FDF5E6' },
    { name: 'Chocolate', hex: '#4B2512' },
    { name: 'Strawberry', hex: '#FFC0CB' },
    { name: 'Matcha', hex: '#98FB98' },
    { name: 'Red Velvet', hex: '#800020' },
  ]

  const fillColors = [
    { name: 'Dark Chocolate', hex: '#2D1606' },
    { name: 'White Cream', hex: '#FFFDD0' },
    { name: 'Raspberry', hex: '#911D1D' },
  ]

  const frostings = [
    { id: 'matte', name: 'Matte Fondant / ম্যাট ফন্ড্যান্ট' },
    { id: 'glossy', name: 'Chocolate Ganache / চকলেট গানাচে' },
    { id: 'mirror', name: 'Mirror Glaze / মিরর গ্লেজ' },
  ]

  const toppers = [
    { id: 'none', name: 'None' },
    { id: 'heart', name: 'Gold Heart' },
    { id: 'star', name: 'Gold Star' },
  ]

  return (
    <div className="absolute top-20 right-4 bottom-4 w-full max-w-sm pointer-events-none flex flex-col gap-4 p-4">
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="pointer-events-auto bg-black/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl"
      >
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="w-2 h-8 bg-primary block" />
          C.A.K.E. <span className="text-neutral-500 text-sm font-normal">Configurator</span>
        </h2>

        <div className="space-y-8">
          {/* Layers */}
          <div>
            <label className="text-xs uppercase tracking-widest text-neutral-500 mb-4 block">Layers</label>
            <div className="flex items-center gap-6">
              <button
                onClick={() => setLayers(Math.max(1, cakeConfig.layers - 1))}
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white/10"
              >
                <Minus size={16} />
              </button>
              <span className="text-2xl font-mono">{cakeConfig.layers}</span>
              <button
                onClick={() => setLayers(Math.min(5, cakeConfig.layers + 1))}
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white/10"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Base Color */}
          <div>
            <label className="text-xs uppercase tracking-widest text-neutral-500 mb-4 block">Flavor / ফ্লেভার</label>
            <div className="flex flex-wrap gap-3">
              {baseColors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setBaseColor(color.hex)}
                  className={`w-10 h-10 rounded-full border-2 transition-transform ${cakeConfig.baseColor === color.hex ? 'border-primary scale-110' : 'border-transparent'}`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Filling Color */}
          <div>
            <label className="text-xs uppercase tracking-widest text-neutral-500 mb-4 block">Filling / ফিলিং</label>
            <div className="flex flex-wrap gap-3">
              {fillColors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setFillColor(color.hex)}
                  className={`w-10 h-10 rounded-full border-2 transition-transform ${cakeConfig.fillColor === color.hex ? 'border-primary scale-110' : 'border-transparent'}`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Frosting Style */}
          <div>
            <label className="text-xs uppercase tracking-widest text-neutral-500 mb-4 block">Finish / ফিনিশ</label>
            <div className="grid grid-cols-1 gap-2">
              {frostings.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFrosting(f.id)}
                  className={`px-4 py-3 text-left text-xs border transition-colors ${cakeConfig.frosting === f.id ? 'border-primary bg-primary/10 text-primary' : 'border-white/10 hover:bg-white/5'}`}
                >
                  {f.name}
                </button>
              ))}
            </div>
          </div>

          {/* Topper */}
          <div>
            <label className="text-xs uppercase tracking-widest text-neutral-500 mb-4 block">Topper / টপার</label>
            <div className="grid grid-cols-3 gap-2">
              {toppers.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTopper(t.id)}
                  className={`py-2 text-center text-xxs border transition-colors ${cakeConfig.topper === t.id ? 'border-primary bg-primary/10 text-primary' : 'border-white/10 hover:bg-white/5'}`}
                >
                  {t.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-10">
          <button
            onClick={() => {
              addToCart({ ...cakeConfig, id: Date.now() });
              alert('Added to cart!');
            }}
            className="w-full py-4 bg-white/10 text-white font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-colors"
          >
            Add to Cart <Check size={18} />
          </button>

          <button
            onClick={async () => {
              const order = { ...cakeConfig, id: Date.now(), amount: 4500 };
              await sslCommerz.initiatePayment(order.amount);
              await automation.triggerOrderFlow(order);
              alert('Redirecting to SSLCommerz Payment Gateway...');
            }}
            className="w-full py-4 bg-primary text-black font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white transition-colors"
          >
            Buy Now <CreditCard size={18} />
          </button>
        </div>

        <div className="mt-6 p-3 bg-red-900/10 border border-red-900/20 rounded-lg">
          <p className="text-xxs text-red-500 font-bold uppercase tracking-widest mb-1">Allergen Warning / অ্যালার্জি সতর্কতা</p>
          <p className="text-tiny text-neutral-500 leading-tight">
            Contains dairy, eggs, and gluten. May contain traces of nuts. / এতে দুগ্ধজাতীয় দ্রব্য, ডিম এবং গ্লুটেন রয়েছে। বাদামের অংশ থাকতে পারে।
          </p>
        </div>

        <p className="mt-4 text-xxs text-neutral-500 text-center uppercase tracking-tighter">
          * Estimated Delivery: 5 Days (Dhaka City)
        </p>
      </motion.div>
    </div>
  )
}
