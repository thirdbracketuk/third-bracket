import type { Access } from 'payload'

export const adminOrOwner: Access = ({ req: { user } }) => {
  if (!user) return false
  
  if (user.role === 'admin') return true
  
  // Publishers can only access records they created
  return {
    'authors': {
      contains: user.id,
    },
  }
}