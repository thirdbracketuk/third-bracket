// 'use client'

// import React, { useEffect, useRef, useState } from 'react'
// import { FaGithub, FaBehance, FaExternalLinkAlt } from 'react-icons/fa'
// import { Media } from '@/components/Media'
// import type { Work, Media as MediaType } from '@/payload-types'

// function useScrollY() {
//   const [y, setY] = useState(0)
//   useEffect(() => {
//     const handler = () => setY(window.scrollY)
//     window.addEventListener('scroll', handler, { passive: true })
//     return () => window.removeEventListener('scroll', handler)
//   }, [])
//   return y
// }

// function useInView(threshold = 0.15) {
//   const ref = useRef<HTMLDivElement>(null)
//   const [visible, setVisible] = useState(false)
//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([e]) => {
//         if (e.isIntersecting) {
//           setVisible(true)
//           obs.disconnect()
//         }
//       },
//       { threshold },
//     )
//     if (ref.current) obs.observe(ref.current)
//     return () => obs.disconnect()
//   }, [])
//   return [ref, visible] as const
// }

// function Reveal({
//   children,
//   delay = 0,
//   className = '',
// }: {
//   children: React.ReactNode
//   delay?: number
//   className?: string
// }) {
//   const [ref, visible] = useInView()
//   return (
//     <div
//       ref={ref}
//       className={className}
//       style={{
//         opacity: visible ? 1 : 0,
//         transform: visible ? 'translateY(0)' : 'translateY(24px)',
//         transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
//       }}
//     >
//       {children}
//     </div>
//   )
// }

// function BrowserMockup({
//   accent,
//   image,
//   title,
// }: {
//   accent: string
//   image?: MediaType | null
//   title: string
// }) {
//   return (
//     <div
//       style={{
//         background: '#161616',
//         borderRadius: 14,
//         overflow: 'hidden',
//         border: '1px solid #2a2a2a',
//         boxShadow: '0 48px 96px rgba(0,0,0,0.55)',
//       }}
//     >
//       <div
//         style={{
//           background: '#1f1f1f',
//           padding: '10px 16px',
//           display: 'flex',
//           alignItems: 'center',
//           gap: 8,
//           borderBottom: '1px solid #2a2a2a',
//         }}
//       >
//         <div style={{ display: 'flex', gap: 6 }}>
//           {['#ff5f57', '#ffbd2e', '#28c840'].map((c) => (
//             <div key={c} style={{ width: 11, height: 11, borderRadius: '50%', background: c }} />
//           ))}
//         </div>
//         <div
//           style={{
//             flex: 1,
//             background: '#111',
//             borderRadius: 6,
//             padding: '4px 12px',
//             fontSize: 11,
//             color: '#555',
//             fontFamily: 'monospace',
//             overflow: 'hidden',
//             whiteSpace: 'nowrap',
//             textOverflow: 'ellipsis',
//           }}
//         >
//           {title.toLowerCase().replace(/\s+/g, '')}.co.uk
//         </div>
//         <div
//           style={{ width: 8, height: 8, borderRadius: '50%', background: accent, opacity: 0.7 }}
//         />
//       </div>
//       <div style={{ position: 'relative', aspectRatio: '16/10', background: '#0d0d0d' }}>
//         {image && typeof image !== 'number' ? (
//           <Media resource={image} fill imgClassName="object-cover object-top" />
//         ) : (
//           <div
//             style={{
//               position: 'absolute',
//               inset: 0,
//               display: 'flex',
//               flexDirection: 'column',
//               padding: '28px 24px',
//               gap: 16,
//             }}
//           >
//             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//               <div style={{ width: 80, height: 10, borderRadius: 4, background: '#2a2a2a' }} />
//               <div style={{ display: 'flex', gap: 10 }}>
//                 {[60, 50, 55].map((w, i) => (
//                   <div
//                     key={i}
//                     style={{ width: w, height: 8, borderRadius: 4, background: '#222' }}
//                   />
//                 ))}
//               </div>
//             </div>
//             <div
//               style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12, paddingTop: 20 }}
//             >
//               <div
//                 style={{
//                   width: '55%',
//                   height: 28,
//                   borderRadius: 6,
//                   background: `linear-gradient(90deg, ${accent}44, ${accent}22)`,
//                 }}
//               />
//               <div style={{ width: '72%', height: 18, borderRadius: 4, background: '#2a2a2a' }} />
//               <div style={{ width: '40%', height: 14, borderRadius: 4, background: '#1e1e1e' }} />
//               <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
//                 <div
//                   style={{
//                     width: 100,
//                     height: 32,
//                     borderRadius: 100,
//                     background: accent,
//                     opacity: 0.85,
//                   }}
//                 />
//                 <div
//                   style={{
//                     width: 80,
//                     height: 32,
//                     borderRadius: 100,
//                     background: '#222',
//                     border: '1px solid #333',
//                   }}
//                 />
//               </div>
//             </div>
//             <div
//               style={{
//                 position: 'absolute',
//                 bottom: -40,
//                 right: -40,
//                 width: 200,
//                 height: 200,
//                 borderRadius: '50%',
//                 background: `${accent}18`,
//                 filter: 'blur(50px)',
//                 pointerEvents: 'none',
//               }}
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// function MobileMockup({ accent, image }: { accent: string; image?: MediaType | null }) {
//   return (
//     <div
//       style={{
//         width: 160,
//         flexShrink: 0,
//         background: '#161616',
//         borderRadius: 28,
//         border: '1px solid #2a2a2a',
//         overflow: 'hidden',
//         boxShadow: '0 32px 64px rgba(0,0,0,0.5)',
//         alignSelf: 'center',
//         marginTop: 48,
//       }}
//     >
//       <div
//         style={{
//           background: '#0a0a0a',
//           height: 18,
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <div style={{ width: 52, height: 4, background: '#1f1f1f', borderRadius: 10 }} />
//       </div>
//       <div style={{ position: 'relative', aspectRatio: '9/18', background: '#0d0d0d' }}>
//         {image && typeof image !== 'number' ? (
//           <Media resource={image} fill imgClassName="object-cover object-top" />
//         ) : (
//           <div style={{ position: 'absolute', inset: 0, padding: '14px 12px' }}>
//             <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
//               <div style={{ width: 24, height: 6, borderRadius: 3, background: '#2a2a2a' }} />
//               <div style={{ width: 32, height: 6, borderRadius: 3, background: '#222' }} />
//             </div>
//             <div
//               style={{
//                 width: '70%',
//                 height: 12,
//                 borderRadius: 4,
//                 background: `${accent}55`,
//                 marginBottom: 10,
//               }}
//             />
//             <div
//               style={{
//                 width: '90%',
//                 height: 8,
//                 borderRadius: 3,
//                 background: '#2a2a2a',
//                 marginBottom: 6,
//               }}
//             />
//             <div
//               style={{
//                 width: '60%',
//                 height: 8,
//                 borderRadius: 3,
//                 background: '#222',
//                 marginBottom: 18,
//               }}
//             />
//             <div
//               style={{
//                 width: '100%',
//                 height: 28,
//                 borderRadius: 8,
//                 background: accent,
//                 opacity: 0.8,
//                 marginBottom: 12,
//               }}
//             />
//             {[1, 2, 3].map((i) => (
//               <div
//                 key={i}
//                 style={{
//                   display: 'flex',
//                   gap: 8,
//                   alignItems: 'center',
//                   padding: '8px 0',
//                   borderBottom: '1px solid #1a1a1a',
//                 }}
//               >
//                 <div
//                   style={{
//                     width: 28,
//                     height: 28,
//                     borderRadius: 6,
//                     background: '#1e1e1e',
//                     flexShrink: 0,
//                   }}
//                 />
//                 <div>
//                   <div
//                     style={{
//                       width: 60,
//                       height: 7,
//                       borderRadius: 3,
//                       background: '#2a2a2a',
//                       marginBottom: 4,
//                     }}
//                   />
//                   <div style={{ width: 40, height: 5, borderRadius: 3, background: '#1e1e1e' }} />
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//       <div
//         style={{
//           background: '#0a0a0a',
//           height: 14,
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <div style={{ width: 40, height: 3, background: '#2a2a2a', borderRadius: 10 }} />
//       </div>
//     </div>
//   )
// }

// type WorkHeroProps = { work: Work }

// export const WorkHero: React.FC<WorkHeroProps> = ({ work }) => {
//   const scrollY = useScrollY()

//   const accent = (work as any).accentColor || '#bc3a5b'
//   const tagline = (work as any).tagline as string | undefined
//   const outcomes = (work as any).outcomes as { stat: string; label: string }[] | undefined
//   const heroImage =
//     work.heroImage && typeof work.heroImage !== 'number' ? (work.heroImage as MediaType) : null
//   const mobileImage =
//     (work as any).mobileImage && typeof (work as any).mobileImage !== 'number'
//       ? ((work as any).mobileImage as MediaType)
//       : heroImage
//   const categories = work.categories
//   const technologies = work.technologies
//   const year = work.completedAt
//     ? new Date(work.completedAt).getFullYear().toString()
//     : new Date().getFullYear().toString()

//   return (
//     <>
//       {/* Hero */}
//       <section
//         style={{
//           background: '#0a0a0a',
//           minHeight: '100vh',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'flex-end',
//           padding: 'clamp(80px,10vw,120px) clamp(20px,5vw,64px) clamp(48px,6vw,80px)',
//           position: 'relative',
//           overflow: 'hidden',
//         }}
//       >
//         {heroImage && (
//           <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
//             <div style={{ position: 'absolute', inset: 0, filter: 'blur(2px)', opacity: 0.08 }}>
//               <Media resource={heroImage} fill imgClassName="object-cover" />
//             </div>
//             <div
//               style={{
//                 position: 'absolute',
//                 inset: 0,
//                 background:
//                   'linear-gradient(to bottom, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.97) 100%)',
//               }}
//             />
//           </div>
//         )}
//         <div
//           style={{
//             position: 'absolute',
//             top: '10%',
//             left: '50%',
//             transform: `translateX(-50%) translateY(${scrollY * 0.15}px)`,
//             width: 700,
//             height: 400,
//             background: `radial-gradient(ellipse, ${accent}18 0%, transparent 70%)`,
//             pointerEvents: 'none',
//             zIndex: 0,
//           }}
//         />

//         <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200 }}>
//           <div
//             style={{
//               display: 'flex',
//               flexWrap: 'wrap',
//               gap: 8,
//               marginBottom: 28,
//               opacity: 0,
//               animation: 'fadeUp 0.6s ease 0.1s forwards',
//             }}
//           >
//             <span
//               style={{
//                 padding: '4px 12px',
//                 background: `${accent}22`,
//                 border: `1px solid ${accent}44`,
//                 borderRadius: 100,
//                 fontSize: 11,
//                 color: accent,
//                 fontWeight: 600,
//                 letterSpacing: '0.05em',
//                 textTransform: 'uppercase' as const,
//               }}
//             >
//               Case Study · {year}
//             </span>
//             {categories &&
//               Array.isArray(categories) &&
//               categories.map((cat, i) => {
//                 if (typeof cat !== 'object') return null
//                 return (
//                   <span
//                     key={i}
//                     style={{
//                       padding: '4px 12px',
//                       background: 'rgba(255,255,255,0.05)',
//                       border: '1px solid rgba(255,255,255,0.1)',
//                       borderRadius: 100,
//                       fontSize: 11,
//                       color: '#888',
//                     }}
//                   >
//                     {cat.title}
//                   </span>
//                 )
//               })}
//           </div>

//           <h1
//             style={{
//               fontSize: 'clamp(52px, 10vw, 120px)',
//               fontWeight: 900,
//               letterSpacing: '-0.04em',
//               lineHeight: 0.92,
//               color: '#fff',
//               margin: '0 0 20px',
//               opacity: 0,
//               animation: 'fadeUp 0.7s ease 0.2s forwards',
//             }}
//           >
//             {work.title}
//           </h1>

//           {tagline && (
//             <p
//               style={{
//                 fontSize: 'clamp(17px, 2.5vw, 22px)',
//                 color: '#777',
//                 maxWidth: 540,
//                 lineHeight: 1.55,
//                 margin: '0 0 40px',
//                 opacity: 0,
//                 animation: 'fadeUp 0.7s ease 0.3s forwards',
//               }}
//             >
//               {tagline}
//             </p>
//           )}

//           <div
//             style={{
//               display: 'flex',
//               flexWrap: 'wrap',
//               gap: 10,
//               opacity: 0,
//               animation: 'fadeUp 0.7s ease 0.4s forwards',
//             }}
//           >
//             {work.liveWebsite && (
//               <a
//                 href={work.liveWebsite}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: 8,
//                   background: accent,
//                   color: '#fff',
//                   padding: '10px 22px',
//                   borderRadius: 100,
//                   textDecoration: 'none',
//                   fontSize: 13,
//                   fontWeight: 700,
//                 }}
//               >
//                 <FaExternalLinkAlt size={11} /> View Live Site
//               </a>
//             )}
//             {work.github && (
//               <a
//                 href={work.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: 8,
//                   background: 'rgba(255,255,255,0.06)',
//                   border: '1px solid rgba(255,255,255,0.12)',
//                   color: '#ccc',
//                   padding: '10px 20px',
//                   borderRadius: 100,
//                   textDecoration: 'none',
//                   fontSize: 13,
//                 }}
//               >
//                 <FaGithub size={14} /> GitHub
//               </a>
//             )}
//             {work.behance && (
//               <a
//                 href={work.behance}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: 8,
//                   background: 'rgba(255,255,255,0.06)',
//                   border: '1px solid rgba(255,255,255,0.12)',
//                   color: '#ccc',
//                   padding: '10px 20px',
//                   borderRadius: 100,
//                   textDecoration: 'none',
//                   fontSize: 13,
//                 }}
//               >
//                 <FaBehance size={14} /> Behance
//               </a>
//             )}
//           </div>
//         </div>

//         <div
//           style={{
//             position: 'absolute',
//             bottom: 28,
//             right: 'clamp(20px,5vw,64px)',
//             fontSize: 10,
//             color: '#333',
//             letterSpacing: '0.2em',
//             textTransform: 'uppercase',
//             zIndex: 1,
//           }}
//         >
//           scroll ↓
//         </div>
//       </section>

//       {/* Device Mockups */}
//       <section
//         style={{
//           background: '#0d0d0d',
//           padding: 'clamp(48px,8vw,100px) clamp(20px,5vw,64px)',
//           borderTop: '1px solid #161616',
//           borderBottom: '1px solid #161616',
//         }}
//       >
//         <div style={{ maxWidth: 1100, margin: '0 auto' }}>
//           <Reveal>
//             <div
//               style={{
//                 display: 'flex',
//                 gap: 'clamp(20px,4vw,48px)',
//                 alignItems: 'flex-start',
//                 justifyContent: 'center',
//                 flexWrap: 'wrap',
//               }}
//             >
//               <div style={{ flex: '1 1 460px', maxWidth: 700 }}>
//                 <BrowserMockup accent={accent} image={heroImage} title={work.title} />
//               </div>
//               <MobileMockup accent={accent} image={mobileImage} />
//             </div>
//           </Reveal>

//           {technologies && Array.isArray(technologies) && technologies.length > 0 && (
//             <Reveal delay={0.1}>
//               <div
//                 style={{
//                   display: 'flex',
//                   flexWrap: 'wrap',
//                   gap: 8,
//                   justifyContent: 'center',
//                   marginTop: 48,
//                 }}
//               >
//                 {technologies.map((tech, i) => {
//                   if (typeof tech !== 'object') return null
//                   return (
//                     <span
//                       key={i}
//                       style={{
//                         padding: '7px 16px',
//                         background: '#141414',
//                         border: '1px solid #242424',
//                         borderRadius: 100,
//                         fontSize: 12,
//                         color: '#bbb',
//                         fontWeight: 500,
//                       }}
//                     >
//                       {tech.title}
//                     </span>
//                   )
//                 })}
//               </div>
//             </Reveal>
//           )}
//         </div>
//       </section>

//       {/* Outcomes */}
//       {outcomes && outcomes.length > 0 && (
//         <section
//           style={{
//             background: `${accent}08`,
//             borderBottom: `1px solid ${accent}20`,
//             padding: 'clamp(48px,8vw,80px) clamp(20px,5vw,64px)',
//           }}
//         >
//           <div
//             style={{
//               maxWidth: 1100,
//               margin: '0 auto',
//               display: 'grid',
//               gridTemplateColumns: `repeat(${Math.min(outcomes.length, 4)}, 1fr)`,
//               gap: 'clamp(24px,4vw,48px)',
//             }}
//           >
//             {outcomes.map((o, i) => (
//               <Reveal key={i} delay={i * 0.1}>
//                 <div>
//                   <div
//                     style={{
//                       fontSize: 'clamp(36px,6vw,68px)',
//                       fontWeight: 900,
//                       color: '#fff',
//                       letterSpacing: '-0.04em',
//                       lineHeight: 1,
//                       marginBottom: 8,
//                     }}
//                   >
//                     {o.stat}
//                   </div>
//                   <div
//                     style={{
//                       fontSize: 11,
//                       color: '#555',
//                       textTransform: 'uppercase',
//                       letterSpacing: '0.12em',
//                     }}
//                   >
//                     {o.label}
//                   </div>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </section>
//       )}

//       <style>{`
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(20px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </>
//   )
// }

'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Media } from '@/components/Media'
import type { Work, Media as MediaType } from '@/payload-types'

// ── Intersection reveal ──────────────────────────────────────────────────────

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold },
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, visible] as const
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [ref, visible] = useInView()
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

// ── Browser mockup ───────────────────────────────────────────────────────────

function BrowserMockup({
  accent,
  image,
  title,
}: {
  accent: string
  image?: MediaType | null
  title: string
}) {
  return (
    <div
      style={{
        background: '#161616',
        borderRadius: 12,
        overflow: 'hidden',
        border: '1px solid #252525',
        boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
      }}
    >
      {/* Chrome */}
      <div
        style={{
          background: '#1c1c1c',
          padding: '9px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          borderBottom: '1px solid #252525',
        }}
      >
        <div style={{ display: 'flex', gap: 5 }}>
          {['#ff5f57', '#ffbd2e', '#28c840'].map((c) => (
            <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
          ))}
        </div>
        <div
          style={{
            flex: 1,
            background: '#111',
            borderRadius: 5,
            padding: '3px 10px',
            fontSize: 10,
            color: '#444',
            fontFamily: 'monospace',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          }}
        >
          {title.toLowerCase().replace(/\s+/g, '')}.co.uk
        </div>
        <div
          style={{ width: 7, height: 7, borderRadius: '50%', background: accent, opacity: 0.6 }}
        />
      </div>
      {/* Screen */}
      <div style={{ position: 'relative', aspectRatio: '16/10', background: '#0d0d0d' }}>
        {image && typeof image !== 'number' ? (
          <Media resource={image} fill imgClassName="object-cover object-top" />
        ) : (
          <PlaceholderScreen accent={accent} />
        )}
      </div>
    </div>
  )
}

function PlaceholderScreen({ accent }: { accent: string }) {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        padding: '24px 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ width: 72, height: 9, borderRadius: 4, background: '#2a2a2a' }} />
        <div style={{ display: 'flex', gap: 8 }}>
          {[52, 44, 48].map((w, i) => (
            <div key={i} style={{ width: w, height: 7, borderRadius: 3, background: '#1e1e1e' }} />
          ))}
        </div>
      </div>
      <div style={{ paddingTop: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div
          style={{
            width: '52%',
            height: 24,
            borderRadius: 5,
            background: `linear-gradient(90deg, ${accent}40, ${accent}20)`,
          }}
        />
        <div style={{ width: '68%', height: 14, borderRadius: 3, background: '#252525' }} />
        <div style={{ width: '38%', height: 10, borderRadius: 3, background: '#1c1c1c' }} />
        <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
          <div
            style={{ width: 90, height: 28, borderRadius: 100, background: accent, opacity: 0.8 }}
          />
          <div
            style={{
              width: 72,
              height: 28,
              borderRadius: 100,
              background: '#1e1e1e',
              border: '1px solid #2a2a2a',
            }}
          />
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: -30,
          right: -30,
          width: 160,
          height: 160,
          borderRadius: '50%',
          background: `${accent}14`,
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}

// ── Mobile mockup ────────────────────────────────────────────────────────────

function MobileMockup({ accent, image }: { accent: string; image?: MediaType | null }) {
  return (
    <div
      style={{
        width: 148,
        flexShrink: 0,
        background: '#161616',
        borderRadius: 26,
        border: '1px solid #252525',
        overflow: 'hidden',
        boxShadow: '0 28px 56px rgba(0,0,0,0.45)',
        alignSelf: 'center',
        marginTop: 44,
      }}
    >
      <div
        style={{
          background: '#0a0a0a',
          height: 16,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ width: 48, height: 3, background: '#1c1c1c', borderRadius: 10 }} />
      </div>
      <div style={{ position: 'relative', aspectRatio: '9/18', background: '#0d0d0d' }}>
        {image && typeof image !== 'number' ? (
          <Media resource={image} fill imgClassName="object-cover object-top" />
        ) : (
          <div style={{ position: 'absolute', inset: 0, padding: '12px 10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
              <div style={{ width: 20, height: 5, borderRadius: 2, background: '#2a2a2a' }} />
              <div style={{ width: 28, height: 5, borderRadius: 2, background: '#1e1e1e' }} />
            </div>
            <div
              style={{
                width: '65%',
                height: 10,
                borderRadius: 3,
                background: `${accent}50`,
                marginBottom: 8,
              }}
            />
            <div
              style={{
                width: '85%',
                height: 7,
                borderRadius: 2,
                background: '#252525',
                marginBottom: 5,
              }}
            />
            <div
              style={{
                width: '55%',
                height: 7,
                borderRadius: 2,
                background: '#1e1e1e',
                marginBottom: 14,
              }}
            />
            <div
              style={{
                width: '100%',
                height: 24,
                borderRadius: 7,
                background: accent,
                opacity: 0.75,
                marginBottom: 10,
              }}
            />
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: 7,
                  alignItems: 'center',
                  padding: '7px 0',
                  borderBottom: '1px solid #1a1a1a',
                }}
              >
                <div
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 5,
                    background: '#1e1e1e',
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div
                    style={{
                      width: 52,
                      height: 6,
                      borderRadius: 2,
                      background: '#252525',
                      marginBottom: 3,
                    }}
                  />
                  <div style={{ width: 36, height: 4, borderRadius: 2, background: '#1a1a1a' }} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div
        style={{
          background: '#0a0a0a',
          height: 12,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ width: 36, height: 2, background: '#1c1c1c', borderRadius: 10 }} />
      </div>
    </div>
  )
}

// ── WorkMockup — the exported component used in the page ─────────────────────

type WorkMockupProps = { work: Work }

export const WorkMockup: React.FC<WorkMockupProps> = ({ work }) => {
  const accent = (work as any).accentColor || '#bc3a5b'
  const outcomes = (work as any).outcomes as { stat: string; label: string }[] | undefined

  const heroImage =
    work.heroImage && typeof work.heroImage !== 'number' ? (work.heroImage as MediaType) : null
  const mobileImage =
    (work as any).mobileImage && typeof (work as any).mobileImage !== 'number'
      ? ((work as any).mobileImage as MediaType)
      : heroImage

  const technologies = work.technologies

  return (
    <>
      {/* ── Device mockup strip ── */}
      <section
        className="rounded-3xl overflow-hidden my-8 border-2 border-dashed bg-white/30 dark:bg-black/30 border-secondary-100  dark:border-secondary-900/70"
        // style={{ background: '#4d4d4d', border: '1px solid #1a1a1a' }}
      >
        <div style={{ padding: 'clamp(32px,6vw,64px) clamp(20px,4vw,48px)' }}>
          <Reveal>
            <div
              style={{
                display: 'flex',
                gap: 'clamp(16px,3vw,40px)',
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ flex: '1 1 380px', maxWidth: 660 }}>
                <BrowserMockup accent={accent} image={heroImage} title={work.title} />
              </div>
              <MobileMockup accent={accent} image={mobileImage} />
            </div>
          </Reveal>

          {/* Tech pills — using your design system tokens via className */}
          {technologies && Array.isArray(technologies) && technologies.length > 0 && (
            <Reveal delay={0.1}>
              <div className="flex flex-wrap gap-2 justify-center mt-8">
                {technologies.map((tech, i) => {
                  if (typeof tech !== 'object') return null
                  return (
                    <span
                      key={i}
                      className="rounded-full px-3 py-1 text-xs font-medium text-primary-700 dark:text-primary-300 bg-primary-100 dark:bg-primary-800/40 border border-primary-200 dark:border-primary-700/50"
                    >
                      {tech.title}
                    </span>
                  )
                })}
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* ── Outcomes strip ── */}
      {outcomes && outcomes.length > 0 && (
        <section
          className="rounded-2xl overflow-hidden mb-8"
          style={{
            background: `${accent}0a`,
            border: `1px solid ${accent}25`,
          }}
        >
          <div style={{ padding: 'clamp(24px,4vw,44px) clamp(20px,4vw,48px)' }}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              {outcomes.map((o, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="flex flex-col gap-1">
                    <div
                      className="font-bold tracking-tight text-primary-950 dark:text-primary-50 leading-none"
                      style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
                    >
                      {o.stat}
                    </div>
                    <div className="text-[11px] uppercase tracking-widest text-primary-400 dark:text-primary-500 leading-snug">
                      {o.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

// Keep WorkHero as default export for backwards compat (unused now)
export default WorkMockup
