import { Bracket } from '@thirdbracket/bracketui'
import PageHeader from '../../../components/PageHeader'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects & Portfolios',
}

function CaseStudyCard({
  title,
  client,
  description,
  result,
  image,
}: {
  title: string
  client: string
  description: string
  result: string
  image: string
}) {
  return (
    <div className="border border-primary-200 dark:border-primary-800 rounded-lg overflow-hidden">
      <Image
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
        width={800}
        height={500}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-primary-600 dark:text-primary-400 mb-4">{client}</p>
        <p className="text-primary-600 dark:text-primary-400 mb-4">{description}</p>
        <p className="font-medium">Result: {result}</p>
      </div>
    </div>
  )
}

export default function CaseStudies() {
  const caseStudies = [
    {
      title: 'Digital Transformation',
      client: 'Tech Corp',
      description: 'Implementing digital solutions...',
      result: '50% increase in efficiency',
      image: '/ui.svg',
    },
    // Add more case studies
  ]

  return (
    <Bracket>
      <PageHeader title="Case Studies" description="Real results for real businesses" />
      <div className="max-w-7xl mx-auto  py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} {...study} />
          ))}
        </div>
      </div>
    </Bracket>
  )
}
