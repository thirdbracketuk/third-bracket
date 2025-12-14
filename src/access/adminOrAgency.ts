import type { Access } from 'payload'

export const adminOrAgency: Access = ({ req: { user } }) => {
  if (!user) return false
  
  if (user.role === 'admin') return true
  
  // Publishers can only access work they are assigned to as agency
  return {
    'agency': {
      contains: user.id,
    },
  }
}