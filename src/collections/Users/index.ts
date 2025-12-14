import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { adminOnly } from '../../access/adminOnly'
import { adminOrSelf } from '../../access/adminOrSelf'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    admin: authenticated,
    create: adminOnly,
    delete: adminOnly,
    read: adminOrSelf,
    update: adminOrSelf,
  },
  admin: {
    defaultColumns: ['name', 'email', 'role'],
    useAsTitle: 'name',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
      filterOptions: {
        mimeType: {
          in: ['image/jpeg', 'image/png', 'image/webp'],
        },
      },
      access: {
        read: ({ req: { user }, data }) => {
          if (!user) return false
          return user.role === 'admin' || user.id === data?.id
        },
        update: ({ req: { user }, data }) => {
          if (!user) return false
          return user.role === 'admin' || user.id === data?.id
        },
      },
      admin: {
        description: 'Upload a square profile picture (ideal: 400x400px, min: 200x200px). Accepts JPG, PNG, WebP.',
        position: 'sidebar',
      },
    },
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'publisher',
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Publisher',
          value: 'publisher',
        },
      ],
      access: {
        read: ({ req: { user }, data }) => {
          if (!user) return false
          return user.role === 'admin' || user.id === data?.id
        },
        create: ({ req: { user } }) => user?.role === 'admin',
        update: ({ req: { user } }) => user?.role === 'admin',
      },
      admin: {
        position: 'sidebar',
      },
    },
  ],
  timestamps: true,
}
