import { Bracket, Button } from '@thirdbracket/bracketui'
import Link from 'next/link'

interface PageHeaderProps {
  title: string
  description: string
  actions?: React.ReactNode
  // backgroundColor?: string;
}

{
  /* <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div> */
}
export default function PageHeader({ title, description, actions }: PageHeaderProps) {
  return (
    <section className="py-[6.5rem] sm:py-[6.5rem] lg:py-[6.5rem] bg-overlayDot-light dark:bg-overlayDot-dark [background-size:36px_36px]">
      <Bracket fluid centered padding="small">
        <div className="mx-auto">
          <div className="flex flex-col items-start sm:items-center space-y-7 sm:mx-auto max-w-lg md:max-w-2xl lg:max-w-[820px] px-2 sm:px-0">
            <h1 className="text-[clamp(2.6rem,5.5vw,4.2rem)] font-bold leading-[1.15] text-left sm:text-center bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-0">
              {title}
            </h1>
            <p className="text-[clamp(1rem,1.8vw,1.1875rem)] text-secondary-800 dark:text-secondary-300 leading-[1.75]  text-left sm:text-center mx-auto mb-0">
              {description}
            </p>
            {/* CTAs */}
            {/* The conditional block: only renders if 'actions' has content */}
            {actions && (
              <div className="lex flex-wrap sm:justify-center gap-[10px] backdrop-blur-[2px] mb-0">
                {actions}
              </div>
            )}
          </div>
        </div>
      </Bracket>
    </section>
  )
}
