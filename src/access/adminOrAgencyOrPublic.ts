import type { Access } from 'payload'

export const adminOrAgencyOrPublic: Access = ({ req: { user } }) => {
  // If no user (public frontend request), show all content
  if (!user) return true
  
  // If admin, show everything
  if (user.role === 'admin') return true
  
  // If publisher in admin panel, show only work they're assigned to
  return {
    'agency': {
      contains: user.id,
    },
  }
}