import { Bracket } from '@thirdbracket/bracketui'

interface PageHeaderProps {
  title: string
  description: string
  // backgroundColor?: string;
}

{
  /* <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div> */
}
export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="pt-[104px] pb-[80px] bg-overlayDot-light dark:bg-overlayDot-dark [background-size:36px_36px] text-center">
      <Bracket fluid centered padding="medium">
        <h1 className="text-[clamp(2.6rem,5.5vw,4.2rem)] font-extrabold leading-[1.15]  bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text text-center mb-6">
          {title}
        </h1>
        <p className="text-[1.0625rem] text-primary-500 dark:text-primary-400 leading-[1.7] max-w-[560px] mx-auto">
          {description}
        </p>
      </Bracket>
    </section>
  )
}
