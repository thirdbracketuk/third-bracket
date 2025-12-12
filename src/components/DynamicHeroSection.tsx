// src/components/DynamicHeroSection.tsx
import dynamic from 'next/dynamic'
import type { Form as FormType } from '@payloadcms/plugin-form-builder/types'

type DynamicHeroProps = {
  contactForm: FormType
}

export const DynamicHero = dynamic(() => import('./HeroSection').then((mod) => mod.Hero), {
  ssr: true,
}) as React.ComponentType<DynamicHeroProps>
