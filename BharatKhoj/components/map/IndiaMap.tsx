'use client';
import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface StateMarker {
  id: string;
  name: string;
  slug: string;
  x: string; // percentage
  y: string; // percentage
  available: boolean;
}

const STATE_MARKERS: StateMarker[] = [
  // Available states
  { id: 'mh', name: 'Maharashtra',    slug: 'maharashtra',       x: '31%', y: '55%', available: true  },
  { id: 'br', name: 'Bihar',          slug: 'bihar',             x: '56%', y: '32%', available: true  },
  { id: 'tn', name: 'Tamil Nadu',     slug: 'tamil-nadu',        x: '38%', y: '79%', available: true  },
  // Coming soon states
  { id: 'rj', name: 'Rajasthan',      slug: 'rajasthan',         x: '24%', y: '34%', available: false },
  { id: 'gj', name: 'Gujarat',        slug: 'gujarat',           x: '18%', y: '47%', available: false },
  { id: 'up', name: 'Uttar Pradesh',  slug: 'uttar-pradesh',     x: '45%', y: '30%', available: false },
  { id: 'mp', name: 'Madhya Pradesh', slug: 'madhya-pradesh',    x: '38%', y: '43%', available: false },
  { id: 'ka', name: 'Karnataka',      slug: 'karnataka',         x: '30%', y: '68%', available: false },
  { id: 'ke', name: 'Kerala',         slug: 'kerala',            x: '27%', y: '77%', available: false },
  { id: 'ap', name: 'Andhra Pradesh', slug: 'andhra-pradesh',    x: '42%', y: '65%', available: false },
  { id: 'tg', name: 'Telangana',      slug: 'telangana',         x: '40%', y: '57%', available: false },
  { id: 'od', name: 'Odisha',         slug: 'odisha',            x: '55%', y: '48%', available: false },
  { id: 'jh', name: 'Jharkhand',      slug: 'jharkhand',         x: '56%', y: '40%', available: false },
  { id: 'wb', name: 'West Bengal',    slug: 'west-bengal',       x: '64%', y: '38%', available: false },
  { id: 'as', name: 'Assam',          slug: 'assam',             x: '76%', y: '28%', available: false },
  { id: 'pb', name: 'Punjab',         slug: 'punjab',            x: '28%', y: '19%', available: false },
  { id: 'hr', name: 'Haryana',        slug: 'haryana',           x: '33%', y: '23%', available: false },
  { id: 'hp', name: 'Himachal',       slug: 'himachal-pradesh',  x: '34%', y: '15%', available: false },
  { id: 'uk', name: 'Uttarakhand',    slug: 'uttarakhand',       x: '40%', y: '18%', available: false },
  { id: 'ga', name: 'Goa',            slug: 'goa',               x: '24%', y: '62%', available: false },
  { id: 'cg', name: 'Chhattisgarh',   slug: 'chhattisgarh',      x: '47%', y: '51%', available: false },
  { id: 'jk', name: 'J&K',            slug: 'jammu-kashmir',     x: '28%', y: '9%',  available: false },
  { id: 'dl', name: 'Delhi',          slug: 'delhi',             x: '36%', y: '25%', available: false },
];

interface TooltipState {
  marker: StateMarker;
  x: number;
  y: number;
}

interface IndiaMapProps {
  onStateSelect: (slug: string) => void;
}

export default function IndiaMap({ onStateSelect }: IndiaMapProps) {
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const [clicked, setClicked] = useState<string | null>(null);

  const handleClick = useCallback(
    (marker: StateMarker) => {
      if (!marker.available) return;
      setClicked(marker.id);
      setTimeout(() => {
        onStateSelect(marker.slug);
      }, 400);
    },
    [onStateSelect],
  );

  const handleMouseEnter = useCallback(
    (marker: StateMarker, e: React.MouseEvent) => {
      const rect = (e.currentTarget as HTMLElement)
        .closest('.india-map-root')
        ?.getBoundingClientRect();
      if (rect) {
        setTooltip({
          marker,
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    },
    [],
  );

  return (
    <div
      className="india-map-root"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '640px',
        margin: '0 auto',
        userSelect: 'none',
      }}
    >
      {/* India Outline SVG — simplified but recognizable shape */}
      <svg
        viewBox="0 0 600 700"
        style={{ width: '100%', height: 'auto', display: 'block' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="mapGrad" cx="40%" cy="40%">
            <stop offset="0%" stopColor="#FBF0E4" />
            <stop offset="100%" stopColor="#F5E6CC" />
          </radialGradient>
        </defs>

        {/* India landmass — simplified path */}
        <path
          d="
            M 168,48 L 200,42 L 240,38 L 280,44 L 320,50 L 360,58 L 390,72
            L 410,90 L 420,110 L 430,130 L 435,150 L 440,170 L 450,190
            L 460,205 L 475,215 L 490,225 L 500,240 L 505,260 L 500,280
            L 490,295 L 480,308 L 475,322 L 478,335 L 482,348 L 480,365
            L 472,380 L 460,392 L 448,402 L 438,415 L 425,428 L 412,440
            L 400,452 L 388,465 L 375,478 L 362,490 L 348,505 L 335,520
            L 322,535 L 308,550 L 295,568 L 282,585 L 270,600 L 260,618
            L 252,630 L 248,645 L 244,655
            L 238,650 L 232,638 L 226,622 L 220,608 L 213,592 L 206,576
            L 198,558 L 190,542 L 182,525 L 174,508 L 165,492 L 156,475
            L 148,458 L 140,440 L 134,422 L 128,403 L 122,385 L 118,366
            L 116,346 L 114,326 L 112,305 L 110,285 L 108,264
            L 106,242 L 105,220 L 104,198 L 105,176 L 108,155
            L 112,135 L 118,116 L 126,98 L 136,82 L 148,66 L 160,54 Z
          "
          fill="url(#mapGrad)"
          stroke="#E0B17D"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Kashmir region */}
        <path
          d="M 168,48 L 160,38 L 155,28 L 165,18 L 178,12 L 195,8 L 215,6 L 235,10 L 255,16 L 270,26 L 280,38 L 280,44 L 240,38 Z"
          fill="#F5E6CC"
          stroke="#E0B17D"
          strokeWidth="1.5"
        />

        {/* Northeast region */}
        <path
          d="M 410,90 L 430,80 L 455,72 L 478,68 L 498,70 L 512,80 L 520,94 L 515,108 L 505,118 L 490,122 L 475,118 L 460,110 Z"
          fill="#F5E6CC"
          stroke="#E0B17D"
          strokeWidth="1.5"
        />

        {/* Sri Lanka suggestion */}
        <ellipse
          cx="278"
          cy="672"
          rx="18"
          ry="26"
          fill="none"
          stroke="#E8D5BC"
          strokeWidth="1"
          strokeDasharray="4,3"
        />
      </svg>

      {/* State Markers — positioned absolutely over the SVG */}
      {STATE_MARKERS.map(marker => (
        <div
          key={marker.id}
          style={{
            position: 'absolute',
            left: marker.x,
            top: marker.y,
            transform: 'translate(-50%, -50%)',
            zIndex: marker.available ? 5 : 3,
          }}
        >
          <motion.div
            whileHover={marker.available ? { scale: 1.3 } : { scale: 1.1 }}
            whileTap={marker.available ? { scale: 0.9 } : {}}
            onClick={() => handleClick(marker)}
            onMouseEnter={e => handleMouseEnter(marker, e)}
            onMouseLeave={() => setTooltip(null)}
            animate={
              clicked === marker.id
                ? { scale: [1, 1.8, 0], opacity: [1, 1, 0] }
                : {}
            }
            style={{
              cursor: marker.available ? 'pointer' : 'default',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {marker.available ? (
              <>
                {/* Pulse ring */}
                <motion.div
                  animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeOut',
                    delay: Math.random() * 2,
                  }}
                  style={{
                    position: 'absolute',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: '#AB5419',
                    opacity: 0.3,
                  }}
                />
                {/* Main dot */}
                <div
                  style={{
                    width: '14px',
                    height: '14px',
                    background: '#AB5419',
                    borderRadius: '50%',
                    border: '2.5px solid #ffffff',
                    boxShadow: '0 2px 8px rgba(171,84,25,0.5)',
                    position: 'relative',
                    zIndex: 2,
                  }}
                />
              </>
            ) : (
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  background: '#D4BFA0',
                  borderRadius: '50%',
                  border: '1.5px solid #ffffff',
                  opacity: 0.7,
                }}
              />
            )}
          </motion.div>

          {/* State label for available states */}
          {marker.available && (
            <div
              style={{
                position: 'absolute',
                top: '18px',
                left: '50%',
                transform: 'translateX(-50%)',
                whiteSpace: 'nowrap',
                fontSize: '9px',
                fontWeight: '700',
                color: '#AB5419',
                background: 'rgba(253,246,238,0.9)',
                padding: '1px 5px',
                borderRadius: '4px',
                border: '1px solid #E8D5BC',
                pointerEvents: 'none',
              }}
            >
              {marker.name}
            </div>
          )}
        </div>
      ))}

      {/* Tooltip */}
      <AnimatePresence>
        {tooltip && (
          <motion.div
            key={tooltip.marker.id}
            initial={{ opacity: 0, y: 4, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            style={{
              position: 'absolute',
              left: `${Math.min(tooltip.x, 75)}%`,
              top: `${tooltip.y - 10}%`,
              transform: 'translate(-50%, -100%)',
              zIndex: 20,
              pointerEvents: 'none',
              background: '#1A0F08',
              color: '#FDF6EE',
              padding: '0.5rem 0.875rem',
              borderRadius: '10px',
              fontSize: '0.78rem',
              fontWeight: '500',
              whiteSpace: 'nowrap',
              boxShadow: '0 8px 24px rgba(26,15,8,0.25)',
            }}
          >
            <div style={{ fontWeight: '700', marginBottom: '2px' }}>
              {tooltip.marker.name}
            </div>
            <div
              style={{
                color: tooltip.marker.available ? '#E0B17D' : '#928464',
                fontSize: '0.72rem',
              }}
            >
              {tooltip.marker.available ? 'Click to Explore →' : 'Coming Soon'}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
