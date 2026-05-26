// src/app/(frontend)/about/Team.tsx
'use client'

import Image from 'next/image'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const founder = {
  name: 'S M A Musabbir Sagar',
  role: 'Founder & Chief Executive Officer',
  bio: 'Founder of thirdbracket, NomadGang, ProductsofBangladesh and biggest contributor to open source with things like Bracket UI. Leading the vision and strategy for delivering world-class digital solutions.',
  image: '/musabbir.webp',
  social: {
    linkedin: 'https://my.linkedin.com/in/musabbirsagar',
    github: 'https://github.com/sagarmusabbir',
    twitter: 'https://x.com/sagarmusabbir',
  },
}

const coreTeam = [
  // Web Developers
  {
    name: 'Ahmed Rahman',
    role: 'Senior Web Developer',
    department: 'Development',

    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    name: 'Fatima Khan',
    role: 'Web Developer',
    department: 'Development',

    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      twitter: 'https://twitter.com',
    },
  },
  // UI/UX Designers
  {
    name: 'Nusrat Jahan',
    role: 'Lead UI/UX Designer',
    department: 'Design',

    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    name: 'Bondhan Mahanta',
    role: 'UI/UX Designer',
    department: 'Design',
    image: '/bandhan.webp',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    name: 'Sadia Islam',
    role: 'UI/UX Designer',

    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      twitter: 'https://twitter.com',
    },
  },
  // Digital Marketing Executives
  {
    name: 'Tanvir Hossain',
    role: 'Senior Marketing Executive',
    department: 'Marketing',

    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    name: 'Ayesha Begum',
    role: 'Digital Marketing Executive',
    department: 'Marketing',

    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    name: 'Kamal Uddin',
    role: 'Digital Marketing Executive',
    department: 'Marketing',

    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      twitter: 'https://twitter.com',
    },
  },
  // Project Manager
  {
    name: 'Mehedi Hassan',
    role: 'Project Manager',
    department: 'Management',

    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      twitter: 'https://twitter.com',
    },
  },
]

const globalPartners = [
  {
    name: 'David Thompson',
    role: 'Business Development Executive',
    location: 'United Kingdom',

    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    name: 'Arif Hasan',
    role: 'Business Development Executive',
    location: 'United States',
    image: '/arif.webp',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    name: 'James Wilson',
    role: 'Business Development Executive',
    location: 'Australia',

    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      twitter: 'https://twitter.com',
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
          Meet the talented individuals behind thirdbracket&apos;s success
        </p>
      </div>

      {/* Founder - Full Width Centered Card */}
      <div className="max-w-2xl mx-auto mb-16">
        <div className="border border-primary-200 dark:border-primary-800 rounded-2xl overflow-hidden bg-white dark:bg-black shadow-lg">
          <div className="grid md:grid-cols-[300px_1fr] gap-6">
            <div className="aspect-square relative md:aspect-auto">
              <Image
                src={founder.image || '/avatar-placeholder.svg'}
                alt={founder.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl lg:text-3xl font-bold mb-2 bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text">
                {founder.name}
              </h3>
              <p className="text-lg text-accent-600 dark:text-accent-400 font-semibold mb-4">
                {founder.role}
              </p>
              <p className="text-primary-600 dark:text-primary-400 text-base leading-relaxed mb-6">
                {founder.bio}
              </p>
              <div className="flex gap-4">
                {founder.social.linkedin && (
                  <a
                    href={founder.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
                  >
                    <FaLinkedin size={24} />
                  </a>
                )}
                {founder.social.github && (
                  <a
                    href={founder.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
                  >
                    <FaGithub size={24} />
                  </a>
                )}
                {founder.social.twitter && (
                  <a
                    href={founder.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
                  >
                    <FaTwitter size={24} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Team - 3 Column Grid */}
      <div className="mb-16">
        <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8 bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text">
          Core Team
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {coreTeam.map((member, index) => (
            <div
              key={index}
              className="border border-primary-200 dark:border-primary-800 rounded-lg overflow-hidden bg-white dark:bg-black hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={member.image || '/avatar-placeholder.svg'}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-semibold mb-1 text-primary-900 dark:text-primary-100">
                  {member.name}
                </h4>
                <p className="text-sm text-accent-600 dark:text-accent-400 font-medium mb-1">
                  {member.role}
                </p>
                <p className="text-xs text-primary-500 dark:text-primary-500 mb-3">
                  {member.department}
                </p>
                {member.social && (
                  <div className="flex gap-3">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-primary-400 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
                      >
                        <FaLinkedin size={18} />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-primary-400 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
                      >
                        <FaGithub size={18} />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-primary-400 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
                      >
                        <FaTwitter size={18} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Global Partners - 3 Column Grid */}
      <div>
        <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8 bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text">
          Global Partners
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {globalPartners.map((partner, index) => (
            <div
              key={index}
              className="border border-primary-200 dark:border-primary-800 rounded-lg overflow-hidden bg-white dark:bg-black hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={partner.image || '/avatar-placeholder.svg'}
                  alt={partner.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-semibold mb-1 text-primary-900 dark:text-primary-100">
                  {partner.name}
                </h4>
                <p className="text-sm text-accent-600 dark:text-accent-400 font-medium mb-1">
                  {partner.role}
                </p>
                <p className="text-xs text-primary-500 dark:text-primary-500 mb-3">
                  {partner.location}
                </p>
                {partner.social && (
                  <div className="flex gap-3">
                    {partner.social.linkedin && (
                      <a
                        href={partner.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-primary-400 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
                      >
                        <FaLinkedin size={18} />
                      </a>
                    )}
                    {partner.social.github && (
                      <a
                        href={partner.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-primary-400 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
                      >
                        <FaGithub size={18} />
                      </a>
                    )}
                    {partner.social.twitter && (
                      <a
                        href={partner.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-primary-400 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
                      >
                        <FaTwitter size={18} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
