'use client';
import { use, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Package, Printer, ShoppingCart, X } from 'lucide-react';
import { states } from '@/data/states';
import { Toy } from '@/types';
import { getCategoryIcon } from '@/lib/utils';

function ToyModelViewer({ toy }: { toy: Toy }) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * -30;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
    setRotation({ x, y });
  };

  return (
    <div
      className="perspective-container w-full h-80 flex items-center justify-center cursor-move"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRotation({ x: 0, y: 0 })}
    >
      <motion.div
        animate={{ rotateX: rotation.x, rotateY: rotation.y }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
        className="relative w-64 h-64 rounded-3xl flex items-center justify-center"
        style={{
          background: `radial-gradient(ellipse at center, ${toy.stateId === 'maharashtra' ? '#FF6B3520' : '#D4A84320'}, transparent)`,
          boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
          border: '1px solid rgba(255,255,255,0.1)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Layered depth elements */}
        <motion.div
          className="absolute inset-4 rounded-2xl opacity-20"
          style={{
            background: 'linear-gradient(135deg, rgba(255,107,53,0.3), rgba(212,168,67,0.3))',
            transform: 'translateZ(-20px)',
          }}
        />
        <motion.div
          className="absolute inset-8 rounded-xl opacity-10"
          style={{
            background: 'rgba(255,255,255,0.1)',
            transform: 'translateZ(-40px)',
          }}
        />

        {/* Main toy icon */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="text-[120px] relative z-10"
          style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))' }}
        >
          {getCategoryIcon(toy.category)}
        </motion.div>

        {/* Floating shadow */}
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 w-24 h-4 rounded-full opacity-40"
          style={{ background: 'radial-gradient(ellipse, rgba(0,0,0,0.6), transparent)', filter: 'blur(8px)' }}
        />
      </motion.div>
    </div>
  );
}

function OrderModal({ toy, onClose }: { toy: Toy; onClose: () => void }) {
  const [type, setType] = useState<'physical' | '3d_print'>('physical');
  const [form, setForm] = useState({ name: '', phone: '', address: '', city: '', pincode: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 40 }}
        onClick={e => e.stopPropagation()}
        className="glass-dark rounded-3xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-display text-2xl font-bold text-white">Get {toy.name}</h3>
          <button onClick={onClose} className="text-white/30 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="text-center py-8">
            <div className="text-6xl mb-4">✅</div>
            <h4 className="font-display text-xl font-bold text-white mb-2">Order Submitted!</h4>
            <p className="text-white/60 text-sm">
              Your request for <strong>{toy.name}</strong> has been submitted.
              Our artisan partners will contact you within 48 hours.
            </p>
            <button onClick={onClose} className="mt-6 glass px-6 py-3 rounded-full text-white/70 hover:text-white transition-colors">
              Close
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleOrder} className="space-y-4">
            {/* Order type */}
            <div className="flex gap-3 mb-6">
              <button
                type="button"
                onClick={() => setType('physical')}
                className={`flex-1 py-3 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-all ${
                  type === 'physical' ? 'text-white' : 'glass text-white/50'
                }`}
                style={type === 'physical' ? { background: 'linear-gradient(135deg, #FF6B35, #D4A843)' } : {}}
              >
                <Package className="w-4 h-4" />
                Physical Toy ₹{toy.price.physical || 'N/A'}
              </button>
              {toy.price.printed3D && (
                <button
                  type="button"
                  onClick={() => setType('3d_print')}
                  className={`flex-1 py-3 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-all ${
                    type === '3d_print' ? 'text-white' : 'glass text-white/50'
                  }`}
                  style={type === '3d_print' ? { background: 'linear-gradient(135deg, #7C3AED, #2563EB)' } : {}}
                >
                  <Printer className="w-4 h-4" />
                  3D Print ₹{toy.price.printed3D}
                </button>
              )}
            </div>

            <input
              required
              placeholder="Full Name"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="w-full glass rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none"
            />
            <input
              required
              placeholder="Phone Number"
              value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
              className="w-full glass rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none"
            />
            <textarea
              required
              placeholder="Delivery Address"
              value={form.address}
              onChange={e => setForm({ ...form, address: e.target.value })}
              className="w-full glass rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none resize-none h-20"
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                required
                placeholder="City"
                value={form.city}
                onChange={e => setForm({ ...form, city: e.target.value })}
                className="w-full glass rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none"
              />
              <input
                required
                placeholder="PIN Code"
                value={form.pincode}
                onChange={e => setForm({ ...form, pincode: e.target.value })}
                className="w-full glass rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 mt-2"
              style={{ background: 'linear-gradient(135deg, #FF6B35, #D4A843)' }}
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              ) : (
                <><ShoppingCart className="w-5 h-5" /> Place Order</>
              )}
            </button>

            <p className="text-white/30 text-xs text-center">
              Orders are fulfilled by registered artisan partners &amp; 3D printing vendors
            </p>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function ToyDetailPage({ params }: { params: Promise<{ toyId: string }> }) {
  const { toyId } = use(params);
  const router = useRouter();
  const [showOrderModal, setShowOrderModal] = useState(false);

  const toy = states.flatMap(s => s.toys).find(t => t.id === toyId);

  if (!toy) {
    return (
      <div className="min-h-screen bg-midnight-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🏺</div>
          <h2 className="font-display text-2xl text-white mb-2">Toy Not Found</h2>
          <button onClick={() => router.back()} className="text-saffron-400 mt-4">← Go Back</button>
        </div>
      </div>
    );
  }

  const relatedToys = states.flatMap(s => s.toys).filter(t => toy.relatedToys.includes(t.id));

  return (
    <div className="min-h-screen bg-midnight-900 text-cream">
      {/* Header */}
      <div className="glass-dark border-b border-white/10 px-4 py-4 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button onClick={() => router.back()} className="flex items-center gap-2 text-white/50 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <div className="flex items-center gap-2">
            <span className="text-white/30 text-sm">{toy.stateName}</span>
            <span className="text-white/20">›</span>
            <span className="text-white text-sm">Toys</span>
          </div>
          <button
            onClick={() => setShowOrderModal(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white"
            style={{ background: 'linear-gradient(135deg, #FF6B35, #D4A843)' }}
          >
            <ShoppingCart className="w-4 h-4" /> Get Toy
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Model Viewer */}
          <div>
            <ToyModelViewer toy={toy} />
            <p className="text-center text-white/30 text-xs mt-2">Move mouse over model to rotate</p>
          </div>

          {/* Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs px-3 py-1 rounded-full glass text-white/50 capitalize">{toy.category}</span>
              {toy.badge && <span className="text-xs px-3 py-1 rounded-full glass-gold text-gold-300">{toy.badge}</span>}
            </div>

            <h1 className="font-display font-black text-5xl text-white mb-2">{toy.name}</h1>
            <p className="text-saffron-400 mb-6">{toy.stateName} • {toy.period}</p>

            <p className="text-white/70 text-lg leading-relaxed mb-8">{toy.description}</p>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-white mb-2">🌟 Cultural Significance</h3>
                <p className="text-white/60 text-sm leading-relaxed">{toy.significance}</p>
              </div>
              <div>
                <h3 className="font-bold text-white mb-2">🪵 Materials</h3>
                <div className="flex flex-wrap gap-2">
                  {toy.materials.map((m, i) => (
                    <span key={i} className="glass px-3 py-1 rounded-full text-xs text-white/60">{m}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-white mb-2">🎯 How It Was Used</h3>
                <p className="text-white/60 text-sm leading-relaxed">{toy.howUsed}</p>
              </div>
              <div>
                <h3 className="font-bold text-white mb-2">📜 Historical Background</h3>
                <p className="text-white/60 text-sm leading-relaxed">{toy.history}</p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex gap-3 mt-10">
              <button
                onClick={() => setShowOrderModal(true)}
                className="flex-1 py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2"
                style={{ background: 'linear-gradient(135deg, #FF6B35, #D4A843)', boxShadow: '0 0 30px rgba(255,107,53,0.3)' }}
              >
                <Package className="w-5 h-5" /> Get Physical Toy — ₹{toy.price.physical || 'Request Price'}
              </button>
              {toy.price.printed3D && (
                <button
                  onClick={() => setShowOrderModal(true)}
                  className="glass px-6 py-4 rounded-xl font-medium text-white/70 hover:text-white flex items-center gap-2 transition-colors"
                >
                  <Printer className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Related Toys */}
        {relatedToys.length > 0 && (
          <div>
            <h2 className="font-display text-3xl font-bold text-white mb-6">Related Cultural Objects</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedToys.map((related) => (
                <motion.div
                  key={related.id}
                  whileHover={{ y: -6, scale: 1.02 }}
                  onClick={() => router.push(`/toy/${related.id}`)}
                  className="glass rounded-2xl p-6 cursor-pointer hover:shadow-cultural transition-all"
                >
                  <div className="text-5xl mb-3">{getCategoryIcon(related.category)}</div>
                  <h3 className="font-bold text-white mb-1">{related.name}</h3>
                  <p className="text-saffron-400 text-sm">{related.stateName}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Order Modal */}
      <AnimatePresence>
        {showOrderModal && <OrderModal toy={toy} onClose={() => setShowOrderModal(false)} />}
      </AnimatePresence>
    </div>
  );
}
