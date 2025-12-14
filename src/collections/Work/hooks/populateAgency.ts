import type { CollectionAfterReadHook } from 'payload'

import type { Work } from '../../../payload-types'

export const populateAgency: CollectionAfterReadHook<Work> = async ({ doc, req }) => {
  if (doc?.agency && Array.isArray(doc.agency) && doc.agency.length > 0) {
    const populatedAgency = await Promise.all(
      doc.agency.map(async (agent) => {
        if (typeof agent === 'object' && agent !== null) {
          return agent
        }

        if (typeof agent === 'string' || typeof agent === 'number') {
          try {
            const user = await req.payload.findByID({
              collection: 'users',
              id: agent.toString(),
              depth: 1,
            })

            return {
              id: user.id,
              name: user.name,
              avatar: user.avatar,
            }
          } catch (error) {
            req.payload.logger.error(`Error fetching user ${agent}:`, error)
            return null
          }
        }

        return null
      }),
    )

    return {
      ...doc,
      populatedAgency: populatedAgency.filter(Boolean),
    }
  }

  return doc
}