import type { Access } from 'payload'

export const adminOrOwnerOrPublished: Access = ({ req: { user } }) => {
  // If no user (public frontend request), show only published content
  if (!user) {
    return {
      _status: {
        equals: 'published',
      },
    }
  }
  
  // If admin, show everything
  if (user.role === 'admin') return true
  
  // If publisher in admin panel, show only their authored content
  return {
    'authors': {
      contains: user.id,
    },
  }
}