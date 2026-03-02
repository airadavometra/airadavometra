import {defineField, defineType, defineArrayMember} from 'sanity'
import {BookIcon} from '@sanity/icons'

export const manga = defineType({
  name: 'manga',
  title: 'Manga',
  type: 'document',
  icon: BookIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
      validation: (Rule) => Rule.required().min(4).error('A manga must have at least 4 images'),
    }),
  ],
})
