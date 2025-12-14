import type { Access } from 'payload'

export const adminOrSelf: Access = ({ req: { user } }) => {
  if (!user) return false
  
  if (user.role === 'admin') return true
  
  // Publishers can only access their own records
  return {
    id: {
      equals: user.id,
    },
  }
}