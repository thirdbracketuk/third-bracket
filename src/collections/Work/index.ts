import type { CollectionConfig } from 'payload'

import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { anyone } from '../../access/anyone'
import { authenticated } from '../../access/authenticated'
import { adminOnly } from '../../access/adminOnly'
import { adminOrAgency } from '../../access/adminOrAgency'
import { adminOrAgencyOrPublic } from '../../access/adminOrAgencyOrPublic'
import { Banner } from '../../blocks/Banner/config'
import { Code } from '../../blocks/Code/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import { slugField } from '../../fields/slug'
import { populateAgency } from './hooks/populateAgency'
import { revalidateWork, revalidateDelete } from './hooks/revalidateWork'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

import { CallToAction } from '../../blocks/CallToAction/config'
import { Content } from '../../blocks/Content/config'
import { FormBlock } from '../../blocks/Form/config'
import { Archive } from '../../blocks/ArchiveBlock/config'

export const Work: CollectionConfig = {
  slug: 'work',
  access: {
    create: adminOnly,
    delete: adminOnly,
    read: adminOrAgencyOrPublic,
    update: adminOnly,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'work',
          req,
        })
        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'work',
        req,
      }),
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      admin: {
        description: 'One-line summary shown under the title on the case study page.',
        placeholder: 'e.g. Food discovery, reimagined for the UK market.',
      },
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Shown in the browser mockup. Use a desktop-width screenshot.',
      },
    },
    {
      name: 'mobileImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description:
          'Shown in the mobile mockup. Use a portrait/mobile screenshot. Falls back to heroImage if empty.',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'content',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                    BlocksFeature({ blocks: [Banner, Code, MediaBlock] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    HorizontalRuleFeature(),
                  ]
                },
              }),
              label: false,
              required: true,
            },
          ],
        },
        {
          label: 'Project Details',
          fields: [
            {
              name: 'accentColor',
              type: 'text',
              label: 'Accent Colour',
              defaultValue: '#bc3a5b',
              admin: {
                description:
                  "Hex colour for this project's highlight (e.g. #E8441A). Defaults to brand rose-red.",
                placeholder: '#bc3a5b',
              },
            },
            {
              name: 'outcomes',
              type: 'array',
              label: 'Outcome Stats',
              maxRows: 4,
              admin: {
                description: 'Key results shown as large numbers on the case study page.',
              },
              fields: [
                {
                  name: 'stat',
                  type: 'text',
                  label: 'Stat',
                  admin: { placeholder: 'e.g. 98, 3x, £40k, #1' },
                  required: true,
                },
                {
                  name: 'label',
                  type: 'text',
                  label: 'Label',
                  admin: { placeholder: 'e.g. Lighthouse Score' },
                  required: true,
                },
              ],
            },
            {
              name: 'completedAt',
              type: 'date',
              admin: {
                date: {
                  pickerAppearance: 'dayAndTime',
                },
              },
              hooks: {
                beforeChange: [
                  ({ siblingData, value }) => {
                    if (siblingData._status === 'published' && !value) {
                      return new Date()
                    }
                    return value
                  },
                ],
              },
              label: 'Completed At',
            },
            {
              name: 'agency',
              type: 'relationship',
              relationTo: 'users',
              hasMany: true,
              admin: {
                position: 'sidebar',
              },
            },
            {
              name: 'categories',
              type: 'relationship',
              relationTo: 'categories',
              hasMany: true,
              admin: {
                position: 'sidebar',
              },
            },
            {
              name: 'technologies',
              type: 'relationship',
              relationTo: 'technologies',
              hasMany: true,
              admin: {
                position: 'sidebar',
              },
            },
          ],
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),
            MetaDescriptionField({}),
            PreviewField({
              hasGenerateFn: true,
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
        {
          label: 'Social Links',
          fields: [
            {
              name: 'github',
              type: 'text',
              label: 'GitHub Repository URL',
            },
            {
              name: 'behance',
              type: 'text',
              label: 'Behance Project URL',
            },
            {
              name: 'liveWebsite',
              type: 'text',
              label: 'Live Website URL',
            },
          ],
        },
      ],
    },
    {
      name: 'relatedWork',
      type: 'relationship',
      relationTo: 'work',
      hasMany: true,
      filterOptions: ({ id }) => {
        return {
          id: {
            not_in: [id],
          },
        }
      },
    },
    {
      name: 'populatedAgency',
      type: 'array',
      access: {
        update: () => false,
      },
      admin: {
        disabled: true,
        readOnly: true,
      },
      fields: [
        {
          name: 'id',
          type: 'text',
        },
        {
          name: 'name',
          type: 'text',
        },
      ],
    },
    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidateWork],
    afterRead: [populateAgency],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100,
      },
    },
    maxPerDoc: 50,
  },
}
