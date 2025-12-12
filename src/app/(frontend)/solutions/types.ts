// types.ts
import { IconType } from 'react-icons'

export interface Technologies {
  title: string
  cto: string
}

export interface Solution {
  title: string
  description?: string
  icon?: IconType
  features: string[]
  technologies?: Technologies[]
  image?: string
}

export interface SolutionCategory {
  title: string
  description: string
  solutions: Solution[]
}
