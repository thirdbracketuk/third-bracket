import PageHeader from '@/components/PageHeader'
import CTASection from '@/components/CTASection'
import { Bracket, Button, Card } from '@thirdbracket/bracketui'
import { Metadata } from 'next'
import Link from 'next/link'
import {
  FaCubes,
  FaGithub,
  FaNpm,
  FaPalette,
  FaMoon,
  FaPlug,
  FaShieldAlt,
  FaCode,
  FaLayerGroup,
  FaToggleOn,
  FaTerminal,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaReact,
} from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiNpm, SiGithub } from 'react-icons/si'
import { RiLayoutGridLine, RiPaintBrushLine, RiShieldCheckLine } from 'react-icons/ri'

export const metadata: Metadata = {
  title: 'BracketUI — Open Source TailwindCSS Component Library',
  description:
    'BracketUI is a free, open source React and Next.js component library built with TailwindCSS v3. Dark mode, theme support, accessible, and highly customisable.',
  openGraph: {
    title: 'BracketUI — TailwindCSS Component Library by thirdbracket',
    description:
      'Open source UI component library for React and Next.js built with TailwindCSS. Includes Button, Navbar, Megamenu, Card, ThemeToggle and more.',
  },
}

const features = [
  {
    icon: FaCubes,
    title: 'Ready-to-Use Components',
    description:
      'Production-ready components for modern web development — Button, Navbar, Megamenu, Card, Tab, ThemeToggle and more.',
    badge: 'Components',
  },
  {
    icon: SiTailwindcss,
    title: 'TailwindCSS v3 Native',
    description:
      'Built from the ground up for TailwindCSS v3. Drop it into any Tailwind project and override styles with utility classes.',
    badge: 'Tailwind',
  },
  {
    icon: FaMoon,
    title: 'Dark Mode & ThemeToggle',
    description:
      'Syncs with system preferences out of the box. The ThemeToggle component lets users switch themes manually with zero configuration.',
    badge: 'Theming',
  },
  {
    icon: FaPalette,
    title: 'Highly Customisable',
    description:
      'Every component accepts component-specific theme props for root-level customisation without fighting the library.',
    badge: 'Flexible',
  },
  {
    icon: FaReact,
    title: 'React & Next.js Ready',
    description:
      'All components are optimised for React and Next.js, including App Router and Server Components workflows.',
    badge: 'Next.js',
  },
  {
    icon: FaShieldAlt,
    title: 'Security First',
    description:
      'Keeps up with latest Next.js security patches. CVE-2025-66478 addressed. You ship with confidence.',
    badge: 'Security',
  },
]

const components = [
  {
    name: 'Button',
    description: 'Flexible button with size, outline, and full theme prop customisation.',
    icon: FaLayerGroup,
    tags: ['size', 'outline', 'theme', 'as'],
  },
  {
    name: 'Navbar',
    description: 'Sticky responsive navigation bar with mobile menu built in.',
    icon: RiLayoutGridLine,
    tags: ['theme', 'sticky', 'mobile'],
  },
  {
    name: 'Megamenu',
    description: 'Nested dropdown megamenu that works on desktop and mobile.',
    icon: FaCubes,
    tags: ['nested', 'dropdown', 'mobile'],
  },
  {
    name: 'Card',
    description: 'Content card with icon, header, cover, and full theme control.',
    icon: FaLayerGroup,
    tags: ['cover', 'header', 'isIcon', 'theme'],
  },
  {
    name: 'ThemeToggle',
    description: 'System-aware theme toggle that pairs with ThemeScript.',
    icon: FaToggleOn,
    tags: ['dark mode', 'system sync', 'manual'],
  },
  {
    name: 'Tab',
    description: 'Accessible tab component for switching between content panels.',
    icon: RiPaintBrushLine,
    tags: ['accessible', 'panels', 'theme'],
  },
]

const stackIcons = [
  { icon: SiNextdotjs, label: 'Next.js' },
  { icon: SiTailwindcss, label: 'TailwindCSS' },
  { icon: SiTypescript, label: 'TypeScript' },
  { icon: FaReact, label: 'React' },
]

export default function BracketUIPage() {
  return (
    <section>
      <Bracket fluid centered padding="small">
        <div className="md:max-w-screen-xl mx-auto">
          {/* ── Page Header ─────────────────────────────────────────── */}
          <PageHeader
            title="BracketUI"
            description="Open source TailwindCSS component library for React and Next.js - dark mode, theming, and full customisation out of the box."
          />

          <div
            className="mx-auto"
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              border: '1px solid rgb(224, 224, 224)',
              borderRadius: 12,
              padding: 20,
              maxWidth: 500,
              background: 'transparent',
              boxShadow: 'rgba(0, 0, 0, 0.05) 0px 2px 8px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',

                gap: 12,
                marginBottom: 12,
              }}
            >
              <img
                alt="BracketUI v4"
                src="https://ph-files.imgix.net/b4520075-d355-486a-bf0a-f4326afbc1b2.png?auto=format&fit=crop&w=80&h=80"
                width={64}
                height={64}
                style={{ borderRadius: 8, objectFit: 'cover', flexShrink: 0 }}
              />
              <div style={{ flex: '1 1 0%', minWidth: 0 }}>
                <h3
                  className="text-primary-800 dark:text-primary-100"
                  style={{
                    margin: 0,
                    fontSize: 18,
                    fontWeight: 600,

                    lineHeight: 1.3,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  BracketUI v4
                </h3>
                <p
                  style={{
                    margin: '4px 0 0',
                    fontSize: 14,
                    color: 'rgb(102, 102, 102)',
                    lineHeight: 1.4,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  Open source TailwindCSS component library for Next.js
                </p>
              </div>
            </div>
            <a
              href="https://www.producthunt.com/products/bracketui-v4?embed=true&utm_source=embed&utm_medium=post_embed"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
                marginTop: 12,
                padding: '8px 16px',
                background: 'rgb(255, 97, 84)',
                color: 'rgb(255, 255, 255)',
                textDecoration: 'none',
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              Check it out on Product Hunt →
            </a>
          </div>

          {/* ── Hero install strip ───────────────────────────────────── */}
          <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem]">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Left: install + links */}
              <div className="lg:w-1/2">
                <div className="flex flex-wrap gap-3 mb-6 text-primary-700/60 dark:text-primary-400/50">
                  {stackIcons.map(({ icon: Icon, label }) => (
                    <span key={label} title={label}>
                      <Icon size={22} />
                    </span>
                  ))}
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-4">
                  Start in seconds
                </h2>
                <p className="text-base/[1.6] md:text-lg/[1.75rem] text-primary-500 dark:text-primary-400 mb-8">
                  Use the CLI to scaffold a new project instantly, or drop BracketUI into an
                  existing React or Next.js project with a single install.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Button
                    as={Link}
                    href="https://github.com/sagarmusabbir/bracketui"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="md"
                    theme={{
                      background: 'bg-gradient-text dark:bg-gradient-text-dark',
                      hoverBackground:
                        '[@media(hover:hover)]:hover:opacity-85 [@media(hover:hover)]:hover:-translate-y-[1px]',
                      focusRing: 'focus:ring-primary-700 dark:focus:ring-secondary-300',
                      text: 'text-white dark:text-primary-950',
                    }}
                    className="px-[18px] py-[10px] text-[0.875rem]"
                  >
                    <FaGithub className="mr-2" />
                    View on GitHub
                  </Button>
                  <Button
                    as={Link}
                    href="https://www.npmjs.com/package/@thirdbracket/bracketui"
                    target="_blank"
                    rel="noopener noreferrer"
                    outline
                    size="md"
                    theme={{
                      border: 'border-primary-200 dark:border-primary-700',
                      hoverBackground:
                        'hover:bg-primary-50 dark:hover:bg-primary-900 [@media(hover:hover)]:hover:-translate-y-[1px]',
                      focusRing: 'focus:ring-primary-700 dark:focus:ring-secondary-300',
                      text: 'text-primary-700 dark:text-primary-300',
                    }}
                    className="px-[18px] py-[10px] text-[0.875rem]"
                  >
                    <FaNpm className="mr-2" />
                    View on npm
                  </Button>
                </div>
              </div>

              {/* Right: illustrated terminal card */}
              <div className="lg:w-1/2 w-full">
                <BracketUIIllustration />
              </div>
            </div>
          </section>

          {/* ── Quick Start ──────────────────────────────────────────── */}
          <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem]" id="quick-start">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-4">
                Quick Start
              </h2>
              <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light text-primary-600 dark:text-primary-400 max-w-2xl mx-auto">
                Two ways to get started — scaffold a new project in one command, or add BracketUI to
                your existing project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* CLI method */}
              <div className="border border-primary-200 dark:border-primary-800 rounded-xl p-6 bg-white dark:bg-black">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center border border-primary-200 dark:border-primary-800 rounded-lg">
                    <FaTerminal size={18} className="text-primary-700 dark:text-primary-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900 dark:text-primary-100">
                      New Project
                    </h3>
                    <p className="text-xs text-primary-500 dark:text-primary-400">
                      Fastest way to start
                    </p>
                  </div>
                </div>
                <CodeBlock code="npx @thirdbracket/create-bracketui-app my-app" />
                <p className="text-sm text-primary-500 dark:text-primary-400 mt-4">
                  Scaffolds a new Next.js project with BracketUI, TailwindCSS, and dark mode
                  pre-configured.
                </p>
              </div>

              {/* Existing project */}
              <div className="border border-primary-200 dark:border-primary-800 rounded-xl p-6 bg-white dark:bg-black">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center border border-primary-200 dark:border-primary-800 rounded-lg">
                    <FaPlug size={18} className="text-primary-700 dark:text-primary-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900 dark:text-primary-100">
                      Existing Project
                    </h3>
                    <p className="text-xs text-primary-500 dark:text-primary-400">
                      Add to any React / Next.js app
                    </p>
                  </div>
                </div>
                <CodeBlock code="npm install @thirdbracket/bracketui" />
                <p className="text-sm text-primary-500 dark:text-primary-400 mt-4">
                  Then update your Tailwind config to include the plugin and content paths.
                </p>
              </div>
            </div>
          </section>

          {/* ── Tailwind Config Setup ────────────────────────────────── */}
          <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem]" id="setup">
            <div className="flex flex-col-reverse md:flex-row gap-y-8 md:gap-x-12 items-center mb-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-4">
                  Tailwind Config
                </h2>
                <p className="text-base/[1.6] md:text-lg/[1.75rem] text-primary-500 dark:text-primary-400 mb-6">
                  After installing, register the BracketUI plugin and add its content path so
                  TailwindCSS can scan and include the component styles.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-medium text-primary-600 dark:text-primary-400">
                  {['ES6 Modules', 'CommonJS', 'darkMode: class', 'Plugin API'].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-[3px] rounded-md bg-primary-50 dark:bg-primary-950/60 border border-primary-100 dark:border-primary-800/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Config illustration */}
              <div className="md:w-1/2 w-full">
                <ConfigIllustration />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-primary-200 dark:border-primary-800 rounded-xl p-5 bg-white dark:bg-black">
                <p className="text-xs font-semibold text-primary-500 dark:text-primary-400 mb-3 flex items-center gap-2">
                  <SiTypescript size={12} /> ES6 Modules{' '}
                  <span className="text-accent-500 dark:text-accent-400">(Recommended)</span>
                </p>
                <CodeBlock
                  multiline
                  code={`// tailwind.config.mjs
import { bracketuiPlugin } from "@thirdbracket/bracketui";

export default {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@thirdbracket/bracketui/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [bracketuiPlugin],
};`}
                />
              </div>

              <div className="border border-primary-200 dark:border-primary-800 rounded-xl p-5 bg-white dark:bg-black">
                <p className="text-xs font-semibold text-primary-500 dark:text-primary-400 mb-3 flex items-center gap-2">
                  <FaCode size={12} /> CommonJS (Legacy)
                </p>
                <CodeBlock
                  multiline
                  code={`// tailwind.config.js
const { bracketuiPlugin } = require("@thirdbracket/bracketui");

module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@thirdbracket/bracketui/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [bracketuiPlugin],
};`}
                />
              </div>
            </div>
          </section>

          {/* ── Features grid ────────────────────────────────────────── */}
          <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem]" id="features">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-4">
                Why BracketUI
              </h2>
              <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light text-primary-600 dark:text-primary-400 max-w-2xl mx-auto">
                Everything you need to build modern, accessible, and themeable React interfaces —
                without locking you in.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature) => (
                <Card
                  key={feature.title}
                  size="xl"
                  isIcon
                  theme={{
                    background: 'bg-white dark:bg-black',
                    border:
                      'border-opacity-50 border-primary-500 dark:shadow-[0_0_2px_rgba(224,227,230,0.20)] shadow-[0_0_2px_rgba(11,13,15,0.10)]',
                    hover:
                      '[@media(hover:hover)]:hover:border-opacity-100 [@media(hover:hover)]:hover:shadow-[0_0_3px_rgba(11,13,15,0.15)] focus-within:border-opacity-100 active:border-opacity-100',
                    text: 'text-primary-500 font-normal leading-[1.45]',
                  }}
                  cover={
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 flex items-center justify-center border border-primary-400/20 bg-white dark:bg-black rounded-lg">
                        <feature.icon
                          size={26}
                          className="text-primary-700 dark:text-primary-300"
                        />
                      </div>
                      <span className="text-[11px] font-semibold px-2 py-1 bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 rounded-md border border-primary-200/50 dark:border-primary-700/30">
                        {feature.badge}
                      </span>
                    </div>
                  }
                  header={feature.title}
                >
                  <p className="text-sm text-primary-500 dark:text-primary-400 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </section>

          {/* ── Components ───────────────────────────────────────────── */}
          <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem]" id="components">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-4">
                Available Components
              </h2>
              <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light text-primary-600 dark:text-primary-400 max-w-2xl mx-auto">
                A focused set of high-quality components that cover the building blocks of every
                modern web project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {components.map((comp) => (
                <div
                  key={comp.name}
                  className="border border-primary-200 dark:border-primary-800 rounded-xl p-6 bg-white dark:bg-black group hover:border-primary-400 dark:hover:border-primary-600 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 flex items-center justify-center border border-primary-200 dark:border-primary-800 rounded-lg group-hover:border-primary-400 dark:group-hover:border-primary-600 transition-colors">
                      <comp.icon size={22} className="text-primary-700 dark:text-primary-300" />
                    </div>
                    {/* Animated ping dot */}
                    <span className="relative flex h-2.5 w-2.5 mt-1">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400/60 dark:bg-accent-500/60 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-500 dark:bg-accent-400"></span>
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-primary-900 dark:text-primary-100 mb-2">
                    {comp.name}
                  </h3>
                  <p className="text-sm text-primary-500 dark:text-primary-400 leading-relaxed mb-4">
                    {comp.description}
                  </p>
                  <div className="flex flex-wrap gap-[6px]">
                    {comp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2 py-[3px] rounded-md bg-primary-50 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 border border-primary-100 dark:border-primary-800/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Example Usage ─────────────────────────────────────────── */}
          <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem]" id="usage">
            <div className="flex flex-col md:flex-row gap-y-8 md:gap-x-12 items-start">
              <div className="md:w-1/2">
                <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-4">
                  Example Usage
                </h2>
                <p className="text-base/[1.6] md:text-lg/[1.75rem] text-primary-500 dark:text-primary-400 mb-8">
                  Import any component directly from the package and use it anywhere in your app.
                  All components accept a{' '}
                  <code className="text-accent-500 dark:text-accent-400 text-sm">theme</code> prop
                  for full visual customisation.
                </p>

                <div className="space-y-4">
                  {[
                    'Import only what you need — full tree-shaking support',
                    'Use any HTML element or Next.js Link via the as prop',
                    'Override any visual token through the theme prop',
                    'Works in Server and Client Components',
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <FaCheckCircle
                        size={16}
                        className="text-accent-500 dark:text-accent-400 mt-0.5 flex-shrink-0"
                      />
                      <span className="text-sm text-primary-600 dark:text-primary-400">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:w-1/2 w-full space-y-4">
                <div className="border border-primary-200 dark:border-primary-800 rounded-xl p-5 bg-white dark:bg-black">
                  <p className="text-xs font-semibold text-primary-500 dark:text-primary-400 mb-3">
                    Button Component
                  </p>
                  <CodeBlock
                    multiline
                    code={`import { Button } from "@thirdbracket/bracketui";

export default function App() {
  return (
    <Button href="/path" outline size="md">
      Click Me
    </Button>
  );
}`}
                  />
                </div>

                <div className="border border-primary-200 dark:border-primary-800 rounded-xl p-5 bg-white dark:bg-black">
                  <p className="text-xs font-semibold text-primary-500 dark:text-primary-400 mb-3">
                    Dark Mode — ThemeScript in layout.tsx
                  </p>
                  <CodeBlock
                    multiline
                    code={`import { ThemeScript } from "@thirdbracket/bracketui";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ThemeScript />
      </head>
      <body>{children}</body>
    </html>
  );
}`}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ── Open source info strip ────────────────────────────────── */}
          <section className="py-[3rem] sm:py-[3.75rem] lg:py-[4rem]" id="contribute">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-text dark:bg-gradient-text-dark text-transparent bg-clip-text mb-4">
                Open Source & MIT Licensed
              </h2>
              <p className="text-base/[1.6] md:text-lg/[1.75rem] font-light text-primary-600 dark:text-primary-400 max-w-2xl mx-auto">
                BracketUI is free and open source under the MIT licence. Contributions, bug reports,
                and feature requests are always welcome.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                {
                  icon: FaGithub,
                  title: 'Star on GitHub',
                  description: 'Follow development, report issues, and contribute components.',
                  href: 'https://github.com/sagarmusabbir/bracketui',
                  label: 'GitHub Repository',
                },
                {
                  icon: SiNpm,
                  title: 'npm Package',
                  description: 'View all published versions, changelog, and package stats.',
                  href: 'https://www.npmjs.com/package/@thirdbracket/bracketui',
                  label: 'npm Package',
                },
                {
                  icon: RiShieldCheckLine,
                  title: 'MIT Licence',
                  description: 'Free to use in personal and commercial projects. Forever.',
                  href: 'https://github.com/sagarmusabbir/bracketui/blob/dev/LICENSE',
                  label: 'View Licence',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border border-primary-200 dark:border-primary-800 rounded-xl p-6 bg-white dark:bg-black"
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-primary-200 dark:border-primary-800 rounded-lg mb-4">
                    <item.icon size={22} className="text-primary-700 dark:text-primary-300" />
                  </div>
                  <h3 className="font-semibold text-primary-900 dark:text-primary-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-primary-500 dark:text-primary-400 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-900 dark:text-primary-100 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
                  >
                    {item.label}
                    <FaExternalLinkAlt size={10} />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA ───────────────────────────────────────────────────── */}
          <CTASection
            cover={{
              src: '/buicover.svg',
              alt: 'BracketUI illustration',
              width: 500,
              height: 500,
            }}
            title="Build your next project with BracketUI"
            description="Free, open source, and built by the same team behind thirdbracket. Start a new project or add it to an existing one today."
            primary={{
              label: 'View on GitHub',
              href: 'https://github.com/sagarmusabbir/bracketui',
            }}
            secondary={{
              label: 'Explore Services',
              href: '/services',
            }}
          />
        </div>
      </Bracket>
    </section>
  )
}

/* ── Local UI helpers ─────────────────────────────────────────────────────── */

function CodeBlock({ code, multiline = false }: { code: string; multiline?: boolean }) {
  return (
    <div className="rounded-lg bg-primary-950 dark:bg-black border border-primary-800 dark:border-primary-800 overflow-x-auto">
      <pre
        className={`text-[0.78rem] leading-[1.65] text-primary-200 dark:text-primary-300 font-mono p-4 whitespace-pre ${multiline ? '' : 'truncate'}`}
      >
        <code>{code}</code>
      </pre>
    </div>
  )
}

function BracketUIIllustration() {
  return (
    <div className="relative w-full">
      {/* Ambient glow */}
      <div className="absolute -inset-4 bg-accent-100/30 dark:bg-accent-900/10 rounded-3xl blur-2xl pointer-events-none" />

      <div className="relative border border-primary-200 dark:border-primary-800 rounded-2xl overflow-hidden bg-white dark:bg-black shadow-[0_0_2px_rgba(11,13,15,0.10)] dark:shadow-[0_0_2px_rgba(224,227,230,0.08)]">
        {/* Window chrome */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-primary-100 dark:border-primary-800 bg-primary-50 dark:bg-primary-950">
          <span className="w-2.5 h-2.5 rounded-full bg-primary-300 dark:bg-primary-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-primary-300 dark:bg-primary-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-primary-300 dark:bg-primary-700" />
          <span className="ml-3 text-xs text-primary-400 dark:text-primary-500 font-mono">
            terminal
          </span>
        </div>

        <div className="p-6 font-mono text-sm space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-accent-500 dark:text-accent-400">$</span>
            <span className="text-primary-700 dark:text-primary-300">
              npx @thirdbracket/create-bracketui-app my-app
            </span>
          </div>
          <div className="text-primary-400 dark:text-primary-500 text-xs space-y-1.5 pl-4">
            <p>✓ Creating project structure...</p>
            <p>✓ Installing dependencies...</p>
            <p>✓ Configuring TailwindCSS...</p>
            <p>✓ Setting up dark mode...</p>
          </div>
          <div className="flex items-center gap-2 pt-1">
            <span className="text-primary-400 dark:text-primary-500 text-xs">
              🎉 BracketUI ready. Happy building!
            </span>
          </div>

          {/* Animated cursor */}
          <div className="flex items-center gap-2">
            <span className="text-accent-500 dark:text-accent-400">$</span>
            <span className="inline-block w-2 h-4 bg-accent-400 dark:bg-accent-500 animate-pulse rounded-sm" />
          </div>
        </div>

        {/* Floating component badges */}
        <div className="absolute top-12 right-4 flex flex-col gap-2 pointer-events-none">
          {['Button', 'Card', 'Navbar'].map((name, i) => (
            <span
              key={name}
              className="text-[10px] font-semibold px-2 py-1 bg-primary-100 dark:bg-primary-900/60 text-primary-700 dark:text-primary-300 rounded-md border border-primary-200/50 dark:border-primary-700/30"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function ConfigIllustration() {
  return (
    <div className="relative w-full">
      <div className="border border-primary-200 dark:border-primary-800 rounded-2xl overflow-hidden bg-white dark:bg-black">
        {/* Window chrome */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-primary-100 dark:border-primary-800 bg-primary-50 dark:bg-primary-950">
          <span className="w-2.5 h-2.5 rounded-full bg-primary-300 dark:bg-primary-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-primary-300 dark:bg-primary-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-primary-300 dark:bg-primary-700" />
          <span className="ml-3 text-xs text-primary-400 dark:text-primary-500 font-mono">
            tailwind.config.mjs
          </span>
        </div>

        <div className="p-6">
          {/* Schematic config boxes */}
          <div className="space-y-2">
            {[
              { label: 'darkMode', value: '"class"', accent: false },
              { label: 'content', value: '[...src, ...bracketui]', accent: false },
              { label: 'plugins', value: 'bracketuiPlugin', accent: true },
            ].map(({ label, value, accent }) => (
              <div
                key={label}
                className={`flex items-center justify-between rounded-lg px-4 py-2.5 border ${
                  accent
                    ? 'border-accent-200 dark:border-accent-800/40 bg-accent-50/50 dark:bg-accent-950/10'
                    : 'border-primary-100 dark:border-primary-800/40 bg-primary-50/50 dark:bg-primary-950/40'
                }`}
              >
                <span className="text-xs font-mono text-primary-500 dark:text-primary-400">
                  {label}:
                </span>
                <span
                  className={`text-xs font-mono font-medium ${
                    accent
                      ? 'text-accent-600 dark:text-accent-400'
                      : 'text-primary-700 dark:text-primary-300'
                  }`}
                >
                  {value}
                </span>
                {accent && (
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Stack icons strip */}
          <div className="mt-5 pt-4 border-t border-primary-100 dark:border-primary-800/30 flex items-center justify-between">
            <span className="text-[11px] text-primary-400 dark:text-primary-500">Works with</span>
            <div className="flex gap-3 text-primary-400 dark:text-primary-500">
              <SiNextdotjs size={14} />
              <SiTailwindcss size={14} />
              <SiTypescript size={14} />
              <FaReact size={14} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
