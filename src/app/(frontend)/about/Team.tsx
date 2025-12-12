// src/app/(frontend)/about/Team.tsx
'use client'

import Image from 'next/image'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const team = [
  {
    name: 'Abdul Malik',
    role: 'Founder & Director',
    bio: 'Founder of Third Bracket & Habiganj Properties Ltd',
    image: '/malik.svg',
    social: {
      linkedin: 'https://linkedin.com/',
      twitter: 'https://twitter.com/',
    },
  },
  {
    name: 'Zakir Hussain',
    role: 'Co-Founder & Director of Operations',
    bio: 'Founder of Nicky Limited and 10+ other businessses in Manchester which includes Retail and Real Estate',
    image: '/zakir.svg',
    social: {
      linkedin: 'https://linkedin.com/',
      twitter: 'https://twitter.com/',
    },
  },

  {
    name: 'Naznin Hussain',
    role: 'Director of Strategy and Communication',
    bio: 'Co-Founder of Nicky Limited, Founder of NB Beauty Parlour & Bangla Bazar',
    image: '/naznin.svg',
    social: {
      linkedin: 'https://linkedin.com/',

      twitter: 'https://twitter.com/',
    },
  },

  {
    name: 'Musabbir Sagar',
    role: 'Chief Executive Officer',
    bio: 'Founder of Third Bracket, NomadGang, ProductsofBangladesh and biggest contributor to open source with things like Bracket UI. ',
    image: '/sagar.svg',
    social: {
      linkedin: 'https://my.linkedin.com/in/musabbirsagar',
      github: 'https://github.com/sagarmusabbir',
    },
  },
]

export default function Team() {
  return (
    <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem]" id="team">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-4">
          Our Team
        </h2>
        <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light text-primary-600 dark:text-primary-400 max-w-2xl mx-auto">
          Meet the talented individuals behind Third Bracket&apos;s success
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <div
            key={index}
            className="border border-primary-200 dark:border-primary-800 rounded-lg overflow-hidden bg-white dark:bg-black"
          >
            <div className="aspect-square relative">
              <Image src={member.image} alt={member.name} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-primary-500 dark:text-primary-400 mb-3">{member.role}</p>
              <p className="text-primary-600 dark:text-primary-400 text-sm mb-4">{member.bio}</p>
              <div className="flex gap-3">
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:text-accent-500 dark:hover:text-accent-400"
                  >
                    <FaLinkedin size={20} />
                  </a>
                )}
                {member.social.github && (
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:text-accent-500 dark:hover:text-accent-400"
                  >
                    <FaGithub size={20} />
                  </a>
                )}
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:text-accent-500 dark:hover:text-accent-400"
                  >
                    <FaTwitter size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
