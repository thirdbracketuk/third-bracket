// // 'use client'
// // import Link from 'next/link'
// // import { useRef, useState, useEffect } from 'react'
// // import { PostCard, CardPostData } from '@/components/Card'
// // import { Bracket } from '@thirdbracket/bracketui'

// // interface LatestWorkSectionProps {
// //   works: CardPostData[]
// // }

// // export const LatestWorkSection: React.FC<LatestWorkSectionProps> = ({ works }) => {
// //   const scrollRef = useRef<HTMLDivElement>(null)
// //   const [canScrollLeft, setCanScrollLeft] = useState(false)
// //   const [canScrollRight, setCanScrollRight] = useState(true)

// //   const checkScroll = () => {
// //     if (scrollRef.current) {
// //       const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
// //       setCanScrollLeft(scrollLeft > 0)
// //       setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
// //     }
// //   }

// //   useEffect(() => {
// //     checkScroll()
// //     const scrollEl = scrollRef.current
// //     scrollEl?.addEventListener('scroll', checkScroll)
// //     return () => scrollEl?.removeEventListener('scroll', checkScroll)
// //   }, [])

// //   const handleScroll = (direction: 'left' | 'right') => {
// //     if (scrollRef.current) {
// //       scrollRef.current.scrollBy({ left: direction === 'left' ? -340 : 340, behavior: 'smooth' })
// //     }
// //   }

// //   return (
// //     <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem]">
// //       <div className="w-full">
// //         <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
// //           <div className="flex items-center justify-between mb-10 lg:mb-12">
// //             <div>
// //               <p className="border border-accent-200 dark:border-accent-500/20 text-primary-700 dark:text-primary-300 bg-accent-200 dark:bg-accent-800 text-xs font-medium px-3 py-0.5 rounded-full mb-3 w-fit">
// //                 Recent Projects
// //               </p>
// //               <h2 className="text-[clamp(1.75rem,2.93vw,1.875rem)] font-extrabold bg-gradient-text leading-[1.4] dark:bg-gradient-text-dark text-transparent bg-clip-text tracking-tight">
// //                 Latest Work
// //               </h2>
// //             </div>
// //             <div className="flex flex-col gap-2">
// //               <button
// //                 onClick={() => handleScroll('left')}
// //                 className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all flex-shrink-0 ${
// //                   canScrollLeft
// //                     ? 'border-primary-200 dark:border-primary-700 hover:border-primary-300 dark:hover:border-primary-600'
// //                     : 'border-primary-100 dark:border-primary-800 opacity-40 cursor-not-allowed'
// //                 }`}
// //                 aria-label="Scroll left"
// //                 disabled={!canScrollLeft}
// //               >
// //                 <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
// //                   <path d="M8 12l-4-4 4-4" />
// //                 </svg>
// //               </button>
// //               <button
// //                 onClick={() => handleScroll('right')}
// //                 className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all flex-shrink-0 ${
// //                   canScrollRight
// //                     ? 'border-primary-200 dark:border-primary-700 hover:border-primary-300 dark:hover:border-primary-600'
// //                     : 'border-primary-100 dark:border-primary-800 opacity-40 cursor-not-allowed'
// //                 }`}
// //                 aria-label="Scroll right"
// //                 disabled={!canScrollRight}
// //               >
// //                 <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
// //                   <path d="M8 4l4 4-4 4" />
// //                 </svg>
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="relative">
// //         <div
// //           ref={scrollRef}
// //           className="overflow-x-auto overflow-y-visible -webkit-overflow-scrolling-touch scrollbar-hide pb-12"
// //           style={{
// //             maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
// //             WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'
// //           }}
// //         >
// //           <div className="flex gap-4 w-max px-6 pt-1 blur-[0.3px]">
// //             {works.map((work, index) => (
// //               <div key={work.slug || index} className="w-[320px] flex-shrink-0">
// //                 <PostCard doc={work} relationTo="work" showCategories className="h-full" />
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>

// //       <div className="w-full">
// //         <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
// //           <div className="flex justify-center mt-8">
// //             <Link
// //               href="/work"
// //               className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-100 transition-colors inline-flex items-center gap-2"
// //             >
// //               View all projects
// //               <svg
// //                 viewBox="0 0 16 16"
// //                 fill="none"
// //                 stroke="currentColor"
// //                 strokeWidth="2"
// //                 className="w-4 h-4"
// //               >
// //                 <path d="M3 8h10M9 4l4 4-4 4" />
// //               </svg>
// //             </Link>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// 'use client'
// import Link from 'next/link'
// import { useRef, useState, useEffect, useCallback } from 'react'
// import { PostCard, CardPostData } from '@/components/Card'

// interface LatestWorkSectionProps {
//   works: CardPostData[]
// }

// export const LatestWorkSection: React.FC<LatestWorkSectionProps> = ({ works }) => {
//   const scrollRef = useRef<HTMLDivElement>(null)
//   const [canScrollLeft, setCanScrollLeft] = useState(false)
//   const [canScrollRight, setCanScrollRight] = useState(false)

//   const checkScroll = useCallback(() => {
//     const el = scrollRef.current
//     if (!el) return
//     const left = el.scrollLeft
//     const maxScroll = el.scrollWidth - el.clientWidth
//     setCanScrollLeft(left > 4)
//     setCanScrollRight(maxScroll > 4 && left < maxScroll - 4)
//   }, [])

//   useEffect(() => {
//     const el = scrollRef.current
//     if (!el) return

//     // Wait for paint so scrollWidth is accurate
//     const raf = requestAnimationFrame(() => {
//       checkScroll()
//     })

//     el.addEventListener('scroll', checkScroll, { passive: true })

//     const ro = new ResizeObserver(() => {
//       requestAnimationFrame(checkScroll)
//     })
//     ro.observe(el)

//     return () => {
//       cancelAnimationFrame(raf)
//       el.removeEventListener('scroll', checkScroll)
//       ro.disconnect()
//     }
//   }, [checkScroll])

//   const scroll = (dir: 'left' | 'right') => {
//     const el = scrollRef.current
//     if (!el) return
//     el.scrollBy({ left: dir === 'left' ? -360 : 360, behavior: 'smooth' })
//   }

//   return (
//     <section className="py-12 sm:py-16 lg:py-20">
//       {/* Header — respects your normal content padding */}
//       <div className="max-w-[1440px] mx-auto px-6 lg:px-8 mb-8 lg:mb-10">
//         <div className="flex items-end justify-between gap-4">
//           <div>
//             <p className="border border-accent-200 dark:border-accent-500/20 text-primary-700 dark:text-primary-300 bg-accent-200 dark:bg-accent-800 text-xs font-medium px-3 py-0.5 rounded-full mb-2.5 w-fit">
//               Recent Projects
//             </p>
//             <h2 className="text-[clamp(1.75rem,2.93vw,1.875rem)] font-extrabold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text leading-[1.3] tracking-tight">
//               Latest Work
//             </h2>
//           </div>

//           <div className="flex items-center gap-3 pb-0.5">
//             <div className="flex items-center gap-1.5">
//               <button
//                 onClick={() => scroll('left')}
//                 aria-label="Scroll left"
//                 className={[
//                   'w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 select-none',
//                   canScrollLeft
//                     ? 'border-primary-300 dark:border-primary-600 text-primary-700 dark:text-primary-300 hover:border-primary-500 dark:hover:border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/40 cursor-pointer'
//                     : 'border-primary-100 dark:border-primary-800 text-primary-200 dark:text-primary-800 opacity-40 cursor-default',
//                 ].join(' ')}
//               >
//                 <svg
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="w-3.5 h-3.5"
//                 >
//                   <path d="M10 3L5 8l5 5" />
//                 </svg>
//               </button>

//               <button
//                 onClick={() => scroll('right')}
//                 aria-label="Scroll right"
//                 className={[
//                   'w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 select-none',
//                   canScrollRight
//                     ? 'border-primary-300 dark:border-primary-600 text-primary-700 dark:text-primary-300 hover:border-primary-500 dark:hover:border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/40 cursor-pointer'
//                     : 'border-primary-100 dark:border-primary-800 text-primary-200 dark:text-primary-800 opacity-40 cursor-default',
//                 ].join(' ')}
//               >
//                 <svg
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="w-3.5 h-3.5"
//                 >
//                   <path d="M6 3l5 5-5 5" />
//                 </svg>
//               </button>
//             </div>

//             <span className="h-5 w-px bg-primary-200 dark:bg-primary-700/60" />

//             <Link
//               href="/work"
//               className="text-sm font-medium text-primary-500 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-100 transition-colors inline-flex items-center gap-1.5 whitespace-nowrap"
//             >
//               View all
//               <svg
//                 viewBox="0 0 16 16"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="w-3.5 h-3.5"
//               >
//                 <path d="M3 8h10M9 4l4 4-4 4" />
//               </svg>
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Full-bleed scroll area */}
//       <div className="relative w-full overflow-hidden">
//         {/* Left fade overlay */}
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 transition-opacity duration-300"
//           style={{
//             opacity: canScrollLeft ? 1 : 0,
//             background: 'linear-gradient(90deg, var(--background, #fff) 0%, transparent 100%)',
//           }}
//         />

//         {/* Right fade overlay */}
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 transition-opacity duration-300"
//           style={{
//             opacity: canScrollRight ? 1 : 0,
//             background: 'linear-gradient(270deg, var(--background, #fff) 0%, transparent 100%)',
//           }}
//         />

//         {/* The actual scrollable element */}
//         <div
//           ref={scrollRef}
//           style={{ overflowX: 'auto', overflowY: 'hidden' }}
//           className="scrollbar-hide pb-8"
//         >
//           <div
//             className="flex gap-4 w-max pt-1"
//             style={{
//               paddingLeft: 'max(1.5rem, calc((100vw - 1440px) / 2 + 2rem))',
//               paddingRight: 'max(8rem, calc((100vw - 1440px) / 2 + 2rem))',
//             }}
//           >
//             {works.map((work, index) => (
//               <div key={work.slug || index} className="w-[320px] flex-shrink-0">
//                 <PostCard doc={work} relationTo="work" showCategories className="h-full" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
