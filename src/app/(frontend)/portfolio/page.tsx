import { Bracket, Card } from '@thirdbracket/bracketui'
import PageHeader from '../../../components/PageHeader'
import { Metadata } from 'next'
import Link from 'next/link'
import { PiArrowUpRight } from 'react-icons/pi'

import { RiDribbbleLine, RiGithubLine } from 'react-icons/ri'

import { LuGlobe } from 'react-icons/lu'
import { Settings } from '@/utilities/meta'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Browse selected work',

  openGraph: {
    url: `${Settings.metadataBase}/portfolio`,
    title: 'Portfolio',

    images: [
      {
        url: '/og.svg', // Custom image for contact page
        width: 1600, // Add this
        height: 840,
        alt: 'Contact Third Bracket',
      },
    ],
  },
}

function PortfolioCard({
  title,
  behanceId,
  github,
  dribble,
  website,
}: {
  title: string
  behanceId: string
  github: string
  dribble: string
  website: string
}) {
  return (
    <Card
      size="xl"
      theme={{
        background: 'bg-white dark:bg-black',
        border:
          'border-opacity-50  border-primary-500  dark:shadow-[0_0_2px_rgba(224,227,230,0.20)]  shadow-[0_0_2px_rgba(11,13,15,0.10)] ',
        hover:
          '[@media(hover:hover)]:hover:border-opacity-100    [@media(hover:hover)]:hover:shadow-[0_0_3px_rgba(11,13,15,0.15)] [@media(hover:hover)]:dark:shadow-[0_0_2px_rgba(224,227,230,0.20)]         focus-within:border-opacity-100 active:border-opacity-100',
        text: 'text-primary-500 font-normal leading-[1.45]',
      }}
      cover={
        <div className="relative w-full h-[300px]">
          <iframe
            src={`https://www.behance.net/embed/project/${behanceId}?ilo0=1`}
            loading="lazy"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            className="block w-full h-full border-none overflow-hidden rounded-t-lg"
            scrolling="no"
          ></iframe>
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-primary-950/40 via-primary-950/20 to-primary-950/0 rounded-b-lg" />
        </div>
      }
      header={
        <span className="font-semibold bg-gradient-text dark:bg-gradient-text-dark text-transparent  bg-clip-text">
          {title}
        </span>
      }
    >
      <div className="flex items-center justify-between   mt-4">
        <div className="flex items-center gap-4 text-lg text-primary-800 dark:text-primary-200">
          <Link
            href={github}
            className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <RiGithubLine />
          </Link>
          <Link
            href={dribble}
            className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <RiDribbbleLine />
          </Link>
          <Link
            href={website}
            className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <LuGlobe />
          </Link>
        </div>
        {/* <PiArrowUpRight size={36} className="text-primary-600 dark:text-primary-400" /> */}
      </div>
    </Card>
  )
}

export default function Portfolio() {
  const projects = [
    {
      title: 'HealSpace - Wellness Marketplace Platform',
      behanceId: '235448997',
      github: '#',
      dribble: '#',
      website: '#',
    },
    {
      title: 'Digital Agency - Third Bracket',
      behanceId: '235532307',
      github: '#',
      dribble: '#',
      website: '#',
    },

    // Add more projects
  ]

  return (
    <Bracket fluid centered padding="small">
      <div className="md:max-w-screen-xl mx-auto">
        <PageHeader title="Portfolio" description="Curated projects from Behance" />
        <div className=" py-[3rem] sm:py-[3.75rem]  lg:py-[4rem]">
          <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <PortfolioCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </Bracket>
  )
}
