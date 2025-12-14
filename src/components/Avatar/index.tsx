'use client'

import { cn } from '@/utilities/ui'
import { Media } from '@/components/Media'
import type { User, Media as MediaType } from '@/payload-types'

interface AvatarProps {
  user: Pick<User, 'name' | 'avatar'>
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeClasses = {
  sm: 'w-6 h-6 text-xs',
  md: 'w-8 h-8 text-sm', 
  lg: 'w-12 h-12 text-base'
}

export const Avatar: React.FC<AvatarProps> = ({ user, size = 'md', className }) => {
  const { name, avatar } = user
  
  // Get initials from name
  const getInitials = (name?: string) => {
    if (!name) return 'U'
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  const initials = getInitials(name)

  return (
    <div className={cn(
      'relative inline-flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden',
      sizeClasses[size],
      className
    )}>
      {avatar && typeof avatar === 'object' ? (
        <Media 
          resource={avatar as MediaType} 
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="font-medium text-gray-600 dark:text-gray-300">
          {initials}
        </span>
      )}
    </div>
  )
}