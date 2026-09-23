// import {defineConfig} from 'sanity'
// import {structureTool} from 'sanity/structure'
// import {visionTool} from '@sanity/vision'
// import {schemaTypes} from './schemaTypes'

// export default defineConfig({
//   name: 'default',
//   title: 'portfolio-cms',

//   projectId: '1mxfmb8z',
//   dataset: 'production',

//   plugins: [structureTool(), visionTool()],

//   schema: {
//     types: schemaTypes,
//   },
// })


import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import AIWebsiteBuilder from './ai/AIWebsiteBuilder'

export default defineConfig({
  name: 'default',
  title: 'portfolio-cms',

  projectId: '1mxfmb8z',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
  ],

  tools: (prev) => [
    ...prev,
    {
      name: 'ai-website-builder',
      title: 'AI Website Builder',
      icon: () => '✨',
      component: AIWebsiteBuilder,
    },
  ],

  schema: {
    types: schemaTypes,
  },
})