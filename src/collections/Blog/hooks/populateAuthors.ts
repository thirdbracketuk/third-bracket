import type { CollectionAfterReadHook } from 'payload'

import type { Blog } from '../../../payload-types'

export const populateAuthors: CollectionAfterReadHook<Blog> = async ({ doc, req }) => {
  if (doc?.authors && Array.isArray(doc.authors) && doc.authors.length > 0) {
    const populatedAuthors = await Promise.all(
      doc.authors.map(async (author) => {
        if (typeof author === 'object' && author !== null) {
          return author
        }

        if (typeof author === 'string' || typeof author === 'number') {
          try {
            const user = await req.payload.findByID({
              collection: 'users',
              id: author.toString(),
              depth: 1,
            })

            return {
              id: user.id,
              name: user.name,
              avatar: user.avatar,
            }
          } catch (error) {
            req.payload.logger.error(`Error fetching user ${author}:`, error)
            return null
          }
        }

        return null
      }),
    )

    return {
      ...doc,
      populatedAuthors: populatedAuthors.filter(Boolean),
    }
  }

  return doc
}