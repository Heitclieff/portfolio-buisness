import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'
import { projectId, dataset, apiVersion } from './sanity/env'

export default defineConfig({
  basePath: '/studio',
  name: 'default',
  title: 'Portfolio Admin',

  projectId,
  dataset,

  schema: {
    types: schemaTypes,
  },

  plugins: [
    deskTool(),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
