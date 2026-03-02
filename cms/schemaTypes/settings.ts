import {defineField, defineType} from 'sanity'
import {CogIcon} from '@sanity/icons'

export const settings = defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'A short description for search engine results (SEO)',
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      description: 'The icon shown in the browser tab (usually 32x32px PNG or SVG)',
      options: {
        accept: 'image/png, image/svg+xml',
      },
    }),
    defineField({
      name: 'shareImage',
      title: 'Share Image (Open Graph)',
      type: 'image',
      description:
        'The image shown when linking to your site on social media (optimal size: 1200x630px)',
      options: {
        hotspot: true,
      },
    }),
  ],
})
