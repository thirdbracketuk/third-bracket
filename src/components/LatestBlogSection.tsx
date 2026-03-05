// 'use client'
// import Link from 'next/link'
// import { useRef, useState, useEffect } from 'react'
// import { PostCard, CardPostData } from '@/components/Card'

// interface LatestBlogSectionProps {
//   blogs: CardPostData[]
// }

// export const LatestBlogSection: React.FC<LatestBlogSectionProps> = ({ blogs }) => {
//   const scrollRef = useRef<HTMLDivElement>(null)
//   const [canScrollLeft, setCanScrollLeft] = useState(false)
//   const [canScrollRight, setCanScrollRight] = useState(true)

//   const checkScroll = () => {
//     if (scrollRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
//       setCanScrollLeft(scrollLeft > 0)
//       setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
//     }
//   }

//   useEffect(() => {
//     checkScroll()
//     const scrollEl = scrollRef.current
//     scrollEl?.addEventListener('scroll', checkScroll)
//     return () => scrollEl?.removeEventListener('scroll', checkScroll)
//   }, [])

//   const handleScroll = (direction: 'left' | 'right') => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: direction === 'left' ? -320 : 320, behavior: 'smooth' })
//     }
//   }

//   return (
//     <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem]">
//       <div className="w-full">
//         <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
//           <div className="flex items-center justify-between mb-10 lg:mb-12">
//             <div>
//               <div className="inline-flex items-center gap-2 bg-accent-50 dark:bg-accent-500/8 border border-accent-200 dark:border-accent-500/20 text-accent-700 dark:text-accent-400 text-[0.72rem] font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-3">
//                 Latest Insights
//               </div>
//               <h2 className="text-[clamp(1.7rem,3.5vw,2.4rem)] font-bold leading-[1.15] tracking-tight bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text">
//                 From the Blog
//               </h2>
//             </div>
//             <div className="flex flex-col gap-2">
//               <button
//                 onClick={() => handleScroll('left')}
//                 className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all flex-shrink-0 ${
//                   canScrollLeft
//                     ? 'border-primary-200 dark:border-primary-700 hover:border-primary-300 dark:hover:border-primary-600'
//                     : 'border-primary-100 dark:border-primary-800 opacity-40 cursor-not-allowed'
//                 }`}
//                 aria-label="Scroll left"
//                 disabled={!canScrollLeft}
//               >
//                 <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
//                   <path d="M8 12l-4-4 4-4" />
//                 </svg>
//               </button>
//               <button
//                 onClick={() => handleScroll('right')}
//                 className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all flex-shrink-0 ${
//                   canScrollRight
//                     ? 'border-primary-200 dark:border-primary-700 hover:border-primary-300 dark:hover:border-primary-600'
//                     : 'border-primary-100 dark:border-primary-800 opacity-40 cursor-not-allowed'
//                 }`}
//                 aria-label="Scroll right"
//                 disabled={!canScrollRight}
//               >
//                 <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
//                   <path d="M8 4l4 4-4 4" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="relative">
//         <div
//           ref={scrollRef}
//           className="overflow-x-auto overflow-y-visible -webkit-overflow-scrolling-touch scrollbar-hide pb-12"
//           style={{
//             maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
//             WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'
//           }}
//         >
//           <div className="flex gap-4 w-max px-6 pt-1 blur-[0.3px]">
//             {blogs.map((blog, index) => (
//               <div key={blog.slug || index} className="w-[300px] flex-shrink-0">
//                 <PostCard doc={blog} relationTo="blog" showCategories className="h-full" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="w-full">
//         <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
//           <div className="flex justify-center mt-8">
//             <Link
//               href="/blog"
//               className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-100 transition-colors inline-flex items-center gap-2"
//             >
//               View all articles
//               <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
//                 <path d="M3 8h10M9 4l4 4-4 4" />
//               </svg>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
