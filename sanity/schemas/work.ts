import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'cover',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail (Video URL or Image)',
      type: 'string',
    }),
    defineField({
      name: 'filter',
      title: 'Filters',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'source',
      title: 'Source Link',
      type: 'url',
    }),
    defineField({
      name: 'projectDetail',
      title: 'Project Detail',
      type: 'object',
      fields: [
        { name: 'platform', title: 'Platform', type: 'string' },
        { name: 'supports', title: 'Supports', type: 'string' },
        { name: 'stack', title: 'Stack', type: 'string' },
        { name: 'collaborator', title: 'Collaborator', type: 'string' },
      ],
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
          ],
        },
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Alternative Text',
              type: 'string',
            },
          ],
        },
      ],
    }),
  ],
})
