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
    <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem] bg-overlayDot-light dark:bg-overlayDot-dark  [background-size:36px_36px]  text-center ">
      <Bracket fluid centered padding="medium">
        <h1 className=" font-extrabold text-[2.55rem]/[1]  md:text-[2.95rem]/[1.1] lg:text-[3.45rem]/[1.1] bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text  text-center mb-6">
          {title}
        </h1>
        <p className="dark:text-primary-400 text-primary-600 text-base/[1.6] md:text-lg/[1.75rem] lg:text-xl/[1.85rem]  font-light  mx-auto">
          {description}
        </p>
      </Bracket>
    </section>
  )
}
