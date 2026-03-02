import {defineField, defineType, defineArrayMember} from 'sanity'
import {
  HomeIcon,
  UserIcon,
  CaseIcon,
  StarIcon,
  ProjectsIcon,
  DocumentIcon,
  BookIcon,
} from '@sanity/icons'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: HomeIcon,
  fieldsets: [
    {
      name: 'aboutMe',
      title: 'About Me Section',
      options: {collapsible: true, collapsed: false},
    },
    {
      name: 'experience',
      title: 'Experience Section',
      options: {collapsible: true, collapsed: false},
    },
    {
      name: 'skills',
      title: 'Skills Section',
      options: {collapsible: true, collapsed: false},
    },
    {
      name: 'projects',
      title: 'Projects Section',
      options: {collapsible: true, collapsed: false},
    },
    {
      name: 'contact',
      title: 'Contact Details Section',
      options: {collapsible: true, collapsed: false},
    },
    {
      name: 'featuredMangas',
      title: 'Featured Mangas',
      options: {collapsible: true, collapsed: false},
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'aboutMeImage',
      title: 'Image',
      type: 'image',
      fieldset: 'aboutMe',
      icon: UserIcon,
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }),
      ],
    }),
    defineField({
      name: 'aboutMeTitle',
      title: 'About Me Title',
      type: 'string',
      fieldset: 'aboutMe',
    }),
    defineField({
      name: 'aboutMeSubtitle',
      title: 'About Me Subtitle',
      type: 'string',
      fieldset: 'aboutMe',
    }),
    defineField({
      name: 'aboutMeDescription',
      title: 'About Me Description',
      type: 'text',
      fieldset: 'aboutMe',
      rows: 5,
    }),
    defineField({
      name: 'experienceYears',
      title: 'Experience Years',
      type: 'number',
    }),
    defineField({
      name: 'experience',
      title: 'Experience',
      type: 'array',
      fieldset: 'experience',
      icon: CaseIcon,
      of: [
        defineArrayMember({
          type: 'object',
          name: 'experienceItem',
          fields: [
            defineField({
              name: 'title',
              title: 'Job Title',
              type: 'string',
            }),
            defineField({
              name: 'duration',
              title: 'Time (from - to)',
              type: 'string',
              description: 'e.g. 2020 - 2022 or 2021 - Present',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'duration',
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      fieldset: 'skills',
      icon: StarIcon,
      of: [
        defineArrayMember({
          type: 'object',
          name: 'skillItem',
          fields: [
            defineField({
              name: 'name',
              title: 'Skill Name',
              type: 'string',
            }),
            defineField({
              name: 'icon',
              title: 'Icon (prefferably SVG)',
              type: 'file',
            }),
          ],
          preview: {
            select: {
              title: 'name',
              media: 'icon',
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'array',
      fieldset: 'projects',
      icon: ProjectsIcon,
      of: [
        defineArrayMember({
          type: 'object',
          name: 'projectItem',
          fields: [
            defineField({
              name: 'image',
              title: 'Project Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'title',
              title: 'Project Title',
              type: 'string',
            }),
            defineField({
              name: 'year',
              title: 'Year',
              type: 'string',
            }),
            defineField({
              name: 'link',
              title: 'Project Link',
              type: 'url',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            }),
            defineField({
              name: 'tags',
              title: 'Tags',
              type: 'array',
              of: [defineArrayMember({type: 'string'})],
              options: {
                layout: 'tags',
              },
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'year',
              media: 'image',
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'githubLink',
      title: 'GitHub Link',
      type: 'url',
      fieldset: 'contact',
    }),
    defineField({
      name: 'linkedinLink',
      title: 'LinkedIn Link',
      type: 'url',
      fieldset: 'contact',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      fieldset: 'contact',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'cvFile',
      title: 'CV File (PDF)',
      type: 'file',
      fieldset: 'contact',
      icon: DocumentIcon,
    }),
    defineField({
      name: 'contactSectionTitle',
      title: 'Contact Section Title',
      type: 'string',
      fieldset: 'contact',
    }),
    defineField({
      name: 'contactSectionImage',
      title: 'Contact Section Image',
      type: 'image',
      fieldset: 'contact',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'featuredManga1',
      title: 'Manga 1',
      type: 'reference',
      to: [{type: 'manga'}],
      fieldset: 'featuredMangas',
      icon: BookIcon,
    }),
    defineField({
      name: 'featuredManga2',
      title: 'Manga 2',
      type: 'reference',
      to: [{type: 'manga'}],
      fieldset: 'featuredMangas',
      icon: BookIcon,
    }),
    defineField({
      name: 'featuredManga3',
      title: 'Manga 3',
      type: 'reference',
      to: [{type: 'manga'}],
      fieldset: 'featuredMangas',
      icon: BookIcon,
    }),
  ],
})
