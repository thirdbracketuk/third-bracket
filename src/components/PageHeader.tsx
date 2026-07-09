import { Bracket } from '@thirdbracket/bracketui'

interface PageHeaderProps {
  title: string
  description: string
  actions?: React.ReactNode
}

export default function PageHeader({ title, description, actions }: PageHeaderProps) {
  return (
    <section className="py-[6.5rem] sm:py-[6.5rem] lg:py-[6.5rem] bg-overlayDot-light dark:bg-overlayDot-dark [background-size:36px_36px]">
      <Bracket fluid centered padding="small">
        <div className="mx-auto">
          <div className="flex flex-col items-start sm:items-center space-y-7 sm:mx-auto max-w-lg md:max-w-2xl lg:max-w-[820px] px-2 sm:px-0">
            <h1 className="text-[clamp(2.25rem,4.8vw,3.75rem)] font-extrabold leading-[1.1] text-left sm:text-center bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-0">
              {title}
            </h1>

            <p className="text-[clamp(1rem,1.4vw,1.125rem)] text-secondary-600 dark:text-secondary-400 leading-[1.6] text-left sm:text-center mx-auto mb-0 max-w-xl sm:max-w-2xl">
              {description}
            </p>

            {actions && (
              <div className="flex flex-wrap sm:justify-center gap-[10px] backdrop-blur-[2px] mb-0">
                {actions}
              </div>
            )}
          </div>
        </div>
      </Bracket>
    </section>
  )
}
