‘use client’

import React, { useEffect, useRef, useState } from ‘react’
import { Media } from ‘@/components/Media’
import type { Work, Media as MediaType } from ‘@/payload-types’

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
transform: visible ? ‘translateY(0)’ : ‘translateY(20px)’,
transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
}}
>
{children}
</div>
)
}

// ── Safari-style browser window mockup ───────────────────────────────────────
// Upload: full-viewport screenshot only (Safari open, nothing else on screen),
// no OS chrome / desktop / dock baked in — 16:10 ratio.
// Recommended source size: 1600×1000px (or 3200×2000 for retina-sharp).

function BrowserMockup({
accent,
image,
title,
}: {
accent: string
image?: MediaType | null
title: string
}) {
const url = `${title.toLowerCase().replace(/\s+/g, '')}.co.uk`
return (
<div
style={{
borderRadius: 14,
overflow: ‘hidden’,
border: ‘1px solid #2a2a2a’,
boxShadow: ‘0 50px 100px -20px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.03)’,
background: ‘#1c1c1e’,
}}
>
{/* Safari toolbar — traffic lights, centered address pill, share icon */}
<div
style={{
background: ‘linear-gradient(180deg, #2b2b2d 0%, #232325 100%)’,
padding: ‘10px 12px’,
display: ‘flex’,
alignItems: ‘center’,
gap: 12,
borderBottom: ‘1px solid #303032’,
}}
>
<div style={{ display: ‘flex’, gap: 6, flexShrink: 0 }}>
{[’#ff5f57’, ‘#ffbd2e’, ‘#28c840’].map((c) => (
<div key={c} style={{ width: 11, height: 11, borderRadius: ‘50%’, background: c }} />
))}
</div>
{/* Centered Safari-style address pill */}
<div
style={{
flex: 1,
display: ‘flex’,
justifyContent: ‘center’,
}}
>
<div
style={{
display: ‘flex’,
alignItems: ‘center’,
gap: 6,
background: ‘#141415’,
borderRadius: 7,
padding: ‘4px 14px’,
fontSize: 11,
color: ‘#8a8a8e’,
fontFamily:
‘-apple-system, BlinkMacSystemFont, “SF Pro Text”, sans-serif’,
maxWidth: 260,
width: ‘60%’,
}}
>
<svg width=“9” height=“9” viewBox=“0 0 24 24” fill=“none” style={{ flexShrink: 0 }}>
<path
d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22Zm5.6 6.4-2.3 6.9-6.9 2.3 2.3-6.9 6.9-2.3Z"
fill="#6b6b70"
/>
</svg>
<span
style={{
overflow: ‘hidden’,
whiteSpace: ‘nowrap’,
textOverflow: ‘ellipsis’,
margin: ‘0 auto’,
}}
>
{url}
</span>
</div>
</div>
<div style={{ width: 44, flexShrink: 0 }} />
</div>
{/* Screen — upload full Safari viewport screenshot here, 16:10 */}
<div style={{ position: ‘relative’, aspectRatio: ‘16/10’, background: ‘#0d0d0d’ }}>
{image && typeof image !== ‘number’ ? (
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
position: ‘absolute’,
inset: 0,
padding: ‘24px 20px’,
display: ‘flex’,
flexDirection: ‘column’,
gap: 14,
}}
>
<div style={{ display: ‘flex’, justifyContent: ‘space-between’, alignItems: ‘center’ }}>
<div style={{ width: 72, height: 9, borderRadius: 4, background: ‘#2a2a2a’ }} />
<div style={{ display: ‘flex’, gap: 8 }}>
{[52, 44, 48].map((w, i) => (
<div key={i} style={{ width: w, height: 7, borderRadius: 3, background: ‘#1e1e1e’ }} />
))}
</div>
</div>
<div style={{ paddingTop: 16, display: ‘flex’, flexDirection: ‘column’, gap: 10 }}>
<div
style={{
width: ‘52%’,
height: 24,
borderRadius: 5,
background: `linear-gradient(90deg, ${accent}40, ${accent}20)`,
}}
/>
<div style={{ width: ‘68%’, height: 14, borderRadius: 3, background: ‘#252525’ }} />
<div style={{ width: ‘38%’, height: 10, borderRadius: 3, background: ‘#1c1c1c’ }} />
<div style={{ display: ‘flex’, gap: 8, marginTop: 6 }}>
<div
style={{ width: 90, height: 28, borderRadius: 100, background: accent, opacity: 0.8 }}
/>
<div
style={{
width: 72,
height: 28,
borderRadius: 100,
background: ‘#1e1e1e’,
border: ‘1px solid #2a2a2a’,
}}
/>
</div>
</div>
<div
style={{
position: ‘absolute’,
bottom: -30,
right: -30,
width: 160,
height: 160,
borderRadius: ‘50%’,
background: `${accent}14`,
filter: ‘blur(40px)’,
pointerEvents: ‘none’,
}}
/>
</div>
)
}

// ── iPhone 16 Pro-viewport mobile mockup ─────────────────────────────────────
// Clean rounded-edge frame, no dynamic island / bezel / home-indicator drawn —
// upload the FULL iPhone screenshot including its real status bar, dynamic
// island and home indicator, since nothing is drawn in code here.
// Recommended source size: 1179×2556px (iPhone 16 Pro native, full screen).

function MobileMockup({ accent, image }: { accent: string; image?: MediaType | null }) {
return (
<div
style={{
width: 168,
flexShrink: 0,
borderRadius: 34,
overflow: ‘hidden’,
boxShadow:
‘0 40px 80px -16px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04)’,
alignSelf: ‘center’,
marginTop: 44,
}}
>
<div
style={{
position: ‘relative’,
aspectRatio: ‘1179/2556’,
background: ‘#0d0d0d’,
}}
>
{image && typeof image !== ‘number’ ? (
<Media resource={image} fill imgClassName="object-cover object-top" />
) : (
<div style={{ position: ‘absolute’, inset: 0, padding: ‘12px 10px’ }}>
<div style={{ display: ‘flex’, justifyContent: ‘space-between’, marginBottom: 14 }}>
<div style={{ width: 20, height: 5, borderRadius: 2, background: ‘#2a2a2a’ }} />
<div style={{ width: 28, height: 5, borderRadius: 2, background: ‘#1e1e1e’ }} />
</div>
<div
style={{
width: ‘65%’,
height: 10,
borderRadius: 3,
background: `${accent}50`,
marginBottom: 8,
}}
/>
<div
style={{
width: ‘85%’,
height: 7,
borderRadius: 2,
background: ‘#252525’,
marginBottom: 5,
}}
/>
<div
style={{
width: ‘55%’,
height: 7,
borderRadius: 2,
background: ‘#1e1e1e’,
marginBottom: 14,
}}
/>
<div
style={{
width: ‘100%’,
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
display: ‘flex’,
gap: 7,
alignItems: ‘center’,
padding: ‘7px 0’,
borderBottom: ‘1px solid #1a1a1a’,
}}
>
<div
style={{
width: 24,
height: 24,
borderRadius: 5,
background: ‘#1e1e1e’,
flexShrink: 0,
}}
/>
<div>
<div
style={{
width: 52,
height: 6,
borderRadius: 2,
background: ‘#252525’,
marginBottom: 3,
}}
/>
<div style={{ width: 36, height: 4, borderRadius: 2, background: ‘#1a1a1a’ }} />
</div>
</div>
))}
</div>
)}
</div>
</div>
)
}

// ── WorkMockup — the exported component used in the page ─────────────────────

type WorkMockupProps = { work: Work }

export const WorkMockup: React.FC<WorkMockupProps> = ({ work }) => {
const accent = (work as any).accentColor || ‘#bc3a5b’
const outcomes = (work as any).outcomes as { stat: string; label: string }[] | undefined

const heroImage =
work.heroImage && typeof work.heroImage !== ‘number’ ? (work.heroImage as MediaType) : null
const mobileImage =
(work as any).mobileImage && typeof (work as any).mobileImage !== ‘number’
? ((work as any).mobileImage as MediaType)
: heroImage

const technologies = work.technologies

return (
<>
{/* ── Device mockup strip ── */}
<section
className="rounded-3xl overflow-hidden my-8 border-2 border-dashed bg-white/30 dark:bg-black/30 border-secondary-100  dark:border-secondary-900/70"
>
<div style={{ padding: ‘clamp(32px,6vw,64px) clamp(20px,4vw,48px)’ }}>
<Reveal>
<div
style={{
display: ‘flex’,
gap: ‘clamp(16px,3vw,40px)’,
alignItems: ‘flex-start’,
justifyContent: ‘center’,
flexWrap: ‘wrap’,
}}
>
<div style={{ flex: ‘1 1 380px’, maxWidth: 660 }}>
<BrowserMockup accent={accent} image={heroImage} title={work.title} />
</div>
<MobileMockup accent={accent} image={mobileImage} />
</div>
</Reveal>

```
      {/* Tech pills */}
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
```

)
}

// Keep WorkHero as default export for backwards compat (unused now)
export default WorkMockup