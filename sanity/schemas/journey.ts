import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'journey',
  title: 'Journey',
  type: 'document',
  fields: [
    defineField({
      name: 'years',
      title: 'Years',
      type: 'string',
      description: 'e.g. 2020 — 2024',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Used for sorting (higher number = top)',
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Work', value: 'work' },
          { title: 'Education', value: 'education' },
        ],
      },
      initialValue: 'education',
    }),
  ],
})
