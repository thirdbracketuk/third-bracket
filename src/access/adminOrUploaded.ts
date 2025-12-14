import type { Access } from 'payload'

export const adminOrUploaded: Access = ({ req: { user } }) => {
  if (!user) return false
  
  if (user.role === 'admin') return true
  
  // Publishers can only access media they uploaded
  return {
    'uploadedBy': {
      equals: user.id,
    },
  }
}