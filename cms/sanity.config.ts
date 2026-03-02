import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {HomeIcon, CogIcon} from '@sanity/icons'

export default defineConfig({
  name: 'default',
  title: 'airadavometra website',

  projectId: 'wvlqa5od',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Website Content')
          .items([
            S.listItem()
              .title('Home Page')
              .icon(HomeIcon)
              .child(S.document().schemaType('homePage').documentId('homePage').title('Home Page')),
            S.listItem()
              .title('Site Settings')
              .icon(CogIcon)
              .child(
                S.document().schemaType('settings').documentId('settings').title('Site Settings'),
              ),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (item) => !['homePage', 'settings'].includes(item.getId()!),
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
