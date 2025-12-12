// import { SiNextdotjs, SiPayloadcms, SiTailwindcss, SiVercel, SiResend } from 'react-icons/si'

// const iconMap: Record<string, React.ReactNode> = {
//   SiNextdotjs: <SiNextdotjs key="nextjs" size={30} title="Next.js" />,
//   SiPayloadcms: <SiPayloadcms key="payload" size={30} title="Payload CMS" />,
//   SiTailwindcss: <SiTailwindcss key="tailwind" size={30} title="Tailwind CSS" />,
//   SiVercel: <SiVercel key="vercel" size={30} title="Vercel" />,
//   SiResend: <SiResend key="resend" size={30} title="Resend" />,
// }

// export default function TechStack(keys: string[]) {
//   return keys.map((key) => iconMap[key])
// }

import {
  SiNextdotjs,
  SiPayloadcms,
  SiTailwindcss,
  SiVercel,
  SiResend,
  SiWordpress,
  SiFigma,
  SiFramer,
  SiGoogleanalytics,
  SiGooglesearchconsole,
  SiAdobeillustrator,
  SiGithub,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiStripe,
  SiCloudflare,
} from 'react-icons/si'

const iconMap: Record<string, React.ReactNode> = {
  // Frontend & Frameworks
  SiNextdotjs: <SiNextdotjs key="nextjs" size={30} title="Next.js" />,
  SiReact: <SiReact key="react" size={30} title="React" />,
  SiTailwindcss: <SiTailwindcss key="tailwind" size={30} title="Tailwind CSS" />,
  SiTypescript: <SiTypescript key="typescript" size={30} title="TypeScript" />,

  // CMS & Content
  SiPayloadcms: <SiPayloadcms key="payload" size={30} title="Payload CMS" />,
  SiWordpress: <SiWordpress key="wordpress" size={30} title="WordPress" />,

  // Design Tools
  SiFigma: <SiFigma key="figma" size={30} title="Figma" />,
  SiAdobeillustrator: <SiAdobeillustrator key="illustrator" size={30} title="Adobe Illustrator" />,
  SiFramer: <SiFramer key="framer" size={30} title="Framer" />,

  // Analytics & SEO
  SiGoogleanalytics: <SiGoogleanalytics key="analytics" size={30} title="Google Analytics" />,
  SiGooglesearchconsole: (
    <SiGooglesearchconsole key="searchconsole" size={30} title="Google Search Console" />
  ),

  // Backend & Database
  SiNodedotjs: <SiNodedotjs key="nodejs" size={30} title="Node.js" />,
  SiMongodb: <SiMongodb key="mongodb" size={30} title="MongoDB" />,
  SiPostgresql: <SiPostgresql key="postgresql" size={30} title="PostgreSQL" />,
  SiPrisma: <SiPrisma key="prisma" size={30} title="Prisma" />,

  // Deployment & Infrastructure
  SiVercel: <SiVercel key="vercel" size={30} title="Vercel" />,
  SiCloudflare: <SiCloudflare key="cloudflare" size={30} title="Cloudflare" />,
  SiGithub: <SiGithub key="github" size={30} title="GitHub" />,

  // Services & Integration
  SiResend: <SiResend key="resend" size={30} title="Resend" />,
  SiStripe: <SiStripe key="stripe" size={30} title="Stripe" />,
}

export default function TechStack(keys: string[]) {
  return keys.map((key) => iconMap[key])
}
