// // 'use client'
// // import { Highlight, themes } from 'prism-react-renderer'
// // import React from 'react'
// // import { CopyButton } from './CopyButton'

// // type Props = {
// //   code: string
// //   language?: string
// // }

// // export const Code: React.FC<Props> = ({ code, language = '' }) => {
// //   if (!code) return null

// //   return (
// //     <Highlight code={code} language={language} theme={themes.vsDark}>
// //       {({ getLineProps, getTokenProps, tokens }) => (
// //         <pre className="bg-black p-4 border text-xs border-border rounded overflow-x-auto">
// //           {tokens.map((line, i) => (
// //             <div key={i} {...getLineProps({ className: 'table-row', line })}>
// //               <span className="table-cell select-none text-right text-white/25">{i + 1}</span>
// //               <span className="table-cell pl-4">
// //                 {line.map((token, key) => (
// //                   <span key={key} {...getTokenProps({ token })} />
// //                 ))}
// //               </span>
// //             </div>
// //           ))}
// //           <CopyButton code={code} />
// //         </pre>
// //       )}
// //     </Highlight>
// //   )
// // }

// 'use client'
// import { Highlight, themes } from 'prism-react-renderer'
// import React from 'react'
// import { CopyButton } from './CopyButton'

// type Props = {
//   code: string
//   language?: string
// }

// export const Code: React.FC<Props> = ({ code, language = 'javascript' }) => {
//   if (!code) return null

//   const lang = language || 'plaintext'

//   return (
//     <div className="my-8 not-prose rounded-xl overflow-hidden border border-primary-100 dark:border-primary-800/60 shadow-sm">
//       {/* Header bar */}
//       <div className="flex items-center justify-between px-4 py-2.5 bg-primary-50 dark:bg-primary-900/60 border-b border-primary-100 dark:border-primary-800/60">
//         <div className="flex items-center gap-2">
//           {/* Traffic lights */}
//           <div className="flex gap-1.5">
//             {['bg-red-400', 'bg-amber-400', 'bg-emerald-400'].map((c, i) => (
//               <div key={i} className={`w-2.5 h-2.5 rounded-full ${c} opacity-70`} />
//             ))}
//           </div>
//           {lang && lang !== 'plaintext' && (
//             <span className="text-[11px] font-mono font-medium text-primary-400 dark:text-primary-500 uppercase tracking-wider ml-2">
//               {lang}
//             </span>
//           )}
//         </div>
//         <CopyButton code={code} />
//       </div>

//       {/* Code body */}
//       <Highlight code={code.trim()} language={lang} theme={themes.nightOwl}>
//         {({ getLineProps, getTokenProps, tokens }) => (
//           <pre className="overflow-x-auto p-5 text-[0.82rem] leading-relaxed bg-[#011627] dark:bg-[#011627]">
//             {tokens.map((line, i) => (
//               <div key={i} {...getLineProps({ line })} className="table-row">
//                 <span className="table-cell select-none text-right pr-5 text-white/20 text-[11px] w-8 shrink-0">
//                   {i + 1}
//                 </span>
//                 <span className="table-cell">
//                   {line.map((token, key) => (
//                     <span key={key} {...getTokenProps({ token })} />
//                   ))}
//                 </span>
//               </div>
//             ))}
//           </pre>
//         )}
//       </Highlight>
//     </div>
//   )
// }

'use client'
import { Highlight, themes } from 'prism-react-renderer'
import React from 'react'
import { CopyButton } from './CopyButton'

type Props = {
  code: string
  language?: string
}

export const Code: React.FC<Props> = ({ code, language = 'javascript' }) => {
  if (!code) return null
  const lang = language || 'plaintext'

  return (
    <div className="my-10 not-prose overflow-hidden rounded-xl border border-secondary-800/60 shadow-2xl">
      {/* Terminal Header: macOS Style */}
      <div className="flex items-center justify-between px-4 py-3 bg-secondary-900/90 backdrop-blur-md">
        <div className="flex items-center gap-6">
          {/* Traffic lights: Flat and modern */}
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] opacity-90" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] opacity-90" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f] opacity-90" />
          </div>

          {lang !== 'plaintext' && (
            <span className="text-[11px] font-mono font-medium text-secondary-500 uppercase tracking-[0.2em]">
              {lang}
            </span>
          )}
        </div>
        <CopyButton code={code} />
      </div>

      {/* Terminal Body: Deep Secondary 950 */}
      <Highlight code={code.trim()} language={lang} theme={themes.duotoneDark}>
        {({ getLineProps, getTokenProps, tokens }) => (
          <pre className="overflow-x-auto p-6 text-[13px] leading-relaxed bg-secondary-950 font-mono">
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })} className="table-row">
                {/* Minimalist Line Numbers */}
                <span className="table-cell select-none text-right pr-6 text-secondary-700 font-mono w-10 shrink-0 border-r border-secondary-800/50">
                  {i + 1}
                </span>
                <span className="table-cell pl-6">
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  )
}
