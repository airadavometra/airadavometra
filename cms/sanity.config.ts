import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {HomeIcon} from '@sanity/icons'

export default defineConfig({
  name: 'default',
  title: 'airadavometra website',

  projectId: 'wvlqa5od',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Home Page')
              .icon(HomeIcon)
              .child(S.document().schemaType('homePage').documentId('homePage').title('Home Page')),
            S.divider(),
            ...S.documentTypeListItems().filter((item) => item.getId() !== 'homePage'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
